import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import Button from "../../components/Button/Button";

jest.mock('../../styles.scss', () => jest.fn());

describe("<Button />", () => {
  it("should display a button", async () => {
    render(<Button text='Button' />)

    await waitFor(() => screen.getByRole('button'))

    expect(screen.getByRole('button')).toHaveTextContent('Button')
  });
});