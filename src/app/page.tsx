'use client' // Required for interactivity

import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <Head>
        <title>My Personal Website</title>
      </Head>

      {/* Navigation */}
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

      {/* All Sections */}
      <main>
        {/* Hero Section - Side by Side Layout */}
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Image on Left (mobile: top) */}
              <div className="md:w-1/2 mt-8">
                <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/profile.jfif"
                    alt="Profile"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text Content on Right (mobile: bottom) */}
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Hi, I'm <span className="text-blue-600">Finzi</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Web Developer & Designer creating beautiful digital experiences
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    Contact Me
                  </button>
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
                  >
                    View Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus at purus id tincidunt. Nulla ac euismod diam. Duis vitae mollis magna. Fusce eleifend nibh eu tellus dictum ultricies. Duis at porttitor justo. Vivamus faucibus mollis quam, a pharetra sapien lobortis et. Cras accumsan tincidunt odio at eleifend. Quisque sit amet laoreet magna. Nullam dui massa, consectetur id interdum id, luctus ut odio. Aliquam efficitur sem sapien, ac posuere urna ultrices eu.

                Phasellus ut leo eget turpis sagittis placerat. Nunc quis mauris suscipit, rhoncus felis eu, venenatis est. Praesent ac velit et nisl volutpat accumsan. Donec non magna a lectus pharetra malesuada ut eu ex. Proin quis massa eu urna consectetur dignissim. Donec metus orci, dictum sit amet ex a, ultrices pellentesque est. Donec vitae eleifend erat. Sed lobortis nec elit id ultricies. Integer vehicula posuere faucibus.
              </p>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3].map((project) => (
                <div key={project} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold mb-3">Project {project}</h3>
                  <p className="text-gray-600 mb-4">
                    Description of project {project} and what technologies were used.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['React', 'Next.js', 'Tailwind'].slice(0, project).map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="text-blue-600 hover:underline">View Project →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-md">
            <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} My Personal Website</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-400">GitHub</a>
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  )
}