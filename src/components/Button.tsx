interface Props {
    desc: string;
}

const Button = ({ desc }: Props) => {
    return (
    <button className="mt-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">{desc}</button>
)
}

export default Button