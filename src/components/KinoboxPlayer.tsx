import React, { useEffect, useRef } from "react";

export interface Props {
  kpId: number;
}


function KinoboxPlayer({ kpId }: Props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kinobox.tv/kinobox.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (containerRef.current) {
        (window as any).kbox(containerRef.current, {
          search: { query: kpId },
          menu: {
            enable: true, 
            default: 'menu_list',
            mobile: 'menu_button', 
            format: '{S} {T} ({Q})', 
            limit: 5, // Максимальное количество элементов в меню
            open: false, // Открывать меню по умолчанию
          },
          players: {

            Turbo: {
            enable: true,
            position: 1

        },

        alloha: {
            enable: true,
            position: 2

        },
        collaps: {
            enable: true,
            position: 3

        },
        kodik: {
            enable: true,
            position: 4

        },
        videocdn: {
            enable: true,
            position: 5

        },



        // ...
    },
          
          notFoundMessage: 'Видео не найдено.',
          
        });
      }
    };

    return () => {
      
      try {
        document.body.removeChild(script);
      } catch (e) {}
    };
  }, [kpId]);

  return <div ref={containerRef} className="kinobox_player"></div>;
}

export default KinoboxPlayer;