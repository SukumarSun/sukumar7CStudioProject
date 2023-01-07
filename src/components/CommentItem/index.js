// import {AiOutlineDelete} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, datenow, onDelete} = props
  // eslint-disable-next-line no-unused-vars
  const {roleInput, emailInput, dt, serial, id} = commentDetails

  const deleteIt = () => {
    onDelete(id)
  }

  // eslint-disable-next-line no-unused-vars
  const setDateHandler = () => {
    // const date = new Date()
    const setDate = formatDistanceToNow(new Date(datenow))

    const dateSet = setDate.split(' ')
    console.log(setDate)
    if (dateSet.length <= 3) {
      const convt = dateSet.join(' ')
      return `${convt} ago`
    }
    return setDate
  }

  console.log(datenow)
  //   const dist = formatDistanceToNow(new Date(dat))
  //   console.log(dist)
  return (
    <>
      <tr>
        <td>{serial}</td>
        <td>{emailInput}</td>
        <td>{setDateHandler()}</td>
        {/* <td>{formatDistanceToNow(new Date(2023, 1, 1))}</td> */}
        <td>{roleInput}</td>
        <td onClick={deleteIt}>
          <MdDelete className="delete-button" onClick={onDelete} />
          {/* <button className="delete-button" type="button">
            <AiOutlineDelete />
          </button> */}
        </td>
      </tr>
    </>
  )
}

export default CommentItem
