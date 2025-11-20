import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    title: "REMERAS DEPORTIVAS",
    description:
      "Telas de alta calidad con tecnología de secado rápido. Perfectas para entrenamientos intensos y competencias.",
    image: "/2.png",
  },
  {
    id: 2,
    title: "ESTAMPADOS PERSONALIZADOS",
    description:
      "Diseños únicos con técnicas de sublimación de última generación. Colores vibrantes que no se desvanecen.",
    image: "/nuestros-disenos/9.png",
  },
]

export default function ProductCarousel() {
  return (
    <section id="productos" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 space-y-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{products[0].title}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{products[0].description}</p>
            
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src={products[0].image || "/placeholder.svg"}
              alt={products[0].title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-2 md:order-1">
            <img
              src={products[1].image || "/placeholder.svg"}
              alt={products[1].title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{products[1].title}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{products[1].description}</p>
            {/* Button 3 */}
          <a href="#galeria" className="text-base font-semibold rounded px-5 py-2.5 overflow-hidden group bg-[#1E4594] relative bg-gradient-to-r from-[#1E4594] to-cyan-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#1E4594] transition-all ease-out duration-300 ">
            <span className="absolute right-0 w-14 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40"></span>
            <span className="relative">Conocer más</span>
          </a>
          </div>
        </div>
      </div>
    </section>
  )
}
