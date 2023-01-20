import ButtonMaker from "../../components/ButtonMaker"
import { useEffect } from "react"
import { goods } from "../../components/HomeSliderPages"
import ImageHolder from "../../components/ImageHolder"
import Hero from "../../components/Hero"

export default function GoodsProducer({ setBg, isContactForm, goodsActive, setGoodsActive, picChanger, openForm }) {

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
            picChanger(goodsActive, goods, setGoodsActive)
        }, 10000)

        return (() => {
            clearInterval(setPics)
        })
    }, [goodsActive])
    return (
        <div className={`${isContactForm ? "blur-sm" : "blur-none"} w-[100%]`}>
            <Hero title="Goods Producers" buttonText="Get on Board" openForm={openForm} />
            <div className="min-h-[500px] md:h-[900px] w-full lg:h-[900px] bg-[white] flex flex-col relative">
                <div className=" min-h-[376px] flex flex-col">
                    <div className="flex mt-[60px] md:mt-[142px]">
                        <div className="bg-[#F7941D] w-[125px] h-[3px]"></div>
                        <h2 className="font-interegular mt-[-20px] ml-[16px] text-[28px] font-[700]">Goods Producers</h2>
                    </div>
                    <h2 className=" md:ml-[96px]  md:w-[599px] leading-[68px] text-[#F7941D] text-[64px] font-[700] font-konreg">
                        <span className="text-black">Route to<br></br> </span> saving costs
                    </h2>
                    <div className="flex flex-col xl:w-[90%] lg:w-[85%] lg:mt-[46px] lg:ml-[90px] md:flex-row md:h-fit lg:h-[400px] h-[545px] pr-[2px] mt-[10px]">
                        <div style={{ backgroundImage: `url(${goods[goodsActive].url})` }} className=" bg-center rounded-[5px] xl:w-[400px] xl:h-[400px] lg:ml-[100px] xl:ml-[170px] bg-cover w-[300px] h-[300px] md:ml-[100px] lg:ml-0 ml-auto relative">
                            <div className="w-[200px] font-interegular font-[600] p-[5px] text-[12px] xl:text-[16px] xl:font-[700] xl:flex xl:items-center leading-[26px] bg-[white] xl:h-[300px] xl:w-[300px] rounded-[10px] h-[200px] absolute top-[35px] xl:left-[-170px] left-[-90px] ">
                                {goods[goodsActive].text}
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${goodsActive < 4 ? goods[goodsActive + 1].url : goods[0].url})` }} className="border md:mt-[270px] xl:w-[400px] xl:h-[400px] lg:mt-0 rounded-[5px] bg-center bg-cover w-[300px] h-[300px] ml-auto relative">
                            <div className="w-[200px] h-[200px] font-interegular font-[600] p-[5px] text-[12px] xl:text-[16px] xl:font-[700] xl:flex xl:items-center leading-[26px] bg-[white] rounded-[10px] absolute top-[35px] xl:h-[300px] xl:w-[300px] xl:left-[-170px] left-[-90px] ">
                                {goodsActive < 4 ? goods[goodsActive + 1].text : goods[0].text}
                            </div>
                        </div>

                        <div className="hidden bg-black md:flex pr-[10px] absolute w-[350px] bottom-[20px] absolute h-[61px] justify-between items-center">
                            <div className="bg-[#F7941D] flex justify-center items-center w-[65px] h-[65px] font-konregular font-[600] text-[white] p-[8px] text-[32px]">{goodsActive == 0 ? "1" : goodsActive + 1}</div>
                            <div className="flex h-[22px] w-[147px] justify-between items-center">
                                <div className="font-interegular text-[16px] text-[#F7941D] font-[400]">{goodsActive == 0 ? "1" : ("0" + (goodsActive + 1))}</div>
                                <div className="w-[93px] bg-[white] h-[3px]">
                                    <div className={`h-[3px] transition-all duration-[0.5s] linear bg-[#F7941D] ${goodsActive == 4 ? "w-[100%]" : goodsActive == 3 ? "w-[80%]" : goodsActive == 2 ? "w-[60%]" : goodsActive == 1 ? "w-[40%]" : "w-[20%]"}`}></div>
                                </div>
                                <div className="font-interegular text-[16px] text-[white] font-[400]">05</div>
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