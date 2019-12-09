import React from 'react';
import './PageTitle.scss';


const PageTitle = (props: { title: string }) => {
  return (
    <div className="PageTitle">{props.title}</div>
  )
}

export { PageTitle }
