import ImageHolder from "./ImageHolder";
import Link from "next/link";
import ButtonMaker from "./ButtonMaker";
import slides from "./HomeSliderPages";
import { arrows } from "./HomeSliderPages";

export default function HomeSlider({ homeSlidePage, setHomeSlidePage, page }) {
    function movePage(operation) {
        if (operation == "forward") {
            setHomeSlidePage(homeSlidePage + 1)
            return
        }
        setHomeSlidePage(homeSlidePage - 1)
    }

    if (page == "home") {
        return (
            <div className="h-full w-full md:py-0 lg:h-[550px] md:m-auto md:w-[99%] lg:w-full flex flex-col items-center lg:flex-row justify-between">

                <div className="h-[400px] w-[97%] xl:h-[550px] lg:w-[50%] flex lg:h-fit flex-col relative">
                    <div className="flex  items-center">
                        <div className="h-[5px]  w-[25%] md:w-[126px] rounded-[5px] bg-[#F7941D]"></div>
                        <h2 className="ml-[16px] font-interegular font-[700] text-[#161616] text-[28px]">{slides[homeSlidePage].title}</h2>
                    </div>
                    <h2 className=" md:ml-[90px] xl:h-[176px] xl:leading-[70px] xl:w-[596px] text-center lg:text-start font-konregular md:text-[40px] lg:text-[64px] font-[600] lg:font-[700]" dangerouslySetInnerHTML={{ __html: slides[homeSlidePage].heading }} />

                    <Link href={`/${slides[homeSlidePage].url}`}>
                        <div className="lg:ml-[90px] text-center lg:text-start xl:w-[383px] xl:min-h-[108px] leading-[27px] lg:mt-[22px] font-interegular font-[500] text-[17px]" dangerouslySetInnerHTML={{ __html: slides[homeSlidePage].text }} />
                    </Link>

                    <div className="lg:ml-[90px] xl:mt-auto ml-[25%]  md:mt-[22px] w-fit">
                        <ButtonMaker text="Book a Truck" buttonType={2} />
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${slides[homeSlidePage].image})` }} className="lg:w-[50%] md:h-[450px] h-[45%] mt-[20px] w-full lg:mt-0 lg:h-full bg-center bg-cover flex relative">

                    <div className="flex left-[-66px] w-[350px] bottom-[3px] absolute h-[61px] justify-between items-center">
                        <div className="bg-[#F7941D] flex justify-center items-center w-[65px] h-[65px] font-konregular font-[600] text-[white] p-[8px] text-[32px]">0{slides[homeSlidePage].page}</div>
                        <div className="flex h-[22px] w-[147px] justify-between items-center">
                            <div className="font-interegular text-[16px] text-[white] font-[400]">0{slides[homeSlidePage].page}</div>
                            <div className="w-[93px] bg-[white] h-[3px]">
                                <div className={`h-[3px] transition-all duration-[0.5s] linear bg-[#F7941D] ${slides[homeSlidePage].page == 4 ? "w-[100%]" : slides[homeSlidePage].page == 3 ? "w-[75%]" : slides[homeSlidePage].page == 2 ? "w-[50%]" : "w-[25%]"}`}></div>
                            </div>
                            <div className="font-interegular text-[16px] text-[white] font-[400]">04</div>
                        </div>
                        <div className="flex w-[80px] justify-between">
                            <button disabled={slides[homeSlidePage].page == "1"} onClick={() => { movePage("back") }} className={`${slides[homeSlidePage].page == "1" ? "bg-[#D4D4D4]" : "bg-[white]"} h-[36px] w-[36px] flex items-center rounded-[50%] relative`}>
                                <div className="relative ml-[10px] w-[12px] h-[20px]">
                                    <ImageHolder src="/left.png" />
                                </div>
                            </button>
                            <button disabled={slides[homeSlidePage].page == "4"} onClick={() => { movePage("forward") }} className={`${slides[homeSlidePage].page == "4" ? "bg-[#D4D4D4]" : "bg-[white]"} h-[36px] w-[36px] flex items-center rounded-[50%] relative`}>
                                <div className="relative ml-[15px] w-[12px] h-[20px]">
                                    <ImageHolder src="/right.png" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            blank
        </>
    )
}