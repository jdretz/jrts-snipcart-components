import React from "react";
import { render } from "@testing-library/react";

import BuyButton from '../../components/BuyButton/BuyButton'

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