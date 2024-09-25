'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import LanguageToggle from './LanguageToggle'

interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

interface NavLinkProps extends NavItem {
  isActive: boolean;
}

const navItems: NavItem[] = [
  { href: '/about', label: 'About Us' },
  { href: '/classes', label: 'Our Classes' },
  { href: '/contact', label: 'Contact' },
  { href: 'https://forms.google.com/your-form-url', label: 'Start Your Classes', external: true },
]

const NavLink: React.FC<NavLinkProps> = ({ href, label, external = false, isActive }) => {
  const className = `font-hand text-black hover:text-orange-600 bg-white px-4 py-2 rounded-full transition-colors duration-200 ${
    isActive ? 'ring-2 ring-orange-600 ring-offset-2' : ''
  }`

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-yellow-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black">
          🏠
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} isActive={pathname === item.href} />
          ))}
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
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} isActive={pathname === item.href} />
          ))}
        </div>
      )}
    </header>
  )
}
