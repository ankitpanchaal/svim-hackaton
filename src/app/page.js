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
        <Categories />
        <Header title={'home'} />
        <Products />
        <ProductCard />
      </div>
    </div>
  )
}

export default page