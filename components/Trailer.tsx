'use client';
import { useState } from 'react';
import Image from 'next/image';

type Medium = {
    name: string;
    resource_type: 'video' | 'image';
    resource_value: string;
    thumbnail_url?: string;
};

type TrailerProps = {
    media: Medium[];
};

export default function Trailer({ media }: TrailerProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const selectedMedia = media[selectedIndex];

    const renderMainPreview = () => {
        if (selectedMedia.resource_type === 'video') {
            return (
                <iframe
                    className="w-full h-full rounded-xl"
                    src={`https://www.youtube.com/embed/${selectedMedia.resource_value}`}
                    allowFullScreen
                ></iframe>
            );
        }
        return (
            <Image
                src={selectedMedia.resource_value}
                alt="Preview"
                width={1280}
                height={720}
                className="w-full h-full object-cover rounded-xl"
            />
        );
    };

    const handlePrev = () => {
        setSelectedIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setSelectedIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="py-10">
            {/* Main Preview Area */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md">
                {renderMainPreview()}

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
                >
                    ◀
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
                >
                    ▶
                </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-4 flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide px-2">
                {media.map((item, idx) => {
                    const isActive = idx === selectedIndex;
                    const thumbSrc = item.thumbnail_url || item.resource_value;

                    return (
                        <button
                            key={idx}
                            onClick={() => setSelectedIndex(idx)}
                            className={`relative shrink-0 w-16 h-16 rounded border-2 ${
                                isActive ? 'border-green-500' : 'border-transparent'
                            } overflow-hidden transition-all duration-200`}
                        >
                            <Image
                                src={thumbSrc}
                                alt={`Thumb ${idx}`}
                                width={64}
                                height={64}
                                className="object-cover w-full h-full"
                            />
                            {item.resource_type === 'video' && (
                                <span className="absolute inset-0 flex items-center justify-center bg-black/30">
            <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
                            )}
                        </button>
                    );
                })}
            </div>

        </section>
    );
}
