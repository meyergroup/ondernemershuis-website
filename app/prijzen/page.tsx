import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Basis Lidmaatschap",
    price: "SRD 150",
    period: "per maand",
    description: "Perfect voor startende ondernemers",
    features: [
      "Toegang tot community platform",
      "Maandelijkse networking events",
      "Basis online cursussen",
      "Community directory toegang",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Premium Lidmaatschap",
    price: "SRD 300",
    period: "per maand",
    description: "Voor groeiende ondernemingen",
    features: [
      "Alles van Basis lidmaatschap",
      "Coworking space toegang (20 uur/maand)",
      "Alle online cursussen",
      "Prioriteit bij events",
      "Mentorship programma",
      "Telefoon support",
      "Handelmissie deelname korting",
    ],
    popular: true,
  },
  {
    name: "Business Lidmaatschap",
    price: "SRD 500",
    period: "per maand",
    description: "Voor gevestigde bedrijven",
    features: [
      "Alles van Premium lidmaatschap",
      "Onbeperkte coworking space toegang",
      "Privé kantoorruimte (op aanvraag)",
      "Exclusieve business events",
      "1-op-1 business coaching",
      "Marketing ondersteuning",
      "Gratis handelmissie deelname",
      "Dedicated account manager",
    ],
    popular: false,
  },
]

export default function PrijzenPage() {
  return (
    <div className="py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Lidmaatschap Prijzen</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kies het lidmaatschap dat het beste bij jouw onderneming past. Alle plannen bevatten toegang tot onze
            community en basis features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-[#0056a6] border-2 shadow-lg" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#0056a6] text-white px-4 py-2 rounded-full text-sm font-medium">
                    Meest Populair
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">{plan.description}</CardDescription>
                <div className="text-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <Link href="/aanmelden">
                    <Button
                      className={`w-full ${
                        plan.popular ? "brand-button" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      Kies {plan.name}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Veelgestelde Vragen over Lidmaatschap</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kan ik mijn lidmaatschap opzeggen?</h3>
              <p className="text-gray-600">
                Ja, je kunt je lidmaatschap op elk moment opzeggen met een opzegtermijn van 30 dagen.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Zijn er setup kosten?</h3>
              <p className="text-gray-600">
                Nee, er zijn geen setup kosten. Je betaalt alleen het maandelijkse lidmaatschapsgeld.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kan ik upgraden of downgraden?</h3>
              <p className="text-gray-600">
                Ja, je kunt op elk moment upgraden of downgraden. Wijzigingen gaan in vanaf de volgende factuurperiode.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Welke betaalmethoden accepteren jullie?</h3>
              <p className="text-gray-600">
                We accepteren bankoverschrijvingen, creditcards en lokale betaalmethoden in Suriname.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nog vragen over onze lidmaatschappen?</h2>
          <p className="text-gray-600 mb-8">Neem contact met ons op voor een persoonlijk adviesgesprek.</p>
          <div className="space-x-4">
            <Button className="brand-button">Contact Opnemen</Button>
            <Link href="/aanmelden">
              <Button variant="outline">Direct Aanmelden</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
