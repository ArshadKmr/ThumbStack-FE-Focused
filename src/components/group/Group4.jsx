import { FaArrowRight } from "react-icons/fa6"

const Group4 = () => {
    return (
        <div className="mx-5 md:mx-14 lg:mx-20 py-7 mb-16 text-[#2A2523]">
            <div className="flex justify-between">
                <div>
                    <p className="font-inter font-normal xl:font-medium text-xs lg:text-sm xl:text-base leading-[14.52px] xl:leading-[35.4px] my-2">Fabien Charuau </p>
                    <p className="font-inter font-normal xl:font-medium text-xs lg:text-sm xl:text-base leading-[14.52px] xl:leading-[35.4px] my-2"> Les Bouchons</p>
                </div>
                <div className="hidden md:flex">
                    <p className="font-inter font-normal xl:font-medium text-xs lg:text-sm xl:text-base leading-[14.52px] xl:leading-[35.4px]">Featured in Time magazine, Nov 2021</p>
                </div>
                <div className="hidden md:flex gap-3 items-center md:items-start">
                    <p className="font-inter font-normal xl:font-medium text-xs lg:text-sm xl:text-base leading-[14.52px] xl:leading-[35.4px]">view project</p>
                    <FaArrowRight color="#2A2523" />
                </div>
            </div>

            <div className="flex justify-between items-center ">
                <div className="flex gap-3 my-3 border">
                    <img src="/images/bannerGroupImage.png" className="w-[50px] sm:w-16 md:w-20 lg:w-[60px] rounded " alt="" />
                    <img src="/images/bannerGroupImage2.png" className="w-[50px] sm:w-16 md:w-20 lg:w-[60px] rounded" alt="" />
                    <img src="/images/bannerGroupImage3.png" className="w-[50px] sm:w-16 md:w-20 lg:w-[60px] rounded  " alt="" />
                </div>
                <div className=" flex md:hidden gap-3 items-center md:items-start">
                    <p className="font-inter font-medium text-sm leading-[16.94px]">view project</p>
                    <FaArrowRight color="#2A2523" />
                </div>
            </div>
        </div>
    )
}

export default Group4