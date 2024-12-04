
const Sample = () => {
    const steps = [
        { title: "Blending", content: "Blending content here", image: "/images/scrollImage1.png" },
        { title: "Molding", content: "Molding content here", image: "/images/scrollImage2.png" },
        { title: "Compressing", content: "Compressing content here", image: "/images/scrollImage3.png" },
        { title: "Hardening", content: "Hardening content here", image: "/images/scrollImage4.png" },
        { title: "Hydrolysis", content: "Hydrolysis content here", image: "/images/scrollImage5.png" },
        { title: "Drying", content: "Drying content here", image: "/images/scrollImage6.png" },
    ];

    return (

        <div className="overflow-x-scroll bg-[#2A2523] relative">
            <div className="mx-5 relative w-[1800px] h-80 pb-10 space-y-5 overflow-y-scroll overflow-x-scroll">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`flex w-[75%] gap-20 pb-20 bg-[#2A2523] sticky top-0 z-${steps.length - index
                            }`}
                        style={{
                            left: `${90 * index}px`,
                        }}
                    >
                        <div className="w-1/2 border-t border-[#8FDEAA] relative">
                            <div className="absolute w-[22.25%] border-2 border-[#8FDEAA]"></div>
                            <div className="absolute top-10 text-[#8FDEAA]">
                                <p className="font-inter font-medium text-[30px] leading-[42px]">
                                    {index + 1}
                                </p>
                                <p className="font-inter font-normal md:text-xs xl:text-sm 2xl:text-base leading-[25.6px]">
                                    {step.title}
                                </p>
                            </div>
                            <div className="absolute top-[85px] sm:left-24 md:left-28 lg:left-32 xl:left-36 2xl:left-40 text-[#F6F5EC]">
                                <p className="font-inter font-normal xl:text-lg lg:text-base md:text-sm text-xs 2xl:text-xl 2xl:leading-8">
                                    {step.content}
                                </p>
                            </div>
                        </div>
                        <div>
                            <img
                                src={step.image}
                                className="2xl:w-[705px] xl:w-[600px] lg:w-[510px] md:w-[440px] w-[350px]"
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sample