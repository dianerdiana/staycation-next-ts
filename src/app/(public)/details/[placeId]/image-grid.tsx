import Image from 'next/image';
import React from 'react';

interface DetailsImage {
  imgUrl: string;
}

interface ImageGridProps {
  images: DetailsImage[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-3">
      {images.map((image, index) => {
        return (
          <>
            {index === 0 ? (
              <div
                key={image.imgUrl}
                className="relative row-span-1 md:row-span-2 w-full h-52 md:h-[500px] col-span-5 md:col-span-3 bg-center bg-cover rounded-2xl"
              >
                <Image
                  fill
                  priority
                  src={image.imgUrl}
                  alt="Image Detail"
                  className={`rounded-2xl object-cover object-center `}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ) : (
              <div
                key={image.imgUrl}
                className="relative row-span-1 w-full h-52 md:h-[245px] col-span-5 md:col-span-2 bg-center bg-cover rounded-2xl"
              >
                <Image
                  fill
                  priority
                  src={image.imgUrl}
                  alt="Image Detail"
                  className={`rounded-2xl object-cover object-center `}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default ImageGrid;
