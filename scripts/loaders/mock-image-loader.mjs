/**
 * Node ESM loader that mocks image/asset file imports so the content audit
 * can import components/data/conditions and components/data/treatments
 * (which contain static image imports) without Node failing on .jpeg/.png/etc.
 *
 * Use: node --experimental-loader ./scripts/loaders/mock-image-loader.mjs node_modules/tsx/dist/cli.mjs scripts/audit-content-sections.ts
 */
const STUB_URL = new URL('./stub-asset.mjs', import.meta.url).href;
const IMAGE_EXT = ['.jpeg', '.jpg', '.png', '.webp', '.gif', '.svg', '.ico'];

function isImageUrl(url) {
  try {
    const u = typeof url === 'string' ? url : (url && url.href) || '';
    const normalized = u.replace(/\\/g, '/').toLowerCase();
    return IMAGE_EXT.some((ext) => normalized.endsWith(ext) || normalized.includes(ext + '?'));
  } catch {
    return false;
  }
}

export async function resolve(specifier, context, nextResolve) {
  const normalized = specifier.replace(/\\/g, '/').toLowerCase();
  const hasImageExt = IMAGE_EXT.some((ext) => normalized.endsWith(ext) || normalized.includes(ext + '?'));
  if (hasImageExt) {
    return { url: STUB_URL, shortCircuit: true };
  }
  const result = await nextResolve(specifier, context);
  if (result.url && isImageUrl(result.url)) {
    return { url: STUB_URL, shortCircuit: true };
  }
  return result;
}

export async function load(url, context, nextLoad) {
  if (isImageUrl(url)) {
    return {
      format: 'module',
      shortCircuit: true,
      source: 'export default "";',
    };
  }
  return nextLoad(url, context);
}
