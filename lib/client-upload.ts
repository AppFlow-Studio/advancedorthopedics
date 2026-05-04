"use client";

import imageCompression from "browser-image-compression";

const MB = 1024 * 1024;
const ORIGINAL_FILE_LIMIT = 15 * MB;
const FINAL_FILE_LIMIT = 4 * MB;

const oversizedOriginalMessage =
  "This file is over 15 MB. Please choose a smaller image or file.";
const oversizedFinalMessage =
  "This file is still over 4 MB after compression. Please choose a smaller image.";
const oversizedCombinedMessage =
  "The selected uploads are over 4 MB after compression. Please choose smaller images or files.";

function supportsWebP() {
  if (typeof document === "undefined") {
    return false;
  }

  const canvas = document.createElement("canvas");
  return canvas.toDataURL("image/webp").startsWith("data:image/webp");
}

function safeCompressedName(file: File) {
  const baseName = file.name.replace(/\.[^/.]+$/, "");
  return `${baseName || "upload"}.webp`;
}

export async function prepareUploadFile(
  file?: File | null,
  label = "upload",
): Promise<{ file: File | null; error?: string }> {
  if (!file) {
    return { file: null };
  }

  if (file.size > ORIGINAL_FILE_LIMIT) {
    return { file: null, error: oversizedOriginalMessage };
  }

  let finalFile = file;

  if (file.type.startsWith("image/")) {
    const compressed = await imageCompression(file, {
      maxSizeMB: 1.5,
      maxWidthOrHeight: 1600,
      useWebWorker: true,
      initialQuality: 0.75,
      ...(supportsWebP() ? { fileType: "image/webp" } : {}),
    });

    finalFile =
      supportsWebP() && compressed.type === "image/webp"
        ? new File([compressed], safeCompressedName(file), {
            type: "image/webp",
            lastModified: Date.now(),
          })
        : compressed;

    if (process.env.NODE_ENV === "development") {
      console.info("[UploadCompression]", {
        label,
        originalSizeMB: Number((file.size / MB).toFixed(2)),
        compressedSizeMB: Number((finalFile.size / MB).toFixed(2)),
      });
    }
  }

  if (finalFile.size > FINAL_FILE_LIMIT) {
    return { file: null, error: oversizedFinalMessage };
  }

  return { file: finalFile };
}

export async function appendPreparedUploads(
  formData: FormData,
  uploads: Array<{ fieldName: string; file?: File | null }>,
): Promise<{ message: string; fieldNames: string[] } | null> {
  const preparedUploads: Array<{ fieldName: string; file: File }> = [];
  let totalSize = 0;

  for (const upload of uploads) {
    const prepared = await prepareUploadFile(upload.file, upload.fieldName);

    if (prepared.error) {
      return { message: prepared.error, fieldNames: [upload.fieldName] };
    }

    if (prepared.file) {
      totalSize += prepared.file.size;
      preparedUploads.push({ fieldName: upload.fieldName, file: prepared.file });
    }
  }

  if (totalSize > FINAL_FILE_LIMIT) {
    return {
      message: oversizedCombinedMessage,
      fieldNames: preparedUploads.map(({ fieldName }) => fieldName),
    };
  }

  preparedUploads.forEach(({ fieldName, file }) => {
    formData.append(fieldName, file, file.name);
  });

  return null;
}
