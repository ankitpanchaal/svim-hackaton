import Header from '@/components/Header'
import React from 'react'

const page = () => {
    return (
        <div className="pt-12 max-w-[1200px] " >
            <Header title={"About"} />

            <p className='justify-center px-3 mt-4 lg:px-32'>"Welcome to our website! We are dedicated to providing you with the best online experience. Whether you're looking for information, products, or services, we've got you covered. Our team of experts is passionate about delivering top-notch solutions tailored to your needs. With our user-friendly interface and intuitive navigation, you'll have no trouble finding what you're looking for. Explore our wide range of offerings and discover how we can help you achieve your goals. Join our community of satisfied customers and embark on a seamless online journey with us. Start exploring today!"</p>
        </div>
    )
}

export default page