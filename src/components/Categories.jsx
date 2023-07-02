import React from 'react'
import CategoryCard from './CategoryCard'

export const Categories = () => {
    return (
        <div className="flex gap-4 justify-center" >
            {[1, 2, 3, 4].map(e => <CategoryCard />)}
        </div>
    )
}
