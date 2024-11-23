import Card from "../Card/Card";

export default function Projetos() {
    return (
        <div className="flex justify-center items-center flex-col p-4">
            <h2 className="font-bold text-white text-2xl mb-4">Projetos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <Card
                    imgUrl=""
                    titulo="Gerenciador de Tarefas"
                    tag={["Java EE", "JSF", "PostgreSQL"]}
                    link="https://github.com/willGabriell/GerenciadorDeTasks"
                />
                <Card
                    titulo="Placar Digital"
                    tag={["HTML", "CSS","Javascript"]}
                    link="https://github.com/willGabriell/placar-digital"
                />
                <Card 
                    imgUrl=""
                    titulo="Cadastro de Pacientes"
                    tag={["Java", "Spring Boot", "Javascript","React"]}
                    link="https://github.com/willGabriell/Crud-Clinica"
                />

            </div>
        </div>
    );
}
