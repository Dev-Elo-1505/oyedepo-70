import { Link } from "react-router-dom";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Button from "./Button";

interface AboutItem {
    name: string;
    title: string;
    content: string[];
}

interface Props {
    about: AboutItem[];
}

const About = ({ about }: Props) => {
    return (
    <section className="flex px-28 pt-12 justify-between items-center gap-48 bg-section font-openSans">
        {about.map((item, index) => (
            <div className="text-justify" key={index}>
            <h2 className="text-xl text-red-500 mb-2 font-bold">{item.title}</h2>
            <p>{item.content[0].substring(0, 100)}...</p>
            <Link to={`/about/${item.name}`}><Button desc="Read More" /></Link>
            </div>
        ))}
        <div><BsFillPersonLinesFill className="text-7xl text-red-500" /></div>
        
    </section>
)
}

export default About