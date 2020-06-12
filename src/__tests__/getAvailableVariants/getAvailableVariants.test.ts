import getAvailableVariants from '../../util/getAvailableVariants';
import { responseDataWithVariants } from '../../__fixtures__/snipcartProduct'

describe("getAvailableVariants", () => {
    it("should return the stock for selected variations", async () => {

        let selectedVariations = [
            {
                name: "Sizes",
                option: "11"
            },
            {
                name: "Colors",
                option: "Second Variant"
            }
        ]

        const stock = await getAvailableVariants(selectedVariations, responseDataWithVariants.data.variants)

        expect(stock).toEqual(3)

    });
  });