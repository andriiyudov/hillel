const DATA = [
    {
        id: 1,
        name: 'Phones',
        products: [
            {
                id: 'any-id-1',
                name: 'Apple iPhone',
                price: 1000,
                description: 'Some short description'
            },
            {
                id: 'any-id-2',
                name: 'Samsung S#',
                price: 2000,
                description: 'Some very long description. Some very long description. Some very long description. Some very long description'
            },
            {
                id: 'any-id-3',
                name: 'Google Pixel',
                price: 3000,
                description: 'Some common description. Some common description.'
            }
        ]
    },
    {
        id: 23,
        name: 'Laptops',
        products: [
            {
                id: 'any-id-4',
                name: 'ThinkPad',
                price: 1000,
                description: 'Some short description'
            },
            {
                id: 'any-id-5',
                name: 'Macbook Pro',
                price: 2000,
                description: 'Some very long description. Some very long description. Some very long description. Some very long description'
            }
        ]
    },
    {
        id: 46,
        name: 'Tablets',
        products: [
            {
                id: 'any-id-6',
                name: 'Samsung Tab',
                price: 1000,
                description: 'Some short description'
            },
            {
                id: 'any-id-7',
                name: 'Apple iPad',
                price: 2000,
                description: 'Some very long description. Some very long description. Some very long description. Some very long description'
            }
        ]
    },
    {
        id: 47,
        name: 'Comps.',
        products: []
    },
    {
        id: 50,
        name: 'Food',
        products: []
    },
    {
        id: 51,
        name: 'Other',
        products: []
    }
];

const dataMap = new Map();
const productsMap = new Map();

DATA.forEach(dataItem => {
    dataMap.set(dataItem.id, dataItem);

    if (dataItem.products.length) {
        dataItem.products.forEach(product => {
            productsMap.set(product.id, product);
        })
    }
})

const DATA_MAP = dataMap;
const PRODUCTS_MAP = productsMap;
