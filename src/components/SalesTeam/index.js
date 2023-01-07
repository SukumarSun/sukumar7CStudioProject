import './index.css'
import Header from '../Header'
import SideBar from '../SideBar'

const SalesTeam = () => (
  <div>
    <Header />
    <div className="bottom">
      <SideBar />
      <div className="bottom-right">
        <h1 className="custom">Sales Team</h1>
      </div>
    </div>
  </div>
)

export default SalesTeam
