import React from 'react';
import { IBuyButton } from '../BuyButton/BuyButton';
import { RawVariant } from '../CustomProductOptions/CustomProductOptions';
export interface IProduct extends IBuyButton {
    /** Optimized or enhanced image of product to display */
    mainProductImage: React.ReactElement;
    /** Array of raw variant objects from Sanity */
    customOptions: RawVariant[];
    /** Price as string used for easier display */
    displayPrice?: string;
    /** Product description */
    productDescription?: React.ReactElement;
    /** Used in Snipcart Cart for shorter product description or easier viewing */
    shortProductDescription?: string;
    children?: React.ReactChildren;
    totalStock?: number | string;
}
declare const Product: React.FC<IProduct>;
export default Product;
//# sourceMappingURL=Product.d.ts.map