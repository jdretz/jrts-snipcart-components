### CustomProductOptions example:

CustomProductOptions is a component that is passed to the Product component to display the product variants

```js
import { sanityTestProductWithVariants } from '../../__fixtures__/sanity';

<CustomProductOptions
    variants={sanityTestProductWithVariants.variants}
    />
```