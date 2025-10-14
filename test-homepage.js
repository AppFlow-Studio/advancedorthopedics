import fetch from 'node-fetch';

async function testHomepage() {
  try {
    console.log('Testing homepage...');
    const response = await fetch('http://localhost:3000/', {
      redirect: 'manual'
    });
    
    console.log('Status:', response.status);
    console.log('Headers:', Object.fromEntries(response.headers.entries()));
    
    if (response.status === 200) {
      const html = await response.text();
      console.log('HTML length:', html.length);
      console.log('First 500 chars:', html.substring(0, 500));
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

testHomepage();
