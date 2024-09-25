'use client'

import Link from 'next/link'
import { useState } from 'react'
import LanguageToggle from './LanguageToggle'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-yellow-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          🏠
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/about" className="font-hand text-blue-600 hover:text-blue-800 bg-white px-4 py-2 rounded-full transition-colors duration-200">About Us</Link>
          <Link href="/classes" className="font-hand text-blue-600 hover:text-blue-800 bg-white px-4 py-2 rounded-full transition-colors duration-200">Our Classes</Link>
          <Link href="/contact" className="font-hand text-blue-600 hover:text-blue-800 bg-white px-4 py-2 rounded-full transition-colors duration-200">Contact</Link>
          <a href="https://forms.google.com/your-form-url" target="_blank" rel="noopener noreferrer" className="font-hand text-blue-600 hover:text-blue-800 bg-white px-4 py-2 rounded-full transition-colors duration-200">Start Your Classes</a>
        </nav>
        <LanguageToggle />
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link href="/about" className="font-hand block py-2 text-blue-600 hover:text-blue-800">About Us</Link>
          <Link href="/classes" className="font-hand block py-2 text-blue-600 hover:text-blue-800">Our Classes</Link>
          <Link href="/contact" className="font-hand block py-2 text-blue-600 hover:text-blue-800">Contact</Link>
          <a href="https://forms.google.com/your-form-url" target="_blank" rel="noopener noreferrer" className="font-hand block py-2 text-blue-600 hover:text-blue-800">Start Your Classes</a>
        </div>
      )}
    </header>
  )
}
