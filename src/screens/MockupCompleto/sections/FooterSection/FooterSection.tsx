export const FooterSection = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Wpp",
      src: "/wpp.png",
      alt: "WhatsApp",
      href: "https://wa.me/5517996623823"
    },
    {
      name: "Insta",
      src: "/insta.png",
      alt: "Instagram",
      href: "https://www.instagram.com/dramariliapneumo/"
    },
  ];

  return (
    // Footer com padding vertical e cor de fundo
    <footer className="w-full bg-azul-marinho py-6">
      {/* Container principal: flex, alinhado ao centro verticalmente, justificado com espaço entre, padding horizontal */}
      <div className="container mx-auto px-4 flex items-center justify-between">

        {/* Esquerda: Logo e Nome */}
        <div className="flex items-center">
          <img
            alt="Logo Marília Dácia" // Alt text descritivo
            src="/favicon.svg" // Verifique o caminho
            className="w-[54px] h-[52px] flex-shrink-0"
          />
          <div className="ml-3 text-gray-100"> {/* Cor padrão Tailwind */}
            {/* Idealmente usar classes de fonte configuradas no tailwind.config.js */}
            <div className="font-playfair-sc text-3xl"> {/* Ex: font-playfair-sc */}
              Marília Dácia
            </div>
            <div className="font-lato text-sm tracking-wide"> {/* Ex: font-lato, text-sm */}
              Pneumologista
            </div>
          </div>
        </div>

        {/* Meio: Copyright (com ano dinâmico) */}
        {/* Manter classes originais se 'font-h6-lato' etc. forem definidos e desejados */}
        {/* Ou usar classes padrão Tailwind como abaixo: */}
        <div className="font-lato text-sm text-gray-100 text-center"> {/* Texto centralizado */}
          &copy; {currentYear} Marília Dácia. Todos os direitos reservados.
        </div>

        {/* Direita: Ícones Sociais */}
        <div className="flex items-center gap-5"> {/* Container para os ícones com espaçamento */}
          {socialLinks.map((link) => (
            <a // Link envolve a imagem
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.alt} // Acessibilidade
              className="text-gray-100 transition duration-300 ease-in-out hover:opacity-80 hover:scale-110" // Efeitos de hover
            >
              <img
                className="w-[40px] h-[40px]" // Tamanho dos ícones (ajuste se necessário)
                alt="" // Alt vazio pois o link tem aria-label
                src={link.src}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};