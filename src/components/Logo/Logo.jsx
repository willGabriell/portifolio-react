export default function Logo() {
    return (
        <div className="flex flex-col items-center p-3 cursor-pointer">
            <h1 className="text-xl lg:text-xl font-bold transition-all duration-300 ease-in-out hover:text-red-500 hover:scale-105">
                Wilinton Gabriel
            </h1>
            <p className="text-sm lg:text-base font-light text-gray-300">
                Desenvolvedor <span className="text-red-500 font-bold">Java</span>
            </p>
        </div>
    );
}
