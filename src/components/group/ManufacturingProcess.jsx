
const ManufacturingProcess = () => {
    const steps = [
        { title: "Blending", content: "The pigment composition is a mixture of high quality white Portland cement, marble powder and natural mineral colour pigments. The ingredients are blended together carefully over a period of 3-4 hours to produce the final colours.", image: "/images/scrollImage1.png" },
        { title: "Molding", content: "The colours are filled with hand into a metal mold. The metal mold, containing the desired pattern is handmade from specific design drawings. Handmade cement tiles are unique and are expected to have slight imperfections, which give them character and depth.", image: "/images/scrollImage2.png" },
        { title: "Compressing", content: "A cork in the form of a strong metal plate is applied at the top of the mold and the tile is pressed using a mechanical hydraulic press. The pressure applied is up to 1-ton per square inch, which produces a compact tile.", image: "/images/scrollImage3.png" },
        { title: "Hardening", content: "After pressing, the tiles are removed from the mold and placed on a rack until they harden enough to be moved into a tank of water.", image: "/images/scrollImage4.png" },
        { title: "Hydrolysis", content: "The tiles are cured in water for several days, and not touched, during which they undergo a hydrolysis process and harden into strong concrete.", image: "/images/scrollImage5.png" },
        { title: "Drying", content: "The tiles are cured in water for several days, and not touched, during which they undergo a hydrolysis process and harden into strong concrete.", image: "/images/scrollImage6.png" },
    ];
    return (
        <div className="bg-[#2A2523] relative pt-20 md:pt-10">
            <div className="mx-5 md:mx-14 lg:mx-20  text-[#F6F5EC]">
                <div className="hidden md:flex justify-between">
                    <p className="font-inter font-normal xl:font-medium text-xs lg:text-sm xl:text-base leading-[14.52px] xl:leading-[35.4px]">6 steps</p>
                    <p className="font-inter font-normal xl:font-medium text-xs lg:text-sm xl:text-base leading-[14.52px] xl:leading-[35.4px]">4 hours</p>
                    <p className="font-inter font-normal xl:font-medium text-xs lg:text-sm xl:text-base leading-[14.52px] xl:leading-[35.4px]">Handmade</p>
                </div>
                <div className="text-[#8FDEAA]  md:mt-20">
                    <h1 className="flex md:hidden font-gloock text-[40px] leading-10">Manufacturing <br />process</h1>
                    <h1 className=" hidden md:flex font-gloock text-5xl mx-auto lg:text-6xl xl:text-7xl 2xl:text-8xl leading-10">Manufacturing <br />process</h1>
                </div>
                <div className="flex flex-col md:flex-row md:gap-24">
                    <div className="my-10">
                        <p className="font-inter font-normal md:text-xs xl:text-sm 2xl:text-base leading-[25.6px]">Output is a beautiful tile that lasts forever.
                            Over the decades Bharat has laid some of the best-known floors in India’s landmark buildings: from palaces of Maharajas and Raj Bhavans to prominent residences, hotels, hospitals, clubs, offices, factories, co-operative housing societies, educational and religious institutions, airports, railways etc.</p>
                    </div>
                    <div className="my-10">
                        <p className="font-inter font-normal md:text-xs xl:text-sm 2xl:text-base leading-[25.6px]">Each step has to be done well
                            The best European technologies were brought and modified to create a unique product suited to Indian conditions. Recognising that a good floor is only achieved with a good product that is installed correctly and maintained properly, the company has sister companies which do high quality installation of all types of floorings, a range of civil work, floor maintenance and general cleaning.</p>
                    </div>
                </div>
            </div>
            <div className="relative md:hidden">
                <div className="flex flex-row overflow-x-scroll gap-6 px-10 md:px-8 pb-6">
                    {steps.map((product, index) => {
                        return (
                            <div
                                key={index}
                                className={`min-w-full sm:min-w-[56%] md:min-w-[48%] lg:min-w-[35%] xl:min-w-[28%]
                                    border-t border-[#8FDEAA]
                                    overflow-hidden transition-all duration-300`}>
                                <div className="border-t-2 border-[#8FDEAA] w-[25%]"></div>
                                <div className="pt-6">
                                    <div className="pb-10">
                                        <div className="text-[#8FDEAA] flex gap-10 items-center">
                                            <p className="font-inter font-medium text-[30px] leading-[42px]">{index + 1}</p>
                                            <h2 className={`font-inter text-base leading-[25.6px]`}>
                                                {product.title}
                                            </h2>
                                        </div>
                                        <div className="h-20">
                                            <p className="text-[#F6F5EC] font-inter text-[13px] leading-[20.8px] ">
                                                {product.content}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="my-10 h-[385px]">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="overflow-x-scroll w-full hidden md:flex">
                <div className="">
                    <div className=" mx-5 relative w-[1800px] h-80 mb-5  space-y-5 md:overflow-y-scroll overflow-x-scroll">
                        <div className="flex flex-col md:flex-row w-[75%] gap-20 pb-20 bg-[#2A2523] sticky top-0 z-0">
                            <div className="w-1/2 border-t border-[#8FDEAA] relative">
                                <div className="absolute w-[22.25%] border-2 border-[#8FDEAA]"></div>
                                <div className="flex flex-row md:flex-col absolute top-10 text-[#8FDEAA]">
                                    <p className="font-inter font-medium text-[30px] leading-[42px]">1</p>
                                    <p className="font-inter font-normal md:text-xs xl:text-sm 2xl:text-base leading-[25.6px]">Blending</p>
                                </div>
                                <div className="absolute top-[85px] sm:left-24 md:left-28 lg:left-32 xl:left-36 2xl:left-40 text-[#F6F5EC]">
                                    <p className="font-inter font-normal xl:text-lg lg:text-base md:text-sm text-xs 2xl:text-xl  2xl:leading-8">The pigment composition is a mixture of high quality white Portland cement, marble powder and natural mineral colour pigments. The ingredients are blended together carefully over a period of 3-4 hours to produce the final colours.</p>
                                </div>
                            </div>
                            <div>
                                <img src="/images/scrollImage1.png" className="2xl:w-[705px] xl:w-[600px] lg:w-[510px] md:w-[440px] w-[350px]" alt="" />
                            </div>
                        </div>
                        <div className="flex  left-[90px] w-[75%] bg-[#2A2523] gap-20 pb-20 sticky top-[1px] z-10">
                            <div className="w-1/2 border-t border-[#8FDEAA] relative">
                                <div className="absolute w-[22.25%] border-2 border-[#8FDEAA]"></div>
                                <div className=" absolute top-10 text-[#8FDEAA]">
                                    <p className="font-inter font-medium text-[30px] leading-[42px]">2</p>
                                    <p className="font-inter font-normal md:text-xs xl:text-sm 2xl:text-base leading-[25.6px]">Molding</p>
                                </div>
                                <div className=" absolute top-[85px] sm:left-24 md:left-28 lg:left-32 xl:left-36 2xl:left-40 text-[#F6F5EC]">
                                    <p className="font-inter font-normal xl:text-lg lg:text-base md:text-sm text-xs 2xl:text-xl  2xl:leading-8">The colours are filled with hand into a metal mold. The metal mold, containing the desired pattern is handmade from specific design drawings. Handmade cement tiles are unique and are expected to have slight imperfections, which give them character and depth.                            </p>
                                </div>
                            </div>
                            <div>
                                <img src="/images/scrollImage2.png" className="2xl:w-[705px] xl:w-[600px] lg:w-[510px] md:w-[440px] w-[350px]" alt="" />
                            </div>
                        </div>
                        <div className="flex  left-[180px] sticky bg-[#2A2523] top-[0px] w-[75%] gap-20 pb-20 z-20">
                            <div className="w-1/2 border-t border-[#8FDEAA] relative">
                                <div className="absolute w-[22.25%] border-2 border-[#8FDEAA]"></div>
                                <div className=" absolute top-10 text-[#8FDEAA]">
                                    <p className="font-inter font-medium text-[30px] leading-[42px]">3</p>
                                    <p className="font-inter font-normal md:text-xs xl:text-sm 2xl:text-base leading-[25.6px]">Compressing</p>
                                </div>
                                <div className=" absolute top-[85px] sm:left-24 md:left-28 lg:left-32 xl:left-36 2xl:left-40 text-[#F6F5EC]">
                                    <p className="font-inter font-normal xl:text-lg lg:text-base md:text-sm text-xs 2xl:text-xl  2xl:leading-8">A cork in the form of a strong metal plate is applied at the top of the mold and the tile is pressed using a mechanical hydraulic press. The pressure applied is up to 1-ton per square inch, which produces a compact tile.</p>
                                </div>
                            </div>
                            <div>
                                <img src="/images/scrollImage3.png" className="2xl:w-[705px] xl:w-[600px] lg:w-[510px] md:w-[440px] w-[350px]" alt="" />
                            </div>
                        </div>
                        <div className="flex sticky left-[270px] bg-[#2A2523] top-[0px] w-[75%] gap-20 pb-20 z-20">
                            <div className="w-1/2 border-t border-[#8FDEAA] relative">
                                <div className="absolute w-[22.25%] border-2 border-[#8FDEAA]"></div>
                                <div className=" absolute top-10 text-[#8FDEAA]">
                                    <p className="font-inter font-medium text-[30px] leading-[42px]">4</p>
                                    <p className="font-inter font-normal md:text-xs xl:text-sm 2xl:text-base leading-[25.6px]">Hardening</p>
                                </div>
                                <div className=" absolute top-[85px] sm:left-24 md:left-28 lg:left-32 xl:left-36 2xl:left-40 text-[#F6F5EC]">
                                    <p className="font-inter font-normal xl:text-lg lg:text-base md:text-sm text-xs 2xl:text-xl  2xl:leading-8">After pressing, the tiles are removed from the mold and placed on a rack until they harden enough to be moved into a tank of water.                            </p>
                                </div>
                            </div>
                            <div>
                                <img src="/images/scrollImage4.png" className="2xl:w-[705px] xl:w-[600px] lg:w-[510px] md:w-[440px] w-[350px]" alt="" />
                            </div>
                        </div>
                        <div className="flex sticky left-[360px] bg-[#2A2523] top-0 w-[75%] gap-20 pb-20 z-20">
                            <div className="w-1/2 border-t border-[#8FDEAA] relative">
                                <div className="absolute w-[22.25%] border-2 border-[#8FDEAA]"></div>
                                <div className=" absolute top-10 text-[#8FDEAA]">
                                    <p className="font-inter font-medium text-[30px] leading-[42px]">5</p>
                                    <p className="font-inter font-normal md:text-xs xl:text-sm 2xl:text-base leading-[25.6px]">Hydrolysis</p>
                                </div>
                                <div className=" absolute top-[85px] sm:left-24 md:left-28 lg:left-32 xl:left-36 2xl:left-40 text-[#F6F5EC]">
                                    <p className="font-inter font-normal xl:text-lg lg:text-base md:text-sm text-xs 2xl:text-xl  2xl:leading-8">The tiles are cured in water for several days, and not touched, during which they undergo a hydrolysis process and harden into strong concrete.</p>
                                </div>
                            </div>
                            <div>
                                <img src="/images/scrollImage5.png" className="2xl:w-[705px] xl:w-[600px] lg:w-[510px] md:w-[440px] w-[350px]" alt="" />
                            </div>
                        </div>
                        <div className="flex sticky left-[450px] bg-[#2A2523] top-0 w-[75%] gap-20 pb-20 z-20">
                            <div className="w-1/2 border-t border-[#8FDEAA] relative">
                                <div className="absolute w-[22.25%] border-2 border-[#8FDEAA]"></div>
                                <div className=" absolute top-10 text-[#8FDEAA]">
                                    <p className="font-inter font-medium text-[30px] leading-[42px]">6</p>
                                    <p className="font-inter font-normal md:text-xs xl:text-sm 2xl:text-base leading-[25.6px]">Drying</p>
                                </div>
                                <div className=" absolute top-[85px] sm:left-24 md:left-28 lg:left-32 xl:left-36 2xl:left-40 text-[#F6F5EC]">
                                    <p className="font-inter font-normal xl:text-lg lg:text-base md:text-sm text-xs 2xl:text-xl  2xl:leading-8">A cork in the form of a strong metal plate is applied at the top of the mold and the tile is pressed using a mechanical hydraulic press. The pressure applied is up to 1-ton per square inch, which produces a compact tile.</p>
                                </div>
                            </div>
                            <div>
                                <img src="/images/scrollImage6.png" className="2xl:w-[705px] xl:w-[600px] lg:w-[510px] md:w-[440px] w-[350px]" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManufacturingProcess