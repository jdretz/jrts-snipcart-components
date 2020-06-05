import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import Product from '../../components/Product/Product'

jest.mock('../../styles.scss', () => jest.fn());

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

const CustomOptions = () => (
    <>
        <p>Sizes</p>
        <p>10 | 11 | 11.5</p>
    </>
);

describe("<Product />", () => {
  it("should display product information when provided", async () => {


    const { getByRole } = render(<Product
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
        customOptions={<CustomOptions />}
        displayPrice={"$10.00"}
        buttonClassNames={'regular-buy-button'}
        />)

        expect(getByRole('button')).toMatchInlineSnapshot(`
        <button
          class="regular-buy-button buy-button snipcart-add-item"
          data-item-description="This is such a useful product"
          data-item-height="5"
          data-item-id="123"
          data-item-image="https://cdn.sanity.io/images/zlybple6/production/919fe5fca6a5af2c13382047fe0179854b3e9539-1000x1000.png?w=800&h=800&fit=crop&fm=webp"
          data-item-length="5"
          data-item-name="Product Name"
          data-item-price="10"
          data-item-shippable="true"
          data-item-taxable="true"
          data-item-url="https://shop.com/products/product-name"
          data-item-weight="5"
          data-item-width="5"
          role="button"
        >
          Add to Cart
        </button>
        `)
  });
});