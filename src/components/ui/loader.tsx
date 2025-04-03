export const Loader = (): JSX.Element => {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-white z-50" // Garante que fique sobreposto e centralizado
            role="status" // Para acessibilidade
            aria-live="polite" // Para acessibilidade
        >
            {/* Exemplo com spinner Tailwind */}
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-azul-marinho"></div>

            {/* Ou um texto simples */}
            {/* <p className="text-xl text-azul-marinho">Carregando...</p> */}

            {/* Adicione seu SVG ou animação preferida aqui */}
        </div>
    );
};