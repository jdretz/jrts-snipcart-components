export type Variation = {
    name: string,
    option: string
}

export type SnipcartVariation = {
    stock: number,
    variation: Variation[],
    allowOutOfStockPurchases: boolean
}

export default async function getAvailableVariants(
    variations: Variation[],
    rawSnipcartVariants: SnipcartVariation[],
) {
    const selectedVariationsLength = variations.length;

    const productMatch = rawSnipcartVariants.filter(snipcartVariation => {
        return snipcartVariation.variation.length === selectedVariationsLength
    }).find(product => {
        let match = true;

        while (product.variation.length > 0) {
            let variant = product.variation[0];

            let sameVariantOption = variations.find(({name}) => {
                return name == variant.name
            })

            if (sameVariantOption) {
                let possibleMatch = sameVariantOption.option === variant.option

                if (possibleMatch) {
                    product.variation.shift()
                } else {
                    match = false
                    break
                }

            } else {
                match = false
                break
            }
        }

        if (match) {
            return true
        } else {
            return false
        }
    })

    if (productMatch) {
        return productMatch.stock
    } else {
        return 0
    }
}