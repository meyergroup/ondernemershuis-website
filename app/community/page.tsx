import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Network, Calendar, Award } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Word Lid van Onze Community</h1>
            <p className="text-xl text-gray-600 mb-8">
              Sluit je aan bij meer dan 500 ondernemers die samen groeien, leren en succesvol zijn.
            </p>
            <Link href="/aanmelden">
              <Button className="brand-button text-lg px-8 py-4">Lid Worden</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Waarom Lid Worden?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Als lid van het Ondernemershuis krijg je toegang tot exclusieve voordelen en mogelijkheden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-[#0056a6] mx-auto mb-4" />
                <CardTitle>Netwerken</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ontmoet gelijkgestemde ondernemers en bouw waardevolle zakelijke relaties op.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Network className="h-12 w-12 text-[#0056a6] mx-auto mb-4" />
                <CardTitle>Samenwerking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Vind partners voor projecten en werk samen aan innovatieve oplossingen.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-12 w-12 text-[#0056a6] mx-auto mb-4" />
                <CardTitle>Exclusieve Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Toegang tot workshops, seminars en networking events alleen voor leden.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-[#0056a6] mx-auto mb-4" />
                <CardTitle>Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Krijg begeleiding van ervaren ondernemers en experts in jouw sector.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Onze Community in Cijfers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0056a6] mb-2">500+</div>
              <div className="text-gray-600">Actieve Leden</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0056a6] mb-2">50+</div>
              <div className="text-gray-600">Sectoren</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0056a6] mb-2">100+</div>
              <div className="text-gray-600">Events per Jaar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0056a6] mb-2">95%</div>
              <div className="text-gray-600">Tevredenheid</div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wat Onze Leden Zeggen</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Member"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                    <CardDescription>CEO, TechStart Suriname</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "Het Ondernemershuis heeft mijn netwerk enorm uitgebreid. De connecties die ik hier heb gemaakt hebben
                  direct bijgedragen aan de groei van mijn bedrijf."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Member"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Marcus Chen</CardTitle>
                    <CardDescription>Directeur, Green Solutions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "De workshops en events zijn van hoge kwaliteit. Ik leer elke keer weer iets nieuws dat ik direct kan
                  toepassen in mijn business."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Member"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Lisa Rodriguez</CardTitle>
                    <CardDescription>Oprichter, Creative Agency</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "De community is echt ondersteunend. Ik heb hier niet alleen klanten gevonden, maar ook vrienden en
                  mentors."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0056a6] text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar om Deel uit te Maken van Onze Community?</h2>
          <p className="text-xl mb-8 opacity-90">
            Sluit je vandaag nog aan en begin met het uitbreiden van jouw netwerk.
          </p>
          <Link href="/aanmelden">
            <Button className="bg-white text-[#0056a6] hover:bg-gray-100 px-8 py-4 text-lg font-medium">
              Word Nu Lid
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
