// Write your JS code here
import './index.css'
import Header from '../Header'
import SideBar from '../SideBar'

const Contact = () => (
  <div>
    <Header />
    <div className="bottom">
      <SideBar />
      <div className="bottom-right">
        <h1>Contact</h1>
      </div>
    </div>
  </div>
)

export default Contact
