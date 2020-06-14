### VariantStock example:

VariantStock is used to display the amount of stock for the selected variant

```js
import { responseDataWithVariants } from '../../__fixtures__/snipcartProduct';

<VariantStock
    raw={responseDataWithVariants.data.variants}
    selected={[
        {
            name: "Sizes",
            option:"Small"
        },
        {
            name: "Colors",
            option: "Red"
        }
    ]}
    variationLength={2}
    />
```