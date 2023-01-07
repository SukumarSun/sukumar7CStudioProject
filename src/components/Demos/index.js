import './index.css'
import Header from '../Header'
import SideBar from '../SideBar'

const Demos = () => (
  <div>
    <Header />
    <div className="bottom">
      <SideBar />
      <div className="bottom-right">
        <h1 className="custom">Demos</h1>
      </div>
    </div>
  </div>
)

export default Demos
