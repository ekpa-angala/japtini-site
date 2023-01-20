import Link from "next/link"
import ImageHolder from "./ImageHolder"

export default function FooterList({title, list, index}) {
    return(
        <ul className="flex mt-[20px] md:mt-none group relative flex-col w-[120px] md:w-fit">
            <li className="font-interegular flex justify-center md:justify-start text-[18px] font-[600] text-[#231F20]">{title}</li>
            <li className="relative w-full h-[30px] flex justify-center items-center lg:hidden">
                <div className="relative w-[30px] h-[30px]">
                    <ImageHolder src="/arrow-down.svg" />
                </div>
            </li>
            <ul>
                {list.map((item, index)=>{
                return (
                    <li key={index} className={`mt-[3px] hidden lg:flex group-hover:flex justify-center md:justify-start text-center cursor-pointer text-[#777777] font-interegular text-[10px] md:text-[16px] font-[500]`}>
                        <Link href={item.url}>
                        {item.name}
                        </Link>
                    </li>
                )
            })}
            </ul>
        </ul>
    )
}