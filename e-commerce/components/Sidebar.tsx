import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import { toggleSidebar } from '../actions/actions';
import styles from "@/styles/Sidebar.module.scss"
import CartProductComponent from './CartProductComponent';

const Sidebar: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const cartProducts = useSelector((state: RootState) => state.cart.products);
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.sidebar__container__close_button}>
        <button className={styles.sidebar__close_button} onClick={handleToggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
        </button>
      </div>
      <div className={styles.sidebar__content}>
      {cartProducts.length === 0 ? (
        <div className={styles.empty__cart__text}>Корзина пуста</div>
      ) : (
        cartProducts.map((product) => (
          <CartProductComponent key={product.id} product={product} />
        ))
      )}
      </div>
    </div>
  );
};

export default Sidebar;