import {AiOutlineDelete} from 'react-icons/ai'
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, onDelete} = props
  const {roleInput, emailInput, id} = commentDetails

  const deleteIt = () => {
    onDelete(id)
  }

  return (
    <>
      <tr>
        <td>*</td>
        <td>{emailInput}</td>
        <td>{formatDistanceToNow(new Date(2023, 1, 1))}</td>
        <td>{roleInput}</td>
        <td onClick={deleteIt}>
          <button className="delete-button" type="button" onClick={onDelete}>
            <AiOutlineDelete />
          </button>
        </td>
      </tr>
    </>
  )
}

export default CommentItem
