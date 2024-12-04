import { FaArrowRight } from "react-icons/fa"

const WorkBench = () => {
    return (
        <div className='bg-[#EAEAEA] text-[#2A2523] pt-10 md:pb-10'>
            <div className='md:py-10 md:mx-10 py-5 mx-5'>
                <h1 className="flex md:hidden font-gloock text-[40px] leading-10">Workshop</h1>
                <h1 className=" hidden md:flex font-gloock text-5xl justify-center mx-auto lg:text-6xl xl:text-7xl 2xl:text-8xl leading-10">Workbench</h1>
                <p className=" my-5 md:mx-20 lg:mx-28 flex justify-center font-inter font-normal text-center text-xl leading-7">We encourage our customers to look at our designer tile collections, play with the colours and patterns, and come up with unique handmade tile selections.                </p>
                <p className="md:hidden font-inter font-medium text-sm leading-[16.94px] underline">Change tile</p>
            </div>
            <div className="md:hidden mx-2 flex justify-between">
                <img src="/images/workBenchTile.png" className="w-1/4" alt="" />
                <div className="flex items-center gap-2 ">
                    <p>Continue on Workshop</p>
                    <FaArrowRight color="black" />
                </div>
            </div>
            <img src="/images/workBenchImage.png" className="md:hidden w-full" alt="" />
            <div className="hidden  md:py-10 md:mx-10 py-5 mx-5 md:flex">
                <div className="w-1/2">
                    <img src="/images/workBenchMain.png" alt="" />
                </div>
                <div className=" w-1/2 px-5 lg:py-10 ">
                    <div className="flex md:px-5 lg:py-5">
                        <div className="w-1/2">
                            <p className="w-full font-inter font-medium md:text-xs xl:text-sm 2xl:text-base leading-[35.4px]"> Anulom (Type D)</p>
                        </div>
                        <div className="w-1/2">
                            <p className="font-inter font-normal md:text-xs xl:text-sm 2xl:text-base leading-[25.6px]"> Anulom is our stunning hexagonal rhythm 3D Tile Collection, where the artistry of design meets the allure of dimensionality, creating a mesmerizing visual experience for your spaces.</p>
                        </div>
                    </div>
                    <div className="p-5">
                        <img src="/images/workBenchTile.png" className="md:w-[300px] lg:w-[380px] xl:w-[475px] 2xl:w-[572px]" alt="" />
                    </div>
                    <div className="flex p-5">
                        <div className="w-1/2">
                            <p className="w-full font-inter font-medium md:text-xs xl:text-sm 2xl:text-base leading-[35.4px]">Size <br />
                                20 cm x 20 cm</p>
                        </div>
                        <div className="w-1/2">
                            <p className="w-full font-inter font-medium md:text-xs xl:text-sm 2xl:text-base leading-[35.4px]">Thickness <br />
                                Flooring - 23mm - 25mm <br />
                                Cladding - 16mm - 18mm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex md:mx-10 justify-between mx-5 pb-10">
                <div className="flex">
                    <div>
                        <div className="bg-[#236A9A] md:w-8 lg:w-10 xl:w-14 2xl:w-[70px] md:h-3 lg:h-4 xl:h-[18px]"></div>
                    </div>
                    <div>
                        <div className="bg-[#DF998F] md:w-8 lg:w-10 xl:w-14 2xl:w-[70px] md:h-3 lg:h-4 xl:h-[18px]"></div>
                    </div>
                    <div>
                        <div className="bg-[#5BA9C9] md:w-8 lg:w-10 xl:w-14 2xl:w-[70px] md:h-3 lg:h-4 xl:h-[18px]"></div>
                    </div>
                    <div>
                        <div className="bg-[#FFFFFF] md:w-8 lg:w-10 xl:w-14 2xl:w-[70px] md:h-3 lg:h-4 xl:h-[18px]"></div>
                    </div>
                    <div>
                        <div className="bg-[#B64357] md:w-8 lg:w-10 xl:w-14 2xl:w-[70px] md:h-3 lg:h-4 xl:h-[18px]"></div>
                    </div>
                </div>
                <div className="w-full text-end">
                    <p className="font-inter font-medium md:text-xs lg:text-sm xl:text-base leading-[19.36px]">Change tile </p>
                </div>
                <div className=" flex w-full justify-end gap-2 items-center">
                    <p className="font-inter font-medium md:text-xs lg:text-sm xl:text-base leading-[19.36px]">Continue in Workshop</p>
                    <FaArrowRight />
                </div>
            </div>
        </div>
    )
}

export default WorkBench