// Write your JS code here
import './index.css'
import Header from '../Header'
import SideBar from '../SideBar'

const NotFound = () => (
  <div>
    <Header />
    <div className="bottom">
      <SideBar />
      <div className="bottom-right">
        <h1>Page not found</h1>
      </div>
    </div>
  </div>
)

export default NotFound
