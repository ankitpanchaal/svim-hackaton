import React from 'react'

const CategoryCard = () => {
    return (
        <div className="cursor-pointer transform transition-all duration-300 hover:scale-105 w-[70px] lg:w-[120px]">
            <img src="https://www.apple.com/in/iphone-14-pro/images/key-features/features/dynamic-island/dynamic_island_deep_purple__exowosw6732a_large.jpg" alt=""
                className="rounded-xl w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] "
            />
            <p className="text-center font-semibold text-sm text-slate-950 hover:font-medium">lorem</p>
        </div>
    )
}

export default CategoryCard