import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import { fetchProducts } from '../actions/actions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import Card from './Card';
import styles from "../styles/Home.module.scss"
import axios from 'axios';
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

type Props = {
  products: Product[]
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Home = ({products} : Props) => {
  const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);
  dispatch(fetchProducts(products))
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <div className={styles.products__container}>
      {products.map((product: Product) => (
          <Card title={product.title} description={product.description} cardId={product.id.toString()} price={product.price} key={product.id} imageUrl={product.image}/>
      ))}
      </div>
    </div>
  );
}

export default Home

