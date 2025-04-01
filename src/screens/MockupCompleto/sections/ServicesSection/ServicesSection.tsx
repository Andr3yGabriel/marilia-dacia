import { Card, CardContent } from "../../../../components/ui/card";

// Define service data for mapping
const services = [
  {
    id: 1,
    icon: "/group-1-1.svg",
    title: "Asma",
    description:
      "A asma é uma condição crônica que causa inflamação nas vias respiratórias, resultando em falta de ar, tosse e chiado no peito. O acompanhamento médico é essencial para o controle dos sintomas.",
  },
  {
    id: 2,
    icon: "/group-2.svg",
    title: "Gripes e resfriados",
    description:
      "Embora semelhantes, gripe e resfriado têm causas diferentes. A gripe costuma ser mais intensa, com febre alta e dores no corpo, enquanto o resfriado é mais leve. O tratamento foca no alívio dos sintomas.",
  },
  {
    id: 3,
    icon: "/vector-3.svg",
    title: "Pneumonia",
    description:
      "A pneumonia é uma infecção pulmonar que pode ser causada por vírus, bactérias ou fungos. Os sintomas incluem febre, tosse e dificuldade para respirar. O diagnóstico precoce é fundamental para o tratamento adequado.",
  },
  {
    id: 4,
    icon: "/group-40.svg",
    title: "Rinite Alérgica",
    description:
      "A rinite alérgica é uma ocorrência exagerada do sistema imunológico a substância como poeira e pólen, causando espirros, visões e coriza. O controle do ambiente e o tratamento médico ajudam a reduzir os sintomas.",
  },
  {
    id: 5,
    icon: "/group.png",
    title: "Tosse Crônica",
    description:
      "Uma tosse persistente por mais de oito semanas pode indicar problemas de infecções como asma, refluxo ou infecções. É importante investigar a causa para um tratamento eficaz.",
  },
  {
    id: 6,
    icon: "/group-1.png",
    title: "Tuberculose",
    description:
      "A tuberculose é uma infecção bacteriana que afeta principalmente os pulmões. Tosse persistente, febre e perda de peso são sinais de alerta. O tratamento é longo, mas essencial para a cura.",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section
      className="relative w-full px-5 py-20"
      style={{
        background: "linear-gradient(rgba(241, 244, 248, 1), rgba(241, 244, 248, 1)), url('/background.png') 0px -2.646px / 100% 258.847% no-repeat, #F1F4F8"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 mb-16 sm:px-5">
          <h1 className="font-h1-lato font-[number:var(--h1-lato-font-weight)] text-azul-marinho text-[length:var(--h1-lato-font-size)] text-center tracking-[var(--h1-lato-letter-spacing)] leading-[var(--h1-lato-line-height)] [font-style:var(--h1-lato-font-style)]">
            Nossas Especialidades
          </h1>

          <p className="max-w-[450px] font-p-lato font-[number:var(--p-lato-font-weight)] text-azul-marinho text-[length:var(--p-lato-font-size)] text-center tracking-[var(--p-lato-letter-spacing)] leading-[var(--p-lato-line-height)] [font-style:var(--p-lato-font-style)]">
            Desejamos que você se sinta seguro(a) e confortável com os cuidados
            recebidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto md:divide-x md:divide-azul-marinho/30">

          {services.map((service) => (
            <Card key={service.id} className="border-none shadow-none bg-transparent md:px-4 lg:px-8">
              <CardContent className="flex flex-col items-center justify-start text-center gap-4 p-0 md:p-4">
                <div className="flex flex-col items-center gap-2 w-full mb-2">
                  <img
                    className="h-[60px] w-auto"
                    alt={service.title}
                    src={service.icon}
                  />
                </div>
                <h3 className="font-h2-lato text-xl font-[number:var(--h2-lato-font-weight)] text-azul-marinho text-[length:var(--h2-lato-font-size)] text-center tracking-[var(--h2-lato-letter-spacing)] leading-[var(--h2-lato-line-height)] [font-style:var(--h2-lato-font-style)]">
                  {service.title}
                </h3>
                <p className="font-h6-playfair text-sm font-[number:var(--h6-playfair-font-weight)] text-azul-marinho text-[length:var(--h6-playfair-font-size)] text-justify [hyphens:auto] tracking-[var(--h6-playfair-letter-spacing)] leading-[var(--h6-playfair-line-height)] [font-style:var(--h6-playfair-font-style)]">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};