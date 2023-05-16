import React, { useEffect, useRef, useState } from 'react'

interface Position {
  x: number
  y: number
}

const lerp = (current: number, target: number, factor: number) =>
  current * (1 - factor) + target * factor

const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.hypot(x1 - x2, y1 - y2)
}

const MagneticButton: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 })
  const [lerpingData, setLerpingData] = useState({
    x: { current: 0, target: 0 },
    y: { current: 0, target: 0 }
  })
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.pageX, y: e.pageY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const render = () => {
      if (!buttonRef.current) return

      const rect = buttonRef.current.getBoundingClientRect()
      const distanceFromMouseToCenter = calculateDistance(
        mousePosition.x,
        mousePosition.y,
        rect.left + rect.width / 2,
        rect.top + rect.height / 2
      )

      const triggerArea = 200
      const interpolationFactor = 0.8

      const targetHolder = { x: 0, y: 0 }

      if (distanceFromMouseToCenter < triggerArea) {
        buttonRef.current.classList.add('focus')
        targetHolder.x = (mousePosition.x - (rect.left + rect.width / 2)) * 0.2
        targetHolder.y = (mousePosition.y - (rect.top + rect.height / 2)) * 0.2
      } else {
        buttonRef.current.classList.remove('focus')
      }

      setLerpingData((prevData) => ({
        x: {
          current: lerp(
            prevData.x.current,
            targetHolder.x,
            interpolationFactor
          ),
          target: targetHolder.x
        },
        y: {
          current: lerp(
            prevData.y.current,
            targetHolder.y,
            interpolationFactor
          ),
          target: targetHolder.y
        }
      }))

      requestAnimationFrame(render)
    }

    render()
  }, [mousePosition])

  return (
    <button
      ref={buttonRef}
      className="px-8 py-3 bg-gold text-white font-bold rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      style={{
        transform: `translate(${lerpingData.x.current}px, ${lerpingData.y.current}px)`
      }}
    >
      <span className="pr-1 text-xl">$</span> Grab Your Ticket
    </button>
  )
}

export default MagneticButton
