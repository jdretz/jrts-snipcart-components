import React from 'react';
import { SnipcartVariation, Variation } from '../../util/getAvailableVariants';
export interface IVariantStockProps {
    selected: Variation[];
    raw: SnipcartVariation[];
    variationLength: Number;
}
declare const VariantStock: React.FC<IVariantStockProps>;
export default VariantStock;
//# sourceMappingURL=VariantStock.d.ts.map