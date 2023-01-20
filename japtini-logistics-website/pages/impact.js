import Head from 'next/head'
import ImageHolder from '../components/ImageHolder'
import Link from 'next/link'
import PictureTab from '../components/PictureTab'
import ButtonMaker from '../components/ButtonMaker'
import HomeSlider from '../components/HomeSlider'
import { arrows } from '../components/HomeSliderPages'
import { useEffect } from 'react'
import slides from '../components/HomeSliderPages'
import Impact from '../components/ImpactBox'
import { impactDetails } from '../components/HomeSliderPages'

export default function Home({ bgSwitcher, homeSlidePage, setHomeSlidePage, isContactForm, setIsContactForm, openForm }) {


    useEffect(() => {
        let setPics = setInterval(() => {
            if (Number(slides[homeSlidePage].page) == slides.length) {
                setHomeSlidePage(0)
                return
            }
            setHomeSlidePage(homeSlidePage + 1)
        }, 10000)

        return (() => {
            clearInterval(setPics)
        })
    }, [homeSlidePage])


    return (
        <div className={`relative mt-[-400px] ${isContactForm ? "blur-lg" : "blur-none"} md:mt-[-645px] lg:mt-[-850px] xl:mt-[-900px] h-fit overflow-none`}>
            <div className="flex flex-col relative h-[400px] md:h-[600px] lg:h-[850px] xl:h-[900px] bg-none">

                <div className='flex flex-col mt-[100px] lg:mt-[250px] w-fit ml-[20px] md:ml-[112px]'>
                    <section className='flex items-center w-[250px] md:w-[350px] xl:w-[750px] justify-around'>
                        <h2 className='font-konreg font-[700] text-[white] text-[30px] md:text-[72px]'>
                            Making life more
                            affordable

                        </h2>
                    </section>
                    <section className='flex mt-[20px] md:mt-0'>
                        <h2 className='text-[white] font-[700] font-raleway text-[25px]'>
                            The sector is critical to economic growth more broadly as a catalyst
                            for development of other industries.
                        </h2>

                    </section>
                </div>
            </div>


            <div className='w-full relative min-h-[785px] md:mt-[50px] lg:mt-0'>
                <div style={{ backgroundImage: `url('/contact-bg.png')` }} className={`absolute w-full flex top-0 h-[60%]`}></div>
                <div className={`relative z-[100] flex justify-between pl-[5px] mt-[20px] md:w-[554px] md:h-[190px]`}>
                    <div className='w-[8px] h-[180px] bg-[#f7941d] rounded-[12px]'></div>
                    <div className='ml-[5px] lg:ml-[20px] grow font-interegular font-[700] text-[29px]  md:text-[32px] md:leading-[42px]'>
                        Working with the <span className='text-[#F7941D]'>Japtini Group</span> of companies, in the next 5 years we will
                        mobilise <span className='text-[#F7941D]'>$500 million</span> to enable …
                    </div>
                </div>
                <div className={` grid grid-cols-2 gap-2 bg-[#F5F5F4] px-[5px] lg:grid-cols-3 lg:gap-3`}>
                    {impactDetails.map((impact, index)=>{
                        return <Impact images={impact.images} textOne={impact.textOne} textTwo={impact.textTwo} textThree={impact.textThree} />
                    })}

                </div>
            </div>

        </div>
    )
}
