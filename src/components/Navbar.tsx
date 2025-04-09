'use client' // Required for interactive elements

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between">
          {/* Website Logo/Name */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            MySite
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-400">
              About
            </Link>
            <Link href="/projects" className="hover:text-blue-400">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}