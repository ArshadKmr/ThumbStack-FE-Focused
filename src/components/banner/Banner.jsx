import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FiAlignJustify } from "react-icons/fi";
const Banner = () => {

    const [navState, setNavState] = useState(null)
    const [hoverImage, setHoverImage] = useState(null)

    const handleHome = () => {
        setNavState(null)
    }

    return (
        <>
            {!navState ? (
                <div className="relative h-[815px] bg-contain bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
                                    linear-gradient(180deg, rgba(27, 21, 22, 0.5) 0%, rgba(27, 21, 22, 0) 28.05%),
                                    url('/images/bannerImage.jpeg')`,
                        backgroundSize: "cover", // Ensure the image covers the container
                        backgroundPosition: "center", // Center the image
                    }}>
                    {/* Header */}
                    <div className="absolute top-0 w-full  flex justify-between items-center px-5 lg:px-16 h-[89.6px]">
                        <div className="md:w-1/3 ">
                            <div className=" lg:bg-[#2A2523] md:w-1/4 lg:w-1/5 xl:1/6 pt-2">
                                <img src="/images/icon.png" className=" p-4 pb-2 w-20 h-20" alt="Icon" />
                            </div>
                        </div>
                        <div className="md:hidden ">
                            <FiAlignJustify color="white" />
                        </div>
                        <div className=" hidden md:flex text-white w-2/3 justify-between font-inter font-semibold text-[16px] leading-[22.4px]">
                            <p onMouseEnter={() => setNavState('product')}>Products</p>
                            <p>Services</p>
                            <p onMouseEnter={() => setNavState('about')}>About</p>
                            <p>Inspiration</p>
                        </div>
                    </div>
                    <div className=" text-white lg:mx-20">
                        <div className=" absolute top-80 text-center md:text-start font-gloock font-normal w-full lg:w-3/4">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-[65px] 2xl:text-[87.91px] md:leading-10 xl:leading-[65px] 2xl:leading-[77.69px] ">100 years of</h2>
                            <h1 className="text-5xl flex justify-center md:justify-start sm:text-6xl md:text-8xl xl:text-[120px] 2xl:text-[142.85px] md:leading-[120px] xl:leading-[150px] 2xl:leading-[185.7px]">
                                <span className="word">Innovation</span>
                                <span className="word">Craftsmanship</span>
                                <span className="word">Excellence</span>
                            </h1>
                        </div>
                        <div className="absolute bottom-4 text-white">
                            <div className="hidden md:flex gap-3 mb-3">
                                <img src="/images/bannerGroupImage.png" className="w-12 sm:w-16 md:w-20 lg:w-[60px]  " alt="" />
                                <img src="/images/bannerGroupImage2.png" className="w-12 sm:w-16 md:w-20 lg:w-[60px]    " alt="" />
                                <img src="/images/bannerGroupImage3.png" className="w-12 sm:w-16 md:w-20 lg:w-[60px]   " alt="" />
                            </div>
                            <div className="flex flex-col md:flex-row items-center text-left md:justify-between mb-5 gap-4 font-inter font-medium text-[16px] lg:leading-[35.4px]">
                                {/* Left Content */}
                                <div className="text-left">
                                    <p>LUXOTEL, Art Gallery Goa</p>
                                    <p>Designed by Xyz, Firdaus Designer</p>
                                </div>

                            </div>
                            <div className="flex md:hidden gap-3 mb-3">
                                <img src="/images/bannerGroupImage.png" className="w-12 sm:w-16 md:w-20 lg:w-[60px]  " alt="" />
                                <img src="/images/bannerGroupImage2.png" className="w-12 sm:w-16 md:w-20 lg:w-[60px]    " alt="" />
                                <img src="/images/bannerGroupImage3.png" className="w-12 sm:w-16 md:w-20 lg:w-[60px]   " alt="" />
                                {/* Center Content */}
                                <p className="hidden md:flex text-left md:text-center">Featured in Vogue magazine, Feb 2023</p>

                                {/* Right Content */}
                                <div className="group flex items-center gap-2">
                                    <p className="cursor-pointer">View project</p>
                                    <FaArrowRight className="transition-transform transform group-hover:translate-x-2 duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="video-background relative text-[#FFFEF2] h-[620px] ">
                    <video
                        src="/videos/headerHoverBgVideo.mp4"
                        loop
                        muted
                        autoPlay
                        playsInline
                    ></video>
                    <div className="video-overlay bg-[#231F2080] bg-gradient-to-l from-[#231F20] h-[768px]"></div>
                    <div className="absolute top-0 w-full flex items-center px-16 h-[89.6px]">
                        <div className="w-1/3">
                            <div className="bg-[#2A2523] lg:w-1/5 xl:w-1/6 pt-3">
                                <img
                                    src="/images/icon.png"
                                    onClick={handleHome}
                                    className="p-4 pr-2 pb-2 w-20 h-20 hover:cursor-pointer"
                                    alt="Icon"
                                />
                            </div>
                        </div>
                        <div className="flex text-white w-2/3 justify-between font-inter font-semibold text-[16px] leading-[22.4px] relative">
                            <div className="absolute -bottom-[35px] w-[1200px] border-b border-white"></div>
                            {navState === "product" && (
                                <div className="absolute -bottom-[35px] w-[250px] border-b-4 border-white"></div>
                            )}
                            {navState === "service" && (
                                <div className="absolute -bottom-[35px] left-[252px] w-[250px] border-b-4 border-white"></div>
                            )}
                            {navState === "about" && (
                                <div className="absolute -bottom-[35px] left-[500px] w-[230px] border-b-4 border-white"></div>
                            )}
                            {navState === "inspiration" && (
                                <div className="absolute -bottom-[35px] left-[730px] w-[255px] border-b-4 border-white"></div>
                            )}
                            <p onMouseEnter={() => setNavState('product')}>
                                Products
                            </p>
                            <p onMouseEnter={() => setNavState('service')}>Services</p>
                            <p onMouseEnter={() => setNavState('about')}>About</p>
                            <p onMouseEnter={() => setNavState('inspiration')}>Inspiration</p>
                        </div>
                    </div>
                    {navState === "product" && (
                        <>
                            <div className="flex absolute top-32 w-full px-16">
                                <div className="w-1/3 ">
                                    {hoverImage === 'bft' && (
                                        <img src="/images/hoverImage.png" className="w-64 -mt-[128px] -ml-16" alt="" />
                                    )}
                                    {hoverImage === 'heritage' && (<div className="flex flex-col">
                                        <img src="/images/hoverImage1.jpeg" className="w-[254.5px] -mt-[129px] -ml-16" alt="" />
                                    </div>
                                    )}
                                </div>
                                <div className=" w-2/3 flex justify-between gap-5">
                                    <div>
                                        <h1 className="font-inter font-semibold text-xl leading-8 mb-5">DESIGNER TILES <sup className="font-medium text-sm leading-[28.8px]">7</sup></h1>
                                        <p onMouseEnter={() => setHoverImage('bft')} onMouseLeave={() => setHoverImage(null)} className="font-inter font-semibold text-[16px] leading-[33.6px]">BFT+DESIGNER <sup className="font-medium text-sm leading-[28.8px]">13</sup></p>
                                        <p onMouseEnter={() => setHoverImage('heritage')} onMouseLeave={() => setHoverImage(null)} className="font-inter font-semibold text-[16px] leading-[33.6px]">HERITAGE COLLECTION <sup className="font-medium text-sm leading-[28.8px]">8</sup></p>
                                        <p className="font-inter font-semibold text-[16px] leading-[33.6px]">CENTENARY RANGE <sup className="font-medium text-sm leading-[28.8px]">12</sup></p>
                                        <p className="font-inter font-semibold text-[16px] leading-[33.6px]">MADE IN INDIA <sup className="font-medium text-sm leading-[28.8px]">13</sup></p>
                                        <p className="font-inter font-semibold text-[16px] leading-[33.6px]">INTERNATIONAL RANGE <sup className="font-medium text-sm leading-[28.8px]">9</sup></p>
                                        <p className="font-inter font-semibold text-[16px] leading-[33.6px]">UNITINTA <sup className="font-medium text-sm leading-[28.8px]">4</sup></p>
                                        <p className="font-inter font-semibold text-[16px] leading-[33.6px]">BORDERS <sup className="font-medium text-sm leading-[28.8px]">4</sup></p>
                                        <p className="font-inter font-semibold text-[16px] leading-[33.6px]">OTHER SHAPES <sup className="font-medium text-sm leading-[28.8px]">4</sup></p>
                                    </div>
                                    <div>
                                        <h1 className="font-inter font-semibold text-xl leading-8 mb-5">TERRAZZO TILES</h1>
                                    </div>
                                    <div>
                                        <h1 className="font-inter font-semibold text-xl leading-8 mb-5">MICRO-CEMENT</h1>
                                    </div>
                                    <div>
                                        <h1 className="font-inter font-semibold text-xl leading-8 mb-5">EPOXY TERRAZZO</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full absolute bottom-40 -right-6">
                                <div className="w-1/3"></div>
                                <div className="w-[900px] border-b border-white"></div>
                            </div>
                            <div className="flex absolute bottom-12 w-full h-20 px-16">
                                <div className="w-1/3 "></div>
                                <div className="w-2/3 flex justify-between gap-5">
                                    <div>
                                        <h1 className="font-inter font-semibold text-xl leading-8 mb-5">WALL TILES <sup className="font-medium text-sm leading-[28.8px]">4</sup></h1>
                                        <p className="font-inter font-semibold text-[16px] leading-[33.6px]">ALFRESCO TERRAZZO <sup className="font-medium text-sm leading-[28.8px]">9</sup></p>
                                        <p className="font-inter font-semibold text-[16px] leading-[33.6px]">CHECKERED TILES <sup className="font-medium text-sm leading-[28.8px]">7</sup></p>
                                        <p className="font-inter font-semibold text-[16px] leading-[33.6px]">ANTI SLIP TILES <sup className="font-medium text-sm leading-[28.8px]">3</sup></p>
                                        <p className="font-inter font-semibold text-[16px] leading-[33.6px]">CEMENT STAMPS <sup className="font-medium text-sm leading-[28.8px]">4</sup></p>
                                    </div>
                                    <div>
                                        <h1 className="font-inter font-semibold text-xl leading-8 mb-5">OUTDOOR FLOORING</h1>
                                    </div>
                                    <div>
                                        <h1 className="font-inter font-semibold text-xl leading-8 mb-5">BFT SURFACES <sup className="font-medium text-sm leading-[28.8px]">2</sup></h1>
                                        <p className="font-inter font-semibold text-[16px] leading-[33.6px]">BFT SUBWAY TILES <sup className="font-medium text-sm leading-[28.8px]">11</sup></p>
                                        <p className="font-inter font-semibold text-[16px] leading-[33.6px]">WALLPAPERS <sup className="font-medium text-sm leading-[28.8px]">9</sup></p>
                                    </div>
                                    <div>
                                        <h1 className="font-inter font-semibold text-xl leading-8 mb-5">BFT HOME</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full absolute -bottom-28 -right-6">
                                <div className="w-1/3"></div>
                                <div className=" w-2/4 flex justify-between">
                                    <p className="font-inter font-medium text-[16px] leading-[35.4px]">19 products</p>
                                    <p className="font-inter font-medium text-[16px] leading-[35.4px]">30 colors</p>
                                    <p className="font-inter font-medium text-[16px] leading-[35.4px]">19 border combinations</p>
                                </div>
                            </div>
                        </>
                    )}
                    {navState === "about" && (
                        <>
                            <div className="flex absolute top-32 w-full h-20 px-16 ">
                                <div className="w-1/3 "></div>
                                <div className=" w-2/3 flex justify-between gap-5  relative">
                                    <div className="absolute right-40">
                                        <h1 className="font-inter font-semibold text-xl leading-8 mb-5">OUR COMPANY</h1>
                                        <h1 className="font-inter font-semibold text-xl leading-8 mb-5">CLIENTS </h1>
                                        <h1 className="font-inter font-semibold text-xl leading-8 mb-5">PRESS </h1>
                                        <h1 className="font-inter font-semibold text-xl leading-8 mb-5">EVENTS </h1>
                                        <h1 className="font-inter font-semibold text-xl leading-8 mb-5">RESOURCES </h1>
                                        <h1 className="font-inter font-semibold text-xl leading-8 mb-5">CAREERS </h1>
                                        <h1 className="font-inter font-semibold text-xl leading-8 mb-5">TESTIMONIALS </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="flex absolute bottom-0 w-full px-16">
                                <div className="w-1/3 "></div>
                                <div className=" w-2/3">
                                    <h1 className="font-inter font-normal text-xl leading-8">The Bharat Floorings Group, an ISO 9001:2015 Certified Company, boasts a century-long legacy as the foremost provider of top-tier cement floorings.</h1>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default Banner