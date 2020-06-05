import React from 'react'

export type ProductOption = {
    name: string,
    type: "options" | "checkbox" | "textarea",
    options?: string[]
}

export interface IBuyButton {
    productTitle: string,
    /** Snipcart id for product */
    productId: string
    /** Price of product to be used with Snipcart buy button */
    price: number
    /** String to URL location of product so Snipcart can verify product price, name, etc */
    productURL: string
    /** Source for the image to be displayed in the cart (smaller than 
     * typical full product image) */
    cartImageURL: string
    /** Should Snipcart apply tax? */
    taxable: boolean
    /** Can the product be shipped? */
    shippable: boolean
    /** Product weight */
    weight?: number
    /** Product length */
    length?: number
    /** Product width */
    width?: number
    /** Product height */
    height?: number
    /** Used in Snipcart Cart for shorter product description or easier viewing */
    shortProductDescription?: string
    variants?: ProductOption[]
    /** Class names passed to buy button */
    buttonClassNames?: string
}

const BuyButton: React.FC<IBuyButton> = ({
    productTitle,
    price,
    productURL,
    productId,
    cartImageURL,
    taxable,
    shippable,
    weight = undefined,
    height = undefined,
    width = undefined,
    length = undefined,
    shortProductDescription = undefined,
    variants = undefined,
    buttonClassNames = undefined
}) => {
    let buyButtonProps = {
        className: buttonClassNames + " buy-button snipcart-add-item",
        'data-item-id': productId,
        'data-item-price': price,
        'data-item-url': productURL,
        'data-item-taxable': taxable,
        'data-item-shippable': shippable,
        'data-item-description': shortProductDescription,
        'data-item-name': productTitle,
        'data-item-image': cartImageURL,
        'data-item-weight': weight,
        'data-item-length': length,
        'data-item-width': width,
        'data-item-height': height,
    }

    if (variants) {

        // create new properties for variants

        buyButtonProps = {
            ...buyButtonProps,
            // add new custom data options to product
        }
    }

    return(
        <button
            role='button'
            {...buyButtonProps}
        >
            Add to Cart
        </button>
    )
}

export default BuyButton