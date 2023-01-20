import { useEffect, useState } from "react"
import ButtonMaker from "../../components/ButtonMaker"
import ImageHolder from "../../components/ImageHolder"
import Hero from "../../components/Hero"

export default function Haulage({ setBg, haulageActive, isContactForm, setHaulageTab, haulageActivePic, setHaulagePic, haulageProcessPic, picSetter, setHaulageProcessPic, picChanger, openForm }) {
    const [sWidth, setSWidth] = useState()

    useEffect(() => {
        setHaulageProcessPic(0)
        const windowSize = () => {
            console.log(window.innerWidth)
            setSWidth(window.innerWidth)
        }
        windowSize()
        window.addEventListener('resize', windowSize)

        return () => {
            window.removeEventListener('resize', windowSize)
        }
    }, [])

    const haulageProcessPics = [
        {
            id: 1,
            url: "/haulage-process-one.png"
        },
        {
            id: 2,
            url: "/haulage-process-two.png"
        },
        {
            id: 3,
            url: "/haulage-process-three.png"
        },
    ]


    useEffect(() => {
        setBg('/haulage-large.png')
        let setPics = setInterval(() => {
            picChanger(haulageProcessPic, haulageProcessPics, setHaulageProcessPic)
        }, 10000)

        return (() => {
            clearInterval(setPics)
        })
    }, [haulageProcessPic])

    
    return (
        <div className={`${isContactForm ? "blur-sm" : "blur-none"} w-[100%]`}>
            <Hero title="Haulage" buttonText="Get a Truck" openForm={openForm} />
            <div className="h-fit py-[0.6px] md:py-0 md:h-[1376px] bg-[white] flex flex-col relative">
                <div className=" md:h-[376px] flex flex-col">
                    <div className="flex mt-[60px] md:mt-[142px]">
                        <div className="bg-[#F7941D] w-[125px] h-[3px]"></div>
                        <h2 className="font-interegular mt-[-20px] ml-[16px] text-[28px] font-[700]">Haulage</h2>
                    </div>
                    <h2 className=" md:ml-[96px]  md:w-[599px] leading-[68px] text-[#F7941D] text-[64px] font-[700] font-konreg">
                        <span className="text-black">Boring is</span> our mission
                    </h2>
                </div>
                <div className="flex mt-[10px] md:mt-0 flex-col grow bg-[#F7F7F7] flex pb-[5px]">
                    <ul className="mt-[64px] lg:w-[500px] xl:w-[539px] md:ml-[96px] h-[57px] flex">
                        <li onClick={() => { setHaulageTab("problem") }} className={`${haulageActive == "problem" ? "border-b text-black font-[700]" : "border-none text-[#777777] font-[600]"} cursor-pointer border-[#F7941D] border-b-[3px] font-interegular text-[20px] leading-[16px] flex items-center justify-center md:justify-start w-[50%]`}>
                            The Problem
                        </li>
                        <li onClick={() => { setHaulageTab("solution") }} className={`${haulageActive == "solution" ? "border-b text-black font-[700]" : "border-none text-[#777777] font-[600]"} cursor-pointer border-[#F7941D] border-b-[3px] font-interegular text-[20px] leading-[16px] flex items-center justify-center md:justify-start w-[50%]`}>
                            Our Solutions
                        </li>
                    </ul>
                    <div className={`${haulageActive == "problem" ? "flex" : "hidden"} flex-col`}>
                        <div onMouseEnter={() => { setHaulagePic("/problem-one.png") }} className="flex group w-fit px-[2px] md:px-0 mt-[5px] md:mt-[64px]">
                            <div className="group-hover:bg-[#F7941D] md:ml-[96px] h-[81px] w-[4px]"></div>
                            <div className="md:w-[445px] h-[81px] group-hover:font-[500] font-[400] group-hover:text-[18px] md:text-[17px] leading-[27px] font-interegular ml-[5px]">
                                Drivers going rogue, ambushed cargoes, jackknifed trucks – the
                                hallmarks of logistics in Africa are all too familiar to goods
                                producers.
                            </div>
                        </div>
                        <div onMouseEnter={() => { setHaulagePic("/problem-two.png") }} className="flex group w-fit px-[2px] md:px-0 mt-[5px] md:mt-[64px]">
                            <div className="group-hover:bg-[#F7941D] md:ml-[96px] h-[81px] w-[4px]"></div>
                            <div className="md:w-[445px] min-h-[81px] group-hover:font-[500] font-[400] group-hover:text-[18px] md:text-[17px] leading-[27px] font-interegular ml-[5px]">
                                Worse, customers are mostly charged for the privilege.
                                Truck operators tend to demand anywhere between 30% and
                                100% of their delivery fee within a couple of hours of loading.
                            </div>
                        </div>
                        <div onMouseEnter={() => { setHaulagePic("/problem-three.png") }} className="flex group w-fit px-[2px] md:px-0 mt-[5px] md:mt-[64px]">
                            <div className="group-hover:bg-[#F7941D] md:ml-[96px] h-[81px] w-[4px]"></div>
                            <div className="md:w-[445px] min-h-[81px] group-hover:font-[500] font-[400] group-hover:text-[18px] md:text-[17px] leading-[27px] font-interegular ml-[5px]">
                                With no way of tracking progress, cargo owners can only hope
                                and pray their consignment reaches its destination, with few
                                transporters providing any form of receipt or waybills.
                            </div>
                        </div>


                    </div>

                    <div className={`${haulageActive == "solution" ? "flex" : "hidden"} flex-col`}>
                        <div onMouseEnter={() => { setHaulagePic("/solution-one.png") }} className="flex group w-fit px-[2px] md:px-0 mt-[5px] md:mt-[64px]">
                            <div className="group-hover:bg-[#F7941D] md:ml-[96px] h-[81px] w-[4px]"></div>
                            <div className="md:w-[445px] min-h-[81px] group-hover:font-[500] font-[400] group-hover:text-[18px] text-[17px] leading-[27px] font-interegular ml-[5px]">
                                By contrast, at Japtini Logistics, we provide secure transportation and warehousing
                                using digitised inventory management tools for seamless automated
                                distribution across Africa.
                            </div>
                        </div>
                        <div onMouseEnter={() => { setHaulagePic("/solution-two.png") }} className="flex group w-fit px-[2px] md:px-0 mt-[5px] md:mt-[64px]">
                            <div className="group-hover:bg-[#F7941D] md:ml-[96px] h-[81px] w-[4px]"></div>
                            <div className="md:w-[445px] min-h-[81px] group-hover:font-[500] font-[400] group-hover:text-[18px] text-[17px] leading-[27px] font-interegular ml-[5px]">
                                Our meticulous onboarding process protects goods producers
                                by verifying all drivers and requiring guarantors in the
                                event of cargo defaults.
                            </div>
                        </div>
                        <div onMouseEnter={() => { setHaulagePic("/solution-three.png") }} className="flex group w-fit px-[2px] md:px-0 mt-[5px] md:mt-[64px]">
                            <div className="group-hover:bg-[#F7941D] md:ml-[96px] h-[81px] w-[4px]"></div>
                            <div className="md:w-[445px] min-h-[81px] group-hover:font-[500] font-[400] group-hover:text-[18px] text-[17px] leading-[27px] font-interegular ml-[5px]">
                                Tracking devices embedded in the cargo provide realtime visibility
                                on journey progress.
                            </div>
                        </div>
                        <div onMouseEnter={() => { setHaulagePic("/solution-four.png") }} className="flex group w-fit px-[2px] md:px-0 mt-[5px] md:mt-[64px]">
                            <div className="group-hover:bg-[#F7941D] md:ml-[96px] h-[81px] w-[4px]"></div>
                            <div className="md:w-[445px] min-h-[81px] group-hover:font-[500] font-[400] group-hover:text-[18px] text-[17px] leading-[27px] font-interegular ml-[5px]">
                                We phone each driver at least twice a day to check for issues. If the response
                                isn't as expected, we escal`ate immediately to the truck owner, and prepare our
                                security firms to intercept the vehicle if necessary.
                            </div>
                        </div>
                        <div onMouseEnter={() => { setHaulagePic("/solution-five.png") }} className="flex group w-fit px-[2px] md:px-0 mt-[5px] md:mt-[64px]">
                            <div className="group-hover:bg-[#F7941D] md:ml-[96px] h-[81px] w-[4px]"></div>
                            <div className="md:w-[445px] min-h-[81px] group-hover:font-[500] font-[400] group-hover:text-[18px] text-[17px] leading-[27px] font-interegular ml-[5px]">
                                Waybills are provided within 4 days of successful delivery.
                                Only then do we request payment from the cargo owner.
                            </div>
                        </div>

                    </div>

                    <div className="ml-[96px] mt-[20px] md:mt-[100px]">
                        <ButtonMaker text="Book a Truck" buttonType={2} />
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${haulageActivePic})` }} className="lg:absolute h-[300px] md:h-[864px] bg-center bg-cover lg:w-[40%] lgxx:w-[50%] right-[0px] top-[261px]">

                </div>
            </div>
            <div className="lg:h-[1482px] bg-[#231F20] flex flex-col items-center pb-[1px]">
                <section className="lg:w-[1013px] lg:h-[144px] bg-white text-[33px] mt-[1px] md:mt-[125px] lg:text-[64px] text-black text-center font-konregular font-[700] lg:leading-[72px]">
                    Why Africa’s leading producers choose
                    <span className="text-[#F7941D]"> Japtini Logistics</span>
                </section>

                <section className="flex flex-col justify-between lg:justify-around bg-white lg:mt-[48px] lg:flex-row w-full">
                    <div className="flex justify-between lg:w-[50%] relative">
                        <div className="relative w-[160px] h-[90px]">
                            <ImageHolder src="/brand-five.png" />
                        </div>
                        <div className="relative w-[160px] h-[90px]">
                            <ImageHolder src="/brand-one.png" />
                        </div>
                        <div className="relative w-[160px] h-[90px]">
                            <ImageHolder src="/brand-three.png" />
                        </div>

                    </div>
                    <div className="flex lg:w-[50%] mt-[10px] lg:mt-0 justify-between">
                        <div className="relative w-[49%] h-[90px]">
                            <ImageHolder src="/brand-four.png" />
                        </div>
                        <div className="relative w-[49%] h-[90px]">
                        <ImageHolder src="/brand-two.png" />
                        </div>
                    </div>
                </section>

                <section className="lg:h-[464px] h-[800px] lg:mt-[124px] flex flex-col lg:flex-row mt-[1px] md:mt-0 lg:justify-between">
                    <div style={{ backgroundImage: `url('/haulage-mid-one.png')` }} className="h-[400px] w-full relative lg:w-[50%] bg-center bg-cover"></div>
                    <div className="h-full relative lg:w-[50%] flex flex-col lg:p-[20px] lgx:p-[40px]">
                        <div className="flex h-[77px]">
                            <div className="bg-[#F7941D] h-full w-[5px] rounded-[10px]"></div>
                            <div className="ml-[24px] w-[77px] h-full font-interegular font-[700] text-[64px] leading-[77px] text-[white]">01</div>
                        </div>
                        <div className="w-full h-[258px] font-interegular text-[18px] text-white font-[500] leading-[32px] mt-[32px]">
                            Goods producers know their cargoes are safe in our hands.
                            In past two years, thefts have become rampant as Covid has
                            disrupted supply chains and provided opportunities for drivers
                            seeking a quick buck from their cargo. Such thefts occur when
                            drivers are onboarded without proper checks. At Japtini, we
                            undertake full due diligence on all transporters and require
                            guarantors in case of incident. Comprehensive insurance cover
                            guarantees complete protection for our customers.
                        </div>
                    </div>
                </section>
                <section className="lg:h-[464px] h-[800px] flex flex-col lg:flex-row lg:justify-between">
                    <div className="h-full relative lg:w-[50%] flex flex-col lg:p-[20px] lgx:p-[40px]">
                        <div className="flex h-[77px]">
                            <div className="bg-[#F7941D] h-full w-[5px] rounded-[10px]"></div>
                            <div className="ml-[24px] w-[77px] h-full font-interegular font-[700] text-[64px] leading-[77px] text-[white]">02</div>
                        </div>
                        <div className="w-full h-[258px] font-interegular text-[18px] text-white font-[500] leading-[32px] mt-[32px]">
                            Our payment systems work in favour of both goods producers and transporters. ​We pay transporters at the outset of their journey to ensure smooth passage. Yet, we invoice goods producers only once their consignment has been successfully delivered, with proof through waybills. How do we do this? First, we have full confidence in our trusted drivers delivering on time. Second, as a capital intensive business, we have partnered with financial institutions and utilise credit facilities as needed.
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url('/haulage-mid-two.png')` }} className="h-[400px] w-full relative lg:w-[50%] bg-center bg-cover"></div>
                </section>
            </div>
            <div className="h-[910px]  md:h-[1571px] bg-[white] relative">
                <div className="absolute w-full hidden h-[95%] md:flex">
                    <div className="h-full lg:w-[60%] bg-[#F7F7F7] z-[10] lgxx:w-[50%]"></div>
                    <div className="h-[50%] lg:w-[20%] bg-[#F7F7F7]  lgxx:w-[25%]"></div>
                </div>
                <div className="z-[50] relative pb-[10px] md:pb-0 md:h-[376px] flex flex-col">
                    <div className="flex mt-[70px] md:mt-[142px]">
                        <div className="bg-[#F7941D] w-[125px] h-[3px]"></div>
                        <h2 className="font-interegular mt-[-20px] ml-[16px] text-[28px] font-[700]">Haulage</h2>
                    </div>
                    <h2 className=" md:ml-[96px] md:w-[599px] leading-[68px] text-[#F7941D] text-[60px] md:text-[64px] font-[700] font-konreg">
                        <span className="text-black">Here's how</span> it <br></br> works
                    </h2>
                </div>
                <div className="md:mt-[100px] h-[295px] md:pl-[90px] flex flex-col lg:w-[60%] lgxx:w-[50%] relative z-[50]">
                    <div className={`${((sWidth < 765) && (haulageProcessPic != 0)) ? "hidden" : ((sWidth < 765) && (haulageProcessPic == 0)) ? "flex" : "flex"} md:w-[500px]`}>
                        <div className="hidden md:flex flex flex-col items-center">
                            <div className={` w-[25px] h-[25px] md:w-[50px] md:h-[50px] flex justify-center items-center border border-[#F7941D] ${haulageProcessPic == 0 ? "bg-[#F7941D]" : ""} rounded-[50%] ${haulageProcessPic == 0 ? "text-white" : "text-[#F7941D]"} font-konregular font-[700] text-[14px] md:text-[24px] leading-[27px]`}>1</div>
                            <div className="h-[200px] w-[1px] mt-[8px] border-dotted border-l-[3px] border-[#777777]"></div>
                        </div>
                        <div className=" ml-[5px] md:ml-[19px] flex flex-col">
                            <h2 className="w-[177px] h-[27px] font-interegular text-[24px] font-[600] text-black">
                                Before Journey
                            </h2>
                            <ul className="flex flex-col mt-[22px]">
                                <li className="flex items-start">
                                    <div className="w-[10px] h-[10px] bg-[#F7941D] mt-[7px] rounded-[50%]"></div>
                                    <h2 className="font-interegular ml-[10px] w-[330px] h-[54px] font-[500] text-[16px]">
                                        I need to deliver 100 tons of soybeans
                                    </h2>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-[10px] h-[10px] bg-[#F7941D] mt-[7px] rounded-[50%]"></div>
                                    <h2 className="font-interegular ml-[10px] w-[330px] h-[54px] font-[500] text-[16px]">
                                        Japtini Logistics sources closest suitable trucks
                                        and prices the consignment
                                    </h2>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-[10px] h-[10px] bg-[#F7941D] mt-[7px] rounded-[50%]"></div>
                                    <h2 className="font-interegular ml-[10px] w-[330px] h-[54px] font-[500] text-[14px] md:text-[16px]">
                                        Soybean producer compares against
                                        its own fleet capacity & costs
                                    </h2>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-[10px] h-[10px] bg-[#F7941D] mt-[7px] rounded-[50%]"></div>
                                    <h2 className="font-interegular ml-[10px] w-[330px] h-[54px] font-[500] text-[16px]">
                                        Confirms order online
                                    </h2>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className={`${((sWidth < 765) && (haulageProcessPic != 1)) ? "hidden" : ((sWidth < 765) && (haulageProcessPic == 1)) ? "flex" : "flex"} md:w-[500px]`}>
                        <div className="hidden md:flex flex-col items-center">
                            <div className={`w-[25px] h-[25px] md:w-[50px] md:h-[50px] flex justify-center items-center border border-[#F7941D] ${haulageProcessPic == 1 ? "bg-[#F7941D]" : ""} rounded-[50%] ${haulageProcessPic == 1 ? "text-white" : "text-[#F7941D]"} font-konregular font-[700] text-[14px] md:text-[24px] leading-[27px]`}>2</div>
                            <div className="h-[145px] w-[1px] mt-[8px] border-dotted border-l-[3px] border-[#777777]"></div>
                        </div>
                        <div className=" ml-[5px] md:ml-[19px] flex flex-col">
                            <h2 className="w-[217px] h-[27px] font-interegular text-[24px] font-[600] text-black">
                                Journey Confirmed
                            </h2>
                            <ul className="flex flex-col mt-[22px]">
                                <li className="flex items-start">
                                    <div className="w-[10px] h-[10px] bg-[#F7941D] mt-[7px] rounded-[50%]"></div>
                                    <h2 className="font-interegular ml-[10px] w-[330px] h-[54px] font-[500] text-[13px] md:text-[16px]">
                                        Within 24 hours Japtini assigns verified truck drivers
                                    </h2>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-[10px] h-[10px] bg-[#F7941D] mt-[7px] rounded-[50%]"></div>
                                    <h2 className="font-interegular ml-[10px] w-[330px] h-[54px] font-[500] text-[16px]">
                                        Truck is loaded
                                    </h2>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-[10px] h-[10px] bg-[#F7941D] mt-[7px] rounded-[50%]"></div>
                                    <h2 className="font-interegular ml-[10px] w-[330px] h-[54px] font-[500] text-[16px]">
                                        Journey is tracked
                                    </h2>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className={`${((sWidth < 765) && (haulageProcessPic != 2)) ? "hidden" : ((sWidth < 765) && (haulageProcessPic == 2)) ? "flex" : "flex"} md:w-[500px]`}>
                        <div className="hidden md:flex flex-col items-center">
                            <div className={`w-[25px] h-[25px] md:w-[50px] md:h-[50px] flex justify-center items-center border border-[#F7941D] ${haulageProcessPic == 2 ? "bg-[#F7941D]" : ""} rounded-[50%] ${haulageProcessPic == 2 ? "text-white" : "text-[#F7941D]"} font-konregular font-[700] text-[14px] md:text-[24px] leading-[27px]`}>3</div>
                            <div className="h-[195px] w-[1px] mt-[8px] border-dotted border-l-[3px] border-[#777777]"></div>
                        </div>
                        <div className="ml-[5] md:ml-[19px] flex flex-col">
                            <h2 className="w-[217px] h-[27px] font-interegular text-[24px] font-[600] text-black">
                                Delivery & Payment
                            </h2>
                            <ul className="flex flex-col mt-[22px]">
                                <li className="flex items-start">
                                    <div className="w-[10px] h-[10px] bg-[#F7941D] mt-[7px] rounded-[50%]"></div>
                                    <h2 className="font-interegular ml-[10px] w-[330px] h-[54px] font-[500] text-[16px]">
                                        Delivery is tracked
                                    </h2>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-[10px] h-[10px] bg-[#F7941D] mt-[7px] rounded-[50%]"></div>
                                    <h2 className="font-interegular ml-[10px] w-[330px] h-[54px] font-[500] text-[16px]">
                                        Waybills sent
                                    </h2>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-[10px] h-[10px] bg-[#F7941D] mt-[7px] rounded-[50%]"></div>
                                    <h2 className="font-interegular ml-[10px] w-[330px] h-[54px] font-[500] text-[16px]">
                                        Invoice sent for payment
                                    </h2>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-[10px] h-[10px] bg-[#F7941D] mt-[7px] rounded-[50%]"></div>
                                    <h2 className="font-interegular ml-[10px] w-[330px] h-[54px] font-[500] text-[16px]">
                                        Truck is assigned onwards consignment
                                    </h2>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${haulageProcessPics[haulageProcessPic] ? haulageProcessPics[haulageProcessPic].url : haulageProcessPics[0].url})` }} className="md:absolute mt-[5px] h-[300px] md:h-[864px] bg-center bg-cover lg:w-[40%] lgxx:w-[50%] md:right-[0px] md:top-[482px]"></div>
            </div>
        </div>
    )
}