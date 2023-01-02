// Write your JS code here
import './index.css'
import Header from '../Header'
import SideBar from '../SideBar'

const Home = () => (
  <>
    <Header />
    <div className="bottom">
      <SideBar />
      <div className="bottom-right">
        <h1>Home</h1>
      </div>
    </div>
  </>
)

export default Home
