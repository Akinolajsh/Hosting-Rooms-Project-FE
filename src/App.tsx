
import { RouterProvider } from 'react-router-dom'
import { mainRoute } from './Router/mainRoute'
import { store } from './Global/store'
import { Provider } from 'react-redux/es/exports'

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <RouterProvider router={mainRoute}/>
      </Provider>
    </div>
  )
}

export default App