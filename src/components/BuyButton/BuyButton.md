### BuyButton example:

Button is used to provide product data attributes to Snipcart when clicked. Without the Snipcart javascript downloaded the buy button will not work.

```js

<BuyButton
    buttonClassNames={'regular-buy-button'}
    productTitle={'Product Name'}
    price={10}
    productURL={'https://shop.com/products/product-name'}
    productId={'123'}
    cartImageURL={'https://cdn.sanity.io/images/zlybple6/production/919fe5fca6a5af2c13382047fe0179854b3e9539-1000x1000.png?w=800&h=800&fit=crop&fm=webp'}
    taxable={true}
    shippable={true}
    weight={5}
    height={5}
    width={5}
    length={5}
    shortProductDescription={'This is such a useful product'}
    />
```