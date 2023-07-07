import Header from '@/components/Header'
import Products from '@/components/Products'
import React from 'react'

const page = () => {
    return (
        <div className="pt-14 mb-10" >
            <Header title="All Products" />

            <div className="mt-4">
                <Products />
            </div>
        </div>
    )
}

export default page