import axios from "axios";

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

// 88ab08f5401304a21eae8f59c36b4682

const getAPiUrl = () => {
    // return 'https://api.openaq.org';
    return 'https://api.openweathermap.org/data/2.5';
}

// c1d25b88-8870-401d-8b7f-eb39a2b9fe4f
export default async function request(url, options) {
  const response = await axios({
    method: options.method,
    url: `${getAPiUrl() + url}`,
    data: options.data,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('error', err);
    });
  return response;
}
