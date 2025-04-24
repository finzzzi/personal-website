'use client';

import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className="bg-white sticky top-0 z-10 shadow-lg">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-3">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold text-blue-600"
        >
          Personal Website
        </button>
            
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="hover:text-blue-400">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-blue-400">About</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400">Contact</button>
        </div>
            
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
          
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pb-4 space-y-3">
          <button onClick={() => scrollToSection('home')} className="block py-2 hover:text-blue-400">Home</button>
          <button onClick={() => scrollToSection('about')} className="block py-2 hover:text-blue-400">About</button>
          <button onClick={() => scrollToSection('projects')} className="block py-2 hover:text-blue-400">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="block py-2 hover:text-blue-400">Contact</button>
        </div>
      )}
    </div>
  </nav>
  )
}