import React, { useState } from 'react';
import styles from './homepage.css';
import { Layout } from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from '../../store/counterSlice';

export function HomePage() {
  const [incrementAmount, setIncrementAmount] = useState('2');

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();
  return (
    <main>
      <Layout>
        <h1>Home page!</h1>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label='Increment value'
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <span className={styles.value}>{count}</span>
          <button
            className={styles.button}
            aria-label='Decrement value'
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label='Set increment amount'
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
          >
            Add Amount
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
          >
            Add Async
          </button>
        </div>
      </Layout>
    </main>
  );
}
