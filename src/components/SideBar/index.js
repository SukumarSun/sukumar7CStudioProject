/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class SideBar extends Component {
  state = {
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
  }

  onFirst = () => {
    this.setState(prev => ({first: !prev.first}))
  }

  onSecond = () => {
    this.setState(prev => ({second: !prev.second}))
  }

  onThird = () => {
    this.setState(prev => ({third: !prev.third}))
  }

  onFourth = () => {
    this.setState(prev => ({fourth: !prev.fourth}))
  }

  onFifth = () => {
    this.setState(prev => ({fifth: !prev.fifth}))
  }

  onSixth = () => {
    this.setState(prev => ({sixth: !prev.sixth}))
  }

  //   const [active, setActive] = useState('')

  //   const handleClick = event => {
  //     setActive(event.target.id)
  //   id="1" className={active === '1' ? 'highlight' : 'opt'}
  //   }
  render() {
    const {first, second, third, fourth, fifth, sixth} = this.state
    const classFirst = first ? 'highlight' : 'opt'
    const classSecond = second ? 'highlight' : 'opt'
    const classThird = third ? 'highlight' : 'opt'
    const classFourth = fourth ? 'highlight' : 'opt'
    const classFifth = fifth ? 'highlight' : 'opt'
    const classSixth = sixth ? 'highlight' : 'opt'

    return (
      <div className="sidebar-outside">
        <Link className="each-head" to="/products">
          <li className={classFirst} onClick={this.onFirst}>
            Products
          </li>
        </Link>
        <Link className="each-head" to="/demo-script">
          <li className={classSecond} onClick={this.onSecond}>
            Demo Script
          </li>
        </Link>
        <Link className="each-head" to="/customers">
          <li className={classThird} onClick={this.onThird}>
            Customers
          </li>
        </Link>
        <Link className="each-head" to="/sales-team">
          <li className={classFourth} onClick={this.onFourth}>
            Sales Team
          </li>
        </Link>
        <Link className="each-head" to="/demos">
          <li className={classFifth} onClick={this.onFifth}>
            Demos
          </li>
        </Link>
        <Link className="each-head" to="/settings">
          <li className={classSixth} onClick={this.onSixth}>
            Settings
          </li>
        </Link>
      </div>
    )
  }
}

export default SideBar
