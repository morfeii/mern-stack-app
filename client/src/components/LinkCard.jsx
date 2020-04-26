import React from 'react';

export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Link</h2>

      <p className="flow-text">
        Your link: <a href={link.to} target="_blank"rel="noopener noreferrer">{link.to}</a>
      </p>
      <p className="flow-text">
        From: <a href={link.from} target="_blank"rel="noopener noreferrer">{link.from}</a>
      </p>
      <p className="flow-text">
        Clicks: <strong>{link.clicks}</strong>
      </p>
      <p className="flow-text">
        Date: <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  )
}
