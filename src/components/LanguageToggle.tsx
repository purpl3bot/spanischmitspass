'use client'

import { useState } from 'react'

export default function LanguageToggle() {
  const [language, setLanguage] = useState('en')

  // For now, we'll keep this hidden
  return null

  // Uncomment this when you're ready to implement language switching
  /*
  return (
    <button
      className="bg-green-300 text-white px-3 py-1 rounded-full hover:bg-green-400 transition-colors duration-200"
      onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
    >
      {language.toUpperCase()}
    </button>
  )
  */
}
