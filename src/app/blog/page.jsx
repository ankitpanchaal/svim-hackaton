import BlogCard from '@/components/BlogCard'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
    return (
        <div className="pt-12">
            <Header title={"BLOGS"} />
            <div className="pt-6 flex flex-wrap items-center justify-center max-w-[1200px] m-auto" >
                {itemsArray.map((e) =>
                    <BlogCard item={e} />
                )}
            </div>
        </div>
    )
}

export default page

const itemsArray = [
    {
        imageUrl: "https://www.ugaoo.com/cdn/shop/articles/basket_planter.jpg?v=1688642989&width=750",
        date: "July 06, 2023",
        title: "The Benefits of Using Basket Planters in Your Gardening Routine"
    },
    {
        imageUrl: "https://www.ugaoo.com/cdn/shop/articles/vertical_garden.jpg?v=1688547843&width=750",
        date: "July 06, 2023",
        title: "A Guide to Creating a Vertical Garden in Mumbai Apartments"
    },
    {
        imageUrl: "https://www.ugaoo.com/cdn/shop/articles/air_purifying_plants_bangalore.jpg?v=1688391851&width=750",
        date: "July 04, 2023",
        title: "Reducing Pollution in Bangalore: The Power of Air-Purifying Plants"
    },
    {
        imageUrl: "https://www.ugaoo.com/cdn/shop/articles/insulin.jpg?v=1688112117&width=750",
        date: "July 03, 2023",
        title: "Unveiling the Marvelous Insulin Plant: Care, Benefits, and Varieties"
    },
    {
        imageUrl: "https://www.ugaoo.com/cdn/shop/articles/basket_planter.jpg?v=1688642989&width=750",
        date: "July 06, 2023",
        title: "The Benefits of Using Basket Planters in Your Gardening Routine"
    },
    {
        imageUrl: "https://www.ugaoo.com/cdn/shop/articles/vertical_garden.jpg?v=1688547843&width=750",
        date: "July 06, 2023",
        title: "A Guide to Creating a Vertical Garden in Mumbai Apartments"
    },
    {
        imageUrl: "https://www.ugaoo.com/cdn/shop/articles/air_purifying_plants_bangalore.jpg?v=1688391851&width=750",
        date: "July 04, 2023",
        title: "Reducing Pollution in Bangalore: The Power of Air-Purifying Plants"
    },
    {
        imageUrl: "https://www.ugaoo.com/cdn/shop/articles/insulin.jpg?v=1688112117&width=750",
        date: "July 03, 2023",
        title: "Unveiling the Marvelous Insulin Plant: Care, Benefits, and Varieties"
    },
    {
        imageUrl: "https://www.ugaoo.com/cdn/shop/articles/basket_planter.jpg?v=1688642989&width=750",
        date: "July 06, 2023",
        title: "The Benefits of Using Basket Planters in Your Gardening Routine"
    },
    {
        imageUrl: "https://www.ugaoo.com/cdn/shop/articles/vertical_garden.jpg?v=1688547843&width=750",
        date: "July 06, 2023",
        title: "A Guide to Creating a Vertical Garden in Mumbai Apartments"
    },
    {
        imageUrl: "https://www.ugaoo.com/cdn/shop/articles/air_purifying_plants_bangalore.jpg?v=1688391851&width=750",
        date: "July 04, 2023",
        title: "Reducing Pollution in Bangalore: The Power of Air-Purifying Plants"
    },
    {
        imageUrl: "https://www.ugaoo.com/cdn/shop/articles/insulin.jpg?v=1688112117&width=750",
        date: "July 03, 2023",
        title: "Unveiling the Marvelous Insulin Plant: Care, Benefits, and Varieties"
    },
    {
        imageUrl: "https://www.ugaoo.com/cdn/shop/articles/basket_planter.jpg?v=1688642989&width=750",
        date: "July 06, 2023",
        title: "The Benefits of Using Basket Planters in Your Gardening Routine"
    },
    {
        imageUrl: "https://www.ugaoo.com/cdn/shop/articles/vertical_garden.jpg?v=1688547843&width=750",
        date: "July 06, 2023",
        title: "A Guide to Creating a Vertical Garden in Mumbai Apartments"
    },
    {
        imageUrl: "https://www.ugaoo.com/cdn/shop/articles/air_purifying_plants_bangalore.jpg?v=1688391851&width=750",
        date: "July 04, 2023",
        title: "Reducing Pollution in Bangalore: The Power of Air-Purifying Plants"
    },
    {
        imageUrl: "https://www.ugaoo.com/cdn/shop/articles/insulin.jpg?v=1688112117&width=750",
        date: "July 03, 2023",
        title: "Unveiling the Marvelous Insulin Plant: Care, Benefits, and Varieties"
    },
];
