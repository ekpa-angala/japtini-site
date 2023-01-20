import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { approachPics, approachText, integrated } from "../components/HomeSliderPages";
import ImageHolder from "../components/ImageHolder";
import ButtonMaker from "../components/ButtonMaker";

export default function Approach({ setBg, haulageProcessPic, setHaulageProcessPic, transportActive, setTransportActive, picChanger, isContactForm, openForm }) {
    const [sWidth, setSWidth] = useState()
    const [approachMidText, setApproachMidText] = useState(0)

    function switchImage(command) {
        if (command == "forward") {
            setHaulageProcessPic(haulageProcessPic + 1)
            return
        }
        setHaulageProcessPic(haulageProcessPic - 1)
    }

    useEffect(() => {
        setHaulageProcessPic(0)
        const windowSize = () => {
            setSWidth(window.innerWidth)
        }
        windowSize()
        window.addEventListener('resize', windowSize)

        return () => {
            window.removeEventListener('resize', windowSize)
        }
    }, [])


    useEffect(() => {
        setBg('/approach.png')
        let setPics = setInterval(() => {
            picChanger(haulageProcessPic, approachPics, setHaulageProcessPic)
            picChanger(approachMidText, approachText, setApproachMidText)

        }, 10000)

        return (() => {
            clearInterval(setPics)
        })
    }, [haulageProcessPic])
    return (
        <div className={`${isContactForm ? "blur-sm" : "blur-none"} w-[100%]`}>
            <Hero title="Our Approach" buttonText="Get on Board" openForm={openForm} />
            <div className="h-[910px] lg:min-h-[1400px] bg-[#F7F7F7] relative">
                <div className="z-[50] relative pb-[10px] md:pb-0 md:h-[376px] flex flex-col">
                    <div className="flex mt-[70px]  md:mt-[142px]">
                        <div className="bg-[#F7941D] w-[125px] h-[3px]"></div>
                        <h2 className="font-interegular mt-[-20px] ml-[16px] text-[28px] font-[700]">Our Approach</h2>
                    </div>
                    <h2 className=" md:ml-[96px] md:w-[599px] leading-[68px] text-[#F7941D] text-[60px] md:text-[64px] font-[700] font-konreg">
                        Transparent<span className="text-black"> tracking from depot to</span> Delivery
                    </h2>
                </div>

                <div className="md:mt-[100px]">
                    {approachPics.map((item, index) => {
                        return (
                            <div className={`md:mt-[7px] h-[155px] md:pl-[90px] flex flex-col lg:w-[60%] lgxx:w-[50%] relative z-[50] ${((sWidth < 865) && (haulageProcessPic != index)) ? "hidden" : ((sWidth < 865) && (haulageProcessPic == index)) ? "flex" : "flex"} md:w-[500px]`}>
                                <div className={`${((sWidth < 865) && (haulageProcessPic != index)) ? "hidden" : ((sWidth < 865) && (haulageProcessPic == index)) ? "flex" : "flex"} md:w-[500px]`}>
                                    <div className="hidden md:flex flex flex-col items-center">
                                        <div className={` w-[25px] h-[25px] md:w-[50px] md:h-[50px] flex justify-center items-center border border-[#F7941D] ${haulageProcessPic == index ? "bg-[#F7941D]" : ""} rounded-[50%] ${haulageProcessPic == index ? "text-white" : "text-[#F7941D]"} font-konregular font-[700] text-[14px] md:text-[24px] leading-[27px]`}>{index + 1}</div>
                                        <div className={`h-[80px] w-[1px] mt-[8px] ${index == 5 ? "hidden" : "block"} border-dotted border-l-[3px] border-[#777777]`}></div>
                                    </div>
                                    <div className=" ml-[5px] md:ml-[19px] flex flex-col">
                                        <h2 className={`w-[400px] h-[150px] font-interegular text-[24px] ${haulageProcessPic == 0 ? "font-[700]" : "font-[600]"}  text-black`}>
                                            {item.text}
                                        </h2>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
                <div style={{ backgroundImage: `url(${approachPics[haulageProcessPic] ? approachPics[haulageProcessPic].url : approachPics[0].url})` }} className={`lg:absolute mt-[5px] h-[300px] md:h-[450px] lg:h-[864px] bg-center bg-cover lg:w-[40%] lgxx:w-[50%] md:right-[0px] md:top-[482px]`}>
                    <div className="absolute flex">
                        <button onClick={() => { switchImage("back") }} disabled={haulageProcessPic == 0} className="relative w-[60px] h-[60px] bg-white flex justify-center items-center">
                            <div className="relative w-[14px] h-[17px]">
                                <ImageHolder src="/left-orange.png" />
                            </div>
                        </button>
                        <button onClick={() => { switchImage("forward") }} disabled={haulageProcessPic == (approachPics.length - 1)} className="relative w-[60px] h-[60px] bg-[#F7941D] flex justify-center items-center">
                            <div className="relative w-[14px] h-[17px]">
                                <ImageHolder src="/right-white.png" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="min-h-[600px] lg:h-[700px] bg-white flex flex-col relative">
                <h2 className=" md:ml-[96px] mt-[80px] md:mt-[125px] md:w-[599px] leading-[68px] text-black text-[60px] md:text-[64px] font-[700] font-konreg">
                    Get on Board
                </h2>


                <ul className="flex h-[56px] border-b border-b-[2px] border-[#E6E6E6]  self-center w-[95%] xl:w-[99%] w-full">
                    <li onClick={()=>{setApproachMidText(0)}} className={`h-[57px] pl-[5px] w-[25%] border-b-[3px] ${approachMidText == 0 ? "border-[#F7941D]" : ""} font-interegular font-[600] text-[15px] leading-[16px] md:text-[20px] flex items-center cursor-pointer`}>Transport</li>
                    <li onClick={()=>{setApproachMidText(1)}} className={`h-[57px] pl-[5px] w-[25%] border-b-[3px] ${approachMidText == 1 ? "border-[#F7941D]" : ""} font-interegular font-[600] text-[15px] leading-[16px] md:text-[20px] flex items-center cursor-pointer`}>Goods Producers</li>
                    <li onClick={()=>{setApproachMidText(2)}} className={`h-[57px] pl-[5px] w-[25%] border-b-[3px] ${approachMidText == 2 ? "border-[#F7941D]" : ""} font-interegular font-[600] text-[15px] leading-[16px] md:text-[20px] flex items-center cursor-pointer`}>Investors</li>
                    <li onClick={()=>{setApproachMidText(3)}} className={`h-[57px] pl-[5px] w-[25%] border-b-[3px] ${approachMidText == 3 ? "border-[#F7941D]" : ""} font-interegular font-[600] text-[15px] leading-[16px] md:text-[20px] flex items-center cursor-pointer`}>Bank {'&'} Financial Institutions</li>
                </ul>
                <div className="flex flex-col justify-between md:w-full lg:w-full xl:mt-[20px] lg:ml-0 md:flex-row md:h-fit lg:min-h-[600px] h-[545px] pr-[2px] mt-[10px]">
                    <div className="flex flex-col p-[10px] bg-white xl:h-[450px] md:w-[50%] w-full h-[400px] lg:ml-0 relative">
                        <div className="flex grow">
                            <div className="h-full bg-[#F7941D] w-[4px] rounded-[2px]"></div>
                            <div className="flex  flex-col ml-[10px] xl:ml-[30px] justify-between">
                                <div className="font-interegular bg-white text-[#777777] font-[500] text-[18px] md:text-[18px] leading-[24px]">
                                    {approachText[approachMidText].text}
                                </div>
                                <div className="relative mt-auto">
                                    <ButtonMaker text="Get on Board" buttonType={2} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${approachText[approachMidText].url})` }} className=" bg-center xl:h-[450px] bg-cover md:w-[50%] lg:w-[35%] w-full md:h-[400px] h-[250px] lg:ml-0 relative">
                    </div>
                </div>

            </div>

            <div style={{background: "url('/approach-fade.png')"}} className="h-[900px] flex flex-col lg:mt-[20px] lg:flex-row justify-between">
                <div className="z-[50] pb-[10px] md:pb-0 mt-[70px] md:h-[376px] flex flex-col">
                    <div className="flex">
                        <div className="bg-[#F7941D] w-[125px] h-[3px]"></div>
                        <h2 className="font-interegular mt-[-20px] ml-[16px] text-[28px] font-[700]">Our Approach</h2>
                    </div>
                    <h2 className=" md:ml-[96px] md:w-[450px] leading-[68px] text-[#F7941D] text-[60px] md:text-[64px] font-[700] font-konreg">
                        <span className="text-black"> Integrated</span> <br></br>
                        Network
                    </h2>
                    <h2 className="w-[418px] md:ml-[96px] mt-[5px] h-[60px] font-interegular font-[500] text-[20px] leading-[30px]">
                        Together, we build dynamic partnerships for mutual problem solving.
                    </h2>
                </div>

                <div className="hidden overflow-y-auto lg:flex lg:w-[550px] mr-[50px] mt-[70px] h-[752px]">
                    <div className="w-fit h-fit pb-[5px] overflow-y-auto flex flex-col">
                       
                        {integrated.map((item, index)=>{
                            return(
                                <div className={`h-[275px] ${index > 0 ? "mt-[32px]" : "mt-0"} w-[500px] p-[30px] text-[18px] font-[500] rounded-[10px] hover:bg-[#FEF4E8] bg-[white] leading-[27px] font-interegular`}>
                                    {item.text}
                                </div>
                            )
                        })}
                    </div>                    
                </div>
            </div>
        </div>
    )
}