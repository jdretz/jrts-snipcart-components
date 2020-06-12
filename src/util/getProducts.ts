const axios = require('axios');

/**
 * Fetches product information from Snipcart
 * @param productId unique identified for product on Snipcart
 * @param SNIPCART_KEY secret key to access Snipcart data
 *
 * @returns {Object} Product information object
 */

export default async function getProduct(productId: string, SNIPCART_KEY: string) {

    try {
        const response = await axios.get(`https://app.snipcart.com/api/products/${productId}`, {
            auth: {
              username: SNIPCART_KEY,
              password: ''
            }
        })

        return response.data
    } catch (e) {
        console.log(e)
        return {
            statusCode: 500,
            body: `${e}`
        }
    }
}