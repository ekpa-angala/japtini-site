import ImageHolder from "./ImageHolder"
import Link from "next/link"
import { useState } from "react"
export default function PictureTab({ src, text, nodeKey, onHover, blur, clear, url }) {
    const [hoverState, setHoverState] = useState(false)

    function bgSwitcher() {
        setHoverState(!hoverState)
    }
    return (
        <div key={nodeKey} style={{ backgroundImage: `url(${hoverState ? clear : blur})` }} onMouseOver={() => { onHover(src, bgSwitcher) }} onMouseOut={() => { onHover("/hero-image.png", bgSwitcher) }} className="bg-center cursor-pointer bg-cover h-[100px] w-[23%] md:text-start lg:w-[210px] xxlg:w-[230px] lgx:w-[240px] xl:w-[270px] md:h-[150px] xl:h-[175px] rounded-[7.5px]">
            <h2 className=" md:w-[120px] md:ml-[20px] mt-[40px] md:mt-[80px] font-intregular font-[400] md:font-[600] text-[14px] md:text-[18px] text-[white]">
                <Link href={`${url}`}>
                    {text}
                </Link>
            </h2>
        </div>
    )
}