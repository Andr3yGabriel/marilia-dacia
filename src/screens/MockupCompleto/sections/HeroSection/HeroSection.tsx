import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  const whatsappLink = "https://wa.me/5517996623823";

  return (
    <section
      className="relative w-full h-screen [background:linear-gradient(180deg,rgba(0,59,115,0.4)_0%,rgba(0,0,0,0)_100%),linear-gradient(90deg,rgba(0,59,115,0.65)_0%,rgba(241,244,248,0)_100%),url(/wireframe---landing-page-mobile.jpg)_50%_50%_/_cover] md:[background:linear-gradient(180deg,rgba(0,59,115,0.4)_0%,rgba(0,0,0,0)_100%),linear-gradient(90deg,rgba(0,59,115,0.65)_0%,rgba(241,244,248,0)_100%),url(/wireframe---landing-page.png)_50%_50%_/_cover] bg-center bg-cover"
    >
      <div className="container flex flex-col w-full max-w-[608px] items-start gap-8 absolute bottom-12 md:bottom-16 left-1/2 md:left-auto md:translate-x-0 md:ml-16 lg:ml-24 px-4 md:px-0 top-1/2 -translate-y-1/2 -translate-x-1/2 ">
        <h1 className="self-stretch text-branco text-4xl md:text-5xl tracking-[1.23px] leading-tight md:leading-normal text-center md:text-left font-h1-lato">
          Nossa clínica entende que não há bem maior do que a{" "}
          <span className="font-bold">vida</span>
        </h1>
        <p className="w-full max-w-[318px] text-branco text-center md:text-left mx-auto md:mx-0 font-h6-lato">
          Buscamos os melhores serviços de atendimento médico para as doenças
          respiratórias.
        </p>
        <div className="w-full flex justify-center md:justify-start">
          <Button
            asChild
            className="bg-dourado hover:bg-dourado/90 rounded-[15px] px-6 py-2 shadow-[0px_4px_4px_#00000040] h-auto transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="self-stretch font-h5-playfair font-[number:var(--h5-playfair-font-weight)] text-branco text-[length:var(--h5-playfair-font-size)] text-center tracking-[var(--h5-playfair-letter-spacing)] leading-[var(--h5-playfair-line-height)] [font-style:var(--h5-playfair-font-style)]">
                Agendar consulta
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};