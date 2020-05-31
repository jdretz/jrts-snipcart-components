import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import Tag from "../../components/Tag/Tag";

jest.mock('../../styles.scss', () => jest.fn());

describe("<Tag />", () => {
  it("should display a Tag", async () => {

    const tag = 'Cool hats'

    render(<Tag tagName={tag} />)

    await waitFor(() => screen.getByText(tag.toUpperCase()))

    expect(screen.getByText(tag.toUpperCase())).toHaveTextContent(tag.toUpperCase())
  });
});