const axios = require('axios')

/**
 * Mutates site status document on Sanity account
 * @param body parsable HTTP request body
 * @param sanityKey secret key needed to access sanity account data
 * @param sanityDataMutationURL URL to mutate sanity data 'https://project.api.sanity.io/v1/data/mutate/dataset'
 * @param sanityBuildStatusSchemaName name of the schema to modify
 *
 * @returns {void}
 * */

export default async function buildNotification(
    body: string,
    sanityKey: string,
    sanityDataMutationURL: string,
    sanityBuildStatusSchemaName: string
) {
    const bodyJSON = JSON.parse(body)
    const {
        state,
        created_at,
        id,
        error_message
    } = bodyJSON

    const data = {
        "mutations": [
            {
                "patch": {
                    "query": `*[_id == '${sanityBuildStatusSchemaName}' || _id == 'drafts.${sanityBuildStatusSchemaName}']`,
                    "set": {
                        "status": state,
                        "timestamp": created_at,
                        "identifier": String(id),
                        "errorMessage": String(error_message)
                    }
                }
            }
        ]
    }
    try {
        await axios.post(sanityDataMutationURL, data, {
            headers: {
                'Authorization': `Bearer ${sanityKey}`,
                'Content-Type': 'application/json'
            }
        })
    } catch (e) {
        console.log(JSON.stringify(e, null, 4));
    }
}