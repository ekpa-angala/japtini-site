import ImageHolder from "./ImageHolder"
import ButtonMaker from "./ButtonMaker"

export default function Hero({openForm, title, buttonText}) {
    return (
        <div className="flex flex-col relative lg:h-[850px] xl:h-[900px] bg-none mt-[-400px] h-[400px] lg:mt-[-850px] xl:mt-[-900px]">
            <div className='flex flex-col mt-[80px]  md:mt-[250px] w-fit ml-[20px] md:ml-[112px]'>
                <section className='flex items-center md:mt-[-300px] lg:mt-0 lg w-full'>
                    <h2 className='font-konreg font-[700] text-[white] text-[50px] md:text-[72px]'>{title}</h2>
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
                        {title}
                    </section>
                </section>
                <div className="mt-[32px]">
                    <ButtonMaker text={buttonText} command={openForm} />
                </div>
            </div>
        </div>
    )
}