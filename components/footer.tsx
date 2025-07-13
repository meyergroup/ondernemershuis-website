import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Community Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/community" className="text-gray-300 hover:text-white">
                  Lid Worden
                </Link>
              </li>
              <li>
                <Link href="/coworking" className="text-gray-300 hover:text-white">
                  Coworking
                </Link>
              </li>
              <li>
                <Link href="/ondernemerscafe" className="text-gray-300 hover:text-white">
                  OndernemersCafé
                </Link>
              </li>
              <li>
                <Link href="/handelmissie" className="text-gray-300 hover:text-white">
                  Handelmissie
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/zakendoen" className="text-gray-300 hover:text-white">
                  Zakendoen
                </Link>
              </li>
              <li>
                <Link href="/online-academie" className="text-gray-300 hover:text-white">
                  Online Academie
                </Link>
              </li>
              <li>
                <Link href="/vacatures-in-suriname" className="text-gray-300 hover:text-white">
                  Vacatures
                </Link>
              </li>
              <li>
                <Link href="/prijzen" className="text-gray-300 hover:text-white">
                  Prijzen
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Paramaribo, Suriname</p>
              <p>Email: info@ondernemershuis.sr</p>
              <p>Tel: +597 123-4567</p>
              <p>WhatsApp: +597 123-4567</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Volg Ons</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ondernemershuis Suriname. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
