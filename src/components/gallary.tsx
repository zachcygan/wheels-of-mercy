'use client'
import React, { useState } from 'react'
import ImageModal from './imageModal'
import Image from 'next/image'

const images = [
    '/assets/images/coco.jpg',
    '/assets/images/hoag1.jpg',
    '/assets/images/hoag2.jpg',
    '/assets/images/founder.jpg',
    '/assets/images/about1.jpg',
    '/assets/images/about2.jpg',
    '/assets/images/about4.jpg',
]

export default function Gallary() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string>('');

    const handleImageClick = (imgSrc: string) => {
        setSelectedImage(imgSrc);
        setModalOpen(true);
    };

    return (
        <div className='columns-1 sm:columns-2 md:columns-4 mx-auto gap-5 p-10 rounded-xl'>
            {images.map((imgSrc, index) => (
                <Image
                    key={index}
                    src={imgSrc}
                    width={350}
                    height={300}
                    alt={`Thumbnail ${index}`}
                    onClick={() => handleImageClick(imgSrc)}
                    className="cursor-pointer h-full pt-5 rounded-3xl"
                />
            ))}
            
            <ImageModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} imgSrc={selectedImage} />
        </div>
    )
}