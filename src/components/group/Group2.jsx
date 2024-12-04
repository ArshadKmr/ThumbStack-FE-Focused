import { FaArrowRight } from "react-icons/fa6";
const Group2 = () => {
    return (
        <div className="bg-[#FFFEF2]">
            <div className="mx-5 md:mx-14 lg:mx-20 py-7 ">
                <div className="flex text-[#2A2523] justify-between">
                    <div>
                        <p className="font-inter text-xs leading-[14.52px] mb-2">Alenteho by Isprava, Goa. Interiors</p>
                        <p className="font-inter text-xs leading-[14.52px]">FADD Studio Home vIlla</p>
                        <div className="flex gap-3 my-3">
                            <img src="/images/bannerGroupImage.png" className="w-[50px] sm:w-16 md:w-20 lg:w-[60px] rounded " alt="" />
                            <img src="/images/bannerGroupImage2.png" className="w-[50px] sm:w-16 md:w-20 lg:w-[60px] rounded" alt="" />
                            <img src="/images/bannerGroupImage3.png" className="w-[50px] sm:w-16 md:w-20 lg:w-[60px] rounded  " alt="" />
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <p>Featured in Vogue magazine, Feb 2023</p>
                    </div>
                    <div className="flex gap-3 items-center md:items-start mt-8 md:mt-1">
                        <p className="font-inter font-medium text-sm leading-[16.94px]">view project</p>
                        <FaArrowRight color="#2A2523" />
                    </div>
                </div>
                <div className="font-gloock mt-10 font-normal text-[33px] leading-10 text-[#304941] md:p-10 md:text-center md:text-5xl lg:text-6xl 2xl:text-8xl">We blend computer-aided design with craftsmanship and the end result is a tailor-made custom tile which will last for generations.
                    Already 100 years and counting...
                </div>
                <div className="mb-20 mt-10">
                    <img src="/images/group2Image.png" alt="" className="mx-auto" />
                </div>
                <div className="hidden md:flex justify-between my-5">
                    <p className="font-inter font-medium text-sm 2xl:text-base leading-[35.4px]">4899 projects</p>
                    <p className="font-inter font-medium text-sm 2xl:text-base leading-[35.4px]">+3 million tiles placed</p>
                    <p className="font-inter font-medium text-sm 2xl:text-base leading-[35.4px]">100 years, 7 months, 6 days, 12 hours and 13 minutes</p>
                </div>
            </div >
        </div>
    )
}

export default Group2