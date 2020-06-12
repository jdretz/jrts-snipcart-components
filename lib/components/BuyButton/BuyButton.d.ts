import React from 'react';
export declare type ProductOption = {
    name: string;
    type: "options";
    options: string;
};
export interface ICustomDataProperty {
    [key: string]: string;
}
export interface IBuyButton {
    productTitle: string;
    /** Snipcart id for product */
    productId: string;
    /** Price of product to be used with Snipcart buy button */
    price: number;
    /** String to URL location of product so Snipcart can verify product price, name, etc */
    productURL: string;
    /** Source for the image to be displayed in the cart (smaller than
     * typical full product image) */
    cartImageURL: string;
    /** Should Snipcart apply tax? */
    taxable: boolean;
    /** Can the product be shipped? */
    shippable: boolean;
    /** Product weight */
    weight?: number;
    /** Product length */
    length?: number;
    /** Product width */
    width?: number;
    /** Product height */
    height?: number;
    /** Used in Snipcart Cart for shorter product description or easier viewing */
    shortProductDescription?: string;
    variants?: ProductOption[];
    /** Class names passed to buy button */
    buttonClassNames?: string;
}
declare const BuyButton: React.ForwardRefExoticComponent<IBuyButton & React.RefAttributes<HTMLButtonElement>>;
export default BuyButton;
//# sourceMappingURL=BuyButton.d.ts.map