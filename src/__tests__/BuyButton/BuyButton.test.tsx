import React from "react";
import { render } from "@testing-library/react";

import BuyButton, { ProductOption } from '../../components/BuyButton/BuyButton'
import { sanityTestProductWithVariants } from '../../__fixtures__/sanity'

jest.mock('../../styles.scss', () => jest.fn());

describe("<BuyButton />", () => {
  it("should display BuyButton with provided data attributes", async () => {

    const { getByRole } = render(<BuyButton
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
        />)

    expect(getByRole('button')).toMatchInlineSnapshot(`
    <button
      class="regular-buy-button buy-button snipcart-add-item"
      data-item-custom1-name="Gift"
      data-item-custom1-type="checkbox"
      data-item-custom2-name="Comments"
      data-item-custom2-type="textarea"
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

describe("<BuyButton />", () => {
  it("should display BuyButton variants when given variants", async () => {

    const productVariants: ProductOption[] = sanityTestProductWithVariants.variants.map(variant => {
      return {
        name: variant.name,
        type: "options",
        options: variant.options.join("|")
      }
    })

    const { getByRole } = render(<BuyButton
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
        variants={productVariants}
        />)

    expect(getByRole('button')).toMatchInlineSnapshot(`
    <button
      class="regular-buy-button buy-button snipcart-add-item"
      data-custom3-name="Sizes"
      data-custom3-options="Small|Medium|Large[+2.00]"
      data-custom4-name="Colors"
      data-custom4-options="Red|Blue|Green"
      data-item-custom1-name="Gift"
      data-item-custom1-type="checkbox"
      data-item-custom2-name="Comments"
      data-item-custom2-type="textarea"
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