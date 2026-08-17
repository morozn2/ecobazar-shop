import { Header } from "../../components/Header/Header"
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs"
import { AboutUsOne } from "../../components/AboutUsOne/AboutUsOne"
import { AboutUsTwo } from "../../components/AboutUsTwo/AboutUsTwo"
import { DeliveredOrder } from "../../components/DeliveredOrder/DeliveredOrder"
import { OurTeam } from "../../components/OurTeam/OurTeam"
import { Testimonials } from "../../components/Testimonials/Testimonials"
import { Associates } from "../../components/Associates/Associates"
import { Footer } from "../../components/Footer/Footer"

export function About() {
    return (
        <>
            <Header />
            <Breadcrumbs />
            <AboutUsOne />
            <AboutUsTwo />
            <DeliveredOrder />
            <OurTeam />
            <Testimonials />
            <Associates />
            <Footer />
        </>
    )
}