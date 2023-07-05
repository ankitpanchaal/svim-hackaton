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
        imageUrl: "https://manforcecondoms.com/media_upload/blog/2aa493b8e210bd3ba8b6b4cc772b4136.png",
        date: "2023-07-05",
        title: "Dummy Title 1"
    },
    {
        imageUrl: "https://manforcecondoms.com/media_upload/blog/2aa493b8e210bd3ba8b6b4cc772b4136.png",
        date: "2023-07-06",
        title: "Dummy Title 2"
    },
    {
        imageUrl: "https://manforcecondoms.com/media_upload/blog/2aa493b8e210bd3ba8b6b4cc772b4136.png",
        date: "2023-07-05",
        title: "Dummy Title 1"
    },
    {
        imageUrl: "https://manforcecondoms.com/media_upload/blog/2aa493b8e210bd3ba8b6b4cc772b4136.png",
        date: "2023-07-06",
        title: "Dummy Title 2"
    },
    {
        imageUrl: "https://manforcecondoms.com/media_upload/blog/2aa493b8e210bd3ba8b6b4cc772b4136.png",
        date: "2023-07-05",
        title: "Dummy Title 1"
    },
    {
        imageUrl: "https://manforcecondoms.com/media_upload/blog/2aa493b8e210bd3ba8b6b4cc772b4136.png",
        date: "2023-07-06",
        title: "Dummy Title 2"
    },
];
