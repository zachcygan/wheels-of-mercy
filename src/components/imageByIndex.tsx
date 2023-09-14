import image1 from '/public/assets/images/carouselImage1_large.webp'
import image2 from '/public/assets/images/carouselImage2.webp'
import image3 from '/public/assets/images/carouselImage3.webp'
import image4 from '/public/assets/images/carouselImage4.webp'
import image5 from '/public/assets/images/carouselImage5.webp'
import image6 from '/public/assets/images/carouselImage6.webp'
import image7 from '/public/assets/images/carouselImage7.webp'
import image8 from '/public/assets/images/carouselImage8.webp'
import image9 from '/public/assets/images/carouselImage9.webp'
import image10 from '/public/assets/images/carouselImage10.webp'
import image11 from '/public/assets/images/carouselImage11.webp'

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
};

export const images: StaticImageData[] = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11]

const imageByIndex = (index: number): string => images[index % images.length].src

export default imageByIndex

