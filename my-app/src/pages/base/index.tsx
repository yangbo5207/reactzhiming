import React from 'react'
import {list} from './data'
import './index.css'

export default function Basic() {  
  return (
    <div className="basic_wrapper">
      <div className="list_area">
        <div className="pre_title">React 基础知识</div>

        {list.map((item, i) => (
          <a className="basic_item" key={item.url} href={item.url} target="_blank" rel="noreferrer" style={{ 'animationDelay': `${0.2 * i}s` }}>
            <div className="title">{item.title}</div>
            <div className="time">这波能反杀 . 2010.10.11</div>
          </a>
        ))}
      </div>
    </div>
  )
}