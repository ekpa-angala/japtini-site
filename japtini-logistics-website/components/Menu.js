import { useState, useEffect } from "react"
import Link from "next/link"
import ImageHolder from "./ImageHolder"

export default function Menu({ bg, toggleMobileMenu }) {

    useEffect(() => {
        const menuOff = () => {
            toggleMobileMenu(false)
        }
        window.addEventListener('resize', menuOff)

        return () => {
            window.removeEventListener('resize', menuOff)
        }
    }, [])
    return (
        <>
            <div style={{ backgroundImage: `url(${bg})` }} className="w-full h-full bg-center bg-cover flex flex-col">
                <button onClick={() => { toggleMobileMenu(false) }} className="z-[100] absolute right-[5px] top-[40px]  font-konregular text-white w-[50px] h-[50px] flex justify-center items-center text-[50px]">
                    <div className="relative h-full w-full">
                        <ImageHolder src="/close-circle.svg" />
                    </div>
                </button>
                <ul className="min-h-[fit] mt-[120px] flex flex-col">
                    {/* <ul className="font-konreg group relative flex-col flex items-center justify-center min-h-[60px] font-[700] text-[25px] text-white list-none cursor-pointer">
                        <li className="w-full flex justify-center z-[50] bg-[#F7941D] items-center">
                            Services
                            <div className="relative h-[20px] mt-[8px] ml-[6px] w-[20px]">
                                <ImageHolder src="/caret-down.svg" />
                            </div>
                        </li>
                        <ul className="w-full overflow-hidden group-hover:mt-[2px] group-hover:h-[283px] transition-all duration-[1200ms] linear h-[40px] mt-[-60px] relative">
                            {[{ name: "Haulage", url: "/services/haulage" }, { name: "Goods Producers", url: "/services/goods-producers"}, { name: "Transport Services", url: "/services/transport-services" }, { name: "Warehousing", url: "warehousing-and-distribution" }].map((item, index) => {
                                return (
                                    <li className="font-konreg hover:bg-[white] hover:text-[#F7941D] mt-[15px] flex items-center justify-center h-[50px] font-[700] text-[25px] text-white list-none cursor-pointer">
                                        <Link href={`/${item.url}`}>
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </ul> */}
                    {[{ name: "Haulage", url: "/services/haulage" }, { name: "Goods Producers", url: "/services/goods-producers" }, { name: "Transport Services", url: "/services/transport-services" }, { name: "Warehousing", url: "/services/warehousing-and-distribution" }].map((item, index) => {
                        return (
                            <li onClick={()=>{toggleMobileMenu(false)}} className="font-konreg hover:bg-[#F7941D] mt-[10px] flex items-center justify-center h-[50px] font-[700] text-[25px] text-white list-none cursor-pointer">
                                <Link href={`/${item.url}`}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}