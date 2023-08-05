import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import imageByIndex from './imageByIndex'

interface EmblaCarouselProps {
    slides: number[];
    options: EmblaOptionsType;
}

const Carousel: React.FC<EmblaCarouselProps> = (props) => {
    const { slides, options } = props
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

    return (
        <div className='max-w-4xl mx-auto'>
            <div className="embla">
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
            </div>
        </div>
    )
}

export default Carousel