import React from 'react';
import getAvailableVariants, { SnipcartVariation, Variation } from '../../util/getAvailableVariants';

export interface IVariantStockProps {
    selected: Variation[],
    raw: SnipcartVariation[]
}

const VariantStock: React.FC<IVariantStockProps> = ({
    selected,
    raw
}) => {
    let [stock, setStock] = React.useState<Number | undefined>(undefined);

    React.useEffect(() => {

        getAvailableVariants(selected, raw).then(newStock => {
            setStock(newStock);
        }).catch(e => console.log(e));

    }, [getAvailableVariants, selected, raw, setStock])

    return (
        <div className="variant-stock-container">
            <p>{JSON.stringify(stock)}</p>
        </div>
    )

}

export default VariantStock