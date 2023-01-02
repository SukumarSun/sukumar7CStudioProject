import {useState, useEffect} from 'react'
import Popup from 'reactjs-popup'
import {v4} from 'uuid'

// eslint-disable-next-line no-unused-vars
import CommentItem from '../CommentItem'

import './index.css'

import Header from '../Header'
import SideBar from '../SideBar'

const getLocalItems = () => {
  const list = localStorage.getItem('input-list')
  console.log(list)
  if (list) {
    return JSON.parse(localStorage.getItem('input-list'))
  }
  return []
}

const Settings = () => {
  //   const [count, updateCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [emailInput, updateEmail] = useState('')
  const [roleInput, updateRole] = useState('Admin')
  const [inputList, updateList] = useState(getLocalItems())
  //   state = {emailInput: '', roleInput: 'Admin', inputList: []}

  useEffect(() => {
    localStorage.setItem('input-list', JSON.stringify(inputList))
  }, [inputList])

  const onSelectOption = event => {
    updateRole(event.target.value)
  }

  const onEmail = event => {
    updateEmail(event.target.value)
  }

  const onAdd = () => {
    const newUser = {
      id: v4(),
      emailInput,
      roleInput,
    }

    updateList(prevCommentsList => [...prevCommentsList, newUser])
    updateEmail('')
    updateRole('')
  }

  const onDelete = id => {
    const resultList = inputList.filter(each => each.id !== id)
    updateList(resultList)
  }

  return (
    <div className="settings">
      <Header />
      <div className="bottom">
        <SideBar />
        <div className="settings-page">
          <Popup
            modal
            trigger={
              <button
                type="button"
                onClick={() => setToggle(!toggle)}
                className="add-user"
              >
                ADD USER
              </button>
            }
            className="popup-content"
          >
            {close => (
              <div className="modal-container">
                <div className="popup-container">
                  <div className="left-container">
                    <img
                      className="logo"
                      alt="logo"
                      src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1669217903/Standard_Collection_8_jm9itc.png"
                    />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  <div className="right-container">
                    <h1 className="user-head">User Information</h1>
                    <div className="email">
                      <label className="input-head" htmlFor="email">
                        Email Id of User
                      </label>
                      <input
                        onChange={onEmail}
                        value={emailInput}
                        className="email-input"
                        id="email"
                        type="text"
                      />
                    </div>
                    <div className="role">
                      <label className="input-head" htmlFor="role">
                        Role
                      </label>
                      <select
                        onChange={onSelectOption}
                        value={roleInput}
                        className="select-menu"
                        id="role"
                        name="roles"
                      >
                        <option value="Admin">Admin</option>
                        <option value="Owner">Owner</option>
                        <option value="sales">Sales</option>
                      </select>
                    </div>
                    <div className="button-container">
                      <button
                        className="cancel-button cancel"
                        type="button"
                        onClick={() => close()}
                      >
                        Cancel
                      </button>
                      <button
                        className="cancel-button add"
                        type="button"
                        onClick={onAdd}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Popup>
          <div className="table-section">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Last Signed In</th>
                  <th>Role</th>
                  <th>.</th>
                </tr>
              </thead>
              <tbody>
                {inputList.map(eachComment => (
                  <CommentItem
                    inputList={inputList}
                    key={eachComment.id}
                    onDelete={onDelete}
                    commentDetails={eachComment}
                  />
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <p className="each">Previous</p>
              <p className="each">1</p>
              <p className="each">2</p>
              <p className="each">Next</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
