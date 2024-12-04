import { useState } from "react"
import { FaArrowRight } from "react-icons/fa6"

const Products = () => {
    const [hoverProduct, setHoverProduct] = useState(null)
    const products = [
        {
            "image": "/images/product1.png",
            "name": "Designer",
        },
        {
            "image": "/images/product2.png",
            "name": "Terrazo",
        },
        {
            "image": "/images/product3.png",
            "name": "Epoxy Terrazo",
        },
        {
            "image": "/images/product4.png",
            "name": "Micro Cement",
        },
    ]
    return (
        <div className=" py-7 my-5 text-[#2A2523]">
            <div className="mx-5 md:mx-14 lg:mx-20">
                <div className="hidden md:flex justify-between mt-10 mb-24">
                    <p className="font-inter font-medium text-base leading-[35.4px]">69 products</p>
                    <p className="font-inter font-medium text-base leading-[35.4px]">30 colors</p>
                    <p className="font-inter font-medium text-base leading-[35.4px]">100 years</p>
                </div>
                <div className="md:flex ">
                    <div className=" md:w-2/5 ">
                        <h1 className="font-gloock font-normal text-[40px] leading-10 mb-5">Products</h1>
                    </div>
                    <div className=" md:w-3/5 md:flex gap-5 ">
                        <p className="md:w-2/3 font-inter font-normal md:text-xs xl:text-sm 2xl:text-base leading-[25.6px]">From exquisite handcrafted cement tiles that bring timeless beauty to your space, to elegant terrazzo floors that exude grandeur, our collection of decorative concrete, outdoor floors, micro cement overlays, wallpapers, bespoke products, and more, offers limitless design possibilities. Let your imagination soar as you discover the perfect flooring solution that transforms ordinary spaces into extraordinary works of art.</p>
                        <div className="md:w-1/3 ">
                            <div className="border border-black hidden md:flex  items-center gap-2 justify-center p-3">
                                <p className="font-inter font-medium md:text-xs xl:text-sm 2xl:text-base leading-[35.4px]">view all products</p>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <div className="flex flex-row overflow-x-scroll gap-6 px-10 md:px-8 pb-6">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoverProduct(product.name)}
                            onMouseLeave={() => setHoverProduct(null)}
                            className={`min-w-full sm:min-w-[56%] md:min-w-[48%] lg:min-w-[35%] xl:min-w-[28%]
                overflow-hidden transition-all duration-500 ease-in-out`}
                        >
                            <div className="relative">
                                {/* Product Image */}
                                <div
                                    className="bg-gray-100 mb-6 transition-all duration-500 ease-in-out transform group-hover:scale-105"
                                >
                                    <img
                                        src={hoverProduct === product.name ? '/images/productHoverImage.png' : product.image}
                                        alt={product.name}
                                        className="w-full object-contain opacity-100 transition-opacity duration-500 ease-in-out"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="">
                                    <div className="flex gap-2 items-center px-5">
                                        <h2 className="font-bentonsans text-[26.6px] mb-2 leading-[42.57px]">
                                            {product.name}
                                        </h2>
                                        <FaArrowRight className="transition-transform duration-500 ease-in-out transform group-hover:translate-x-2" />
                                    </div>
                                    <div className="flex gap-10 px-5">
                                        <p className="font-inter font-medium text-[8.51px] leading-[10.3px]">18 designs</p>
                                        <p className="font-inter font-medium text-[8.51px] leading-[10.3px]">13 colors</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products