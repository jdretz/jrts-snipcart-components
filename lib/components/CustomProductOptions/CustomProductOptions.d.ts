import React from 'react';
import '../../styles.scss';
export declare type RawVariant = {
    _key: string;
    _type: string;
    name: string;
    options: string[];
};
export interface ICustomOptionsProps {
    /** Variant object retrieved from Sanity */
    variants: RawVariant[];
    /** Function that sets the variant on the product button when the variant is clicked */
    handleClick: Function;
}
declare const CustomOptions: React.FC<ICustomOptionsProps>;
export default CustomOptions;
//# sourceMappingURL=CustomProductOptions.d.ts.map