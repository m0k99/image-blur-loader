"use client"
import { useEffect, useRef, useState } from "react"
import { decode } from "blurhash"

type Props = {
  src: string
  hash: string
  alt?: string
  className?: string
}

export default function BlurImage({ src, hash, alt, className = "" }: Props) {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const [blurUrl, setBlurUrl] = useState<string>("")
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (!hash) return

    try {
      const pixels = decode(hash, 32, 32)
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")!
      canvas.width = 32
      canvas.height = 32
      const imageData = ctx.createImageData(32, 32)
      imageData.data.set(pixels)
      ctx.putImageData(imageData, 0, 0)
      setBlurUrl(canvas.toDataURL())
    } catch (error) {
      console.error("Failed to decode blurhash:", error)
    }
  }, [hash])

  useEffect(() => {
    if (!imgRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: "100px" },
    )
    observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`relative overflow-hidden rounded-lg bg-muted rounded-b-none ${className}`}>
      {!loaded && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: blurUrl
              ? `url(${blurUrl})`
              : `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23e5e7eb' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            filter: "blur(20px)",
            transform: "scale(1.1)",
          }}
        />
      )}
      {inView && (
        <img
          ref={imgRef}
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
        />
      )}
      {!inView && <div ref={imgRef} className="w-full h-full" />}
    </div>
  )
}
