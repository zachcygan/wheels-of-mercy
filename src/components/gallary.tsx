'use client'
import React, { useState, useEffect } from 'react'
import ImageModal from './imageModal'
import Image from 'next/image'

const images = [
    '/assets/images/coco.jpg',
    '/assets/images/hoag1.jpg',
    '/assets/images/hoag2.jpg',
]

export default function Gallary() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (imgSrc: string) => {
        setSelectedImage(imgSrc);
        setModalOpen(true);
    };

    return (
        <div className='grid grid-cols-4 gap-5 mx-auto'>
            {images.map((imgSrc, index) => (
                <Image
                    key={index}
                    src={imgSrc}
                    width={300}
                    height={300}
                    alt={`Thumbnail ${index}`}
                    onClick={() => handleImageClick(imgSrc)}
                    className="cursor-pointer" // just for better UX
                // You can style these images accordingly or put them in a grid
                />
            ))}

            <ImageModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} imgSrc={selectedImage} />
        </div>
    )
}