import ImageHolder from "./ImageHolder"

export default function Impact({images, textOne, textTwo, textThree}) {

    return (
        <div className=' drop-shadow-xl pt-[5px] z-[150] h-[200px] lg:h-[300px] flex flex-col bg-white'>
            <div className='flex'>
                {images.map((image, index)=> {
                    return (
                        <div key={index} className='relative ml-1 lg:w-[150px] lg:h-[150px] w-[50px] h-[50px] rounded-[10px]'>
                            <ImageHolder src={image} />
                        </div>
                    )
                })}                
            </div>
            <div className='flex mt-[5px] ml-2 flex-col'>
                <h2 className='text-[23px] font-[700] font-raleway text-[#C0C0C0]'>{textOne}</h2>
                <h2 className='text-[12px] font-[700] font-raleway'>{textTwo}</h2>
            </div>
            <h2 className='text-[10px] ml-2 font-[700] mt-[5px]'>
                {textThree}
            </h2>
            <div className='flex justify-between cursor-pointer mt-2 w-[80px] items-center'>
                <h2 className=' ml-2 font-raleway font-[700] text-[15px]'>Explore</h2>
                <div  className='relative w-[10px] h-[10px]'>
                    <ImageHolder src="/forward-arrow.png" />
                </div>
            </div>
        </div>
    )
}