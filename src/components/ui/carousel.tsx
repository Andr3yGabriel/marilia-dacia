import React, { useRef, useState, useEffect } from "react";

interface CarouselProps {
  children: React.ReactNode;
  onSelect?: (api: any) => void;
  className?: string;
  opts?: {
    startIndex?: number;
    align?: "start" | "center" | "end";
  };
}

export const Carousel = ({ children, onSelect, className, opts = {} }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (carouselRef.current && opts.startIndex !== undefined) {
      scrollTo(opts.startIndex);
    }
  }, [opts.startIndex]);

  const scrollTo = (index: number) => {
    if (carouselRef.current) {
      const items = carouselRef.current.children;
      if (items[index]) {
        items[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: opts.align || "center"
        });
      }
    }
    onSelect?.({
      selectedScrollSnap: () => index,
      scrollTo: scrollTo,
      scrollPrev: () => scrollTo(Math.max(index - 1, 0)),
      scrollNext: () => scrollTo(Math.min(index + 1, React.Children.count(children) - 1))
    });
    setApi({
      selectedScrollSnap: () => index,
      scrollTo: scrollTo
    });
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
      >
        {children}
      </div>
    </div>
  );
};

interface CarouselContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CarouselContent = ({ children, className }: CarouselContentProps) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

interface CarouselItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CarouselItem = ({ children, className, onClick }: CarouselItemProps) => {
  return (
    <div
      className={`shrink-0 snap-start ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

interface CarouselButtonProps {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
  'aria-label'?: string;
}

export const CarouselPrevious = ({
  onClick,
  className,
  children = '◀',
  'aria-label': ariaLabel = 'Previous slide'
}: CarouselButtonProps) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20 ${className}`}
  >
    {children}
  </button>
);

export const CarouselNext = ({
  onClick,
  className,
  children = '▶',
  'aria-label': ariaLabel = 'Next slide'
}: CarouselButtonProps) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20 ${className}`}
  >
    {children}
  </button>
);