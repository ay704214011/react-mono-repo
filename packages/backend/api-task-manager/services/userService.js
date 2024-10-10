const got = require('got');

const fetchUsers = async () => {
    try {
      const { data } = await got(process.env.API_GET_USERS, {
         retry: {
            limit: 0
         },
         prefixUrl: process.env.API_DOMAIN,
         headers: {},
         method: 'GET'
      }).json();
      return data;
    } catch (e) {
        throw Error(e);
    }
 };
 
 module.exports = {
    fetchUsers
 };