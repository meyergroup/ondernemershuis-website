"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload } from "lucide-react"

export default function AanmeldenPage() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    whatsapp: "",
    bedrijf: "",
    functie: "",
    bio: "",
    website: "",
    linkedin: "",
    pitch: "",
  })

  const [files, setFiles] = useState<{
    profielfoto: File | null
    bedrijfslogo: File | null
  }>({
    profielfoto: null,
    bedrijfslogo: null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "profielfoto" | "bedrijfslogo") => {
    const file = e.target.files?.[0] || null
    setFiles((prev) => ({ ...prev, [type]: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Create FormData for file upload
    const submitData = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value)
    })

    if (files.profielfoto) submitData.append("profielfoto", files.profielfoto)
    if (files.bedrijfslogo) submitData.append("bedrijfslogo", files.bedrijfslogo)

    try {
      // Placeholder endpoint - replace with actual API
      const response = await fetch("/api/aanmelden", {
        method: "POST",
        body: submitData,
      })

      if (response.ok) {
        alert("Aanmelding succesvol verzonden!")
        // Reset form
        setFormData({
          naam: "",
          email: "",
          telefoon: "",
          whatsapp: "",
          bedrijf: "",
          functie: "",
          bio: "",
          website: "",
          linkedin: "",
          pitch: "",
        })
        setFiles({ profielfoto: null, bedrijfslogo: null })
      } else {
        alert("Er is een fout opgetreden. Probeer het opnieuw.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Er is een fout opgetreden. Probeer het opnieuw.")
    }
  }

  return (
    <div className="py-16">
      <div className="section-container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Aanmelden voor het Ondernemershuis</h1>
          <p className="text-lg text-gray-600">
            Word lid van onze community en ontdek nieuwe mogelijkheden voor jouw onderneming.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Aanmeldingsformulier</CardTitle>
            <CardDescription>
              Vul alle velden in om je aanmelding te voltooien. Velden met * zijn verplicht.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="naam">Volledige Naam *</Label>
                  <Input
                    id="naam"
                    name="naam"
                    type="text"
                    required
                    value={formData.naam}
                    onChange={handleInputChange}
                    placeholder="Jouw volledige naam"
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-mailadres *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jouw@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="telefoon">Telefoonnummer *</Label>
                  <Input
                    id="telefoon"
                    name="telefoon"
                    type="tel"
                    required
                    value={formData.telefoon}
                    onChange={handleInputChange}
                    placeholder="+597 123-4567"
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp">WhatsApp Nummer</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="+597 123-4567"
                  />
                </div>
              </div>

              {/* Business Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="bedrijf">Bedrijfsnaam *</Label>
                  <Input
                    id="bedrijf"
                    name="bedrijf"
                    type="text"
                    required
                    value={formData.bedrijf}
                    onChange={handleInputChange}
                    placeholder="Naam van jouw bedrijf"
                  />
                </div>
                <div>
                  <Label htmlFor="functie">Functie/Positie *</Label>
                  <Input
                    id="functie"
                    name="functie"
                    type="text"
                    required
                    value={formData.functie}
                    onChange={handleInputChange}
                    placeholder="CEO, Directeur, etc."
                  />
                </div>
              </div>

              {/* Bio */}
              <div>
                <Label htmlFor="bio">Korte Bio *</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  required
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Vertel kort over jezelf en jouw onderneming..."
                  rows={4}
                />
              </div>

              {/* Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://jouwwebsite.com"
                  />
                </div>
                <div>
                  <Label htmlFor="linkedin">LinkedIn Profiel</Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/jouwprofiel"
                  />
                </div>
              </div>

              {/* Pitch */}
              <div>
                <Label htmlFor="pitch">Elevator Pitch</Label>
                <Textarea
                  id="pitch"
                  name="pitch"
                  value={formData.pitch}
                  onChange={handleInputChange}
                  placeholder="Beschrijf jouw bedrijf in 2-3 zinnen..."
                  rows={3}
                />
              </div>

              {/* File Uploads */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="profielfoto">Profielfoto</Label>
                  <div className="mt-2">
                    <label htmlFor="profielfoto" className="cursor-pointer">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">
                          {files.profielfoto ? files.profielfoto.name : "Klik om foto te uploaden"}
                        </p>
                      </div>
                      <input
                        id="profielfoto"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, "profielfoto")}
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <Label htmlFor="bedrijfslogo">Bedrijfslogo</Label>
                  <div className="mt-2">
                    <label htmlFor="bedrijfslogo" className="cursor-pointer">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">
                          {files.bedrijfslogo ? files.bedrijfslogo.name : "Klik om logo te uploaden"}
                        </p>
                      </div>
                      <input
                        id="bedrijfslogo"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, "bedrijfslogo")}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button type="submit" className="brand-button w-full md:w-auto">
                  Aanmelding Verzenden
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
