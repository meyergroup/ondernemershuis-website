import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

// Trade mission data - easily updatable
const tradeMissions = [
  {
    id: 1,
    title: "Handelsmissie Suriname en deelname SEOGS 2025",
    registrationUrl: "#", // Update this URL as needed
  },
  {
    id: 2,
    title: "Suriname op de EmigratieBeurs 2025 (NL)",
    registrationUrl: "#", // Update this URL as needed
  },
  {
    id: 3,
    title: "SEOGS 2024 energie- en offshore-evenement in Suriname",
    registrationUrl: "#", // Update this URL as needed
  },
  {
    id: 4,
    title: "Nederlandse Ondernemers Netwerk Missie 2025",
    registrationUrl: "#", // Update this URL as needed
  },
  {
    id: 5,
    title: "Agribusiness Handelsmissie Suriname-Nederland",
    registrationUrl: "#", // Update this URL as needed
  },
]

export default function HandelmissiePage() {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Handelmissie</h1>

            {/* Green background section with white text */}
            <div className="bg-green-600 bg-opacity-90 rounded-2xl p-8 md:p-12 text-white">
              <p className="text-lg md:text-xl leading-relaxed">
                Ondernemershuis is in samenwerking met Jaya Experience (NL) al jaren actief in het bevorderen van
                zakelijke relaties tussen Nederland en Suriname. Door middel van handelsmissies, netwerkevents en
                zakelijke bijeenkomsten creëren wij bruggen tussen ondernemers uit beide landen.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mt-4">
                Onze handelsmissies bieden unieke mogelijkheden voor Nederlandse en Surinaamse ondernemers om nieuwe
                markten te verkennen, partnerships aan te gaan en hun internationale netwerk uit te breiden. Sluit je
                aan bij onze missies en ontdek de kansen die wachten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Listing Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Aankomende Handelsmissies</h2>
              <p className="text-lg text-gray-600">
                Ontdek onze aankomende handelsmissies en meld je aan voor unieke zakelijke kansen.
              </p>
            </div>

            {/* Mission Cards */}
            <div className="space-y-6">
              {tradeMissions.map((mission) => (
                <Card key={mission.id} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-2">{mission.title}</h3>
                      </div>
                      <div className="flex-shrink-0">
                        <Link
                          href={mission.registrationUrl}
                          className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-sm md:text-base"
                        >
                          KLIK HIER OM TE REGISTREREN
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Waarom Deelnemen aan Handelsmissies?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Onze handelsmissies bieden concrete voordelen voor ondernemers die hun internationale bereik willen
              uitbreiden.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-brand text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Netwerken</h3>
                <p className="text-gray-600">
                  Ontmoet internationale partners en bouw waardevolle zakelijke relaties op.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-brand text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Marktkennis</h3>
                <p className="text-gray-600">
                  Krijg diepgaande inzichten in nieuwe markten en zakelijke mogelijkheden.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-brand text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Groei</h3>
                <p className="text-gray-600">
                  Vergroot je internationale aanwezigheid en ontdek nieuwe groeimogelijkheden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Onze Partner: Jaya Experience</h2>
            <p className="text-lg text-gray-600 mb-8">
              In samenwerking met Jaya Experience uit Nederland organiseren wij professionele handelsmissies die
              ondernemers uit beide landen samenbrengen. Deze partnership zorgt voor een naadloze ervaring en maximale
              zakelijke resultaten.
            </p>
            <div className="bg-blue-50 rounded-2xl p-8">
              <p className="text-lg text-gray-700 italic">
                "Samen bouwen we bruggen tussen Nederlandse en Surinaamse ondernemers, waarbij we de unieke kansen van
                beide markten benutten voor wederzijds succes."
              </p>
              <p className="text-sm text-gray-600 mt-4 font-semibold">
                - Ondernemershuis & Jaya Experience Partnership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar voor Internationale Samenwerking?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Sluit je aan bij onze handelsmissies en ontdek de kansen die internationale samenwerking biedt voor jouw
            onderneming.
          </p>
          <div className="space-x-4">
            <Link href="/aanmelden">
              <button className="bg-white text-brand hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-lg transition-colors duration-200">
                Word Lid
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white hover:bg-white hover:text-brand px-8 py-4 text-lg font-medium rounded-lg transition-colors duration-200 bg-transparent">
                Meer Informatie
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
