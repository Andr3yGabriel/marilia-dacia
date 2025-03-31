import { Button } from "../../../../components/ui/button"; // Ajuste o caminho se necessário
import { Card, CardContent } from "../../../../components/ui/card"; // Ajuste o caminho se necessário

// Dados dos cards
const missionCards = [
  {
    id: 1,
    icon: "/estetocopio.png",
    title: "Atendimento\nHumanizado",
    description:
      "Aqui, cada paciente é único. Nosso atendimento humanizado, profissionalismo e cuidado para garantir sua melhor experiência.",
  },
  {
    id: 2,
    iconType: "svg",
    title: "Consultas Presenciais",
    description:
      "Receba um atendimento personalizado em um ambiente confortável. Nossa equipe está pronta para cuidar de você com atenção e profissionalismo",
  },
  {
    id: 3,
    icon: "/estetocopio-1.png",
    title: "Especialidades",
    description:
      "Especializados em saúde respiratória, oferecemos um atendimento completo em pneumologia para diagnóstico, tratamento e acompanhamento.",
  },
];

export const MissionSection = (): JSX.Element => {
  // Definindo o link do WhatsApp para reutilização
  const whatsappLink = "https://wa.me/5517996623823";

  return (
    <section className="relative w-full py-24" style={{ background: "linear-gradient(rgba(241, 244, 248, 0.8), rgba(241, 244, 248, 0.8)), url('/background.png') 0px -2.646px / 100% 258.847% no-repeat, #F1F4F8" }}>
      <div className="flex flex-col items-center gap-6 mb-16 px-4">
        <h1 className="font-h1-lato font-[number:var(--h1-lato-font-weight)] text-azul-marinho text-[length:var(--h1-lato-font-size)] text-center tracking-[var(--h1-lato-letter-spacing)] leading-[var(--h1-lato-line-height)] [font-style:var(--h1-lato-font-style)]">
          Por que escolher nossa clínica?
        </h1>
        {/* --- Estilos de fonte originais restaurados --- */}
        <p className="max-w-[750px] font-h6-lato font-[number:var(--h6-lato-font-weight)] text-azul-marinho text-[length:var(--h6-lato-font-size)] text-center tracking-[var(--h6-lato-letter-spacing)] leading-[var(--h6-lato-line-height)] [font-style:var(--h6-lato-font-style)]">
          Oferecemos atendimento humanizado, consultas especializadas em
          pneumologia e uma equipe dedicada ao seu bem-estar. Aqui, sua saúde
          respiratória está em boas mãos!
        </p>
      </div>

      {/* Seção dos Cards */}
      <div className="flex justify-center flex-wrap gap-8 md:gap-16 mb-16 px-4">
        {missionCards.map((card) => (
          <Card
            key={card.id}
            className="bg-white rounded-xl shadow-[0px_4px_4px_#00000040] w-[342px] max-w-full"
          >
            <CardContent className="flex flex-col items-center justify-start gap-[22px] p-8 h-full">
              {/* Lógica do Ícone */}
              {card.iconType === "svg" ? (
                <div className="relative w-[78px] h-[78px] flex-shrink-0">
                  <div className="h-[78px]">
                    <div className="relative w-[60px] h-[67px] top-1.5 left-[9px]">
                      <img
                        className="absolute w-12 h-[54px] top-0 left-1.5"
                        alt="Ícone Consulta"
                        src="/subtract.svg"
                      />
                      <img
                        className="absolute w-[60px] h-[17px] top-[50px] left-0"
                        alt=""
                        src="/ellipse-40.svg"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={card.icon}
                  alt={`Ícone para ${card.title}`}
                  className="relative w-[78px] h-[78px] object-contain flex-shrink-0"
                />
              )}

              {/* --- Estilos de fonte originais restaurados --- */}
              <h3 className="self-stretch font-h3-lato font-[number:var(--h3-lato-font-weight)] text-azul-marinho text-[length:var(--h3-lato-font-size)] text-center tracking-[var(--h3-lato-letter-spacing)] leading-[var(--h3-lato-line-height)] [font-style:var(--h3-lato-font-style)] whitespace-pre-line">
                {card.title}
              </h3>

              {/* --- Estilos de fonte originais restaurados --- */}
              <p className="self-stretch font-h5-playfair font-[number:var(--h5-playfair-font-weight)] text-azul-marinho text-[length:var(--h5-playfair-font-size)] text-center tracking-[var(--h5-playfair-letter-spacing)] leading-[var(--h5-playfair-line-height)] [font-style:var(--h5-playfair-font-style)]">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Botão CTA (Call to Action) */}
      <div className="flex justify-center mt-8 px-4">
        <Button
          asChild
          className="bg-azul-marinho text-branco hover:bg-azul-marinho/90 rounded-[5px] px-8 py-4 shadow-md"
          style={{ padding: "30px" }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* --- Estilos de fonte originais restaurados --- */}
            <span className="font-h3-playfair font-[number:var(--h3-playfair-font-weight)] text-[length:var(--h3-playfair-font-size)] text-center tracking-[var(--h3-playfair-letter-spacing)] leading-[var(--h3-playfair-line-height)] [font-style:var(--h3-playfair-font-style)]">
              Reserve seu horário
            </span>
          </a>
        </Button>
      </div>
    </section>
  );
};