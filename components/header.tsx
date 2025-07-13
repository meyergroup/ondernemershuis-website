"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Nieuws", href: "/nieuws" },
  { name: "Community", href: "/community" },
  { name: "Coworking", href: "/coworking" },
  { name: "Zakendoen", href: "/zakendoen" },
  { name: "Handelmissie", href: "/handelmissie" },
  { name: "Agenda", href: "/agenda" },
  { name: "Young Entrepreneurs", href: "/young-entrepreneurs" },
  { name: "Vacatures in Suriname", href: "/vacatures-in-suriname" },
  // { name: "Online Academie", href: "/online-academie" },
  { name: "Prijzen", href: "/prijzen" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="section-container">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
<Link href="/" className="block w-[160px] h-auto">
  <img src="/ondlogo.png" alt="Logo" className="h-10 w-auto object-contain" />
</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className={`nav-link ${pathname === item.href ? "active" : ""}`}>
                {item.name}
              </Link>
            ))}
            {/* <Link href="/aanmelden">
              <Button className="brand-button ml-4">Aanmelden</Button>
            </Link> */}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link block ${pathname === item.href ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/aanmelden" onClick={() => setMobileMenuOpen(false)}>
                <Button className="brand-button w-full mt-4">Aanmelden</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
