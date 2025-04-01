export const FooterSection = (): JSX.Element => {
  // A data informada (1 de Abril de 2025) resulta no ano 2025.
  // Usando a data atual do sistema para o ano:
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Wpp",
      src: "/wpp.png", // Confirme se o ícone é .png ou .svg
      alt: "WhatsApp",
      href: "https://wa.me/5517996623823"
    },
    {
      name: "Insta",
      src: "/insta.png", // Confirme se o ícone é .png ou .svg
      alt: "Instagram",
      href: "https://www.instagram.com/dramariliapneumo/"
    },
  ];

  return (
    // Footer com padding vertical e cor de fundo
    <footer className="w-full bg-azul-marinho py-8 md:py-6"> {/* Aumentar padding vertical base */}

      {/* Container principal: muda de coluna para linha no breakpoint 'md' */}
      <div className="container mx-auto px-4 flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4"> {/* Adicionado gap-6 base, md:gap-4 */}

        {/* Esquerda: Logo e Nome */}
        {/* Adicionado text-center para mobile e md:text-left para desktop */}
        <div className="flex flex-col items-center md:flex-row md:items-center text-center md:text-left">
          <img
            alt="Logo Marília Dácia" // Alt text descritivo
            src="/favicon.svg" // Verifique o caminho
            // Tamanho responsivo opcional ou manter fixo com shrink-0
            className="w-[48px] h-[46px] md:w-[54px] md:h-[52px] flex-shrink-0 mb-2 md:mb-0" // Tamanho menor base, margem inferior base
          />
          {/* Ajustado ml-0 base e md:ml-3 */}
          <div className="md:ml-3 text-gray-100">
            {/* Ajustado tamanho da fonte para mobile */}
            <div className="font-playfair-sc text-2xl md:text-3xl"> {/* font-playfair-sc precisa estar configurada */}
              Marília Dácia
            </div>
            {/* Ajustado tamanho da fonte e tracking */}
            <div className="font-lato text-xs md:text-sm tracking-normal md:tracking-wide"> {/* font-lato precisa estar configurada */}
              Pneumologista
            </div>
          </div>
        </div>

        {/* Meio: Copyright (com ano dinâmico) */}
        {/* Adicionado padding vertical em mobile para separar, removido em desktop */}
        <div className="font-lato text-xs md:text-sm text-gray-100 text-center py-2 md:py-0 order-last md:order-none"> {/* Order-last para mobile */}
          &copy; {currentYear} Marília Dácia. Todos os direitos reservados.
        </div>

        {/* Direita: Ícones Sociais */}
        {/* Adicionado padding vertical em mobile */}
        <div className="flex items-center gap-5 py-2 md:py-0">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.alt} // Acessibilidade
              // Hover sutil
              className="text-gray-100 transition-opacity duration-200 hover:opacity-75"
            >
              <img
                // Ícones ligeiramente menores em mobile
                className="w-[36px] h-[36px] md:w-[40px] md:h-[40px]"
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