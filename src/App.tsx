import './App.css'
import useRouteElements from './useRouteElements'

function App() {
  const routesElement = useRouteElements()
  return <div>{routesElement}</div>
}

export default App
