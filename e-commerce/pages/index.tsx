import Home from '@/components/Home'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { Provider, useDispatch } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '@/reducers/rootReducer';
import { fetchProducts } from '@/actions/actions';

type Props = {}

const store = createStore(rootReducer, applyMiddleware(thunk));

const index = (props: Props) => {
    return (
        <Provider store={store}>
            <div className='app'>
                <Header />
                <div className="container">
                    <Sidebar />
                    <Home />
                </div>
            </div>
        </Provider>
    )
}



export default index