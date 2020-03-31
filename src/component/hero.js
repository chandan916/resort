import React from 'react';

export default function Hero({hero,children}) {
    return (
      <header className={hero}>
          {children}
      </header>
    )
}
Hero.defaultProps={
    hero:"defaultHero"
}
