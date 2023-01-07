// Write your JS code here
import './index.css'

const Header = () => (
  <div className="outside">
    <div className="inside">
      <div className="heading">
        {/* <h1 className="title">HELLO</h1> */}
        <div className="top-head">
          <img
            alt="ar"
            className="logo1"
            src="https://helloar.io/images/logo-dark.svg"
            //   src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1672645384/AR_a9o2hx.jpg"
          />
        </div>
      </div>
      <div className="down-header">
        <div className="down-left">
          <img
            alt="ar"
            className="left-logo"
            src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1672645384/AR_a9o2hx.jpg"
          />
          <h1 className="font-change">MY APPLICATION</h1>
        </div>
        <div className="down-right">
          <div className="right-logo">
            <img
              alt="logos"
              className="logojohn"
              src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1672644900/Profilepictoday_pmklgn.jpg"
            />
          </div>
          <h1 className="birde">Barde Ridel</h1>
        </div>
      </div>
    </div>
  </div>
)

export default Header
