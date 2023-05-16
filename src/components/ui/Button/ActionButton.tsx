import { motion } from 'framer-motion'

const ActionButton = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-500 text-white relative">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center px-4">
        Welcome to Our Website!
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-center px-4">
        We provide the best services for you.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-8 py-3 bg-white text-blue-500 font-bold rounded"
      >
        Call to Action
      </motion.button>
    </div>
  )
}

export default ActionButton
