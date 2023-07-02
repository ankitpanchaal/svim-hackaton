import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import React from 'react'

const page = () => {
  return (
    <div>

      <div className="pt-12">
        <Hero />
        <Header title={'home'} />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default page