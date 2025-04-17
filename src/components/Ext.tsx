// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from "react";

const Ext: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const screenshots = [
    {
      id: 1,
      title: "Kinopoisk",
      description: "The extension works with kinopoisk",
      imageUrl:
        "https://raw.githubusercontent.com/Asura-code/react-resume/refs/heads/main/public/bankai_kinopoisk.png",
    },
    {
      id: 2,
      title: "IMDB",
      description: "The extension works with imdb",
      imageUrl:
        "https://github.com/Asura-code/react-resume/blob/main/public/bankai_imdb.png?raw=true",
    },
    {
      id: 3,
      title: "Shikimori",
      description: "The extension works with shikimori",
      imageUrl:
        "https://github.com/Asura-code/react-resume/blob/main/public/bankai_shikimori.png?raw=true",
    },
    {
      id: 4,
      title: "TMDB",
      description: "The extension works with shikimori",
      imageUrl:
        "https://github.com/Asura-code/react-resume/blob/main/public/bankai_tmdb.png?raw=true",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-400 to-blue-900 font-sans">
      {/* Header Section */}
      <header
        className={`pt-16 pb-12 px-6 text-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-900 mb-4 transform transition-transform duration-700 hover:scale-105">
          Bankai
        </h1>
        <p className="text-xl md:text-2xl text-blue-900 max-w-3xl mx-auto">
          Browser extension for free movie viewing. <br></br> You can see
          examples of how the extension works below <br></br> and download it on{" "}
          {/*  */}
          <a
            target="_blank"
            href="https://chromewebstore.google.com/detail/bglaaddmckbbjbnfmcihokmpheamiakc?utm_source=item-share-cb"
          >
            chrome store.
          </a>
        </p>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Watch any movies for free
            </h2>
            <p className="text-lg text-blue-900">
              Just install the Bankai extension in your browser, which will
              create links to the free player on the pages of kinopoisk, imdb,
              shikimori and tmdb
            </p>
            <a
              target="_blank"
              href="https://chromewebstore.google.com/detail/bankai/bglaaddmckbbjbnfmcihokmpheamiakc?utm_source=item-share-cb"
            >
              <button className="bg-blue-700 hover:bg-blue-900 text-white py-3 px-8 rounded-button transition-all duration-300 flex items-center gap-2 cursor-pointer whitespace-nowrap">
                <i className="fas fa-download"></i>
                Add to Chrome
              </button>
            </a>
          </div>
          <div className="md:w-1/2 overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-400/30">
            <img
              src="https://github.com/Asura-code/bankai/blob/main/default.png?raw=true"
              alt="blueSync Website"
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Extension Gallery */}
      <section className="py-16 px-50 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          Examples
        </h2>

        <div className="relative">
          {/* Main Gallery */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-800 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {screenshots.map((screenshot) => (
                <div key={screenshot.id} className="min-w-full px-4">
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="overflow-hidden">
                      <img
                        src={screenshot.imageUrl}
                        alt={screenshot.title}
                        className="w-full h-[400px] object-cover object-top transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">
                        {screenshot.title}
                      </h3>
                      <p className="text-blue-700">{screenshot.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setActiveIndex(
                (prevIndex) =>
                  (prevIndex - 1 + screenshots.length) % screenshots.length
              )
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer whitespace-nowrap"
          >
            <i className="fas fa-chevron-left"></i>
            {"<"}
          </button>
          <button
            onClick={() =>
              setActiveIndex(
                (prevIndex) => (prevIndex + 1) % screenshots.length
              )
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer whitespace-nowrap"
          >
            <i className="fas fa-chevron-right"></i>
            {">"}
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer whitespace-nowrap ${
                  activeIndex === index ? "bg-blue-700" : "bg-blue-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 max-w-7xl mx-auto bg-blue-900 tex rounded-xl shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Did you like it?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Stop spending money on online cinemas when you can watch movies for
            free
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              target="_blank"
              href="https://chromewebstore.google.com/detail/bankai/bglaaddmckbbjbnfmcihokmpheamiakc?utm_source=item-share-cb"
            >
              <button className="bg-white text-blue-900 hover:bg-blue-100 py-3 px-8 rounded-button transition-all duration-300 flex items-center justify-center gap-2 font-bold shadow-lg cursor-pointer whitespace-nowrap">
                <i className="fab fa-chrome text-xl"></i>
                Download Bankai
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-1 text-yellow-400 mb-4">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="text-blue-900 mb-4">
              "ГОЙДА ГОЙДА ГОЙДА ГОЙДА ГОЙДА ГОЙДА ГОЙДА СПАСИБО ВЕЛИКОМУ РОМАНУ
              АБЕБРБРРОБРРУХУ ЗА ГЕНИАЛЬНЫЙ САЙТ И РАСШИРЕНИЕ ДЛЯ БРАУЗЕРА MAKE
              AMERICA GREAT AGAIN!!!!!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-blue-700"></i>
              </div>
              <div>
                <p className="font-bold text-blue-900">
                  Arsenii Gorelik-Olenin
                </p>
                <p className="text-sm text-blue-600">Rating: 5.0</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-1 text-yellow-400 mb-4">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="text-blue-900 mb-4">
              "Просто великолепно <br></br>
              <br></br>
              Спасибо за отзыв, 15 рублей было отправлено на ваш счёт, не
              забудьте удалить этот абзац."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-blue-700"></i>
              </div>
              <div>
                <p className="font-bold text-blue-900">Мафиозник Гусев</p>
                <p className="text-sm text-blue-600">Rating: 5.0</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ext;
