### SmallProduct example:

SmallProduct is used to display top level information about a product in a smaller format

```js
import Tag from '../Tag/Tag'

const Image = () => {
    return (
        <img style={{maxWidth: '100px'}} src={`https://cdn.sanity.io/images/zlybple6/production/919fe5fca6a5af2c13382047fe0179854b3e9539-1000x1000.png?w=800&h=800&fit=crop&fm=webp`} />
    )
}

const Categories = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <a style={{margin: "5px"}} href="nowhere">Random Category</a>
            <a style={{margin: "5px"}} href="nowhere">Second Random Category</a>
        </div>
    )
}

const tags = ['logos', 'hats', 'misc'];

const tagList = tags.map((tag,i) => <Tag key={i} tagName={tag} />);

<SmallProduct
    productName="Title of Product"
    productImage={<Image />}
    categories={<Categories />}
    price="$10.00"
    vendor="JRTS"
    tags={tagList}
    />
```