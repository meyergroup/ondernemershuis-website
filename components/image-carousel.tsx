"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselProps {
  images: string[]
  autoPlay?: boolean
  interval?: number
}

export default function ImageCarousel({ images, autoPlay = true, interval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleCount = 3

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(goToNext, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, images.length])

  // Duplicate images to allow infinite looping visually
  const extendedImages = [...images, ...images, ...images]

  // Slide position based on full image width (200px + 1rem margin = 216px)
  const translateX = currentIndex * (200 + 16)

  return (
    <div className="relative w-full max-w-[645px] mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${translateX}px)` }}
      >
        {extendedImages.map((image, index) => (
          <div
            key={index}
            className="w-[200px] h-[200px] mr-4 flex-shrink-0"
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Image ${index + 1}`}
              width={200}
              height={200}
              className="rounded-md object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
<Button
  variant="ghost"
  size="icon"
  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
  onClick={goToPrevious}
>
  <ChevronLeft className="h-6 w-6" />
</Button>

<Button
  variant="ghost"
  size="icon"
  className="absolute right-3.5 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
  onClick={goToNext}
>
  <ChevronRight className="h-6 w-6" />
</Button>
    </div>
  )
}
