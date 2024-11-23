import Logo from "../Logo/Logo";

export default function Cabecalho() {
    return (
        <header className="text-white font-bold flex justify-between m-2 p-3">
            <Logo />
            <nav className="p-3">
                <a href="#" className="mx-3 lg:mx-6 text-base lg:text-lg transition-all duration-300 ease-in-out hover:text-red-500 hover:scale-105 hover:underline">Início</a>
                <a href="#" className="mx-3 lg:mx-6 text-base lg:text-lg transition-all duration-300 ease-in-out hover:text-red-500 hover:scale-105 hover:underline">Projetos</a>
                <a href="#" className="mx-3 lg:mx-6 text-base lg:text-lg transition-all duration-300 ease-in-out hover:text-red-500 hover:scale-105 hover:underline">Contato </a>
            </nav>
        </header>
    );
}