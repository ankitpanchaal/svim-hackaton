import Header from '@/components/Header'
import React from 'react'

const page = () => {
    return (
        <div className="pt-12 max-w-[1200px] " >
            <Header title={"About"} />

            <img src="https://www.ugaoo.com/cdn/shop/files/seeds_d1444f50-6be6-4575-8256-914cd5317320.png?v=1679334092"

                className="w-96 h-40 object-cover flex m-auto mt-3"
                alt="" />

            <p className='justify-center px-3 mt-4 lg:px-32'>"Welcome to our website! We are dedicated to providing you with the best online experience. Whether you're looking for information, products, or services, we've got you covered. Our team of experts is passionate about delivering top-notch solutions tailored to your needs. With our user-friendly interface and intuitive navigation, you'll have no trouble finding what you're looking for. Explore our wide range of offerings and discover how we can help you achieve your goals. Join our community of satisfied customers and embark on a seamless online journey with us. Start exploring today!"</p>
        </div>
    )
}

export default page