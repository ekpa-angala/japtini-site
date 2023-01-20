export default function ButtonMaker({ text, buttonType = 1, command }) {
    if (buttonType == 2) {
        return (
            <button onClick={command} className="h-[62px] text-white cursor-pointer text-[16px] font-intsemi bg-gradient-to-r from-[#F7941D] to-[#EE4033] w-[170px] rounded-[5px]">
                {text}
            </button>
        )
    }
    return (
        <button onClick={command} className="h-[62px] text-[#EE4033] cursor-pointer text-[16px] font-intsemi bg-[white] w-[170px] rounded-[5px]">
            {text}
        </button>
    )
}