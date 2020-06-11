import React from 'react'

export type ProductOption = {
    name: string,
    type: "options",
    options: string
}

export interface ICustomDataProperty {
    [key: string]: string
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

const BuyButton = React.forwardRef<HTMLButtonElement, IBuyButton>(({
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
}, ref) => {
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
        'data-item-custom1-name': "Gift",
        'data-item-custom1-type': "checkbox",
        'data-item-custom2-name': "Comments",
        'data-item-custom2-type': "textarea"
    }


    if (variants) {
        let customOptions: ICustomDataProperty = {};
        // create new properties for variants
        variants.map((variant, i) => {
            let item = i + 3;

            customOptions[`data-custom${item}-name`] = variant.name;
            customOptions[`data-custom${item}-options`] = variant.options;
        })

        buyButtonProps = {
            ...buyButtonProps,
            ...customOptions
        }
    }

    return (
        <button
            ref={ref}
            role='button'
            {...buyButtonProps}
        >
            Add to Cart
        </button>
    )
})

export default BuyButton