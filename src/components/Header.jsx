import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Header = () => {
  const { t, currentLanguage, changeLanguage } = useLanguage()

  const handleLanguageChange = (e) => {
    const langCode = e.target.value === 'English' ? 'en' : 'es'
    changeLanguage(langCode)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/dist/assets/EG_America_Logo MED 1.png" alt="EG America Logo" className="logo-img" />
            <span className='logo-divider'>|</span>
            <div className="language-selector">
              <img src="/dist/assets/globe.svg" alt="language icon" className='lang-icon' />
              <select 
                name="language" 
                className='lang-select'
                value={currentLanguage === 'en' ? 'English' : 'Spanish'}
                onChange={handleLanguageChange}
              >
                <option value="English">EN</option>
                <option value="Spanish">ES</option>                
              </select>
            </div>
          </div>
          <div className='user-profile'>
            <img src="/dist/assets/3d_avatar.png" alt="User Icon" className='user-icon' />
            <span className='user-greeting'>{t('hello')}, John</span>            
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
