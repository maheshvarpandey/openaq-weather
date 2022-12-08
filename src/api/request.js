import axios from "axios";

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

const getAPiUrl = () => {
    return 'https://api.openaq.org';
}

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
