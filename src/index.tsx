import  * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AxiosConfig from './api/index'
import { store } from './redux/store/index'
import MyRouter from './routers/index'
import * as serviceWorker from './serviceWorker'
import './index.less'

const Loading = () => (<div>loading...</div>)

// 加载 axios
AxiosConfig();

ReactDOM.render(
  <React.Suspense fallback={<Loading/>}>
    <Provider store={store}>
      <MyRouter/>
    </Provider>
  </React.Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
