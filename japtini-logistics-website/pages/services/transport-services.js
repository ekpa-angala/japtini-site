import ButtonMaker from "../../components/ButtonMaker"
import { useEffect } from "react"
import { goods, transport } from "../../components/HomeSliderPages"
import ImageHolder from "../../components/ImageHolder"

export default function Transport({ setBg, transportActive, setTransportActive, picChanger, isContactForm, openForm }) {

    useEffect(() => {
        setBg("/goods-large.png")
        let setPics = setInterval(() => {
            picChanger(transportActive, transport, setTransportActive)
        }, 10000)

        return (() => {
            clearInterval(setPics)
        })
    }, [transportActive])
    return (
        <div className={`${isContactForm ? "blur-sm" : "blur-none"} w-[100%]`}>
            <div className="flex flex-col relative lg:h-[850px] xl:h-[900px] bg-none mt-[-400px] h-[400px] lg:mt-[-850px] xl:mt-[-900px]">
                <div className='flex flex-col mt-[80px]  md:mt-[250px] w-fit ml-[20px] md:ml-[112px]'>
                    <section className='flex items-center md:mt-[-300px] lg:mt-0 lg w-full'>
                        <h2 className='font-konreg font-[700] text-[white] text-[50px] md:text-[72px]'>Transport Services</h2>
                    </section>
                    <section className="flex text-white font-konregular text-[16px] font-[400]">
                        <section className="flex text-white font-konregular items-center text-[16px] font-[400]">
                            Home
                            <div className="w-[10px] ml-[5px] h-[8px] relative">
                                <ImageHolder src="/right-white.png" />
                            </div>
                            Services
                            <div className="w-[10px] ml-[5px] h-[8px] relative">
                                <ImageHolder src="/right-white.png" />
                            </div>
                            Transport Services
                        </section>
                    </section>
                    <div className="mt-[32px]">
                        <ButtonMaker text="Get on Board" command={openForm} />
                    </div>
                </div>
            </div>
            <div className="min-h-[500px] md:h-[900px] lg:h-[900px] bg-[white] flex flex-col relative">
                <div className="w-[282px] hidden lg:flex h-[282px] right-[0] top-[250px] absolute bg-[#F7941D] h-[350px]"></div>
                <div className=" min-h-[376px] flex flex-col">
                    <div className="flex mt-[60px] md:mt-[142px]">
                        <div className="bg-[#F7941D] w-[125px] h-[3px]"></div>
                        <h2 className="font-interegular mt-[-20px] ml-[16px] text-[28px] font-[700]">Transporters</h2>
                    </div>
                    <h2 className=" md:ml-[96px]  md:w-[599px] leading-[68px] text-[black] text-[54px] font-[700] font-konreg">
                        <span className="text-[#F7941D]">Transporters<br></br> </span> Connected
                    </h2>
                    <div className="flex relative flex-col xl:w-[90%] lg:w-[85%] lg:mt-[46px] lg:ml-[90px] md:flex-row md:h-fit lg:h-[400px] h-[545px] pr-[2px] mt-[10px]">
                        <div className="w-[282px] hidden lg:flex h-[282px] lg:right-[110px] xl:right-[270px] lg:bottom-[-60px] xl:bottom-[-130px] absolute bg-[#F7941D] h-[350px]"></div>

                        <div className="flex flex-col justify-between md:w-full lg:w-full xl:mt-[20px] lg:ml-0 md:flex-row md:h-fit lg:min-h-[400px] h-[545px] pr-[2px] mt-[10px]">
                            <div className="flex flex-col p-[10px] bg-white xl:h-[450px] md:w-[50%] w-full md:h-[400px] h-[330px] lg:ml-0 relative">
                                <div className="flex grow">
                                    <div className="h-full bg-[#F7941D] w-[4px] rounded-[2px]"></div>
                                    <div className="flex flex-col ml-[10px] xl:ml-[30px] justify-between">
                                        <div className="font-interegular bg-white text-[#777777] font-[500] text-[18px] md:text-[18px] leading-[24px]">
                                            {transport[transportActive].text}
                                        </div>
                                        <ButtonMaker text="Book a Truck" buttonType={2} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[23%] pr-[5px]">
                                <div style={{ backgroundImage: `url(${transport[transportActive].sub})` }} className="hidden lg:flex bg-center xl:h-[350px] bg-cover md:w-[50%] lg:w-[100%] w-full lg:h-[300px] lg:ml-0 relative">
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(${transport[transportActive].urlOne})` }} className=" bg-center xl:h-[450px] bg-cover md:w-[50%] lg:w-[35%] w-full md:h-[400px] h-[250px] lg:ml-0 relative">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 