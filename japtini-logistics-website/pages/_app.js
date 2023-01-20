import '../styles/globals.css'
import MainLayout from '../components/MainLayout'
import { useState, useEffect } from 'react'
import Menu from '../components/Menu'

export default function App({ Component, pageProps }) {
  const [bg, setBg] = useState("/hero-image.png")
  const [homeSlidePage, setHomeSlidePage] = useState(0)
  const [feedbackSlide, setFeedbackSlide] = useState(1)
  const [haulageActive, setHaulageActive] = useState("problem")
  const [haulageActivePic, setHaulageActivePic] = useState("/problem-one.png")
  const [haulageProcessPic, setHaulageProcessPic] = useState(0)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [goodsActive, setGoodsActive] = useState(0)
  const [transportActive, setTransportActive] = useState(0)
  const [isContactForm, setIsContactForm] = useState(false)



  function feedbackSlider(num){
    setFeedbackSlide(num)
  }

  function bgSwitcher(src,srcTwo){
    setBg(src)
    srcTwo()
  }

  function toggleMobileMenu(status) {
    if(status) {
      setMobileMenu(true)
      return
    }
    setMobileMenu(false)
  }

  function setHaulageTab(tab) {
    setHaulageActive(tab)
  }

  function setHaulagePic(url) {
    setHaulageActivePic(url)
  }

  function picSetter(setter, url) {
    setter(url)
  }

  function picChanger(arg,arr,setter) {
    if(arg == (arr.length-1)){
      setter(0)
      return
    }
    setter(arg+1)
  }

  function openForm() {
    setIsContactForm(true)
  }
  function endForm(e){
    e.preventDefault()
    setIsContactForm(false)
  }

 



  return (
    <MainLayout bg={bg} bgSwitch={bgSwitcher} mobileMenu={mobileMenu} toggleMobileMenu={toggleMobileMenu} isContactForm={isContactForm} setIsContactForm={setIsContactForm}>
      <Component 
      {...pageProps} 
      bgSwitcher={bgSwitcher} 
      homeSlidePage={homeSlidePage} 
      setHomeSlidePage={setHomeSlidePage}
      feedbackSlide={feedbackSlide}
      feedbackSlider={feedbackSlider} 
      setBg={setBg}
      haulageActive={haulageActive}
      setHaulageTab={setHaulageTab}
      haulageActivePic={haulageActivePic}
      setHaulagePic={setHaulagePic}
      haulageProcessPic={haulageProcessPic}
      setHaulageProcessPic={setHaulageProcessPic}
      picSetter={picSetter}
      picChanger={picChanger}
      toggleMobileMenu={toggleMobileMenu}
      mobileMenu={mobileMenu}
      goodsActive={goodsActive}
      setGoodsActive={setGoodsActive}
      transportActive={transportActive}
      setTransportActive={setTransportActive}
      isContactForm={isContactForm}
      setIsContactForm={setIsContactForm}
      openForm={openForm}
      endForm={endForm}
      />
    </MainLayout>
  )
}
