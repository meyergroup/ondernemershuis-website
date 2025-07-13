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
  const [visibleCount, setVisibleCount] = useState(3) // default to 3 for larger screens

  // Detect screen size and set visibleCount accordingly
  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth < 640 ? 1 : 3) // 1 on mobile (below 640px), 3 otherwise
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

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

  const extendedImages = [...images, ...images, ...images]

  // Adjust translateX based on number of visible images
  const imageWidth = 200 + 16 // 200px + 1rem margin
  const translateX = currentIndex * imageWidth

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
