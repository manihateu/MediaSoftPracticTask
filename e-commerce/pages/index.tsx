import Home, { Product } from '@/components/Home'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '@/reducers/rootReducer';
import { fetchProducts } from '@/actions/actions';
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

type Props = {}

const store = createStore(rootReducer, applyMiddleware(thunk));

export const getStaticProps: GetStaticProps<{
    products: Product[]
  }> = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()
    return { props: { products } }
  }
   

const index = ({products}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Provider store={store}>
            <div className='app'>
                <Header />
                <div className="container">
                    <Sidebar />
                    <Home products={products}/>
                </div>
            </div>
        </Provider>
    )
}

export default index;

