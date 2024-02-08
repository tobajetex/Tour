const url = 'https://course-api.com/react-tours-project'

import TourList from './component/TourList'

const App = () => {
  return (
    <div className="grid">
      <h1>Our Tours</h1>
      <span className="underline"></span>
      <TourList />
    </div>
  )
}
export default App
