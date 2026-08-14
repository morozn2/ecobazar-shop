import { Header } from "../../components/Header/Header"
import { Hero } from "../../components/Hero/Hero"
import { Features } from "../../components/Features/Features"
import { PopCategories } from "../../components/PopCategories/PopCategories"
import { PopProducts } from "../../components/PopProducts/PopProducts"
import { Sales } from "../../components/Sales/Sales"
import { HotDeals } from "../../components/HotDeals/HotDeals"
import { SummerSale } from "../../components/SummerSale/SummerSale"
import { FeaturedProds } from "../../components/FeaturedProds/FeaturedProds"
import { News } from "../../components/News/News"
import { Testimonials } from "../../components/Testimonials/Testimonials"
import { Associates } from "../../components/Associates/Associates"
import { Insta } from "../../components/Instagram/Insta"

export function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <PopCategories />
            <PopProducts />
            <Sales />
            <HotDeals />
            <SummerSale />
            <FeaturedProds />
            <News />
            <Testimonials />
            <Associates />
            <Insta />
        </>
    )
}