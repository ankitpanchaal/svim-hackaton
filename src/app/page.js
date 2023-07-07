import ProductCard2 from '@/components/ProductCard2'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import React from 'react'
import Products from '@/components/Products'
import CategoryCard from '@/components/CategoryCard'
import { Categories } from '@/components/Categories'

const page = () => {
  return (
    <div>

      <div className="pt-10">
        <Hero />

        <div className="mt-2 mb-3">
          <Header title={"Categories"} />
        </div>
        <Categories />

        <div className="mt-8 mb-3">
          <Header title={"Products"} />
        </div>
        <Products />

        <div className="mt-10 mb-3" >
          <Header title={"Highlights"} />
        </div>
        <ProductCard />
        <ProductCard title={"What are you looking for?"} img="https://www.ugaoo.com/cdn/shop/files/PRODUCTRANGE.jpg?v=1686403597&width=2200" />
      </div>
    </div>
  )
}

export default page