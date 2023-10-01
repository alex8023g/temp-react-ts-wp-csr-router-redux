import React from 'react';
import styles from './header.css';
import { Link } from 'react-router-dom';
import { Layout } from '../Layout';
const links = [
  { name: 'Home', path: '/' },
  { name: 'Page1', path: '/page1' },
  { name: 'Page2', path: '/page2' },
];
export function Header() {
  return (
    <header className={styles.header}>
      <Layout>
        <div className={styles.container}>
          <h3>App name</h3>
          <ul className={styles.ulLinks}>
            {links.map((link) => (
              <li>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </header>
  );
}
