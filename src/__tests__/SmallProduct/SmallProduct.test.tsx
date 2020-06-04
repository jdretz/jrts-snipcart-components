import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import Tag, { ITag } from "../../components/Tag/Tag";
import SmallProduct from '../../components/SmallProduct/SmallProduct'

jest.mock('../../styles.scss', () => jest.fn());

const Image: React.FC = () => {
    return (
        <img style={{maxWidth: '100px', boxShadow: '0px 0px 15px #CCC'}} src={`https://cdn.sanity.io/images/zlybple6/production/919fe5fca6a5af2c13382047fe0179854b3e9539-1000x1000.png?w=800&h=800&fit=crop&fm=webp`} />
    )
}

const Categories: React.FC = () => {
    return (
        <a>Random Category</a>
    )
}

const tags = ['logos']

const tagList: JSX.Element[] = tags.map(tag => <Tag key={1} data-testid="tag" tagName={tag} />)

describe("<SmallProduct />", () => {
  it("should display product information when provided", async () => {

    const anyTitleString = "Title of Product"
    const anyPriceString = "$10.00"
    const anyVendorString = "vendor"

    render(<SmallProduct
            productName={anyTitleString}
            productImage={<Image />}
            categories={<Categories />}
            price={anyPriceString}
            vendor={anyVendorString}
            tags={tagList}
        />)

    await waitFor(() => screen.getByText(anyTitleString))

    expect(screen.queryByText('LOGOS')).toHaveTextContent('LOGOS')
    expect(screen.queryByText(anyTitleString)).toHaveTextContent(anyTitleString)
    expect(screen.queryByText(anyPriceString)).toHaveTextContent(anyPriceString)
    expect(screen.queryByText(anyVendorString)).toHaveTextContent(anyVendorString)
    expect(screen.queryByText("Random Category")).toHaveTextContent("Random Category")
  });
});