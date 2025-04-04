import { Card, CardContent } from "../../components/ui/card"; // Ajuste o caminho se necessário
import { AboutUsSection } from "./sections/AboutUsSection";
import { FaqSection } from "./sections/FaqSection/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { GallerySection } from "./sections/GallerySection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { LocationSection } from "./sections/LocationSection";
import { MissionSection } from "./sections/MissionSection/MissionSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
// import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection"; // Descomente se for usar

export const MockupCompleto = (): JSX.Element => {
  // Dados dos logos dos parceiros para a seção "Convênios atendidos"
  const partnerLogos = [
    { src: "/logo-caasp-800x480-1.png", alt: "Logo CAASP", width: "w-20" },
    { src: "/logo-bensaude-1.png", alt: "Logo BenSaúde", width: "w-[269.33px]" },
    { src: "/image-1.png", alt: "Logo Unimed", width: "w-24" }, // Assumindo Unimed pelo nome da imagem genérica
    { src: "/logofundobranco--1--1.png", alt: "Logo Bradesco Saúde", width: "w-[213.76px]" }, // Assumindo Bradesco pelo nome
    { src: "/apas-fernandopolis-logo--1--1.png", alt: "Logo Apas Fernandópolis", width: "w-[181.15px]" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      {/* Container principal da página */}
      <div className="bg-white overflow-x-hidden w-full relative">

        {/* Cabeçalho Fixo */}
        <HeaderSection />

        {/* Seção Hero*/}
        <section aria-labelledby="hero-heading"> {/* Adicionado aria-labelledby para acessibilidade */}
          {/* Poderia adicionar um h1 invisível aqui se HeroSection não tiver um */}
          {/* <h1 id="hero-heading" className="sr-only">Bem-vindo à Clínica Marília Dácia</h1> */}
          <HeroSection />
        </section>

        {/* Seção de Serviços (Especialidades) */}
        {/* ID para navegação: "especialidades" */}
        <section id="especialidades" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">Nossas Especialidades e Serviços</h2> {/* Título oculto para leitores de tela */}
          <ServicesSection />
        </section>

        {/* Seção Sobre Nós */}
        {/* ID para navegação: "sobre" */}
        <section id="sobre" aria-labelledby="about-us-heading">
          <h2 id="about-us-heading" className="sr-only">Sobre a Dra. Marília Dácia</h2>
          <AboutUsSection />
        </section>

        {/* Seção da Galeria */}
        {/* Sem ID de navegação no momento */}
        <GallerySection />

        {/* Seção Missão/Valores */}
        {/* Sem ID de navegação no momento */}
        <MissionSection />

        {/* Seção FAQ */}
        {/* Sem ID de navegação no momento */}
        <FaqSection />

        {/* Seção de Depoimentos (Comentada) */}
        {/* Descomente e adicione ID se necessário */}
        {/*
        <section id="depoimentos" aria-labelledby="testimonials-heading">
           <h2 id="testimonials-heading" className="sr-only">O que nossos pacientes dizem</h2>
           <TestimonialsSection />
        </section>
        */}

        {/* Seção de Localização */}
        {/* Sem ID de navegação direto, mas parte de "Contato" visualmente */}
        <section id="contato" aria-labelledby="location-heading">
          <h2 id="location-heading" className="sr-only">Nossos Contatos</h2>
          <LocationSection />
        </section>

        <div className="w-full h-auto py-20" style={{ background: "linear-gradient(rgba(241, 244, 248, 0.9), rgba(241, 244, 248, 0.9)), url('/background.png') 0px -2.646px / 100% 258.847% no-repeat, #F1F4F8" }}> {/* Ajustado altura para auto e adicionado padding vertical */}
          <Card className="border-none shadow-none bg-transparent max-w-6xl mx-auto"> {/* Adicionado max-width e centralização */}
            <CardContent className="flex flex-col items-center justify-center h-full p-4 md:p-0">
              <h2 className="font-h1-lato font-[number:var(--h1-lato-font-weight)] text-azul-marinho text-[length:var(--h1-lato-font-size)] text-center tracking-[var(--h1-lato-letter-spacing)] leading-[var(--h1-lato-line-height)] [font-style:var(--h1-lato-font-style)] mb-16 md:mb-24">
                Convênios atendidos
              </h2>

              {/* Container dos logos com wrap */}
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-10"> {/* Adicionado flex-wrap e ajustado gaps */}
                {partnerLogos.map((logo, index) => (
                  <img
                    key={index}
                    className={`relative object-contain h-10 md:h-12 ${logo.width} max-w-full flex-shrink-0`}
                    alt={logo.alt}
                    src={logo.src}
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
  );
};