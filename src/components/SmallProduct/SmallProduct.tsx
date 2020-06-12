import React from 'react'
import '../../styles.scss'

export interface ISmallProduct {
    /** Display name for product */
    productName: string
    /** Product Image */
    productImage: React.ReactNode
    /** Vendor name of product */
    vendor?: string
    /** Price of product */
    price?: string | number,
    /** Array of Tag components */
    tags?: React.ReactNode[]
    /** Product Categories */
    categories?: React.ReactNode,
    children?: React.ReactChildren
}

const SmallProduct: React.FC<ISmallProduct> = ({
    productImage,
    productName,
    children = undefined,
    vendor = undefined,
    price = undefined,
    tags = undefined,
    categories = undefined
}) => {
    return (
        <div className="small-product-container">
          <div className="small-product-image-wrapper">
            {productImage}
          </div>
          <div className="small-product-info-wrapper">
            <div className="small-product-vendor-wrapper">
              {vendor && <small>vendor</small>}
            </div>
            <h2>{productName}</h2>
            {price && <p className="small-product-price">{price}</p>}
            {children}
            <div className="small-product-category-wrapper">
              {categories && categories}
            </div>
            <div className="small-product-tag-wrapper">
              {tags && <div>{tags}</div>}
            </div>
          </div>
        </div>
    )
}

export default SmallProduct