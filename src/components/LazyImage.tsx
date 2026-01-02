import { useState, useRef, useEffect, useCallback } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  onLoad?: () => void
}

const LazyImage = ({ src, alt, className = '', placeholder, onLoad }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
    onLoad?.()
  }, [onLoad])

  useEffect(() => {
    // Use requestAnimationFrame to avoid forced reflows
    const checkIntersection = () => {
      requestAnimationFrame(() => {
        if (!observerRef.current && imgRef.current) {
          observerRef.current = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  setIsInView(true)
                  if (observerRef.current) {
                    observerRef.current.disconnect()
                    observerRef.current = null
                  }
                }
              })
            },
            {
              threshold: 0.1,
              rootMargin: '100px', // Increased margin to load earlier
            }
          )
          observerRef.current.observe(imgRef.current)
        }
      })
    }

    checkIntersection()

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [])

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !isInView && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  )
}

export default LazyImage
