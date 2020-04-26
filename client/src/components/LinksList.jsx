import React from 'react';
import { Link } from 'react-router-dom';

export const LinkList = ({ links }) => {
  if (!links.length) {
    return <p className="center">No Links!</p>
  }
  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Origin</th>
          <th>Shorted</th>
          <th>Open</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, index) => {
          return (
            <tr key={link._id}>
              <td>{index + 1}</td>
              <td><a href={link.from}>{link.from}</a></td>
              <td><a href={link.to}>{link.to}</a></td>
              <td>
                <Link to={`/detail/${link._id}`}>Open</Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>)
};
