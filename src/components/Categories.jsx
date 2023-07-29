import React from 'react'
import CategoryCard from './CategoryCard'
import { Cat } from './dummy'

export const Categories = () => {
    return (
        <div className="flex gap-4 lg:gap-10 justify-center" >
            {Cat.map(e => <CategoryCard item={e} />)}
        </div>
    )
}
