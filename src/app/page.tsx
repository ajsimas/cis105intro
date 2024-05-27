'use client';
import Image from 'next/image';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Home() {
  const images = [
    {
      id: 1,
      url: '/images/1.JPEG',
      caption: 'Meeting Minnie Mouse ona  recent trip to Disneyland',
    },
    {
      id: 2,
      url: '/images/2.JPEG',
      caption: 'A delicious cheeseburger I grilled in April',
    },
    {
      id: 3,
      url: '/images/3.JPEG',
      caption:
        "Some sourdough bread I baked. Delicious for toast, but I like using it for french toast once it's gone stale",
    },
  ];

  return (
    <div className="max-h-screen">
      <div className="flex min-h-screen justify-center">
        <div className="w-full">
          <Slide>
            {images.map((image) => (
              <div key={image.id} className="min-h-screen">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    style={{
                      maxHeight: 'calc(100vh - 4rem)',
                      objectFit: 'cover',
                    }}
                    src={image.url}
                    width={2500}
                    height={2500}
                    alt=""
                    quality={95}
                  />
                  <div className="mt-4 h-full text-center text-white">
                    {image.caption}
                  </div>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
}
