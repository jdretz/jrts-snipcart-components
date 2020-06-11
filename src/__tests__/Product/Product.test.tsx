import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";

import Product from '../../components/Product/Product'
import { ProductOption } from '../../components/BuyButton/BuyButton'


import { sanityTestProductWithVariants } from '../../__fixtures__/sanity'

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

describe("<Product />", () => {
  it("should display product information when provided", async () => {

    const arbitraryProductName = 'Product Name'
    const arbitraryDisplayPrice = '$10.00'


    const { getAllByText, getByText, getByRole } = render(<Product
        productTitle={arbitraryProductName}
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
        shortProductDescription={"This is such a useful product"}
        productDescription={<ProductDescription />}
        customOptions={sanityTestProductWithVariants.variants}
        displayPrice={arbitraryDisplayPrice}
        buttonClassNames={'regular-buy-button'}
        />)

        expect(getByText('Add to Cart')).toMatchInlineSnapshot(`
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

        expect(getByText(arbitraryProductName)).toBeTruthy()
        expect(getByText(arbitraryDisplayPrice)).toBeTruthy()
        expect(getAllByText('It is so useful, I am going to spend the next five paragraph')).toHaveLength(5)
  });
});

describe("<Product />", () => {
    it("should display product information, including variants, when provided. The variants should be passed to the BuyButton.", async () => {
  
      const arbitraryProductName = 'Product Name'
      const arbitraryDisplayPrice = '$10.00'
  
      const productVariants: ProductOption[] = sanityTestProductWithVariants.variants.map(variant => {
        return {
          name: variant.name,
          type: "options",
          options: variant.options.join("|")
        }
      })
  
      const { getByText } = render(<Product
          productTitle={arbitraryProductName}
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
          shortProductDescription={"This is such a useful product"}
          productDescription={<ProductDescription />}
          customOptions={sanityTestProductWithVariants.variants}
          displayPrice={arbitraryDisplayPrice}
          buttonClassNames={'regular-buy-button'}
          variants={productVariants}
          />)
  
          expect(getByText('Add to Cart')).toMatchInlineSnapshot(`
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

  describe("<Product />", () => {
    it("should update BuyButton data attribute when variant option is selected and to add 'selected' CSS class to variant class list", async () => {
  
      const arbitraryProductName = 'Product Name'
      const arbitraryDisplayPrice = '$10.00'
  
      const productVariants: ProductOption[] = sanityTestProductWithVariants.variants.map(variant => {
        return {
          name: variant.name,
          type: "options",
          options: variant.options.join("|")
        }
      })
  
      const { container, getByText } = render(<Product
          productTitle={arbitraryProductName}
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
          shortProductDescription={"This is such a useful product"}
          productDescription={<ProductDescription />}
          customOptions={sanityTestProductWithVariants.variants}
          displayPrice={arbitraryDisplayPrice}
          buttonClassNames={'regular-buy-button'}
          variants={productVariants}
          />)

        // The value 'small' is from the sanityTestProductWithVariants.variants array
        // It's one of the options that would appear for the user to click if
        // they wanted that variant
        fireEvent.click(getByText('Small'));

        const buyButtonEl = container.querySelector('.buy-button');

        expect(buyButtonEl).toContainHTML('data-custom3-options="Small"');
        expect(getByText('Small').classList.contains('selected')).toBeTruthy();
      });
  });