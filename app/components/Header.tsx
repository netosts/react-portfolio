"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: "#home", label: "Início" },
    { href: "#experience", label: "Experiência" },
    { href: "#projects", label: "Projetos" },
    { href: "#skills", label: "Competências" },
    { href: "#presentations", label: "Apresentações" },
    { href: "#contact", label: "Contato" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4 gap-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            <span className="block lg:hidden">SN</span>
            <span className="hidden lg:block">Silvio dos Santos Neto</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="cursor-pointer text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex justify-center items-center md:hidden cursor-pointer rounded-full hover:bg-indigo-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <button className="p-2 text-indigo-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  scrollToSection(item.href)
                  setIsMenuOpen(false)
                }}
                className="block w-full cursor-pointer text-left py-2 text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
