import React from 'react'

const CategoryCard = ({ item }) => {
    return (
        <div className="cursor-pointer transform transition-all duration-300 hover:scale-105 w-[70px] lg:w-[120px]">
            <img src={item?.img} alt=""
                className="rounded-[60px] w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] border-2 p-1 border-slate-300"
            />
            <p className="text-center font-semibold text-[12px] text-slate-950 hover:font-medium">{item?.title}</p>
        </div>
    )
}

export default CategoryCard