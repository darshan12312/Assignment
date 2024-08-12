import React, { useState } from 'react';
import { motion } from 'framer-motion';

function LandingP() {
  const [activeIndex, setActiveIndex] = useState(0); // Default to the first card
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFQJsYO9oqwGtNCaeRWRg_dNYLYstNbeVXw&s",
    "https://cdn.cinematerial.com/p/297x/mp0rtmut/suits-movie-poster-md.jpg?v=1456717038",
    "https://resizing.flixster.com/Ro8-1bBSuCt2aTmaopY4zGf3VqI=/206x305/v2/https://resizing.flixster.com/g81COrwvWE7pqUEIVL0271ZsFT4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMjVhYWZjMGMtY2I4MS00ZWE2LWE5NTEtNTVlZDRjMDE3ZGU1LmpwZw==",
    "https://www.vintagemovieposters.co.uk/wp-content/uploads/2022/09/IMG_7665-scaled.jpeg",
    "https://m.media-amazon.com/images/M/MV5BNDgwODEwOTYtODYwMS00MzE5LTg3ODktOTU2YjExYWEzMmQ2XkEyXkFqcGdeQXVyNjYxNjc0OTc@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
    "https://cdn.marvel.com/content/1x/falcws_lob_crd_03.jpg",
    "https://upload.wikimedia.org/wikipedia/en/a/a8/Mai_A_Mother%27s_Rage_poster.jpg",
    "https://i0.wp.com/sacreative.co.za/wp-content/uploads/2023/08/367366621_829685161885566_7796106182790479637_n.jpg?fit=1080%2C1080&ssl=1",
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/01/the-traitors-tv-show-poster.jpg",
    "https://assets.gadgets360cdn.com/pricee/assets/product/202206/she_season_2_poster_1655270015.jpeg",
    "https://m.media-amazon.com/images/M/MV5BMDEwOWVlY2EtMWI0ZC00OWVmLWJmZGItYTk3YjYzN2Y0YmFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
    "https://www.justwatch.com/images/poster/301444667/s332/house-of-the-dragon",
    "https://assets.gadgets360cdn.com/pricee/assets/product/202406/heeramandi_season_2_1_1717395906.jpg",
  ];

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='h-screen text-white flex flex-col items-center gap-0 overflow-hidden'>
      <h1 className='text-black font-bold text-[70px] mb-10'>Discover Unlimited Content</h1>
      <div className="heading flex items-center justify-around text-black list-none rounded-lg border-2 h-16 w-[650px]">
        <li className='h-14 rounded-md w-40 flex items-center justify-center bg-[#6f42f5]  text-white font-semibold'>Popular</li>
        <li className='h-14 rounded-md w-40 flex items-center justify-center   text-black font-semibold'>Latest</li>
        <li className='h-14 rounded-md w-40 flex items-center justify-center   text-black font-semibold'>Top Rated</li>
        <li className='h-14 rounded-md w-40 flex items-center justify-center   text-black font-semibold'>Recommended</li>
      </div>
      <div
        className="carousel relative flex justify-center items-center"
        style={{
          width: '600px',
          height: '600px',
          top:"180px",
        }}
      >
        {images.map((src, index) => {
          const isActive = index === activeIndex;
          const angle = (360 / images.length) * index;

          return (
            <motion.img
              key={index}
              src={src}
              alt=""
              className="absolute rounded-xl"
              style={{
                width: '180px', // Fixed width for all cards
                height: '270px', // Fixed height for all cards
                transform: isActive
                  ? `translate(-10%, -120%)`
                  : `rotate(${angle}deg) translateX(280px) rotate(-${angle}deg)`,
                zIndex: isActive ? 10 : 5,
                opacity: isActive ? 1 : 0.6,
                cursor: 'pointer',
                filter: isActive ? 'none' : 'grayscale(100%)',
                transition: 'transform 0.5s, opacity 0.5s, filter 0.5s',
              }}
              onClick={() => handleImageClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LandingP;
