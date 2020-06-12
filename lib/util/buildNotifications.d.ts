/**
 * Mutates site status document on Sanity account
 * @param body parsable HTTP request body
 * @param sanityKey secret key needed to access sanity account data
 * @param sanityDataMutationURL URL to mutate sanity data 'https://project.api.sanity.io/v1/data/mutate/dataset'
 * @param sanityBuildStatusSchemaName name of the schema to modify
 *
 * @returns {void}
 * */
export default function buildNotification(body: string, sanityKey: string, sanityDataMutationURL: string, sanityBuildStatusSchemaName: string): Promise<void>;
//# sourceMappingURL=buildNotifications.d.ts.map