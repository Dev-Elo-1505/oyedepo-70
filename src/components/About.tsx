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
    <section className=" p-8 lg:px-28 lg:py-4">
        {about.map((item, index) => (
            <div className="mt-4 border-b-[1px] border-slate-200 p-2 rounded" key={index}>
            <h2 className="text-2xl text-red-500 font-semibold">{item.title}</h2>
            <p className="text-slate-500">{item.content[0].substring(0, 200)}...</p>
            <Link to={`/about/${item.name}`}><Button desc="Read More" /></Link>
            </div>
        ))}
    </section>
)
}

export default About