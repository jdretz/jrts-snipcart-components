import React from 'react';
import '../../styles.scss';
export interface ISmallProduct {
    /** Display name for product */
    productName: string;
    /** Product Image */
    productImage: React.ReactNode;
    /** Vendor name of product */
    vendor?: string;
    /** Price of product */
    price?: string | number;
    /** Array of Tag components */
    tags?: React.ReactNode[];
    /** Product Categories */
    categories?: React.ReactNode;
    children?: React.ReactChildren;
}
declare const SmallProduct: React.FC<ISmallProduct>;
export default SmallProduct;
//# sourceMappingURL=SmallProduct.d.ts.map