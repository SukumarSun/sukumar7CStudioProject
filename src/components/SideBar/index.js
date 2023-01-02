import {Link} from 'react-router-dom'
import './index.css'

const SideBar = () => (
  <div className="sidebar-outside">
    <Link className="each-head" to="/products">
      <div className="opt">
        <h1>Products</h1>
      </div>
    </Link>
    <Link className="each-head" to="/demo-script">
      <div className="opt">
        <h1>Demo Script</h1>
      </div>
    </Link>
    <Link className="each-head" to="/customers">
      <div className="opt">
        <h1>Customers</h1>
      </div>
    </Link>
    <Link className="each-head" to="/sales-team">
      <div className="opt">
        <h1>Sales Team</h1>
      </div>
    </Link>
    <Link className="each-head" to="/demos">
      <div className="opt">
        <h1>Demos</h1>
      </div>
    </Link>
    <Link className="each-head" to="/settings">
      <div className="opt">
        <h1>Settings</h1>
      </div>
    </Link>
  </div>
)

export default SideBar
