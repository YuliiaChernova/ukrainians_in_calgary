import React from 'react';
import { Link } from 'gatsby';

const links = [
  { title: 'Статті', to: '/' },
  { partiallyActive: true, title: 'Новини', to: '/news' },
  { partiallyActive: true, title: 'Розваги', to: '/entertainments' },
];

const NavLinks = () => (
  <ul>
    {
      links.map(link => (
        <li key={link.to}>
          <Link
            partiallyActive={link.partiallyActive}
            activeClassName='active'
            to={link.to}
          >{link.title}</Link>
        </li>
      ))
    }
  </ul>
);

export default NavLinks;