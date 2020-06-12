import React from 'react'
import '../../styles.scss'

export type RawVariant = {
    _key: string
    _type: string
    name: string
    options: string[]
}

export interface ICustomOptionsProps {
    /** Variant object retrieved from Sanity */
    variants: RawVariant[]
    /** Function that sets the variant on the product button when the variant is clicked */
    handleClick: Function
}

const CustomOptions: React.FC<ICustomOptionsProps> = ({
    variants,
    handleClick
}) => {
    const productVariants = variants.map((variant,i) => {
        return (
            <div key={variant._key+'-'+i}>
                <h4 className="custom-option-name">{variant.name}</h4>
                {variant.options.map(option => <button
                    role='button'
                    key={variant._key+'-'+option}
                    data-value={option}
                    className={`custom-option ${variant._key}`}
                    data-name={variant.name}
                    data-key={variant._key}
                    onClick={(e) => handleClick(e)}>{option.replace(/(\[.*\])/g, '')}
                    </button>
                )}
            </div>
        )
    })
    return (
        <>
            {
                productVariants && productVariants
            }
        </>
    )
}

export default CustomOptions