import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      text: "Desde a recepção até a consulta , fui muito bem atendido. A equipe é atenciosa e o ambiente da clínica transmite muita tranquilidade. Recomendo de olhos fechados.",
      author: "Lucas Souza",
      variant: "white",
    },
    {
      id: 2,
      text: "Fiquei impressionada com o nível de cuidado e profissionalismo dos médicos. Além da excelente estrutura, o atendimento foi humano e personalizado.",
      author: "Letícia Costa",
      variant: "blue",
    },
    {
      id: 3,
      text: "A clínica é muito bem organizada, limpa e confortável. O atendimento foi ágil e eficiente, e toda a equipe demonstrou empatia e dedicação.",
      author: "Paulo Victor",
      variant: "white",
    },
  ];

  return (
    <section className="relative w-full py-16 [background:url(..//relatos.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(241,244,248,1)_0%,rgba(241,244,248,1)_100%)]">
      <div className="flex flex-col items-center gap-6 mb-16 px-4">
        <h2 className="font-h1-lato font-[number:var(--h1-lato-font-weight)] text-azul-marinho text-[length:var(--h1-lato-font-size)] text-center tracking-[var(--h1-lato-letter-spacing)] leading-[var(--h1-lato-line-height)] [font-style:var(--h1-lato-font-style)]">
          O que dizem nossos pacientes
        </h2>
        <p className="max-w-[750px] font-h6-lato font-[number:var(--h6-lato-font-weight)] text-azul-marinho text-[length:var(--h6-lato-font-size)] text-center tracking-[var(--h6-lato-letter-spacing)] leading-[var(--h6-lato-line-height)] [font-style:var(--h6-lato-font-style)]">
          Promover a conscientização sobre a saúde pulmonar e incentivar hábitos
          que melhoram a qualidade de vida de cada paciente.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className={`w-[340px] shadow-[0px_4px_4px_#00000040] rounded-lg ${
              testimonial.variant === "blue" ? "bg-azul-marinho" : "bg-white"
            }`}
          >
            <CardContent className="flex flex-col items-start gap-8 p-8">
              <img
                className="flex-[0_0_auto]"
                alt="Citação"
                src="/cita--o.svg"
              />
              <p
                className={`self-stretch font-h6-lato font-[number:var(--h6-lato-font-weight)] text-center tracking-[var(--h6-lato-letter-spacing)] leading-[var(--h6-lato-line-height)] [font-style:var(--h6-lato-font-style)] ${
                  testimonial.variant === "blue"
                    ? "text-white"
                    : "text-azul-marinho"
                } text-[length:var(--h6-lato-font-size)]`}
              >
                {testimonial.text}
              </p>
              <p
                className={`self-stretch [font-family:'Lato',Helvetica] font-medium text-[23px] text-right tracking-[3.22px] leading-[normal] ${
                  testimonial.variant === "blue"
                    ? "text-white"
                    : "text-azul-marinho"
                }`}
              >
                {testimonial.author}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
