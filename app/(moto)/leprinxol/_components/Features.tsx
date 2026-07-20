"use client";

import React, { useState } from 'react';
import { ChevronRight, Play } from 'lucide-react';
import Button from './Button';

const PHOTO_SIZE_CLASSES = [
  'aspect-[4/3]',
  'aspect-[4/3] md:mt-8',
  'aspect-[4/3]',
  'aspect-[4/3] md:mt-8',
];

const categories = [
  {
    key: 'automobile',
    label: 'Automobile',
    type: 'photo',
    products: [
      { title: 'Motor Oil', image: '/moto/leprinxol/automobile4.png' },
      { title: 'Transmission Fluid', image: '/moto/leprinxol/automobile3.png' },
      { title: 'Central Hydraulics Oil', image: '/moto/leprinxol/automobile1.png' },
      { title: 'Radiator Antifreeze', image: '/moto/leprinxol/automobile2.png' },
    ],
  },
  {
    key: 'industrial',
    label: 'Industrial',
    type: 'photo',
    products: [
      { title: 'Hydraulic Oils', image: '/moto/leprinxol/industrial1.png' },
      { title: 'Gear Oils', image: '/moto/leprinxol/industrial3.png' },
      { title: 'Compressor Oils', image: '/moto/leprinxol/industrial2.png' },
      { title: 'Industrial Oils', image: '/moto/leprinxol/industrial4.png' },
    ],
  },
  {
    key: 'grease',
    label: 'Grease',
    type: 'photo',
    products: [
      { title: 'Lycos MZ 3', image: '/moto/leprinxol/grease1.png' },
      { title: 'Lycos MZ 2', image: '/moto/leprinxol/grease2.png' },
      { title: 'Lycos EP 2', image: '/moto/leprinxol/grease3.png' },
      { title: 'Lycos EP 3', image: '/moto/leprinxol/grease4.png' },
    ],
  },
  {
    key: 'production-video',
    label: 'Production Video',
    type: 'video',
    video: {
      title: 'Inside Our Production Line',
      youtubeUrl: 'https://www.youtube.com/watch?v=2SNlXdEmvHc',
    },
  },
];

function getYoutubeEmbedId(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtu.be')) return parsed.pathname.slice(1);
    const v = parsed.searchParams.get('v');
    if (v) return v;
    const embedMatch = parsed.pathname.match(/\/embed\/([^/?]+)/);
    if (embedMatch) return embedMatch[1];
  } catch {
    // not a full URL, assume it's already a video id
  }
  return url;
}

export default function Features() {
  const [activeKey, setActiveKey] = useState(categories[0].key);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [posterQuality, setPosterQuality] = useState<'maxresdefault' | 'hqdefault'>('maxresdefault');
  const activeCategory = categories.find((category) => category.key === activeKey) ?? categories[0];

  const handleCategoryClick = (key: string) => {
    setActiveKey(key);
    setIsVideoPlaying(false);
    setPosterQuality('maxresdefault');
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="custom-container">
        {/* Heading */}
       
          <div className="w-fit mx-auto flex flex-col items-start mb-6">
            <h3 className="section-title text-[#1e1e1e] font-semibold sora-font">
              Products For Every Application
            </h3>
            <span className="block w-45 h-[2px] bg-[#1e1e1e]" />
          </div>

        {/* Description */}
        <p
          data-aos="fade-up"
          className="max-w-5xl mx-auto text-center text-[#333333] header-sublink sora-font mb-12 md:mb-16"
        >
          As a medium-sized, owner-managed company, we see ourselves as a reliable manufacturer
          and wholesale supplier of lubricants and white oils, both in Germany and for exporting.
        </p>

        {/* Content */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_3fr] gap-8 xl:gap-10 items-start">
          {/* Left: Category card */}
          <div className='flex flex-col gap-10 max-w-2xl mx-auto'>
          <p className="text-center text-[#212121] section-text-3 font-semibold section-text leading-snug sora-font">
              We have a broad product portfolio, and many additional lubricants for other
              applications are available on request:
            </p>
          <div
            data-aos="fade-right"
            className="border border-gray-200 rounded-3xl p-10 flex flex-col gap-5"
          >
            

            <div className="flex flex-col gap-10 mb-6">
              {categories.map((category) => (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => handleCategoryClick(category.key)}
                  className={`w-full section-text sora-font text-center rounded-xl py-3 card-text font-semibold transition-colors duration-300 ${
                    activeKey === category.key
                      ? 'bg-[#1a1a1a] text-white'
                      : 'bg-[#F2F2F2] text-[#212121] hover:bg-[#e6e6e6]'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <Button href="#" variant="primary" className="mx-auto uppercase !px-6 !py-2.5">
              Know more about us
            </Button>
          </div>
          </div>

          {/* Right: Products grid / Video */}
          {activeCategory.type === 'photo' && (
            <div key={activeCategory.key} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {activeCategory.products!.map((product, index) => (
                <div
                  key={product.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className={`group relative rounded-xl overflow-hidden shadow-sm ${PHOTO_SIZE_CLASSES[index]}`}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-5">
                    <h3 className="text-white  img-text font-semibold card-title sora-font">
                      {product.title}
                    </h3>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 btn-text  sora-font text-white/90 card-text mt-1 hover:text-white transition-colors duration-300 border-b border-white w-fit"
                    >
                      View Products
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeCategory.type === 'video' && (() => {
            const embedId = getYoutubeEmbedId(activeCategory.video!.youtubeUrl);
            const posterSrc = `https://img.youtube.com/vi/${embedId}/${posterQuality}.jpg`;

            return (
              <div
                key={activeCategory.key}
                data-aos="fade-up"
                className="relative rounded-xl overflow-hidden shadow-sm h-[400px] md:h-[520px]"
              >
                {isVideoPlaying ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
                    title={activeCategory.video!.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsVideoPlaying(true)}
                    className="group absolute inset-0 w-full h-full cursor-pointer"
                  >
                    <img
                      src={posterSrc}
                      alt={activeCategory.video!.title}
                      onError={() => {
                        if (posterQuality === 'maxresdefault') setPosterQuality('hqdefault');
                      }}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4">
                      <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Play className="w-6 h-6 text-[#1a1a1a] fill-[#1a1a1a]" />
                      </span>
                      <h3 className="text-white font-bold card-title oswald-font">
                        {activeCategory.video!.title}
                      </h3>
                    </div>
                  </button>
                )}
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
