import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const LocationSection = (): JSX.Element => {
  const whatsappLink = "https://wa.me/5517996623823";

  const googleMapsDirectionsLink = "https://www.google.com/maps/dir/?api=1&destination=Rua%20Doze%2C%202047%2C%20Centro%2C%20Jales%2C%20SP";

  const googleMapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.71831139218!2d-50.54981468499808!3d-20.27705498641966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9497e1a64f7f8c7b%3A0x5f6d7c4f8c6f27d1!2sR.%20Doze%2C%202047%20-%20Centro%2C%20Jales%20-%20SP%2C%2015700-096!5e0!3m2!1spt-BR!2sbr!4v1678886000000!5m2!1spt-BR!2sbr";

  const contactItems = [
    {
      icon: "/wpp-1.png",
      title: "Mande mensagem ou nos ligue",
      content: "(17) 3632-8851 ou (17) 99662-3823",
      alt: "WhatsApp icon",
      isLink: false,
    },
    {
      icon: "/mail.png",
      title: "Nosso e-mail",
      content: "dramarilia.contato@gmail.com",
      alt: "Email icon",
      isLink: false,
    },
    {
      icon: "/rota.png",
      title: "Jales - SP",
      content: "Veja a rota para o consultório",
      alt: "Location icon",
      isLink: true,
      href: googleMapsDirectionsLink,
    },
  ];

  const socialMedia = [
    { icon: "/insta-1.png", alt: "Instagram", href: "https://www.instagram.com/dramariliapneumo/" },
    // { icon: "/uiw-facebook.svg", alt: "Facebook", href: "#" },
    // { icon: "/vector-2.svg", alt: "YouTube", href: "#" },
  ];

  return (
    <section className="relative w-full py-5">
      <div className="flex flex-col items-center gap-16 mb-16 px-4">
        {/* Título da Seção */}
        <h1 className="font-h1-lato font-[number:var(--h1-lato-font-weight)] text-azul-marinho text-[length:var(--h2-lato-font-size)] md:text-[length:var(--h1-lato-font-size)] text-center tracking-[var(--h1-lato-letter-spacing)] leading-[var(--h1-lato-line-height)] [font-style:var(--h1-lato-font-style)]">
          Nossos Contatos
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 w-full max-w-6xl mx-auto lg:items-start">

          {/* Coluna da Esquerda (Contatos, Botão, Redes Sociais) */}
          <div className="flex flex-col gap-8">
            {/* Itens de Contato (com renderização condicional para link) */}
            {contactItems.map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-none bg-transparent"
              >
                <CardContent className="p-0">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-[67px] h-[67px] object-contain flex-shrink-0"
                      alt={item.alt}
                      src={item.icon}
                    />
                    <div className="flex flex-col gap-1 md:gap-2">
                      <h6 className="text-azul-marinho font-h6-lato">
                        {item.title}
                      </h6>
                      {item.isLink ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-azul-marinho text-branco font-h5-playfair py-1 px-3 rounded-[5px] shadow-[0px_2px_3px_#00000030] transition duration-300 ease-in-out transform hover:bg-dourado/90 hover:scale-105 active:scale-95"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-azul-marinho font-p-lato">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button
              asChild
              className="bg-dourado text-branco hover:bg-dourado/90 rounded-[5px] shadow-[0px_4px_4px_#00000040] transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 max-w-[350px]"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-h3-playfair text-xl font-medium">
                  AGENDAR CONSULTA
                </span>
              </a>
            </Button>

            {/* Redes Sociais */}
            <div className="mt-8">
              <h5 className="text-azul-marinho mb-6 font-h5-lato">
                Veja nossas redes sociais
              </h5>
              <div className="flex gap-6">
                {socialMedia.map((social, index) => (
                  <a key={index} href={social.href || '#'} target="_blank" rel="noopener noreferrer" aria-label={social.alt}>
                    <img
                      className="w-[49px] h-[49px] transition-opacity hover:opacity-80"
                      alt={social.alt}
                      src={social.icon}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna da Direita (Mapa) */}
          <div className="flex flex-col items-center w-full">
            {/* Título do Mapa (tamanho e margem ajustados) */}
            <h2 className="text-azul-marinho font-h3-lato text-3xl mb-8"> {/* Aumentado tamanho e margem inferior */}
              Jales - SP
            </h2>
            {/* Container do Mapa */}
            <div className="relative w-full h-[450px] max-w-[600px] lg:max-w-none mx-auto lg:mx-0">
              {/* Iframe do Google Maps */}
              <iframe
                src={googleMapsEmbedSrc} // Use a variável com o src do embed
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de localização do consultório em Jales"
                className="rounded-md shadow-md"
              ></iframe>
            </div>
            {/* Endereço Abaixo do Mapa */}
            <p className="text-center text-azul-marinho mt-4 font-h6-lato w-full max-w-[600px] lg:max-w-none mx-auto lg:mx-0">
              R. Doze, 2047 - Centro
            </p>
          </div>

        </div> {/* Fim do Container do Grid */}
      </div>
    </section>
  );
};