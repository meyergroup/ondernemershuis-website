import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Extract form data
    const data = {
      naam: formData.get("naam"),
      email: formData.get("email"),
      telefoon: formData.get("telefoon"),
      whatsapp: formData.get("whatsapp"),
      bedrijf: formData.get("bedrijf"),
      functie: formData.get("functie"),
      bio: formData.get("bio"),
      website: formData.get("website"),
      linkedin: formData.get("linkedin"),
      pitch: formData.get("pitch"),
    }

    // Handle file uploads
    const profielfoto = formData.get("profielfoto") as File | null
    const bedrijfslogo = formData.get("bedrijfslogo") as File | null

    // Here you would typically:
    // 1. Validate the data
    // 2. Save to database
    // 3. Upload files to storage
    // 4. Send confirmation email
    // 5. Add to mailing list

    console.log("Registration data:", data)
    if (profielfoto) console.log("Profile photo:", profielfoto.name)
    if (bedrijfslogo) console.log("Company logo:", bedrijfslogo.name)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Aanmelding succesvol ontvangen!",
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ success: false, message: "Er is een fout opgetreden" }, { status: 500 })
  }
}
