import React from 'react'
import Meta from './Meta'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loading from './Loading'

const CommentCard = styled.div`
  position: relative;
  padding: 1.5rem;
  border-radius: .5rem;
  margin-top: 1.5rem;
  background: hsla(210, 12%, 57%, .075);

  & > & {
    border-radius: .5rem 0 0 .5rem;
    margin-right: -1.5rem;
  }

  & + & {
    margin-top: 1rem;
  }

  p {

    a,
    a:visited {
      color: dodgerblue;
      transition: .2s color;
    }
  
    a:focus,
    a:hover,
    a:active {
      color: inherit;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export default function Comment ({ comment }) {
  const NestedComments = React.lazy(() => import('./NestedComments'))
  return (
    <>
      {comment.text &&
        <CommentCard>
          <Meta
            comment={true}
            by={comment.by}
            time={comment.time}
            id={comment.id}
          />
          <p dangerouslySetInnerHTML={{__html: comment.text}} />
          {comment.kids && 
            <React.Suspense fallback={<Loading />}>
              <NestedComments comment={comment} />
            </React.Suspense>
          }
        </CommentCard>
      }
    </>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}