
const Introduction = () => {
    return (
        <div className="mx-5 sm:mx-10 mb-20 lg:mx-20 mt-10 text-[#2A2523] flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
                <p className="hidden lg:flex font-inter font-medium text-[16px] leading-[24px] md:leading-[35.4px] mb-4 lg:mb-20">
                    Who we are
                </p>
                <h1 className="font-gloock font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl leading-[32px] sm:leading-[42px] lg:leading-[70px] 2xl:leading-[100px] my-6 lg:my-10">
                    Bharat  Flooring <br /> and Tiles
                </h1>
                <p className="font-inter font-medium text-lg sm:text-lg xl:text-2xl leading-6 sm:leading-[30px] lg:leading-[32px] mb-6 lg:mb-10">
                    For over a century, Bharat Floorings & Tiles has
                    <br />
                    been the epitome of quality in handmade tile <br />
                    manufacturers in India.
                </p>
                <p className="font-inter font-normal text-sm lg:text-[16px] 2xl:text-lg leading-5 md:leading-6 lg:leading-7">
                    Our dedicated commitment to innovation ensures you&apos;re choosing <br />
                    the best handcrafted cement tiles in the market. Heritage buildings <br />
                    and prestigious locations across the country boast Bharat Floorings <br />
                    & Tiles that have maintained their original charm despite decades <br />
                    of heavy use - a testament to our quality, durability and handmade <br />
                    tiles texture.
                </p>
            </div>
            <div className="lg:w-1/2 flex flex-col items-center lg:items-end  mt-10 lg:mt-0  ">
                <p className="hidden lg:flex font-inter font-medium text-[16px] leading-[24px] md:leading-[35.4px] mb-4 lg:mb-20">
                    100 years old
                </p>
                <div className="relative md:pt-20 lg:pt-14 2xl:pt-0">
                    <img
                        src="/images/introductionImage.jpeg"
                        alt=""
                        className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[859px] h-auto bg-gradient-to-l from-[#171718E5]"
                    />
                    <div className="flex gap-5 items-center absolute bottom-6 left-8">
                        <img src="/images/play.png" alt="" />
                        <p className="font-inter font-medium xl:text-lg 2xl:text-xl leading-8 text-white">A Century year old technique which is still relevant</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction