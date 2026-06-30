import { Header } from "../../components/Header/Header"
import { Hero } from "../../components/Hero/Hero"
import { Features } from "../../components/Features/Features"
import { PopCategories } from "../../components/PopCategories/PopCategories"

export function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <PopCategories />
        </>
    )
}