'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

const MainCard = ({ click, images, baseId, title }: { click: () => void, images: StaticImageData[], baseId: string, title: string }) => {
  const [imageOrder, setImageOrder] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageOrder((prevOrder) => {
        const newOrder = [...prevOrder];
        const lastImage = newOrder.pop();
        newOrder.unshift(lastImage as number);
        return newOrder;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const slotStyles = [
    "w-full h-full col-span-3 row-span-3",
    "w-full h-full absolute top-[4%] right-2 border-4 border-rose-800 rounded-lg",
    "w-full h-full absolute top-[36%] right-2 border-4 border-rose-800 rounded-lg",
    "w-full h-full absolute top-[68%] right-2 border-4 border-rose-800 rounded-lg",
  ];

  return (
    <div onClick={click} className="border-4 border-rose-800 p-4 rounded-lg w-full aspect-square relative grid grid-cols-4 grid-rows-3 gap-2">
      <h2 className="absolute top-0 left-4 font-bold text-xl z-10 text-white bg-black/50 px-2 rounded">{ title }</h2>
      
      {images.map((image, index) => {
        const slotIndex = imageOrder.indexOf(index);
        
        return (
          <motion.div
            key={index}
            layoutId={`${baseId}-${index}`}
            className={slotStyles[slotIndex]}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            style={{
              width: slotIndex === 0 ? '100%' : '25%',
              height: slotIndex === 0 ? '100%' : '28%',
            }}
          >
            <img
              src={image.src}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default MainCard;