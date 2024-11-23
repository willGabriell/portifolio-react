export default function Logo() {
    return (
        <div className="flex flex-col items-center text-center p-3 cursor-pointer">
            <h1 className="text-lg md:text-xl font-bold transition-all duration-300 ease-in-out hover:text-red-500 hover:scale-105 whitespace-nowrap">
                Wilinton Gabriel
            </h1>
            <p className="text-xs md:text-sm font-light text-gray-300">
                Desenvolvedor <span className="text-red-500 font-bold">Java</span>
            </p>
        </div>
    );
}
