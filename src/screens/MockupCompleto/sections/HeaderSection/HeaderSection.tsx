import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  // NavigationMenuLink, // We'll use a button for the click handler
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu"; // Assuming path is correct

export const HeaderSection = (): JSX.Element => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const headerHeight = 70; // Define header height for scroll offset

  // --- MODIFICATION: Use objects with labels and target IDs ---
  const navItems = [
    { label: "Nossas Especialidades", targetId: "especialidades" },
    { label: "Sobre", targetId: "sobre" },
    { label: "Contato", targetId: "contato" }, // Ensure this ID exists (e.g., on FooterSection or LocationSection)
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Hide header when scrolling down past 150px
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // --- ADDITION: Smooth scroll function with offset ---
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.warn(`Scroll target element with id "${id}" not found.`);
    }
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: `-${headerHeight}px`, opacity: 0 }, // Use dynamic height
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 w-full bg-[#003b7366] shadow-[0px_4px_4px_#00000040] backdrop-blur-sm z-50"
      style={{ height: `${headerHeight}px`, padding: "10px" }}
    >
      <div className="flex items-center justify-between h-full max-w-[1275px] mx-auto">
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
      </div>
    </motion.header>
  );
};