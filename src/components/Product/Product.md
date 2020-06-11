### Product example:

Product is used to display full product information as well as offer a chance to buy

```js
import BuyButton from '../BuyButton/BuyButton';
import CustomProductOptions from '../CustomProductOptions/CustomProductOptions'
import { sanityTestProductWithVariants } from '../../__fixtures__/sanity';

const Image = () => {
    return (
        <img style={{maxWidth: '300px'}} src={`https://cdn.sanity.io/images/zlybple6/production/919fe5fca6a5af2c13382047fe0179854b3e9539-1000x1000.png?w=800&h=800&fit=crop&fm=webp`} />
    )
};

const ProductDescription = () => {
    return (
        <>
            <p>It is so useful, I am going to spend the next five paragraph</p>
            <p>It is so useful, I am going to spend the next five paragraph</p>
            <p>It is so useful, I am going to spend the next five paragraph</p>
            <p>It is so useful, I am going to spend the next five paragraph</p>
            <p>It is so useful, I am going to spend the next five paragraph</p>
        </>
    )
};

const productVariants = sanityTestProductWithVariants.variants.map(variant => {
    return {
        name: variant.name,
        type: "options",
        options: variant.options.join("|")
    }
});

<Product
    productTitle={'Product Name'}
    price={10}
    productURL={'https://shop.com/products/product-name'}
    productId={'123'}
    cartImageURL={'https://cdn.sanity.io/images/zlybple6/production/919fe5fca6a5af2c13382047fe0179854b3e9539-1000x1000.png?w=800&h=800&fit=crop&fm=webp'}
    taxable={true}
    shippable={true}
    mainProductImage={<Image />}
    totalStock={10}
    weight={5}
    height={5}
    width={5}
    length={5}
    shortProductDescription={'This is such a useful product'}
    productDescription={<ProductDescription />}
    customOptions={sanityTestProductWithVariants.variants}
    displayPrice={"$10.00"}
    buttonClassNames={'regular-buy-button'}
    variants={productVariants}
    />
```