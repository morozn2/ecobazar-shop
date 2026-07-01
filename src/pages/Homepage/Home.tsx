import { Header } from "../../components/Header/Header"
import { Hero } from "../../components/Hero/Hero"
import { Features } from "../../components/Features/Features"
import { PopCategories } from "../../components/PopCategories/PopCategories"
import { PopProducts } from "../../components/PopProducts/PopProducts"
import { Sales } from "../../components/Sales/Sales"

export function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <PopCategories />
            <PopProducts />
            <Sales />
        </>
    )
}