import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { TbMovie } from "react-icons/tb"

const Welcome = () => {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 })
  const requestRef = useRef<number | null>(null)

  const smoothTransform = useRef({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e
    const { offsetWidth, offsetHeight } = currentTarget

    const centerX = offsetWidth / 2
    const centerY = offsetHeight / 2
    const x = clientX - currentTarget.getBoundingClientRect().left
    const y = clientY - currentTarget.getBoundingClientRect().top

    const rotateX = ((y - centerY) / centerY) * 10 // Adjust multiplier for sensitivity
    const rotateY = ((x - centerX) / centerX) * -10

    setTransform({ rotateX, rotateY })
  }

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 })
  }

  useEffect(() => {
    const updateTransform = () => {
      // Smoothly transition toward target transform
      smoothTransform.current.rotateX +=
        (transform.rotateX - smoothTransform.current.rotateX) * 0.4
      smoothTransform.current.rotateY +=
        (transform.rotateY - smoothTransform.current.rotateY) * 0.4

      // Apply the smoothed transformation
      const element = document.getElementById("heroAnimationImg")
      if (element) {
        element.style.transform = `perspective(1200px) rotateX(${smoothTransform.current.rotateX.toFixed(
          2
        )}deg) rotateY(${smoothTransform.current.rotateY.toFixed(2)}deg)`
      }

      // Continue the animation loop
      requestRef.current = requestAnimationFrame(updateTransform)
    }

    requestRef.current = requestAnimationFrame(updateTransform)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [transform])

  return (
    <div
      id="welcome"
      className="flex flex-col justify-center items-center text-center w-full bg-[linear-gradient(138.18deg,#fbdcdc,#f8b8b8_94.44%)] bg-cover bg-center h-auto py-20 px-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Title Section */}
      <h2 className="text-5xl font-bold text-red-600 mb-4">
        Get More Fans, <br /> Protect Your Reddit Posts
      </h2>
      <p className="text-gray-600 text-xl max-w-2xl">
        Quickly retrieve subreddit posting requirements <br /> and save time.
      </p>
      <button className="flex flex-row gap-3 mt-6 px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-300">
        <TbMovie className="text-2xl" />
        Watch Video
      </button>

      {/* Image Transformation Section */}
      <div
        id="heroAnimationImg"
        className="relative perspective-[1200px] transform-style-3d mt-10"
      >
        {/* Main Dashboard Image */}
        <img
          src="/download.png"
          alt="hero dashboard"
          // priority={true}
          className="rounded-lg shadow-md w-full h-full"
        />
      </div>
    </div>
  )
}

export default Welcome
