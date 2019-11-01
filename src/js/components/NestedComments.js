import React from 'react'
import PropTypes from 'prop-types'
import { fetchComments } from '../utils/api'
import Loading from './Loading'
import Comment from './Comment'
import styled from 'styled-components'

const Placeholder = styled.div`
  position: relative;
  padding: 1.5rem;
  border-radius: .5rem 0 0 .5rem;
  margin: 1.5rem -1.5rem 0 0;
  background: hsla(210, 12%, 57%, .075);
`

function commentReducer (state, action) {
  switch (action.type) {
    case 'fetch':
      return {comments: null, loadingComments: true}
    case 'error':
      return {...state, loadingComments: false, error: action.message}
    case 'comments':
      return {...state, comments: action.comments, loadingComments: false}
    default:
      throw new Error('That action is not supported')
  }
}

export default function NestedComments ({ comment }) {
  console.log(comment)

  const [state, dispatch] = React.useReducer(
    commentReducer,
    { comments: null, loadingComments: true, error: null }
  )

  const { comments, loadingComments, error } = state

  React.useEffect(() => {
    dispatch({ type: 'fetch' })
    
    fetchComments(comment.kids || [])
      .then((comments) => {
        dispatch({ type: 'comments', comments })
      })
      .catch(({ message }) => dispatch({
        type: 'error',
        error: message,
      }))
  }, [comment.id])

  if (error) {
    return <p className='center-text error'>{error}</p>
  }

  return (
    <>
      {loadingComments === true 
        ? <Placeholder>
            <Loading />
          </Placeholder>
        : <>
          {comments.map((comment) =>
            <Comment
              key={comment.id}
              comment={comment}
            />
          )}
        </>
      }
    </>
  )
}

NestedComments.propTypes = {
  comment: PropTypes.object.isRequired
}