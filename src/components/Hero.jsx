import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className="hero-section">
      <div>        
        <img src="/dist/assets/robot-line-icon 1.svg" alt="Robot Icon" />
      </div>
      <h2>{t('welcomeTitle')}</h2>
      <p>
        {t('welcomeDescription')}
      </p>
    </section>
  )
}

export default Hero
