import React from 'react'
import styles from './links.module.css'

import LinkItem from './LinkItem'

const Links = () => {
  
  const dummyLinks = [
    {
      title: 'Signups',
      target: "#",
      active: true
    },
    {
      title: 'Investments',
      target: "#",
      active: false
    },   
    {
      title: 'Revenue',
      target: "#",
      active: false
    },   
    {
      title: 'Exits',
      target: "#",
      active: false
    },
    {
      title: 'Trades',
      target: "#",
      active: false
    },
  ]

  const links = dummyLinks.map((item, index) => {
    return (
      <li 
        key={index}
      >
        <LinkItem 
          title={item.title}
          isActive={item.active}
          target="#"
        />
      </li>
    )
  })
  return (
    <div className={styles.links}>
      <ul>
        {links}
      </ul>
    </div>
  )
}

export default Links