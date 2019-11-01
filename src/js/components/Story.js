import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import { fetchItem, fetchComments } from '../utils/api'
import Loading from './Loading'
import Meta from './Meta'
import Title from './Title'
import Comment from './Comment'
import Button from './Button'
import styled from 'styled-components'

const Heading = styled.h2`
  margin-bottom: .5rem;
`

const CommentForm = styled.form`
  margin-bottom: 2.5rem;

  textarea {
    margin: .875rem 0;
    min-height: 10em;
    appearance: none;
    border: 1px solid gainsboro;
    border-radius: .5rem;
    resize: none;
    width: 100%;
    outline: 0;
    padding: 1rem;
    font-size: inherit;
    transition: 
      .2s border-color,
      .2s box-shadow;

    &:hover {
      border-color: slategray;
    }

    &:focus {
      border-color: dodgerblue;
      box-shadow: 0 0 0 3px #C1D8FA inset;
    }
  }
`

function storyReducer (state, action) {
  switch (action.type) {
    case 'fetch':
      return {story: null, loadingStory: true, comments: null, loadingComments: true}
    case 'error':
      return {...state, loadingComments: false, loadingStory: false, error: action.message}
    case 'story':
      return {...state, story: action.story, loadingStory: false}
    case 'comments':
      return {...state, comments: action.comments, loadingComments: false}
    default:
      throw new Error('That action is not supported')
  }
}

export default function Story ({ location }) {
  const { id } = queryString.parse(location.search)

  const [state, dispatch] = React.useReducer(
    storyReducer,
    { story: null, loadingStory: true, comments: null, loadingComments: true, error: null }
  )

  const { story, loadingStory, comments, loadingComments, error } = state

  React.useEffect(() => {
    dispatch({ type: 'fetch' })
    
    fetchItem(id)
      .then((story) => {
        dispatch({ type: 'story', story })
        return fetchComments(story.kids || [])
      })
      .then((comments) => {
        dispatch({ type: 'comments', comments })
      })
      .catch(({ message }) => dispatch({
        type: 'error',
        error: message,
      }))
  }, [id])

  if (error) {
    return <p className='center-text error'>{error}</p>
  }

  return (
    <>
      {loadingStory === true
        ? <Loading />
        : <>
          {story.title &&
            <Heading>
              <Title url={story.url} title={story.title} id={story.id} />
            </Heading>
          }
          <Meta
            score={story.score}
            by={story.by}
            time={story.time}
            id={story.id}
            descendants={story.descendants}
          />
          <p dangerouslySetInnerHTML={{__html: story.text}} />
        </>
      }
      {loadingComments === true
        ? loadingStory === false && <Loading />
        : <>
          <CommentForm>
            <textarea />
            <Button onClick={(event) => { event.preventDefault() }}>Add comment</Button>
          </CommentForm>
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

Story.propTypes = {
  location: PropTypes.object.isRequired
}