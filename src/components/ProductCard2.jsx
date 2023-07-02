import React from 'react'

const ProductCard2 = ({ item }) => {

    return (
        <div className="p-2 rounded-md bg-[#FF676D20] lg:p-3" >
            <div className="items-center max-w-[150px]">
                <img src={item.imageUrl} alt=""
                    className="h-[150px] w-[150px] rounded-md"
                />

                <div className="mt-2 px-2">
                    <div className="font-semibold text-sm text-black">{item.name}</div>
                    <div className="font-medium text-[10px] text-[#FF676D] ">Price : ${item.price}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard2