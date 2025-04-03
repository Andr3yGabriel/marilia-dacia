import { useState, useEffect } from "react"; // Importe useState e useEffect
import { Card, CardContent } from "../../components/ui/card";
import { AboutUsSection } from "./sections/AboutUsSection";
import { FaqSection } from "./sections/FaqSection/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { GallerySection } from "./sections/GallerySection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { LocationSection } from "./sections/LocationSection";
import { MissionSection } from "./sections/MissionSection/MissionSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
// import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { Loader } from "../../components/ui/loader"; // <-- Importe seu componente Loader

export const MockupCompleto = (): JSX.Element => {
  // Estado para controlar a visibilidade do loader
  const [isLoading, setIsLoading] = useState(true);

  // Dados dos logos dos parceiros (mantido como no original)
  const partnerLogos = [
    { src: "/logo-caasp-800x480-1.png", alt: "Logo CAASP", width: "w-20" },
    { src: "/logo-bensaude-1.png", alt: "Logo BenSaúde", width: "w-[269.33px]" },
    { src: "/image-1.png", alt: "Logo Unimed", width: "w-24" },
    { src: "/logofundobranco--1--1.png", alt: "Logo Bradesco Saúde", width: "w-[213.76px]" },
    { src: "/apas-fernandopolis-logo--1--1.png", alt: "Logo Apas Fernandópolis", width: "w-[181.15px]" },
  ];

  // Efeito para detectar o fim do carregamento da página
  useEffect(() => {
    const handleLoad = () => {
      console.log("Página e recursos carregados."); // Log para depuração
      setIsLoading(false); // Esconde o loader
    };

    // Verifica se a página já carregou (caso de cache rápido)
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Adiciona o listener para o evento 'load' da janela
      window.addEventListener('load', handleLoad);
      console.log("Listener 'load' adicionado."); // Log para depuração

      // Função de limpeza: remove o listener quando o componente desmontar
      return () => {
        window.removeEventListener('load', handleLoad);
        console.log("Listener 'load' removido."); // Log para depuração
      };
    }
  }, []); // Array de dependências vazio garante que o efeito execute apenas uma vez (montagem/desmontagem)

  return (
    // Usar Fragment <>...</> para renderizar o Loader OU o conteúdo
    <>
      {/* Renderiza o Loader se isLoading for true */}
      {isLoading && <Loader />}

      {/* Renderiza o conteúdo principal APENAS se isLoading for false */}
      {/* Você pode adicionar uma transição de opacidade se quiser */}
      {!isLoading && (
        <div className="bg-white flex flex-row justify-center w-full">
          {/* Container principal da página */}
          {/* A visibilidade agora é controlada pela condição !isLoading acima */}
          <div className="bg-white overflow-x-hidden w-full relative">

            {/* Cabeçalho Fixo */}
            <HeaderSection />

            {/* Seção Hero*/}
            <section aria-labelledby="hero-heading">
              <HeroSection />
            </section>

            {/* Seção de Serviços (Especialidades) */}
            <section id="especialidades" aria-labelledby="services-heading">
              <h2 id="services-heading" className="sr-only">Nossas Especialidades e Serviços</h2>
              <ServicesSection />
            </section>

            {/* Seção Sobre Nós */}
            <section id="sobre" aria-labelledby="about-us-heading">
              <h2 id="about-us-heading" className="sr-only">Sobre a Dra. Marília Dácia</h2>
              <AboutUsSection />
            </section>

            {/* Seção da Galeria */}
            <GallerySection />

            {/* Seção Missão/Valores */}
            <MissionSection />

            {/* Seção FAQ */}
            <FaqSection />

            {/* Seção de Depoimentos (Comentada) */}
            {/* ... */}

            {/* Seção de Localização */}
            <section id="contato" aria-labelledby="location-heading">
              <h2 id="location-heading" className="sr-only">Nossos Contatos</h2>
              <LocationSection />
            </section>

            {/* Seção de Convênios */}
            <div className="w-full h-auto py-20" style={{ background: "linear-gradient(rgba(241, 244, 248, 0.9), rgba(241, 244, 248, 0.9)), url('/background.png') 0px -2.646px / 100% 258.847% no-repeat, #F1F4F8" }}>
              <Card className="border-none shadow-none bg-transparent max-w-6xl mx-auto">
                <CardContent className="flex flex-col items-center justify-center h-full p-4 md:p-0">
                  <h2 className="font-h1-lato font-[number:var(--h1-lato-font-weight)] text-azul-marinho text-[length:var(--h1-lato-font-size)] text-center tracking-[var(--h1-lato-letter-spacing)] leading-[var(--h1-lato-line-height)] [font-style:var(--h1-lato-font-style)] mb-16 md:mb-24">
                    Convênios atendidos
                  </h2>
                  <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-10">
                    {partnerLogos.map((logo, index) => (
                      <img
                        key={index}
                        className={`relative object-contain h-10 md:h-12 ${logo.width} max-w-full flex-shrink-0`}
                        alt={logo.alt}
                        src={logo.src}
                      // Adicionar loading="lazy" pode ajudar se houver muitas imagens,
                      // mas o window.onload já espera por elas por padrão.
                      // loading="lazy"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Seção do Rodapé */}
            <FooterSection />

          </div> {/* Fim do container principal da página */}
        </div> // Fim do container flex root
      )}
    </>
  );
};