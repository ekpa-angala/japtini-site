import ButtonMaker from "../../components/ButtonMaker"
import { useEffect } from "react"
import { goods, warehouse } from "../../components/HomeSliderPages"
import ImageHolder from "../../components/ImageHolder"
import Hero from "../../components/Hero"

export default function Warehouse({ setBg, goodsActive, setGoodsActive, picChanger, isContactForm, openForm }) {

    function movePage(operation) {
        if (operation == "forward") {
            setGoodsActive(goodsActive + 1)
            return
        }
        setGoodsActive(goodsActive - 1)
    }



    useEffect(() => {
        setBg("/goods-large.png")
        let setPics = setInterval(() => {
            picChanger(goodsActive, warehouse, setGoodsActive)
        }, 10000)

        return (() => {
            clearInterval(setPics)
        })
    }, [goodsActive])
    return (
        <div className={`${isContactForm ? "blur-sm" : "blur-none"} w-[100%]`}>
            <Hero title={`Warehousing ${"&"} Distribution`} buttonText="Book a Warehouse" openForm={openForm} />
            <div className="min-h-[500px] md:h-[900px] lg:h-[900px] bg-[white] flex flex-col relative">
                <div className=" min-h-[376px] flex bg-[#F9F9F9] flex-col">
                    <div className="flex mt-[60px] md:mt-[142px]">
                        <div className="bg-[#F7941D] w-[70px] md:w-[125px] h-[3px]"></div>
                        <h2 className="font-interegular mt-[-20px] ml-[16px] text-[28px] font-[700]">Warehousing</h2>
                    </div>
                    <h2 className=" md:ml-[96px]  md:w-[599px] leading-[68px] text-[#F7941D] text-[50px] md:text-[64px] font-[700] font-konreg">
                        <span className="text-black">Warehousing<br></br> </span> {'&'} Distribution
                    </h2>
                    <div className="flex flex-col justify-between md:w-full lg:w-full xl:mt-[20px] lg:mt-[46px] lg:ml-0 md:flex-row md:h-fit lg:h-[400px] h-[545px] pr-[2px] mt-[10px]">
                        <div className="flex flex-col p-[10px] bg-white xl:h-[450px] md:w-[50%] w-full md:h-[400px] h-[250px] lg:ml-0 relative">
                            <div className="font-konregular h-fit font-[600] md:text-[46px]">
                            {goodsActive == 0 ? "01" : ("0" + (goodsActive + 1))}.
                            </div>
                            <div className="flex grow">
                                <div className="h-full bg-[#F7941D] w-[4px] rounded-[2px]"></div>
                                <div className="flex flex-col ml-[10px] xl:ml-[30px] justify-between">
                                    <div className="font-interegular bg-white text-[#777777] font-[500] text-[18px] md:text-[18px] leading-[24px]">
                                    {warehouse[goodsActive].text}
                                    </div>
                                    <ButtonMaker text="Book a Warehouse" buttonType={2} />
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${warehouse[goodsActive].url})` }} className=" bg-center xl:h-[450px] bg-cover md:w-[50%] w-full md:h-[400px] h-[250px] lg:ml-0 relative">
                        </div>


                        <div className="hidden bg-black md:flex pr-[10px] absolute w-[350px] bottom-[20px] absolute h-[61px] justify-between items-center">
                            <div className="bg-[#F7941D] flex justify-center items-center w-[65px] h-[65px] font-konregular font-[600] text-[white] p-[8px] text-[32px]">{goodsActive == 0 ? "1" : goodsActive + 1}</div>
                            <div className="flex h-[22px] w-[147px] justify-between items-center">
                                <div className="font-interegular text-[16px] text-[#F7941D] font-[400]">{goodsActive == 0 ? "1" : ("0" + (goodsActive + 1))}</div>
                                <div className="w-[93px] bg-[white] h-[3px]">
                                    <div className={`h-[3px] transition-all duration-[0.5s] linear bg-[#F7941D] ${goodsActive == 3 ? "w-[100%]" : goodsActive == 2 ? "w-[75%]" : goodsActive == 1 ? "w-[50%]" : "w-[25%]"}`}></div>
                                </div>
                                <div className="font-interegular text-[16px] text-[white] font-[400]">04</div>
                            </div>
                            <div className="flex w-[80px] justify-between ">
                                <button disabled={goodsActive == "0"} onClick={() => { movePage("back") }} className={`${goodsActive == "0" ? "bg-[#D4D4D4]" : "bg-[white]"} h-[36px] w-[36px] flex items-center rounded-[50%] relative`}>
                                    <div className="relative ml-[10px] w-[12px] h-[20px]">
                                        <ImageHolder src="/left.png" />
                                    </div>
                                </button>
                                <button disabled={goodsActive == "4"} onClick={() => { movePage("forward") }} className={`${goodsActive == "4" ? "bg-[#D4D4D4]" : "bg-[white]"} h-[36px] w-[36px] flex items-center rounded-[50%] relative`}>
                                    <div className="relative ml-[15px] w-[12px] h-[20px]">
                                        <ImageHolder src="/right.png" />
                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
} 