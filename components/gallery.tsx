import { Button } from "@/components/ui/button"
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_PRESUPUESTO;

const designs = [
  {
    id: 1,
    title: "Equipo Deportivo",
    image: "/nuestros-disenos/5.png",
  },
  {
    id: 2,
    title: "Equipo Deportivo",
    image: "/nuestros-disenos/9.png",
  },
  {
    id: 3,
    title: "Equipo Deportivo",
    image: "/nuestros-disenos/6.png",
  },
  {
    id: 4,
    title: "Diseño Minimalista",
    image: "/nuestros-disenos/7.png",
  },
  {
    id: 5,
    title: "Estampado Vibrante",
    image: "/nuestros-disenos/10.png",
  },
  {
    id: 6,
    title: "Colección Premium",
    image: "/nuestros-disenos/12.png",
  },
]

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">
          NUESTROS <span className="text-primary">DISEÑOS</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Explora algunos de nuestros trabajos recientes
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design) => (
            <div key={design.id} className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer">
              <img
                src={design.image || "/placeholder.svg"}
                alt={design.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold">{design.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-3xl font-bold mb-4">¿Te gustó lo que viste?</h3>
            <p className="text-lg text-muted-foreground">
              Solicita información sobre nuestros diseños y servicios. Estamos listos para hacer realidad tu proyecto.
            </p>
          </div>
          {/* Button 3 */}
        <div className="flex justify-center">
          <a href={whatsappNumber} className="text-base font-semibold rounded px-5 py-2.5 overflow-hidden group bg-[#1E4594] relative bg-gradient-to-r from-[#1E4594] to-cyan-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#1E4594] transition-all ease-out duration-300 ">
            <span className="absolute right-0 w-14 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40"></span>
            <span className="relative">Pedir Información</span>
          </a>
        </div>
        </div>
      </div>
    </section>
  )
}
