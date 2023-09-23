import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AutoHeight from 'embla-carousel-auto-height'
import imageByIndex from './imageByIndex'

interface EmblaCarouselProps {
    slides: number[];
    options: EmblaOptionsType;
}

interface ImageDimension {
    width: number;
    height: number;
}

const Carousel: React.FC<EmblaCarouselProps> = ({ slides, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(), AutoHeight()])
    const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [imageDimensions, setImageDimensions] = useState<ImageDimension[]>([
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
    ]);
    // const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    // const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    // const [selectedIndex, setSelectedIndex] = useState(0);
    // const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    // const onSelect = useCallback(() => {
    //     if (!embla) return;
    //     setSelectedIndex(embla.selectedScrollSnap());
    //     setPrevBtnEnabled(embla.canScrollPrev());
    //     setNextBtnEnabled(embla.canScrollNext());
    // }, [embla, setSelectedIndex]);



    // useEffect(() => {
    //     if (!embla) return;
    //     onSelect();
    //     setScrollSnaps(embla.scrollSnapList());
    //     embla.on("select", onSelect);
    // }, [embla, setScrollSnaps, onSelect]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth < 550) {
            setImageDimensions([
                // ... other image dimensions
                { width: 350, height: 230 },
                { width: 350, height: 230 },
                { width: 150, height: 230 },
                { width: 350, height: 230 },
                { width: 150, height: 230 },
                { width: 150, height: 230 },
                { width: 350, height: 230 },
                { width: 150, height: 230 },
                { width: 350, height: 230 },
                { width: 350, height: 230 },
                { width: 350, height: 230 },
            ]);
        } else if (windowWidth < 768) {
            // Update imageDimensions for mobile
            setImageDimensions([
                // ... other image dimensions
                { width: 600, height: 350 },
                { width: 600, height: 350 },
                { width: 200, height: 350 },
                { width: 600, height: 350 },
                { width: 200, height: 350 },
                { width: 300, height: 350 },
                { width: 500, height: 350 },
                { width: 200, height: 350 },
                { width: 600, height: 350 },
                { width: 400, height: 350 },
                { width: 650, height: 350 },
            ]);
        } else if (windowWidth < 912) {
            setImageDimensions([
                // ... other image dimensions
                { width: 600, height: 350 },
                { width: 600, height: 350 },
                { width: 200, height: 350 },
                { width: 600, height: 350 },
                { width: 200, height: 350 },
                { width: 300, height: 350 },
                { width: 500, height: 350 },
                { width: 200, height: 350 },
                { width: 600, height: 350 },
                { width: 400, height: 350 },
                { width: 650, height: 350 },
            ]);
        } else if (windowWidth < 1440) {
            // Update imageDimensions for tablet
            setImageDimensions([
                // ... other image dimensions
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
            ]);
        } else {
            // Update imageDimensions for desktop
            setImageDimensions([
                // ... other image dimensions
                { width: 900, height: 500 },
                { width: 900, height: 500 },
                { width: 400, height: 500 },
                { width: 900, height: 500 },
                { width: 400, height: 500 },
                { width: 500, height: 500 },
                { width: 800, height: 500 },
                { width: 400, height: 500 },
                { width: 800, height: 500 },
                { width: 700, height: 500 },
                { width: 950, height: 500 },
            ]);
        }
    }, [windowWidth]);

    return (
        <div className='mx-auto transiton-all'>
            <div className="embla relative">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((index) => {
                            return (
                                <div
                                    className="embla__slide"
                                    style={{ width: `${imageDimensions[index].width}px`, height: `${imageDimensions[index].height}px` }}
                                    key={index}
                                >
                                    <Image
                                        className="embla__slide__img"
                                        src={imageByIndex(index)}
                                        alt={`Image ${index}`}
                                        loading='eager'
                                        fill
                                        sizes='(max-width: 768px) 33vh, (max-width: 1200px) 50vw, 33vw'
                                    />
                                </div>
                            );
                        })}
                    </div>
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