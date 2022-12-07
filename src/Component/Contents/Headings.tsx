import React, { FC } from 'react'
import { HeadingInterface } from '../../Interface/HeadingInterface/HeadingInterface'
import styles from './Contents.module.scss'
const Headings: FC<{ headings: HeadingInterface[], activeId: any }> = ({ headings, activeId }) => {
  return (
      <ul>
          {headings?.map((heading) => {
            return (
                  <li key={heading.id} className={heading.id === activeId ? styles['active'] : ''}>
                      <a href={`#${heading.id}`}>{heading.title}</a>
                      {heading.items.length > 0 && (
                          <ul>
                              {heading.items.map((child) => (
                                  <li key={child.id} className={child.id === activeId ? styles['active'] : ''}>

                                      <a href={`#${child.id}`}>{child.title}</a>
                                  </li>
                              ))}
                          </ul>
                      )}
                  </li>
            )
          })}
      </ul>
  )
}

export { Headings }
