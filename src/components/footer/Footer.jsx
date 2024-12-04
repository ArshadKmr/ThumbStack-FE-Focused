
const Footer = () => {
    const colors = [
        '#F0E7DC', '#FFFCF3', '#EED6CA', '#F4C090', '#D79677',
        '#F7B960', '#B88276', '#96796E', '#E29792', '#E18E8C',
        '#E59C8D', '#AC615B', '#9A6362', '#544546', '#BAA489',
        '#92A997', '#76786D', '#62846B', '#63796D', '#9BC1A6',
        '#77BAE5', '#7DA3B0', '#3E5984', '#424D59', '#AFA9AA',
        '#96918E', '#535353', '#F1EBED', '#414047'
    ];

    return (
        <div>
            <div className='h-4 md:h-[352px] relative flex'>
                {colors.map((item, index) => (
                    <div
                        key={index}
                        className={`flex-1 h-full bg-[${item}]`} style={{ width: `${100 / 29}%` ,backgroundColor:`${item}`}} // Adjust width dynamically
                    >
                    </div>
                ))}
                <div className="hidden md:flex absolute bg-[#2A2523] bottom-0 lg:left-20">
                    <img src="/images/icon.png" className="p-3" alt="" />
                </div>
            </div>
            <div className="flex md:hidden mx-3 mt-16">
                <img src="/images/icon2.png" className="p-3" alt="" />
            </div>
            <div className="mx-5 md:mx-20 my-10 flex flex-col md:flex-row justify-between">
                <div>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">ABOUT US</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">HISTORY</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">MANAGEMENT</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">QUALITY POLICIES</p>
                </div>
                <div>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">CORPORATE VIDEOS</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">SITEMAP</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">ALL COLLECTIONS</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">MANUFACTURING PROCESS</p>
                </div>
                <div>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">MAINTENANCE</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">COLOR CHART</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">FAQ</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">ORDER SAMPLE</p>
                </div>
                <div>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">FLOOR DESIGN</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">NEW TILE DESIGN</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">CIVIL CONTRACTING</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">MISSION AND VISION</p>
                </div>
                <div>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">VALUES & PHILOSOPHY</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">PRESS AND MEDIA</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">EVENTS AND PROMOTIONS</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">CAREERS</p>
                </div>
                <div>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">AWARDS</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">CLIENT LIST</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">TESTIMONIAL VIDEOS</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">CONTACT US</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">DOWNLOAD</p>
                    <p className="font-inter font-medium text-xs lg:text-sm 2xl:text-base leading-6">RESOURCES</p>
                </div>
            </div>
            <div className="mx-5 md:mx-20 my-10">
                <p className="font-inter font-normal text-xs lg:text-sm 2xl:text-base leading-[25.6px]">Copyright - Bharat Floorings and Tiles © 2024 All images and text are copyrighted unless otherwise specified.</p>
            </div>
        </div>
    )
}

export default Footer