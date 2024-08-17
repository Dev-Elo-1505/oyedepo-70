import { Link } from "react-router-dom";
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
    <section className="px-28 py-4">
        {about.map((item, index) => (
            <div className="mt-4 shadow-sm p-2 rounded" key={index}>
            <h2 className="text-2xl text-red-500 font-semibold">{item.title}</h2>
            <p className="text-slate-500">{item.content[0].substring(0, 200)}...</p>
            <Link to={`/about/${item.name}`}><Button desc="Read More" /></Link>
            </div>
        ))}
    </section>
)
}

export default About