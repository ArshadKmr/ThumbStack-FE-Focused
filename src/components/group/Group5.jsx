import { FaArrowRight } from "react-icons/fa6"

const Group5 = () => {
    return (
        <div className=" top-0 z-50 relative">
            <img src="/images/bigImage.png" className="hidden md:flex h-screen w-screen " alt="" />
            <img src="/images/bigImage2.png" alt="" className="flex md:hidden w-full" />
            <div className="flex items-center gap-3 absolute bottom-5 left-3 md:bottom-10 md:left-7 lg:bottom-12 lg:left-10 xl:bottom-15 xl:left-13  text-[#FFFEF2]">
                <p className="font-gloock font-medium text-[40px] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text[80px] xl:leading-[80px] leading-10">BFT Home</p>
                <FaArrowRight className="text-[#FFFEF2]" />
            </div>
        </div>
    )
}

export default Group5