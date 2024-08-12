import Hero from "../components/Hero"
import About from "../components/About"
import about from "./about-content"

const AboutPage = () => {
    return (
    <div>
        <Hero backgroundClass={"bg-about-banner"} heading={"ABOUT"} subtext={"Get to Know More About Bishop David Oyedepo"} />
        <About about={about} />
    </div>
)
}

export default AboutPage