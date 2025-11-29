import { Button } from "@/components/ui/button"
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_URL
export default function About() {
  return (
    <section id="nosotros" className="py-20 md:py-20 md:pt-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            QUIÉNES <span className="text-primary">SOMOS</span>
          </h2>
          <p className="text-lg text-foreground leading-relaxed mb-6">
            Somos DAERONTEX, una fábrica de sublimación textil con más de 5 años en el rubro. Nos dedicamos a la
            creación de indumentaria deportiva en una amplia variedad, con diseños exclusivos y mucho más.
          </p>
          <p className="text-lg text-foreground leading-relaxed mb-8">
            Contamos con servicio de impresión, diseños, taller de corte y confección de conjuntos 100% personalizados.
            Trabajamos con todo tipo de telas, garantizando calidad y compromiso en cada prenda.
          </p>
          {/* Button 3 */}
        <div className="flex justify-center">
          <a href={whatsapp} className="text-base font-semibold rounded px-5 py-2.5 overflow-hidden group bg-[#1E4594] relative bg-gradient-to-r from-[#1E4594] to-cyan-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#1E4594] transition-all ease-out duration-300 ">
            <span className="absolute right-0 w-14 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40"></span>
            <span className="relative">Contactar Ahora</span>
          </a>
        </div>
        </div>
      </div>
    </section>
  )
}
