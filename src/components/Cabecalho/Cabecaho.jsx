import Logo from "../Logo/Logo";

export default function Cabecalho() {
    return (
        <header className="text-white font-bold flex justify-between p-1">
            <Logo />
            <nav className="p-3">
                <a href="#inicio" className="mx-3 lg:mx-6 text-base lg:text-lg md:text-sm transition-all duration-300 ease-in-out hover:text-red-500 hover:scale-105 hover:underline">Início</a>
                <a href="#projetos" className="mx-3 lg:mx-6 text-base lg:text-lg md:text-sm transition-all duration-300 ease-in-out hover:text-red-500 hover:scale-105 hover:underline">Projetos</a>
                <a href="#contato" className="mx-3 lg:mx-6 text-base lg:text-lg md:text-sm transition-all duration-300 ease-in-out hover:text-red-500 hover:scale-105 hover:underline">Contato </a>
            </nav>
        </header>
    );
}