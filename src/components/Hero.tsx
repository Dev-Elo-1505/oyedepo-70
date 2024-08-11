

const Hero = ({ backgroundClass, heading, subtext }) => {
    return (
    <section className="font-openSans">
        <div className={`relative ${backgroundClass} bg-cover bg-center h-screen flex items-center justify-center`}>
            <div className="absolute bg-red-600 opacity-50 inset-0"></div>
            <div className="relative z-10 text-center text-white p-4">
                <h1 className="font-bold text-6xl">{heading}</h1>
                <p className="text-xl mt-4">{subtext}</p>
            </div>
        </div>
        
    </section>
)
}

export default Hero