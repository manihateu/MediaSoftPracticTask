import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '@/styles/ProductPage.module.scss'
export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div className={styles.productPage}>
      <div className={styles.productImage}>
        <img src={product.image} alt="Product Image" />
      </div>
      <div className={styles.productInfo}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
