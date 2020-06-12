import React from 'react'

import BuyButton, { IBuyButton } from '../BuyButton/BuyButton'
import CustomOptions, { RawVariant } from '../CustomProductOptions/CustomProductOptions'

export interface IProduct extends IBuyButton {
    /** Optimized or enhanced image of product to display */
    mainProductImage: React.ReactElement
    /** Array of raw variant objects from Sanity */
    customOptions: RawVariant[]
    /** Price as string used for easier display */
    displayPrice?: string,
    /** Product description */
    productDescription?: React.ReactElement
    /** Used in Snipcart Cart for shorter product description or easier viewing */
    shortProductDescription?: string
    children?: React.ReactChildren
    totalStock?: number | string
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
    customOptions = [],
    totalStock = undefined,
    weight = undefined,
    height = undefined,
    width = undefined,
    length = undefined,
    shortProductDescription = undefined,
    productDescription = undefined,
    children = undefined,
    displayPrice = undefined,
    buttonClassNames = undefined,
    variants = undefined
}) => {
    // record values for the name of variant and whether it is selected
    // pass the value to the buy button if a variant is selected
    const buyButtonRef = React.createRef<HTMLButtonElement>();
    let [variantMap, setVariantMap] = React.useState<{ [name: string]: number; }>({})

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        let node = buyButtonRef.current;

        if (node &&
            'name' in e.currentTarget.dataset &&
            'value' in e.currentTarget.dataset &&
            typeof window !== "undefined") {

            // Makes sure variantName is assigned a string
            // [redundant but typescript accepts it]
            const variantName = e.currentTarget.dataset.name ? e.currentTarget.dataset.name : '';

            // Prepares variant value to be assigned to node
            // [redundant but typescript accepts it]
            const variantValue = e.currentTarget.dataset.value ? e.currentTarget.dataset.value : '';

            // Prepares variant key to be used for finding elements
            // [redundant but typescript accepts it]
            const variantsKey = e.currentTarget.dataset.key ? e.currentTarget.dataset.key : '';

            // Retrieves custom option number
            let customOptionNumber = variantMap[variantName]

            // Sets the data options property to the selected value
            node.dataset[`custom${customOptionNumber}Options`] = variantValue;

            let otherVariantOptions: HTMLCollection = document.getElementsByClassName(variantsKey);

            
            if (e.currentTarget.classList.contains("selected")) {
                e.currentTarget.classList.remove("selected")
                e.currentTarget.blur();
            } else {
                e.currentTarget.classList.add("selected");

                // Remove selected from any other elements
                Array.prototype.forEach.call(otherVariantOptions, function(variantOption) {
                    if (variantOption != e.currentTarget) {
                        variantOption.classList.remove("selected")
                    }
                })
            }
        }
    }

    // Creates an object that stores the 'custom' data number for the different
    // variants because Snipcart simply numbers variants if there are any
    React.useEffect(() => {
        if (variants) {
            const variantMap: { [name: string]: number; } = {};

            variants.map(({ name }, i) => {
                let item = i + 3;

                variantMap[name] = item
            })

            setVariantMap(variantMap);
        }
    }, [variants, setVariantMap])

    return (
        <div className="product-container">
            <div className="product-image-wrapper">
                {mainProductImage}
            </div>
            <div className="product-information-wrapper">
                <h2 className="product-title">{productTitle}</h2>
                <h3 className="product-stock">{totalStock} <span style={{fontSize: '0.8em'}}>available</span></h3>
                {displayPrice && <span className="product-display-price">{displayPrice}</span>}
                <BuyButton
                    ref={buyButtonRef}
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
                {customOptions && <CustomOptions
                    handleClick={handleClick}
                    variants={customOptions}
                />}
                {/* <hr /> */}
                <div className="product-description-wrapper">
                    {productDescription}
                </div>
            </div>
            {children}
        </div>
    )
}

export default Product