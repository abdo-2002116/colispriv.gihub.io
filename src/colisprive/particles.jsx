import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";




export default function ParticlesComponent(){
  const particlesInit = useCallback(async engine => {
    console.log(engine);
      await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return( <>
    <div className="w-full h-screen  backdrop-contrast-50   gradient relative">
      <Particles
        className="w-full blur-[1px]  h-screen"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 1,
          },
          particles: {
            number: {
              value: 14,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "image",
              image: {
                src:
                  "https://www.colisprive.fr/wp-content/uploads/2018/05/logo-colis-prive-1.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.8,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: { min: 10, max: 20},
            },
            rotate: {
              value: 0,
              random: true,
              direction: "clockwise",
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 600,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: ["grab"],
              },
              onclick: {
                enable: false,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-row justify-end z-10">
      <div className="relative w-full justify-end">
        
           <img className="bg-cover w-full pl-80 bg-blur-md bg-center h-screen   bg-contain" src={require('./image/Design sans titre.png')} alt="" />
            <div className="absolute rop-shadow-md top-0 left-0 w-full px-20 pr-96 h-full flex pt-20   ">
    <div className="text-white	 mr-20 text-4xl drop-shadow-lg w-3/5 pr-4 p-8  font-bold -z-10  text-wrap"><p className="	backdrop-blur-sm bg-white/40 rounded-md p-8 text-black text-left  font-serif ">Bénéficiez des services logistiques professionnels avec <a className=" decoration-4 uppercase  text-4xl text-purple-950"> Colis
    Privé </a> au Maroc couvrant plus de <a className=" text-4xl "> 568    destinations </a></p>
    </div>
  </div>
</div>

      </div>
    </div>
  </>
  )
};

 
