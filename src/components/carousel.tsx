import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { DotButton, PrevButton, NextButton } from './carouselButtons'
import imageByIndex from './imageByIndex'

interface EmblaCarouselProps {
    slides: number[];
    options: EmblaOptionsType;
}

const Carousel: React.FC<EmblaCarouselProps> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    const scrollTo = useCallback((index: number) => embla && embla.scrollTo(index), [embla]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);

    return (
        <div className='max-w-8xl mx-auto'>
            <div className="embla relative">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((index) => (
                            <div className="embla__slide" key={index}>
                                <div className="embla__slide__number">
                                    <span>{index + 1}</span>
                                </div>
                                <img
                                    className="embla__slide__img"
                                    src={imageByIndex(index)}
                                    alt="Your alt text"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='embla__buttons-container scale-[.96]'>
                    <PrevButton emblaApi={ emblaApi } />
                    <NextButton emblaApi={ emblaApi } />
                </div>
            </div>
            <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default Carousel