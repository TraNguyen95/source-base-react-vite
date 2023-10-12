import './App.css'
import useRouteElements from './useRouteElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const routesElement = useRouteElements()
  return (
    <div>
      {routesElement}
      <ToastContainer />
    </div>
  )
}

export default App
