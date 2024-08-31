import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShieldAlert, House, Skull } from 'lucide-react'

export default function Navbar() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Incidents', href: '/incidents' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0a0a2e] text-white p-4 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center space-x-2"
        >
        <Link to={"/"}
            className="flex items-center space-x-2"
        >

          <ShieldAlert className="h-8 w-8 text-blue-400" />
        </Link>
        </motion.div>
        <span className="text-xl font-bold">Incident Intel</span>
        <ul className="flex space-x-6">

            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/" className="hover:text-blue-400 flex gap-2 transition-colors duration-200">
                <House />Home
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/incidents" className="hover:text-blue-400 gap-2 flex transition-colors duration-200">
              <Skull />Incidents
              </Link>
            </motion.li>

        </ul>
      </div>
    </motion.nav>
  )
}
