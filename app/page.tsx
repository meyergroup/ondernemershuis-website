import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ImageCarousel from "@/components/image-carousel"

const communityImages = [
  "/fuxk.jpg",
  "/fuxkk.jpg",
  "/fuxkkk.jpg",
  "/fuxkkkk.jpg",
]

export default function HomePage() {
  return (
    <div className="space-y-16 overflow-x-hidden">
      {/* Hero Section with background image and green overlay */}
<section className="relative h-[400px] md:h-[500px] flex items-center justify-center text-white">
  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/cover1.jpg" // Replace with your image path
      alt="Background"
      fill
      className="object-cover"
    />
  </div>

  {/* Green transparent overlay */}
  <div className="absolute inset-0 bg-green-900 bg-opacity-60 z-10" />

  {/* Content */}
  <div className="relative z-20 text-center max-w-4xl px-4">
<h1 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-6 break-words text-white">
  Welkom bij het Ondernemershuis
</h1>
  <p className="text-base sm:text-lg md:text-2xl mb-8 break-words">
    De community voor ondernemers in Suriname. Netwerken, leren, groeien en samen ondernemen.
  </p>
    <Link href="/aanmelden">
      <Button className="brand-button text-lg px-8 py-4">Aanmelden</Button>
    </Link>
  </div>
</section>

      {/* Community Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">De Community</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ontmoet ondernemers uit verschillende sectoren en bouw waardevolle connecties op.
            </p>
          </div>
          <ImageCarousel images={communityImages} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Over het Ondernemershuis</h2>
              <p className="text-lg text-gray-600 mb-6">
                Het Ondernemershuis is een dynamische community waar ondernemers samenkomen om te netwerken, kennis te
                delen en samen te groeien. Wij bieden een platform voor ondernemers om hun zakelijke doelen te bereiken
                door middel van samenwerking en ondersteuning.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Of je nu een startende ondernemer bent of al jaren ervaring hebt, bij het Ondernemershuis vind je de
                juiste mensen en middelen om je business naar het volgende niveau te tillen.
              </p>
              <Link href="/community">
                <Button className="brand-button">Meer Over Ons</Button>
              </Link>
            </div>
            <div className="relative h-96">
              <Image
                src="/cover1.jpg"
                alt="Over het Ondernemershuis"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* E-Scan CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#90EE90] text-white rounded-2xl p-8 md:p-12 text-center">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center break-words">
    Ontdek Gratis Jouw Entrepreneurial Index
  </h2>
              <p className="text-black text-base sm:text-lg md:text-xl mb-8 opacity-90 break-words text-center">
    Start de E-Scan en krijg inzicht in jouw ondernemersvaardigheden
  </p>
            <Button className="bg-[#06402B] text-[#fff] hover:bg-gray-100 px-8 py-4 text-lg font-medium">
              Start E-Scan
            </Button>
          </div>
        </div>
      </section>

      {/* Online Academie */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="/Business-Challenge.png"
                alt="Online Academie"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Online Academie</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ontwikkel jezelf met onze uitgebreide online cursussen en trainingen. Van business basics tot
                geavanceerde strategieën, wij hebben de kennis die je nodig hebt om te groeien als ondernemer.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Toegang tot exclusieve content, live webinars en een community van gelijkgestemde ondernemers die
                allemaal streven naar succes.
              </p>
              <Link href="https://academieportal.nl/ondernemershuis">
                <Button className="brand-button">Inloggen Academie</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mila Bahadoersing</h2>
              <p className="text-lg text-gray-600 mb-6 italic">
                "Ondernemerschap is niet alleen een carrièrekeuze, het is een manier van leven. Bij het Ondernemershuis
                geloven we dat elke ondernemer het potentieel heeft om groot te worden, en wij zijn er om die reis te
                ondersteunen."
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Als oprichter van het Ondernemershuis breng ik meer dan 15 jaar ervaring mee in het begeleiden van
                ondernemers. Mijn missie is om een platform te creëren waar ondernemers kunnen floreren en samen succes
                kunnen behalen.
              </p>
              <div className="text-sm text-gray-500">
                <p className="font-semibold">Mila Bahadoersing</p>
                <p>Oprichter & CEO, Ondernemershuis</p>
              </div>
            </div>
<div className="relative w-full h-[400px] sm:h-[500px] md:h-[578px]">
  <Image
    src="/milaB-2.jpg"
    alt="Mila Bahadoersing"
    fill
    className="object-cover rounded-lg"
  />
</div>
          </div>
        </div>
      </section>
    </div>
  )
}
