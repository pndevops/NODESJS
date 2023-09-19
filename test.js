const axios = require('axios');
const { expect } = require('chai');

describe('Application URL Test', () => {
  it('should return a successful response', async () => {
    const url = 'http://15.207.71.125:3000'; // Replace with your application URL

    try {
      const response = await axios.get(url);
      
      // Add assertions here based on the response
      expect(response.status).to.equal(200);
      // You can add more assertions as needed
      
    } catch (error) {
      throw new Error(`Failed to make a request to ${url}: ${error.message}`);
    }
  });
});
