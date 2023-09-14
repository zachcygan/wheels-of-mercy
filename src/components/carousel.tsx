import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AutoHeight from 'embla-carousel-auto-height'
import { DotButton, PrevButton, NextButton } from './carouselButtons'
import imageByIndex from './imageByIndex'

interface EmblaCarouselProps {
    slides: number[];
    options: EmblaOptionsType;
}

const Carousel: React.FC<EmblaCarouselProps> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(), AutoHeight()])
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

    const imageDimensions = [
        { width: 900, height: 500 },
        { width: 900, height: 500 },
        { width: 400, height: 500 },
        { width: 900, height: 500 },
        { width: 400, height: 500 },
        { width: 500, height: 500 },
        { width: 800, height: 500 },
        { width: 400, height: 500 },
        { width: 900, height: 500 },
        { width: 700, height: 500 },
        { width: 950, height: 500 },
        // ... other image dimensions
    ];

    return (
        <div className='mx-auto transiton-all'>
            <div className="embla relative">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((index) => {
                            return (
                                <div
                                    className="embla__slide"
                                    style={{ width: `${imageDimensions[index].width}px`, height: `500px` }}
                                    key={index}
                                >
                                    <Image
                                        className="embla__slide__img"
                                        src={imageByIndex(index)}
                                        alt={`Image ${index}`}
                                        fill
                                        sizes='(max-width: 768px) 33vh, (max-width: 1200px) 50vw, 33vw'
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='embla__buttons-container scale-[.96]'>
                    <PrevButton emblaApi={emblaApi} />
                    <NextButton emblaApi={emblaApi} />
                </div>
            </div>
            {/* <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div> */}

        </div>
    )
}

export default Carousel