import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShieldAlert } from 'lucide-react'

export default function Navbar() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Incidents', href: '/incidents' },
    { name: 'Threat Actors', href: '/threat-actors' },
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
          <span className="text-xl font-bold">Incident Intel</span>
        </Link>
        </motion.div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to={item.href} className="hover:text-blue-400 transition-colors duration-200">
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}