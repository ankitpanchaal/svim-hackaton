import React from 'react'
import ProductCard2 from './ProductCard2'

const Products = () => {
    return (
        <div className="flex flex-wrap lg:px-20 gap-4 justify-center" >
            {products.map((item) => {
                return (
                    <ProductCard2 key={item?.name} item={item} />
                )
            })}
        </div>
    )
}

export default Products

const products = [
    {
        imageUrl: 'https://images.pexels.com/photos/3602251/pexels-photo-3602251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=200&dpr=100',
        name: 'Product 1',
        price: 10.99
    },
    {
        imageUrl: 'https://images.pexels.com/photos/3602252/pexels-photo-3602252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=200&dpr=100',
        name: 'Product 2',
        price: 19.99
    },
    {
        imageUrl: 'https://images.pexels.com/photos/3602253/pexels-photo-3602253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=200&dpr=100',
        name: 'Product 3',
        price: 14.5
    },
    {
        imageUrl: 'https://www.apple.com/in/iphone-14-pro/images/key-features/features/dynamic-island/dynamic_island_deep_purple__exowosw6732a_large.jpg',
        name: 'Product 4',
        price: 7.99
    },
    {
        imageUrl: 'https://www.apple.com/in/iphone-14-pro/images/key-features/features/dynamic-island/dynamic_island_deep_purple__exowosw6732a_large.jpg',
        name: 'Product 5',
        price: 12.49
    }
];
