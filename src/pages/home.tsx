import Habitats from "../components/homeComponents/habitats";
import Hero from "../components/homeComponents/hero";
import HomeSwiper from "../components/homeComponents/homeSwiper";
import Services from "../components/homeComponents/services";

export default function HomePage() {
    return <>
        <Hero />
        <HomeSwiper />
        <Habitats />
        <Services />
    </>
}