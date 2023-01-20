import ImageHolder from "./ImageHolder"
import { useState, useEffect } from "react"
import Link from 'next/link'
import FooterList from "./FooterList"
import ButtonMaker from "./ButtonMaker"
import Menu from "./Menu"
import Textfield from "./Textfield"


export default function MainLayout({ children, bg, toggleMobileMenu, mobileMenu, isContactForm, setIsContactForm, openForm }) {
    const [scrollPosition, setScrollPosition] = useState()
    const [pageWidth, setPageWidth] = useState()

    const closeForm = (e) => {
        e.preventDefault()
        setIsContactForm(false)
    }

    useEffect(() => {
        setPageWidth(window.innerWidth)
        const scrollChecker = () => {
            console.log(window.screenY + " " + window.scrollY)
            setScrollPosition(window.scrollY)
        }
        window.addEventListener('scroll', scrollChecker)

        return () => {
            window.removeEventListener('scroll', scrollChecker)
        }
    }, [])

    if (mobileMenu) {
        return (
            <div className='absolute h-screen w-screen'>
                <Menu bg={bg} toggleMobileMenu={toggleMobileMenu} />
            </div>
        )
    }

    return (
        <div className={`h-fit relative m-auto w-full flex flex-col justify-between`}>
            <div onClick={(e) => { e.target.className.includes("form-layer") ? setIsContactForm(false) : "" }} className={`${isContactForm ? "absolute" : "hidden"} form-layer w-[100%] h-[100%] z-[150] p-[10px] top-0`}>
                <form style={{ backgroundImage: 'url("/contact-bg.png")' }} className="w-90% lg:w-[600px] lg:m-auto min-h-[600px] lg:h-[350px]  sticky relative rounded-[12px] flex flex-col bg-white top-[70px]">
                    <div className="bg-[#F7941D] lg:rounded-tl-[10px] lg:rounded-none lg:w-[20%] rounded-t-[10px] w-[100%] h-[10px]">
                    </div>
                    <div className="flex justify-around mt-[10px] items-center">
                        <h2 className="font-konregular text-[#F7941D] font-[700] text-[30px] md:text-[48px]">Contact Form</h2>
                        <button onClick={(e) => { closeForm(e) }} className="border relative border-[#D4D4D4] rounded-[50%] w-[46px] flex h-[46px] justify-center items-center text-interegular">
                            <ImageHolder src="/close.png" />
                        </button>
                    </div>

                    <div className="flex w-[85%] self-center  flex-col">
                        <div className="flex lg:flex-row flex-col  justify-between lg:mt-[20px] lg:h-fit h-[150px]">
                            <Textfield title="Form Purpose" type="select" />
                            <Textfield title="Name of Organization" />
                        </div>

                        <div className="flex lg:flex-row flex-col justify-between lg:mt-[20px] lg:h-fit h-[150px]">
                            <Textfield title="Full Name" />
                            <Textfield title="Role" />
                        </div>

                        <div className="flex lg:flex-row flex-col justify-between lg:mt-[20px] lg:h-fit h-[150px]">
                            <Textfield title="Email" />
                            <Textfield title="Phone Number" />
                        </div>

                        <div className="flex lg:flex-row flex-col justify-between lg:mt-[20px] lg:h-fit h-[220px]">
                            <Textfield title="Any Comment" type="textbox" />
                            <Textfield title="Describe your Interest" type="textbox" />
                        </div>
                    </div>
                    <div className="ml-auto mt-[20px] lg:mr-[60px]">
                        <ButtonMaker command={closeForm} text="Submit" buttonType={2} />
                    </div>
                </form>
            </div>
            <header style={{ backgroundImage: `${((pageWidth < 760) && (scrollPosition > 395)) ? `url(${bg})` : ((pageWidth < 1275) && (scrollPosition > 595)) ? `url(${bg})` : ((pageWidth < 1435) && (scrollPosition > 845)) ? `url(${bg})` : 'none'}` }} className={`w-full bg-center ${isContactForm ? "blur-sm" : "blur-none"} bg-cover sticky top-0 bg-none z-[100] border-black h-[128px] lg:flex`}>
                <nav className="items-center w-full h-full flex justify-between text-[white] z-[50]">

                    <div className="relative lg:ml-[112px] w-[170px] h-[56px]">
                        <Link href="/">
                            <ImageHolder src="/jap-logo-g.svg" alt="logo" />
                        </Link>
                    </div>

                    <button onClick={() => { toggleMobileMenu(true) }} className={`${mobileMenu ? "hidden" : "flex"} relative flex w-[60px] h-[40px] justify-between md:hidden flex-col`}>
                        <ImageHolder src="/menu-kebab.svg" />
                    </button>
                    <ul className="hidden mr-[50px] md:flex justify-between items-center h-[56px] w-[800px]">
                        <li className="font-konreg group  cursor-pointer relative xl:text-[22px]  text-[16px] items-center flex flex-col px-[5px]">
                            <div className="flex items-center relative">
                                <h2><Link href="/services">Services</Link></h2>
                                <div className="relative  h-[10px] mt-[5px] ml-[6px] w-[10px]">
                                    <ImageHolder src="/caret-down.svg" />
                                </div>
                            </div>
                            <ul className="left-[1px] hidden absolute group-hover:flex rounded-[5px] opacity-[0.7] px-[4px] bg-[white] top-[90%] h-fit pl-[4px] flex-col xl:w-[200px] w-[145px]">
                                {[{ name: "Haulage", url: "/services/haulage" }, { name: "Goods Producers", url: "/services/goods-producers" }, { name: "Transport Services", url: "/services/transport-services" }, { name: "Warehousing", url: "/services/warehousing-and-distribution" }].map((item, index) => {
                                    return <li className={`font-konreg ${index == 0 ? "mt-[10px]" : ""} xl:h-[40px] text-[#F7941D] h-[35px] hover:font-[700] cursor-pointer items-center xl:text-[22px] text-[16px] text-[white]`} key={index}><Link href={item.url}>{item.name}</Link></li>
                                })}
                            </ul>
                        </li>

                        {[{ name: "Our Impact", url: "/impact" }, { name: "Our Approach", url: "/our-approach" }].map((item, index) => {
                            return (
                                <li className="font-konreg text-[16px] xl:text-[22px] hover:font-[700] cursor-pointer">
                                    <Link href={`/${item.url}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })}
                        <li className="h-full">
                            <ButtonMaker text="Book a Truck" command={() => { setIsContactForm(true) }} />
                        </li>
                    </ul>
                </nav>
            </header>
            <section style={{ backgroundImage: `url(${bg})` }} className="bg-center bg-cover mt-[-128px] h-[400px] md:h-[600px] lg:h-[850px] xl:h-[900px]"></section>


            {children}

            <footer className={`min-h-[500px] md:pt-0 lg:flex lg:flex-col bg-[#F5F5F4] lg:justify-center ${isContactForm ? "blur-sm" : "blur-none"} lg:pl-[112px] lg:pr-[50px] border lg:h-[589px] bg-[#F5F5F4]`}>
                <div className="flex flex-col md:flex-row ">
                    <div className="flex justify-around mt-[10px] md:mt-none md:flex-col">
                        <div className="relative w-[66px] h-[66px]">
                            <ImageHolder src="/japtini-logo-orange.svg" />
                        </div>
                        <div className="flex w-[170px] mt-[25px] justify-between">
                            <div className="relative w-[22px] h-[22px]">
                                <Link href="#">
                                    <ImageHolder src="/twitter.svg" />
                                </Link>
                            </div>
                            <div className="relative w-[22px] h-[22px]">
                                <Link href="#">
                                    <ImageHolder src="/phone.svg" />
                                </Link>
                            </div>
                            <div className="relative w-[22px] h-[22px]">
                                <Link href="#">
                                    <ImageHolder src="/facebook.svg" />
                                </Link>
                            </div>
                            <div className="relative w-[22px] h-[22px]">
                                <Link href="#">
                                    <ImageHolder src="/linkedin.svg" />
                                </Link>
                            </div>
                            <div className="relative w-[22px] h-[22px]">
                                <Link href="#">
                                    <ImageHolder src="/instagram.svg" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:px-[40px] grow justify-around md:justify-between">
                        {
                            [
                                {
                                    title: "Services",
                                    list: [
                                        {
                                            name: "Haulage",
                                            url: "/services/haulage"
                                        },
                                        {
                                            name: "Goods Producer",
                                            url: "/services/goods-producers"
                                        },
                                        {
                                            name: "Transport Services",
                                            url: "/services/transport-services"
                                        },
                                        {
                                            name: "Warehousing and Distribution",
                                            url: "/services/warehousing-and-distribution"
                                        },
                                    ]
                                },
                                {
                                    title: "Company",
                                    list: [
                                        {
                                            name: "Impact",
                                            url: "/impact"
                                        },
                                        {
                                            name: "Our Approach",
                                            url: "/our-approach"
                                        },
                                        // {
                                        //     name: "Join Us",
                                        //     url: "join"
                                        // }
                                    ]
                                },
                                {
                                    title: "Resources",
                                    list: [
                                        {
                                            name: "Privacy",
                                            url: "privacy"
                                        },
                                        {
                                            name: "Terms and Conditions",
                                            url: "legal"
                                        }
                                    ]
                                },
                            ].map((item, index) => {
                                return <FooterList title={item.title} list={item.list} index={index} />
                            })
                        }
                    </div>
                </div>
                <div className="border-t-[1px] px-[5px] text-center md:px-none text-[#231F20] border-t-[#D4D4D4] md:mt-[80px] font-intregular text-[14px]">
                    <h2 className="mt-[31px]">
                        This website uses <span className="cursor-pointer text-[18px] text-[#EF4133]">Cookies ↗</span>  We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. The content on this website does not constitute a complete <br></br>
                        description of Japtini Logistics. By using this website, you accept our <span className="cursor-pointer text-[18px] text-[#EF4133]">Terms of Use</span> and <span className="cursor-pointer text-[18px] text-[#EF4133]">Privacy Policy.</span>
                        <br></br>
                        <br></br>

                        ©2022 Japtini Logistics. All Rights Reserved.
                    </h2>
                </div>
            </footer>
        </div>
    )
}