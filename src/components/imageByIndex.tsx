import image1 from '/public/assets/images/coco.jpg'
import image2 from '/public/assets/images/coco.jpg'
import image3 from '/public/assets/images/coco.jpg'
import image4 from '/public/assets/images/coco.jpg'

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
};

export const images: StaticImageData[] = [image1, image2, image3, image4]

const imageByIndex = (index: number): string => images[index % images.length].src

export default imageByIndex

