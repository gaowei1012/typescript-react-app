import * as React from 'react'
import MyRouter from './routers/index'
import { Provider } from 'react-redux'
import { store } from './redux/store/index'
import './App.less';

function App() {
  return <Provider store={store}>
    <MyRouter/>
  </Provider>
}

export default App
