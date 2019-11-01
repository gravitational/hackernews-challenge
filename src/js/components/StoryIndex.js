import React from 'react'
import PropTypes from 'prop-types'
import { fetchTopStories } from '../utils/api'
import Loading from './Loading'
import StoryList from './StoryList'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const MoreNav = styled.nav`
  padding-top: 1.5rem;
  padding-bottom: 1rem;

  a {
    display: inline-flex;
    align-items: center;
    color: white;
    line-height: 1;
    font-family: inherit;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    font-size: .75rem;
    letter-spacing: .05em;
    border: 0;
    border-radius: .5rem;
    padding: .875rem 1.125rem;
    background: #FF6600;
    transition: .2s box-shadow;

    &:hover,
    &:focus,
    &:active {
      box-shadow: 0 0 0 20px #FF8533 inset;
    }

    span {
      opacity: .5;
      margin-left: .5em;
    }
  }
`

function storyReducer(state, action) {
  if (action.type === 'fetch') {
    return {
      stories: null,
      error: null,
      loading: true
    }
  } else if (action.type === 'success') {
    return {
      stories: action.stories,
      error: null,
      loading: false
    }
  } else if (action.type === 'error') {
    return {
      stories: state.stories,
      error: action.message,
      loading: false
    }
  } else {
    throw new Error('This action is not supported')
  }
}

function StoryIndex({ location }) { 
  const [page, setPage] = React.useState(1)

  const [state, dispatch] = React.useReducer(
    storyReducer,
    { stories: null, error: null, loading: true }
  )

  function PageUp() {
    setPage(page + 1)
  }

  React.useEffect(() => {
    setPage(parseInt(queryString.parse(location.search).page) || 1) 

    dispatch({ type: 'fetch' })

    fetchTopStories(page)
      .then(stories => {
        dispatch({ type: 'success', stories })
      })
      .catch(({ message }) => dispatch({ type: 'error', message }))
  }, [ location ])

  const { stories, error, loading } = state

  if (loading === true) {
    return <Loading />
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <>
      <StoryList 
        stories={stories} 
        page={page} 
      />
      <MoreNav>
        <Link
          to={`/?page=${page + 1}`}
          onClick={PageUp}
        >
          More 
          <span>&rarr;</span>
        </Link>
      </MoreNav>
    </>
  )
}

StoryIndex.propTypes = {
  location: PropTypes.object.isRequired
}

export default withRouter(StoryIndex)