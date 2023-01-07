import './index.css'
import Header from '../Header'
import SideBar from '../SideBar'

const DemoScript = () => (
  <div>
    <Header />
    <div className="bottom">
      <SideBar />
      <div className="bottom-right">
        <h1 className="custom">Demo Script</h1>
      </div>
    </div>
  </div>
)

export default DemoScript
