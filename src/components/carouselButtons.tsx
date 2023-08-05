import React, { useCallback } from "react";

export interface DotButtonProps {
    selected: boolean;
    onClick: () => void;
}

export interface PrevButtonProps {
    emblaApi: any;
}

export interface NextButtonProps {
    emblaApi: any;
}


export const DotButton = ({ selected, onClick }: DotButtonProps) => (
    <button
        className={`embla__dot ${selected ? "is-selected" : ""}`}
        type="button"
        onClick={onClick}
    />
);

export const PrevButton = ({ emblaApi }: PrevButtonProps) => {
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    return (
        <button className="bg-black" onClick={scrollPrev}>
            Previous
        </button>
    );
};

export const NextButton = ({ emblaApi }: NextButtonProps) => {
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <button className="bg-black" onClick={scrollNext}>
            Next
        </button>
    );
};
