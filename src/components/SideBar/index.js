/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import {Link, NavLink} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar-outside">
        <div className="opt">
          <NavLink className="each-head opt1" to="/products">
            Products
          </NavLink>
        </div>
        <li className="opt">
          <NavLink className="each-head opt1" to="/demo-script">
            Demo Script
          </NavLink>
        </li>
        <li className="opt">
          <NavLink className="each-head" to="/customers">
            Customers
          </NavLink>
        </li>
        <li className="opt">
          <NavLink className="each-head" to="/sales-team">
            Sales Team
          </NavLink>
        </li>
        <li className="opt">
          <NavLink className="each-head" to="/demos">
            Demos
          </NavLink>
        </li>
        <li className="opt">
          <NavLink className="each-head" to="/settings">
            Settings
          </NavLink>
        </li>
      </div>
    )
  }
}

//   const [active, setActive] = useState('')

//   const handleClick = event => {
//     setActive(event.target.id)
//   id="1" className={active === '1' ? 'highlight' : 'opt'}
//   }

export default SideBar
