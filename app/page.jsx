import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const handleClick = () => {
    window.location.href =
      "file:///C:/Users/usuario/Desktop/dev/Ignacio%20Carrabs%20Dev%20-%20CV.pdf";
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <h1 className="h1 mb-6">
              Hola! Soy <br />{" "}
              <span className="text-accent">Ignacio Carrabs</span>
            </h1>
            <span className="text-xl font-semibold">
              Desarrollador de Software
            </span>
            <p className="max-w-[500px] mb-9 mt-4 text-white/70">
              Disfruto creando soluciones completas, combinando lógica del
              servidor con interfaces atractivas e intuitivas, y siempre busco
              mejorar para ofrecer aplicaciones excepcionales.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="https://drive.google.com/file/d/1bQLdxG8_WIkS90e4BmHZRtjEYFOke7e5/view?usp=sharing" legacyBehavior passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Ver o descargar CV</span>
                    <FiDownload className="text-xl"></FiDownload>
                  </Button>
                </a>
              </Link>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
