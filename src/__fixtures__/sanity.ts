export const variants = [
    {
        "_key": "a155d4e377ee",
        "_type": "variant",
        "name": "Sizes",
        "options": [
            "Small",
            "Medium",
            "Large[+2.00]"
        ]
    },
    {
        "_key": "b8c04a960075",
        "_type": "variant",
        "name": "Colors",
        "options": [
            "Red",
            "Blue",
            "Green"
        ]
    }
];

export const sanityTestProduct = {
    "title": "Logo Product",
    "slug": {
        "current": "test-product"
    },
    "_id": "drafts.9afc26fc-e34d-49fd-86c7-5719d84f04fc",
    "_rawBody": [
        {
            "_key": "5074a49dd68f",
            "_type": "block",
            "children": [
                {
                    "_key": "5074a49dd68f0",
                    "_type": "span",
                    "marks": [],
                    "text": "This is the full description for the product with a picture"
                }
            ],
            "markDefs": [],
            "style": "normal"
        },
        {
            "_key": "0a6a3e401db8",
            "_type": "block",
            "children": [
                {
                    "_key": "0a6a3e401db80",
                    "_type": "span",
                    "marks": [],
                    "text": ""
                }
            ],
            "markDefs": [],
            "style": "normal"
        },
        {
            "_key": "eb85f129dcca",
            "_type": "imageBlockContent",
            "alt": "instagram logo",
            "asset": {
                "_ref": "image-cbe46b391fa53ab9ee15ddf8557a8cb42f0b7e32-144x144-png",
                "_type": "reference"
            },
            "caption": "Random picture that was on my desktop"
        }
    ],
    "description": "Example product",
    "defaultProductVariant": {
        "mainImage": {
            "asset": {
                "fluid": {
                    "src": "https://cdn.sanity.io/images/ah76eszu/production/eb002268b3ecac68146fbca89e604f94a16b727a-300x298.png"
                }
            }
        },
        "price": 10,
        "taxable": true,
        "images": [],
        "grams": 5,
        "height": 5,
        "length": 5,
        "width": 5,
        "shippable": true,
        "tags": [
            "logo",
            "jrts"
        ]
    }
};

export const sanityTestProductNoVariants = {
    ...sanityTestProduct,
    variants: []
};

export const sanityTestProductWithVariants = {
    ...sanityTestProduct,
    variants
};