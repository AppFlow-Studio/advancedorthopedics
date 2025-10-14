// lib/indexnow.ts
const INDEXNOW_API_KEY = '2b2b0d92dff54d44860bb79905ef711b';
const INDEXNOW_KEY_LOCATION = 'https://mountainspineorthopedics.com/2b2b0d92dff54d44860bb79905ef711b.txt';

interface IndexNowResponse {
  success: boolean;
  message: string;
  statusCode?: number;
}

export async function submitToIndexNow(urls: string[]): Promise<IndexNowResponse> {
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: 'mountainspineorthopedics.com',
        key: INDEXNOW_API_KEY,
        keyLocation: INDEXNOW_KEY_LOCATION,
        urlList: urls.map(url => 
          url.startsWith('http') ? url : `https://mountainspineorthopedics.com${url}`
        ),
      }),
    });

    if (response.ok) {
      return {
        success: true,
        message: `Successfully submitted ${urls.length} URLs to IndexNow`,
        statusCode: response.status,
      };
    } else {
      const errorText = await response.text();
      return {
        success: false,
        message: `IndexNow submission failed: ${response.status} - ${errorText}`,
        statusCode: response.status,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `IndexNow submission error: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}

// Helper function to submit a single URL
export async function submitSingleUrl(url: string): Promise<IndexNowResponse> {
  return submitToIndexNow([url]);
}

// Helper function to submit multiple URLs in batches with better rate limiting
export async function submitMultipleUrls(urls: string[], batchSize: 5): Promise<IndexNowResponse[]> {
  const results: IndexNowResponse[] = [];
  
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const result = await submitToIndexNow(batch);
    results.push(result);
    
    // Add a longer delay between batches to avoid rate limiting
    if (i + batchSize < urls.length) {
      console.log(`⏳ Waiting 3 seconds before next batch...`);
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }
  
  return results;
}

// Helper function to submit URLs with exponential backoff on rate limiting
export async function submitWithBackoff(urls: string[], batchSize: 5): Promise<IndexNowResponse[]> {
  const results: IndexNowResponse[] = [];
  let delay = 1000; // Start with 1 second delay
  
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const result = await submitToIndexNow(batch);
    results.push(result);
    
    // If we get rate limited, increase delay exponentially
    if (!result.success && result.statusCode === 429) {
      delay = Math.min(delay * 2, 30000); // Max 30 seconds
      console.log(`⏳ Rate limited. Waiting ${delay/1000} seconds...`);
    } else if (result.success) {
      delay = 1000; // Reset delay on success
    }
    
    // Add delay between batches
    if (i + batchSize < urls.length) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  return results;
}
