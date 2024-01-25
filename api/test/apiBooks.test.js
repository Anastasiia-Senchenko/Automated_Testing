const { constants, apiTestBooks } = require('services');
const axios = require('axios');
const { validate } = require('jsonschema');

describe(`API test ${constants.url.restapi} Books part`, () => {
  it('GET receive status code 200', async () => {
    const response = await axios.get(`${constants.url.restapi}/${constants.apiTheme.books}`);
    expect(response.status).toBe(200);
  });
  it('POST receive status code 200 input valid data', async () => {
    const response = await axios.post(`${constants.url.restapi}/${constants.apiTheme.books}`, {
      data: apiTestBooks.valideRequestBooks,
      });
      expect(response.status).toBe(200);
    });
    it('POST receive status code 400 input invalid data', async () => {
      try {
      await axios.post(`${constants.url.restapi}/${constants.apiTheme.books}`, {
        data: apiTestBooks.invalidRequestBooks,
      });
    } catch(error) {
      expect(error.response.status).toBe(400);
    }
    });
    it('GET ID check response JSON schema', async () => {
      const response = await axios.get(`${constants.url.restapi}/${constants.apiTheme.books}/${constants.api.existRecord.id}`);
      expect(validate(response.data, apiTestBooks.schema).valid).toEqual(true);
    });
    it('GET ID receive status code 200 input valid data', async () => {
      const response = await axios.get(`${constants.url.restapi}/${constants.apiTheme.books}/${constants.api.existRecord.id}`);
        expect(response.status).toBe(200);
    });
    it('PUT check JSON data after update', async () => {
      const response = await axios.put(`${constants.url.restapi}/${constants.apiTheme.books}/${constants.api.existRecord.id}`, {
      data: apiTestBooks.rewriteRequestBooks,
    });
    const validation = validate(response.data, apiTestBooks);
    expect(validation.valid).toBe(true);   
    });
    it('DELETE check status code 200', async () => {
      const response = await axios.delete(`${constants.url.restapi}/${constants.apiTheme.books}/${constants.api.existRecord.id}`);
      expect(response.status).toBe(200);
    });
});