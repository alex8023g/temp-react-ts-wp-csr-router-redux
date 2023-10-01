import React, { useState } from 'react';
import styles from './page1.css';
import { Component1 } from '../../components/Component1';
import { Layout } from '../../components/Layout';

export function Page1() {
  return (
    <main>
      <Layout>
        <h1>Page 1</h1>
        <Component1 />
      </Layout>
    </main>
  );
}
