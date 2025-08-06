// examples/nodejs/getAddress.js

const { RgbApiClient } = require('./rgb-api-sdk.cjs');

async function demoGetAddress() {
  console.log('Node.js Demo: Calling getAddress API');
  
  // Instantiate client with base URL
  const client = new RgbApiClient({ baseUrl: 'http://localhost:3001' });

  try {
    // Call the getAddress API
    const addressResponse = await client.onchain.getAddress();

    console.log('getAddress Response:', addressResponse);
    // Example output:
    // { address: '...' }
  } catch (error) {
    console.error('Error calling getAddress:', error);
  }
}

// demoGetAddress(); 

async function demoGetNodeState() {
  console.log('Node.js Demo: Calling getNodeState API');
  const client = new RgbApiClient({ baseUrl: 'http://localhost:3001' });
  const nodeState = await client.node.getNodeState();
  console.log('getNodeState Response:', nodeState);
}

demoGetNodeState(); 