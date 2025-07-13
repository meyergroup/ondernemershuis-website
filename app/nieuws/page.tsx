import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const newsArticles = [
  {
    id: 1,
    title: "Nieuwe Coworking Space Geopend in Paramaribo",
    excerpt:
      "Het Ondernemershuis heeft een nieuwe coworking space geopend in het hart van Paramaribo. Deze moderne faciliteit biedt ondernemers de perfecte omgeving om te werken en netwerken.",
    image: "/placeholder.svg?height=200&width=300",
    date: "15 December 2024",
    category: "Coworking",
  },
  {
    id: 2,
    title: "Succesvolle Handelmissie naar Nederland",
    excerpt:
      "Onze recente handelmissie naar Nederland was een groot succes. Meer dan 20 Surinaamse ondernemers hebben waardevolle connecties gemaakt met Nederlandse bedrijven.",
    image: "/placeholder.svg?height=200&width=300",
    date: "10 December 2024",
    category: "Handelmissie",
  },
  {
    id: 3,
    title: "OndernemersCafé: Digitale Marketing Trends 2025",
    excerpt:
      "In ons laatste OndernemersCafé bespraken we de belangrijkste digitale marketing trends voor 2025. Experts deelden hun inzichten over social media, AI en e-commerce.",
    image: "/placeholder.svg?height=200&width=300",
    date: "5 December 2024",
    category: "OndernemersCafé",
  },
  {
    id: 4,
    title: "Nieuwe Online Cursus: Business Plan Schrijven",
    excerpt:
      "Onze Online Academie heeft een nieuwe cursus gelanceerd over het schrijven van effectieve business plannen. Perfect voor startende ondernemers.",
    image: "/placeholder.svg?height=200&width=300",
    date: "1 December 2024",
    category: "Online Academie",
  },
  {
    id: 5,
    title: "Community Groeit naar 500+ Leden",
    excerpt:
      "We zijn trots om aan te kondigen dat onze community is gegroeid naar meer dan 500 actieve leden. Dit toont de kracht van samenwerking tussen Surinaamse ondernemers.",
    image: "/placeholder.svg?height=200&width=300",
    date: "25 November 2024",
    category: "Community",
  },
  {
    id: 6,
    title: "Startup Pitch Competition 2024 Winnaar Bekend",
    excerpt:
      "De winnaar van onze jaarlijkse Startup Pitch Competition is bekend! TechSolutions Suriname wint met hun innovatieve app voor lokale dienstverlening.",
    image: "/placeholder.svg?height=200&width=300",
    date: "20 November 2024",
    category: "Events",
  },
]

export default function NieuwsPage() {
  return (
    <div className="py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nieuws & Updates</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Blijf op de hoogte van het laatste nieuws, events en ontwikkelingen binnen het Ondernemershuis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0056a6] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <CardDescription className="text-gray-600">{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Lees verder »
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button className="brand-button">Meer Nieuws Laden</Button>
        </div>
      </div>
    </div>
  )
}
