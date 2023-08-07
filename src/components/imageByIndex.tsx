import image1 from '/public/assets/images/carouselImage1.jpg'
import image2 from '/public/assets/images/carouselImage2.jpg'
import image3 from '/public/assets/images/carouselImage3.jpg'
import image4 from '/public/assets/images/carouselImage4.jpg'

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
};

export const images: StaticImageData[] = [image1, image2, image3, image4]

const imageByIndex = (index: number): string => images[index % images.length].src

export default imageByIndex

