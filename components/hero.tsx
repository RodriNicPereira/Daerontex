import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0"style={{ backgroundImage:
            "url(/DAERONTEX.png)",backgroundSize: "cover",backgroundPosition: "center",}}>
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-background-foreground/50 to-black" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">
            DISEÑOS 100%
            <br />
            <span className="text-primary text-white text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">PERSONALIZADOS</span>
          </h1>
          <p className="text-white text-lg md:text-xl  mb-8 ">
            Fábrica de sublimación textil y confección de conjuntos deportivos. Más de 5 años creando indumentaria
            deportiva con diseños exclusivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
          

          {/* Button 3 */}
        <div className="flex justify-center">
          <a href="#galeria" className="text-base font-semibold rounded px-5 py-2.5 overflow-hidden group bg-[#1E4594] relative bg-gradient-to-r from-[#1E4594] to-cyan-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#1E4594] transition-all ease-out duration-300 ">
            <span className="absolute right-0 w-14 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40"></span>
            <span className="relative">Ver Productos</span>
          </a>
        </div>


          </div>
        </div>
      </div>
    </section>
  )
}
