import { CheckCircleIcon } from "lucide-react";
import { Separator } from "../../../../components/ui/separator";

export const AboutUsSection = (): JSX.Element => {
  const credentials = [
    { id: 1, text: "RQE Clínica Médica: 61.679" },
    { id: 2, text: "RQE Pneumologia: 61.680" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-azul-marinho py-16 md:py-24" style={{ background: "linear-gradient(rgba(0, 59, 115, 0.8), rgba(0, 59, 115, 0.8)), url('/background.png') 0px -2.646px / 100% 258.847% no-repeat, #003b73" }}>
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-start items-center justify-center lg:justify-between gap-12 lg:gap-16">
        <div className="relative w-full max-w-md lg:max-w-none lg:w-5/12 mx-auto lg:mx-0 order-1 lg:order-none">
          <div
            className="w-full aspect-[486/783] rounded-[15px] bg-cover bg-center shadow-lg mx-auto"
            style={{ backgroundImage: "url(/frame-48.png)" }}
            aria-label="Doutora Marília Dácia"
          />

          <img
            className="hidden lg:block absolute w-24 h-[95px] -top-8 -left-10 z-[-1] pointer-events-none"
            src="/elipses.png"
          />
          <img
            className="hidden lg:block absolute w-24 h-[95px] -top-4 left-4 z-[-1] pointer-events-none"
            alt=""
            src="/elipses-1.png"
          />
          <img
            className="hidden lg:block absolute w-14 h-24 -bottom-12 right-12 z-[-1] pointer-events-none" // Usando bottom/right
            alt=""
            src="/elipses-2.png"
          />
          <img
            className="hidden lg:block absolute w-[74px] h-24 -bottom-8 -right-4 z-[-1] pointer-events-none" // Usando bottom/right
            alt=""
            src="/elipses-3.png"
          />
        </div>

        {/* --- Coluna de Texto --- */}
        {/* Definindo largura responsiva */}
        <div className="w-full lg:w-7/12 max-w-2xl lg:max-w-[667px] order-2 lg:order-none"> {/* Ordem para mobile opcional */}
          {/* Removido Card/CardContent se não adicionam valor semântico/visual aqui */}
          {/* Usando padding diretamente ou mantendo Card se ele aplicar estilos úteis */}
          <div className="space-y-6 md:space-y-8">

            {/* Nome da Doutora - Tipografia Responsiva */}
            <div className="flex items-center gap-2 md:gap-3">
              <img
                className="h-8 md:h-10" // Altura ajustável da linha
                alt="" // Decorativo
                src="/line-2.svg"
              />
              {/* Usando classes Tailwind para tipografia */}
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[40px] leading-tight text-branco tracking-wide"> {/* Ajustado tamanho/tracking */}
                Prazer, <span className="font-bold">Dra. Marília Dácia.</span>
              </h2>
            </div>

            {/* Bio da Doutora - Usando classes Tailwind base */}
            {/* Simplificado: Removido o uso direto de vars para font-family/tracking/leading */}
            {/* Assumindo que 'font-h6-lato' foi mapeado para 'font-sans' ou similar no config */}
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-branco font-sans">
              <p>
                Com uma trajetória dedicada à promoção da saúde e ao cuidado
                individualizado, atuo na área médica desde 2012, oferecendo
                atendimento humanizado e de excelência.
              </p>
              <p>
                Sou formada em Medicina pela Unicastelo, onde também concluí
                minha residência em Clínica Médica. Posteriormente, me
                especializei em Pneumologia no renomado Hospital das Clínicas de
                Ribeirão Preto (HCFMRP/USP).
              </p>
              <p>
                Também sou docente responsável por lecionar as aulas da
                disciplina de Pneumologia na Universidade Brasil.
              </p>
              <p>
                Atualmente, atendo como Clínico Geral e Pneumologista,
                auxiliando pacientes no diagnóstico, tratamento e acompanhamento
                de diversas doenças respiratórias, sempre com foco na qualidade
                de vida e bem-estar.
              </p>
            </div>

            {/* Credenciais */}
            <div className="flex flex-col gap-4 pt-4"> {/* Adicionado padding top */}
              {credentials.map((credential) => (
                <div key={credential.id} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 md:gap-4">
                    <CheckCircleIcon className="w-5 h-5 md:w-6 md:h-6 text-branco shrink-0" /> {/* Tamanho do ícone ajustado */}
                    <span className="font-sans text-base md:text-lg text-branco"> {/* Texto simplificado */}
                      {credential.text}
                    </span>
                  </div>
                  <Separator className="bg-branco/20 h-px mt-1" />
                </div>
              ))}
            </div>

            {/* Compromisso */}
            <p className="font-sans font-bold text-base md:text-lg text-branco pt-4"> {/* Adicionado padding top, texto simplificado */}
              Meu compromisso é oferecer um atendimento de excelência, baseado
              na ciência, empatia e inovação. Se você busca uma avaliação médica
              cuidadosa, estarei à disposição para ajudá-lo(a).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};