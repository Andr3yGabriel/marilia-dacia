import { CheckCircleIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const AboutUsSection = (): JSX.Element => {
  const credentials = [
    { id: 1, text: "RQE Clínica Médica: 61.679" },
    { id: 2, text: "RQE Pneumologia: 61.680" },
  ];

  return (
    <section className="relative w-full py-24 bg-azul-marinho">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="relative w-full max-w-[553px]">
          <div className="relative h-[897px]">
            <img
              className="absolute w-24 h-[95px] top-0 left-0"
              alt="Elipses"
              src="/elipses.png"
            />
            <img
              className="absolute w-24 h-[95px] top-0 left-[66px]"
              alt="Elipses"
              src="/elipses-1.png"
            />
            <img
              className="absolute w-14 h-24 top-[801px] left-[405px]"
              alt="Elipses"
              src="/elipses-2.png"
            />
            <img
              className="absolute w-[74px] h-24 top-[801px] left-[479px]"
              alt="Elipses"
              src="/elipses-3.png"
            />
            <div
              className="absolute w-[486px] h-[783px] top-[53px] left-9 rounded-[15px] bg-cover bg-center"
              style={{ backgroundImage: "url(/frame-48.png)" }}
            />
          </div>
        </div>

        <Card className="w-full max-w-[667px] bg-transparent border-none shadow-none">
          <CardContent className="p-0 space-y-8">
            {/* Doctor's Name */}
            <div className="flex items-center gap-[10px]">
              <img
                className="relative w-[2px]"
                alt="Line"
                src="/line-2.svg"
              />
              <h2 className="font-['Playfair_Display',Helvetica] text-[40px] leading-10 text-branco">
                <span className="tracking-[2.24px]">Prazer, </span>
                <span className="font-bold tracking-[2.24px]">
                  Dra. Marília Dácia.
                </span>
              </h2>
            </div>

            {/* Doctor's Bio */}
            <div className="space-y-8">
              <p className="font-h6-lato text-branco tracking-[var(--h6-lato-letter-spacing)] leading-[var(--h6-lato-line-height)]">
                Com uma trajetória dedicada à promoção da saúde e ao cuidado
                individualizado, atuo na área médica desde 2012, oferecendo
                atendimento humanizado e de excelência.
                <br />
                <br />
                Sou formada em Medicina pela Unicastelo, onde também concluí
                minha residência em Clínica Médica. Posteriormente, me
                especializei em Pneumologia no renomado Hospital das Clínicas de
                Ribeirão Preto (HCFMRP/USP).
                <br />
                <br />
                Também sou docente responsável por lecionar as aulas da
                disciplina de Pneumologia na Universidade Brasil.
                <br />
                <br />
                Atualmente, atendo como Clínico Geral e Pneumologista,
                auxiliando pacientes no diagnóstico, tratamento e acompanhamento
                de diversas doenças respiratórias, sempre com foco na qualidade
                de vida e bem-estar.
              </p>
            </div>

            {/* Doctor's Credentials */}
            <div className="flex flex-col gap-6">
              {credentials.map((credential) => (
                <div key={credential.id} className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <CheckCircleIcon className="w-[25px] h-[25px] text-branco" />
                    <span className="font-h6-lato text-branco tracking-[var(--h6-lato-letter-spacing)] leading-[var(--h6-lato-line-height)]">
                      {credential.text}
                    </span>
                  </div>
                  <Separator className="bg-branco/20 h-px" />
                </div>
              ))}
            </div>

            {/* Doctor's Commitment */}
            <p className="font-['Lato',Helvetica] font-bold text-branco text-[19px] tracking-[2.66px]">
              Meu compromisso é oferecer um atendimento de excelência, baseado
              na ciência, empatia e inovação. Se você busca uma avaliação médica
              cuidadosa, estarei à disposição para ajudá-lo(a).
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
