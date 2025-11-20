import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
<script src="https://code.jquery.com/jquery-3.x.x.min.js"></script>

const ServicesGrid = ({ onCardClick }) => {
  const { t } = useLanguage()
  
  const services = [
    {
      id: 1,
      titleKey: "referralBonus",      
      icon: <img src='/dist/assets/prompt-icon.svg' alt='Portal Icon' />,
      action: "Access Portal"
    },
    {
      id: 2,
      titleKey: "leaveTypes",      
      icon: <img src='/dist/assets/prompt-icon.svg' alt='Portal Icon' />,
      action: "View Benefits"
    },
    {
      id: 3,
      titleKey: "howToRefer",      
      icon: <img src='/dist/assets/prompt-icon.svg' alt='Portal Icon' />,
      action: "Contact Support"
    },
    {
      id: 4,
      titleKey: "reportHarassment",      
      icon: <img src='/dist/assets/prompt-icon.svg' alt='Portal Icon' />,
      action: "Contact Support"
    },
    {
      id: 5,
      titleKey: "referralBonus",      
      icon: <img src='/dist/assets/prompt-icon.svg' alt='Portal Icon' />,
      action: "Access Portal"
    },
    {
      id: 6,
      titleKey: "leaveTypes",      
      icon: <img src='/dist/assets/prompt-icon.svg' alt='Portal Icon' />,
      action: "View Benefits"
    },
    {
      id: 7,
      titleKey: "howToRefer",      
      icon: <img src='/dist/assets/prompt-icon.svg' alt='Portal Icon' />,
      action: "Contact Support"
    },
    {
      id: 8,
      titleKey: "reportHarassment",      
      icon: <img src='/dist/assets/prompt-icon.svg' alt='Portal Icon' />,
      action: "Contact Support"
    }
  ]

  const handleCardClick = (titleKey) => {
    if (onCardClick) {
      onCardClick(t(titleKey))
    }
  }

  return (
    <section className="services-section">
      <div className="cards-grid">
        {services.map(service => (
          <div 
            key={service.id} 
            className="card clickable-card"
            onClick={() => handleCardClick(service.titleKey)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleCardClick(service.titleKey)
              }
            }}
          >
            <div className='card-container'>
              <div className="card-icon">
                {service.icon}
              </div>
              <div className="card-title">
                <h4>{t(service.titleKey)}</h4>
              </div>              
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesGrid
