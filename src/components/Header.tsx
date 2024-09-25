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
          <Link href="/about" className="text-blue-600 hover:text-blue-800">About Us</Link>
          <Link href="/classes" className="text-blue-600 hover:text-blue-800">Our Classes</Link>
          <Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link>
          <Link href="/form" className="text-blue-600 hover:text-blue-800">Start Your Classes</Link>
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
          <Link href="/about" className="block py-2 text-blue-600 hover:text-blue-800">About Us</Link>
          <Link href="/classes" className="block py-2 text-blue-600 hover:text-blue-800">Our Classes</Link>
          <Link href="/contact" className="block py-2 text-blue-600 hover:text-blue-800">Contact</Link>
          <Link href="/form" className="block py-2 text-blue-600 hover:text-blue-800">Start Your Classes</Link>
        </div>
      )}
    </header>
  )
}
