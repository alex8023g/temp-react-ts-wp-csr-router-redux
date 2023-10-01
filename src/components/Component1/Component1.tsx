import React, { useState } from 'react';
import styles from './component1.css';

export function Component1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h2 className={styles.colorRed}>Component1</h2>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        click me
      </button>
      {isOpen && <p>opensss</p>}
    </>
  );
}
