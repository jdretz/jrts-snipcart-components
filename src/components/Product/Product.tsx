import React from 'react'

import BuyButton, { IBuyButton } from '../BuyButton/BuyButton'


export interface IProduct extends IBuyButton {
    /** Price as string used for easier display */
    displayPrice?: string,
    /** Product description */
    productDescription?: React.ReactElement
    /** Used in Snipcart Cart for shorter product description or easier viewing */
    shortProductDescription?: string
    /** AvailableSizes component */
    customOptions?: React.ReactElement
    children?: React.ReactChildren
    totalStock?: number | string
    /** Optimized or enhanced image of product to display */
    mainProductImage: React.ReactElement
}

const Product: React.FC<IProduct> = ({
    productTitle,
    price,
    productURL,
    productId,
    cartImageURL,
    taxable,
    shippable,
    mainProductImage,
    totalStock = undefined,
    weight = undefined,
    height = undefined,
    width = undefined,
    length = undefined,
    shortProductDescription = undefined,
    productDescription = undefined,
    customOptions = undefined,
    children = undefined,
    displayPrice = undefined,
    buttonClassNames = undefined,
    variants = undefined
}) => {
    return (
        <div>
            <div>
                {mainProductImage}
            </div>
            <div>
                <h2 className="product-title">{productTitle}</h2>
                <h3>Total Available: {totalStock}</h3>
                {displayPrice && <span className="product-display-price">{displayPrice}</span>}
                <BuyButton
                    productTitle={productTitle}
                    productId={productId}
                    price={price}
                    productURL={productURL}
                    cartImageURL={cartImageURL}
                    taxable={taxable}
                    shippable={shippable}
                    weight={weight}
                    length={length}
                    width={width}
                    height={height}
                    shortProductDescription={shortProductDescription}
                    variants={variants}
                    buttonClassNames={buttonClassNames}
                />
                {customOptions && customOptions}
                {productDescription}
            </div>
            {children}
        </div>
    )
}

export default Product