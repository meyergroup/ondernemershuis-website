import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function ZakendoenPage() {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Zakendoen</h1>

            {/* Green background section with transparent overlay */}
            <div className="bg-green-600 bg-opacity-90 rounded-2xl p-8 md:p-12 text-white">
              <p className="text-lg md:text-xl leading-relaxed">
                Wil je zakendoen in Suriname en weet jij niet waar je moet beginnen? Wij helpen jou daar graag bij! Deze
                pagina begeleidt ondernemers stap voor stap bij het starten van een bedrijf in Suriname. Met onze "ROAD
                to Suriname" business service maken we het proces eenvoudig en overzichtelijk voor je.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mt-4">
                Van de eerste ideeën tot de officiële registratie - wij staan klaar om jouw ondernemersdromen
                werkelijkheid te maken in het prachtige Suriname.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Inleiding */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/placeholder.svg?height=320&width=500"
                  alt="Koloniaal gebouw in Paramaribo"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Inleiding: Ondernemen in Suriname</h2>
                <Link
                  href="/zakendoen/inleiding"
                  className="inline-block text-red-600 hover:text-red-700 font-semibold text-lg transition-colors duration-200"
                >
                  LEES VERDER »
                </Link>
              </CardContent>
            </Card>

            {/* Card 2: Een eigen bedrijf */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/placeholder.svg?height=320&width=500"
                  alt="Huizen aan de rivier in Suriname"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">1. Een eigen bedrijf in Suriname</h2>
                <Link
                  href="/zakendoen/eigen-bedrijf"
                  className="inline-block text-red-600 hover:text-red-700 font-semibold text-lg transition-colors duration-200"
                >
                  LEES VERDER »
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">ROAD to Suriname Business Service</h2>
            <p className="text-lg text-gray-600 mb-8">
              Onze gespecialiseerde business service begeleidt internationale ondernemers bij het opzetten van hun
              bedrijf in Suriname. Van juridische procedures tot lokale netwerken - wij zorgen ervoor dat jouw bedrijf
              succesvol van start gaat.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-brand text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Oriëntatie</h3>
                <p className="text-gray-600">
                  Kennismaking met de Surinaamse markt en mogelijkheden voor jouw bedrijf.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Registratie</h3>
                <p className="text-gray-600">
                  Begeleiding bij alle juridische en administratieve procedures voor bedrijfsregistratie.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lancering</h3>
                <p className="text-gray-600">
                  Ondersteuning bij de lancering en eerste stappen in de Surinaamse markt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar om Jouw Bedrijf in Suriname te Starten?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Neem contact met ons op voor een gratis consultatie over jouw business plannen in Suriname. Onze experts
            staan klaar om je te helpen.
          </p>
          <div className="space-x-4">
            <Link href="/aanmelden">
              <button className="bg-white text-brand hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-lg transition-colors duration-200">
                Gratis Consultatie
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white hover:bg-white hover:text-brand px-8 py-4 text-lg font-medium rounded-lg transition-colors duration-200 bg-transparent">
                Contact Opnemen
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
