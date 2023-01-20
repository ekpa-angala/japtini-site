import Hero from "../components/Hero"

export default function HeroPage({openForm}) {
    return(
        <>
        <Hero title={`Warehousing ${"&"} Distribution`} openForm={openForm} buttonText="Book a Warehouse" />
        </>
    )
}