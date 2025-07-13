import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Coffee, Printer, Users, Car, Shield } from "lucide-react"

export default function CoworkingPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Coworking Space Paramaribo</h1>
              <p className="text-xl text-gray-600 mb-8">
                Werk in een inspirerende omgeving samen met andere ondernemers. Onze moderne coworking space biedt alles
                wat je nodig hebt om productief te zijn.
              </p>
              <div className="space-x-4">
                <Link href="/aanmelden">
                  <Button className="brand-button">Reserveer Nu</Button>
                </Link>
                <Button variant="outline">Plan Bezichtiging</Button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Coworking Space"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Faciliteiten & Voorzieningen</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Onze coworking space is volledig uitgerust met moderne faciliteiten om je de beste werkervaring te bieden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Wifi className="h-12 w-12 text-[#0056a6] mx-auto mb-4" />
                <CardTitle>High-Speed Internet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Supersnel glasvezel internet voor al je online activiteiten en video calls.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Coffee className="h-12 w-12 text-[#0056a6] mx-auto mb-4" />
                <CardTitle>Gratis Koffie & Thee</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Onbeperkt koffie, thee en water om je energiek en gefocust te houden.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Printer className="h-12 w-12 text-[#0056a6] mx-auto mb-4" />
                <CardTitle>Print & Scan Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Professionele print-, scan- en kopieerservice voor al je documenten.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-[#0056a6] mx-auto mb-4" />
                <CardTitle>Vergaderruimtes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Moderne vergaderruimtes met presentatieschermen en video conferencing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Car className="h-12 w-12 text-[#0056a6] mx-auto mb-4" />
                <CardTitle>Gratis Parkeren</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Veilige en gratis parkeergelegenheid direct bij het gebouw.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-[#0056a6] mx-auto mb-4" />
                <CardTitle>24/7 Beveiliging</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Veilige werkomgeving met 24/7 beveiliging en toegangscontrole.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workspace Options */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Werkplekopties</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kies de werkplek die het beste bij jouw werkstijl en behoeften past.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Hot Desk"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Hot Desk</CardTitle>
                <CardDescription>
                  Flexibele werkplek in onze open workspace. Perfect voor wie variatie zoekt.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Toegang tijdens openingstijden</li>
                  <li>• Alle basis faciliteiten</li>
                  <li>• Netwerkmogelijkheden</li>
                  <li>• Geen vaste plek</li>
                </ul>
                <div className="text-2xl font-bold text-[#0056a6] mb-4">SRD 50/dag</div>
                <Button className="w-full brand-button">Reserveer Hot Desk</Button>
              </CardContent>
            </Card>

            <Card className="border-[#0056a6] border-2">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Dedicated Desk"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Dedicated Desk</CardTitle>
                <CardDescription>
                  Jouw eigen vaste werkplek in onze gedeelde ruimte. Ideaal voor regelmatige gebruikers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Eigen vaste werkplek</li>
                  <li>• 24/7 toegang</li>
                  <li>• Opslag mogelijkheden</li>
                  <li>• Alle premium faciliteiten</li>
                </ul>
                <div className="text-2xl font-bold text-[#0056a6] mb-4">SRD 300/maand</div>
                <Button className="w-full brand-button">Reserveer Dedicated Desk</Button>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Private Office"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Private Office</CardTitle>
                <CardDescription>Privé kantoorruimte voor teams of wie meer privacy nodig heeft.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Volledig privé kantoor</li>
                  <li>• Voor 1-4 personen</li>
                  <li>• Eigen vergaderruimte</li>
                  <li>• Aanpasbare inrichting</li>
                </ul>
                <div className="text-2xl font-bold text-[#0056a6] mb-4">SRD 800/maand</div>
                <Button className="w-full brand-button">Reserveer Private Office</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Locatie & Openingstijden</h2>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-900">Adres:</h3>
                  <p className="text-gray-600">
                    Henck Arronstraat 123
                    <br />
                    Paramaribo, Suriname
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Openingstijden:</h3>
                  <p className="text-gray-600">
                    Maandag - Vrijdag: 08:00 - 18:00
                    <br />
                    Zaterdag: 09:00 - 15:00
                    <br />
                    Zondag: Gesloten
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Contact:</h3>
                  <p className="text-gray-600">
                    Tel: +597 123-4567
                    <br />
                    Email: coworking@ondernemershuis.sr
                  </p>
                </div>
              </div>
              <Button className="brand-button">Plan een Bezichtiging</Button>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Coworking Location"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0056a6] text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar om Deel uit te Maken van Onze Coworking Community?</h2>
          <p className="text-xl mb-8 opacity-90">
            Reserveer vandaag nog je werkplek en ervaar het verschil van werken in een inspirerende omgeving.
          </p>
          <div className="space-x-4">
            <Link href="/aanmelden">
              <Button className="bg-white text-[#0056a6] hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                Reserveer Nu
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0056a6] bg-transparent"
            >
              Meer Informatie
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
