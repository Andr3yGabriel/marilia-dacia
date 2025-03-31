import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/consultorio1.jpg",
  "/consultorio2.png",
  "/consultorio3.png",
  "/consultorio4.png",
  "/consultorio5.jpg",
];

interface IconButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
  ariaLabel: string;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, children, className, ariaLabel }) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className={`
      absolute top-1/2 -translate-y-1/2 z-30
      bg-white/80 hover:bg-white focus:bg-white
      rounded-full p-2 shadow-md
      transition-colors duration-200
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      ${className || ''}
    `}
  >
    {children}
  </button>
);

const GallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(4);
  const totalImages = images.length;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const getItemStyle = (index: number): React.CSSProperties => {
    const centerIndex = currentIndex;
    const leftIndex = (currentIndex - 1 + totalImages) % totalImages;
    const rightIndex = (currentIndex + 1) % totalImages;

    let translateX = 0;
    let scale = 1;
    let opacity = 0;
    let zIndex = 0;

    if (index === centerIndex) {
      scale = 1;
      opacity = 1;
      zIndex = 20;
      translateX = 0;
    } else if (index === leftIndex) {
      scale = 0.75;
      opacity = 0.6;
      zIndex = 10;
      translateX = -65;
    } else if (index === rightIndex) {
      scale = 0.75;
      opacity = 0.6;
      zIndex = 10;
      translateX = 65;
    } else {
      const offset = index - currentIndex;
      let direction = 0;
      if (offset > 0 && offset <= Math.floor(totalImages / 2)) {
        direction = 1;
      } else if (offset < 0 && Math.abs(offset) <= Math.floor(totalImages / 2)) {
        direction = -1;
      } else if (offset > 0) {
        direction = -1;
      } else {
        direction = 1;
      }
      translateX = direction > 0 ? 150 : -150;
      scale = 0.5;
      opacity = 0;
      zIndex = 0;
    }

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
      transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out, z-index 0.5s ease-in-out',
    };
  };

  return (
    <div className="w-full mx-auto py-12 px-4" style={{ background: "linear-gradient(rgba(239, 239, 239, 1), rgba(239, 239, 239, 1)), url('/background.png') 0px -2.646px / 100% 258.847% no-repeat, #EFEFEF" }}>
      <div className="flex flex-col items-center gap-6 mb-16 px-4">
        <h2 className="font-h1-lato font-[number:var(--h1-lato-font-weight)] text-azul-marinho text-[length:var(--h1-lato-font-size)] text-center tracking-[var(--h1-lato-letter-spacing)] leading-[var(--h1-lato-line-height)] [font-style:var(--h1-lato-font-style)]">
          Nosso Consultório
        </h2>
        <p className="max-w-[750px] font-h6-lato font-[number:var(--h6-lato-font-weight)] text-azul-marinho text-[length:var(--h6-lato-font-size)] text-center tracking-[var(--h6-lato-letter-spacing)] leading-[var(--h6-lato-line-height)] [font-style:var(--h6-lato-font-style)]">
          Cada detalhe do nosso espaço foi pensado para que você se sinta bem. Nossas instalações foram
          cuidadosamente planejadas para proporcionar bem-estar e segurança, garantindo a melhor
          experiência para nossos pacientes.
        </p>
      </div>

      <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <IconButton
          onClick={handlePrevious}
          className="left-4 md:left-8"
          ariaLabel="Imagem anterior"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </IconButton>

        <div className="relative w-full h-full flex items-center justify-center perspective">
          {images.map((src, index) => (
            <div
              key={src}
              className={`
                absolute w-3/4 sm:w-2/3 md:w-1/2 h-full
                cursor-pointer
              `}
              style={getItemStyle(index)}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={src}
                alt={`Consultório Imagem ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                draggable="false"
              />
            </div>
          ))}
        </div>

        <IconButton
          onClick={handleNext}
          className="right-4 md:right-8"
          ariaLabel="Próxima imagem"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </IconButton>
      </div>

      <div className="flex justify-center space-x-2 mt-6">
        {images.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir para imagem ${index + 1}`}
            className={`
              w-2.5 h-2.5 rounded-full transition-colors duration-300
              ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'}
            `}
          />
        ))}
      </div>

    </div>
  );
};

export default GallerySection;