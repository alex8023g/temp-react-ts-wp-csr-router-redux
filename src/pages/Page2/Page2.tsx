import React from 'react';
import styles from './page2.css';
import { Component2 } from '../../components/Component2';
import { Layout } from '../../components/Layout';

export function Page2() {
  return (
    <main>
      <Layout>
        <h1>Page 2</h1>
        <Component2 />
      </Layout>
    </main>
  );
}
