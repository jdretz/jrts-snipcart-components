import React from 'react';
import getAvailableVariants, { SnipcartVariation, Variation } from '../../util/getAvailableVariants';

export interface IVariantStockProps {
    selected: Variation[],
    raw: SnipcartVariation[],
    variationLength: Number
}

const VariantStock: React.FC<IVariantStockProps> = ({
    selected,
    raw,
    variationLength = 0
}) => {
    let [stock, setStock] = React.useState<Number | undefined>(undefined);
    let [loading, setLoading] = React.useState<Boolean>(true);
    let [allVariantsSelected, setAllVariantsSelected] = React.useState<Boolean>(false)

    React.useEffect(() => {
        getAvailableVariants(selected, raw).then(newStock => {
            setStock(newStock);
        }).catch(e => console.log(e)).finally(() => {
            setLoading(false);
        })

        let variantCalculation = Number(selected.filter(item => item.option !== "").length) === Number(variationLength)

        setAllVariantsSelected(variantCalculation);

    }, [getAvailableVariants, selected, raw, setStock, setLoading, variationLength])


    return (
        <div className="variant-stock-container">
            {!loading ?
                    <p style={{
                        fontSize: '1.1rem',
                        borderBottom: stock && stock > 0 ? '2px solid green' : allVariantsSelected ? '2px solid red' : '2px solid #CCC'
                        }} className="product-stock">{variationLength && allVariantsSelected ?
                    `${stock} available`
                    :
                    'Please select all variants'
                }</p>
            :
            <div className="loader" />
            }
        </div>
    )

}

export default VariantStock