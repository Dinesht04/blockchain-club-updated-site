import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Lottie from 'lottie-react'
import { cn } from '@/utils/cn'

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
    animationData: any;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('flex flex-col sm:flex-row sm:w-3/4 sm:h-3/4 h-full w-full', className)}>
      {items.map(({ title, description, link, animationData }, idx) => (
        <Link
          href="#"
          key={link}
          className="relative group block p-2 h-full w-full sm:w-1/2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 md:h-full w-full mx-4 bg-orange-200 dark:bg-orange-800/[0.8] md: block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          {/* Original Card for large screens */}
          <div className="hidden sm:block">
            <Card className="flex flex-row md:flex-col items-center md:h-full w-full mx-4 ">
              <CardTitle className="text-lg text-orange-500">{title}</CardTitle>
              <div className="flex flex-row md:flex-col items-center w-3/4 md:w-full">
                <CardDescription className='text-[1rem] md:w-full'>{description}</CardDescription>
                <CardImageAnimation className="md:w-full w-1/4" animationData={animationData} />
              </div>
            </Card>
          </div>

          {/* Compact Card for small screens */}
          <div className="sm:hidden w-full">
            <CompactCard title={title} description={description} animationData={animationData} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export const CompactCard = ({
  title,
  description,
  animationData,
}: {
  title: string;
  description: string;
  animationData: any;
}) => {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="p-2 bg-black text-white shadow rounded flex flex-col items-center mx-0 my-0 justify-between w-full h-full">
      <div className="flex flex-col text-center flex-grow">
        <h4 className="text-sm font-bold mb-2 text-orange-500 text-center">{title}</h4>
        <p className="text-xs">{description}</p>
      </div>
      <Lottie options={animationOptions} height={100} width={100} />
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row rounded-2xl h-full w-3/4 p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20',
        className
      )}
      style={{ flex: 1 }}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <h4 className={cn('text-zinc-100 font-bold tracking-wide mt-4', className)}>{children}</h4>;
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn('mt-4 text-zinc-400 tracking-tight leading-tight w-[50%] h-[50%]', className)}>
      {children}
    </p>
  );
};



export const CardImageAnimation = ({ animationData }) => {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='md:w-full md:h-[100%] h-[50%] w-[50%]'>
      <Lottie options={animationOptions} height={200} width={200} />
    </div>
  );
};