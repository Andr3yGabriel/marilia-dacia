import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FaqSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "O que faz um pneumologista?",
      answer:
        "Um pneumologista é um médico especializado no diagnóstico e tratamento de doenças respiratórias e pulmonares.",
    },
    {
      question: "O que é DPOC?",
      answer:
        "DPOC (Doença Pulmonar Obstrutiva Crônica) é uma condição inflamatória pulmonar que causa obstrução do fluxo de ar dos pulmões.",
    },
    {
      question: "É possível prevenir a Pneumonia?",
      answer:
        "Sim, é possível prevenir a pneumonia através de vacinação, boa higiene das mãos, e evitando o tabagismo.",
    },
    {
      question: "O ronco prejudica os pulmões?",
      answer:
        "O ronco em si não prejudica diretamente os pulmões, mas pode ser um sintoma de apneia do sono, que pode afetar a saúde respiratória.",
    },
  ];

  return (
    <section className="relative w-full py-24" style={{ background: "linear-gradient(rgba(0, 59, 115, 0.8), rgba(0, 59, 115, 0.8)), url('/background.png') 0px -2.646px / 100% 258.847% no-repeat, #003b73" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-center font-h1-lato font-[number:var(--h1-lato-font-weight)] text-branco text-[length:var(--h1-lato-font-size)] tracking-[var(--h1-lato-letter-spacing)] leading-[var(--h1-lato-line-height)] [font-style:var(--h1-lato-font-style)] mb-16">
          Perguntas frequentes
        </h2>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-8">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-[20px] px-[25px] py-[21px] border-none"
              >
                <AccordionTrigger className="flex justify-between items-center w-full no-underline hover:no-underline">
                  <span className="font-h3-lato font-[number:var(--h3-lato-font-weight)] text-azul text-[length:var(--h3-lato-font-size)] tracking-[var(--h3-lato-letter-spacing)] leading-[var(--h3-lato-line-height)] [font-style:var(--h3-lato-font-style)]">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-azul">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};