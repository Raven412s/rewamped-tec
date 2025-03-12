import React from 'react';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Bounded from '@/components/HOC/Bounded';
import GalleryCarousel from '../about-us/_components/GalleryCarousel';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Gallery"
};

// Define the folder containing images
const imagesDirectory = path.join(process.cwd(), 'public/gallery');

// Function to get image filenames
const getImages = () => {
    try {
        return fs.readdirSync(imagesDirectory).filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));
    } catch (error) {
        console.error("Error reading images directory:", error);
        return [];
    }
};

export default function GalleryPage() {
    const images = getImages();

    return (
        <Bounded>
            <div className="my-4">
                <GalleryCarousel />
            </div>

            {/* Responsive Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-20  gap-x-5  p-4">
                {images.map((image, index) => (
                    <div key={index} className="relative  w-full h-[20rem]">
                        <Image
                            src={`/gallery/${image}`}
                            alt={`Gallery Image ${index + 1}`}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-md shadow-lg"
                        />
                    </div>
                ))}
            </div>
        </Bounded>
    );
}
