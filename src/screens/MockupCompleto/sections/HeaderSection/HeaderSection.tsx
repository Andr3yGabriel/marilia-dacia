import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X as XIcon } from "lucide-react"; // Ícones para o hambúrguer

// Seu import do navigation-menu (não precisa mudar nada nele)
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = (): JSX.Element => {
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para o menu móvel
  const { scrollY } = useScroll();
  const headerHeight = 70;

  const navItems = [
    { label: "Nossas Especialidades", targetId: "especialidades" },
    { label: "Sobre", targetId: "sobre" },
    { label: "Contato", targetId: "contato" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Esconde o header ao rolar para baixo após 150px
    // Fecha o menu móvel se estiver aberto ao começar a rolar para baixo
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
      setIsMobileMenuOpen(false); // Fecha o menu ao rolar para baixo
    } else {
      setHidden(false);
    }
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false); // Fecha o menu móvel após clicar em um link
    } else {
      console.warn(`Scroll target element with id "${id}" not found.`);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: `-${headerHeight}px`, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        // Estilo do header mantido
        className="fixed top-0 left-0 right-0 w-full bg-[#003b7366] shadow-[0px_4px_4px_#00000040] backdrop-blur-sm z-50"
        style={{ height: `${headerHeight}px` }} // Padding removido daqui e colocado no container interno
      >
        <div className="flex items-center justify-between h-full max-w-[1275px] mx-auto px-4 sm:px-6 lg:px-8"> {/* Adicionado padding responsivo */}
          {/* Logo - mantido como está */}
          <motion.div
            className="flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Voltar ao topo"
            style={{ cursor: "pointer" }}
          >
            <img
              className="w-[34px] h-[32px]"
              alt="Logo Marília Dácia"
              src="favicon.svg"
            />
            <div className="ml-[11px]">
              <div className="[font-family:'Playfair_Display_SC',Helvetica] font-normal text-[#f1f4f8] text-2xl text-center tracking-[0] leading-[normal]">
                Marília Dácia
              </div>
              <div className="[font-family:'Lato',Helvetica] font-normal text-[#f1f4f8] text-[10.5px] tracking-[0.87px] leading-[normal]">
                Pneumologista
              </div>
            </div>
          </motion.div>

          {/* Navegação Desktop - Escondida em telas pequenas */}
          <nav className="hidden md:flex items-center"> {/* Usando tag nav semântica */}
            <NavigationMenu>
              <NavigationMenuList className="flex gap-10">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.targetId}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.targetId)}
                        // Estilo do botão mantido
                        className="font-h6-lato font-[number:var(--h6-lato-font-weight)] text-branco text-[length:var(--h6-lato-font-size)] text-center tracking-[var(--h6-lato-letter-spacing)] leading-[var(--h6-lato-line-height)] [font-style:var(--h6-lato-font-style)] cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-branco after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus-visible:after:w-full"
                        aria-label={`Ir para a seção ${item.label}`}
                      >
                        {item.label}
                      </button>
                    </motion.div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Ícone WhatsApp - movido para ficar junto com o botão do menu em telas menores */}
          <div className="flex items-center gap-4"> {/* Container para agrupar botão e Wpp */}
            <motion.a
              href="https://wa.me/5517996623823"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              aria-label="Abrir WhatsApp"
            >
              <img className="w-[40px] h-[40px] cursor-pointer" alt="WhatsApp" src="/wpp-2.svg" />
            </motion.a>

            {/* Botão Hambúrguer - Visível apenas em telas pequenas */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-[#f1f4f8] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Dropdown Menu Móvel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            // Estilo do dropdown - posicionado abaixo do header
            className="fixed md:hidden top-[70px] left-0 right-0 w-full bg-[#003b73e6] shadow-lg backdrop-blur-sm z-40" // z-40 para ficar abaixo do header (z-50)
          >
            <nav className="flex flex-col items-center px-4 py-4 space-y-4"> {/* Usando nav semântico */}
              {navItems.map((item) => (
                <button
                  key={item.targetId}
                  onClick={() => scrollToSection(item.targetId)}
                  // Estilo similar aos botões do desktop, mas adaptado para mobile
                  className="w-full text-center py-2 font-h6-lato font-[number:var(--h6-lato-font-weight)] text-branco text-[length:var(--h6-lato-font-size)] tracking-[var(--h6-lato-letter-spacing)] leading-[var(--h6-lato-line-height)] [font-style:var(--h6-lato-font-style)] cursor-pointer hover:bg-[#f1f4f8]/10 rounded-md focus:outline-none focus:bg-[#f1f4f8]/20 transition-colors duration-200"
                  aria-label={`Ir para a seção ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};