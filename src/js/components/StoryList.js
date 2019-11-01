import React from 'react'
import PropTypes from 'prop-types'
import Meta from './Meta'
import Title from './Title'
import styled from 'styled-components'

const OrderedList = styled.ol`
  list-style: none;
  padding: 0 0 1.75rem 0;
  border-bottom: 1px solid gainsboro;

  li { 
    position: relative;
    font-size: 1.2em;
    list-style: none;
    padding: 1.375rem 1.5rem;
    background: hsla(210, 12%, 57%, .075);
    border-radius: .5rem;
    margin: 1rem 0 1rem 2rem;
  }

  li:before {
    content: attr(rank) '.';
    font-size: .625em;
    color: slategray;
    position: absolute;
    top: 50%;
    left: -2rem;
    transform: translateY(-50%);
  }
`

export default function StoryList ({ stories, page }) {
  if (stories.length === 0) {
    return (
      <p>
        This user hasn't posted yet
      </p>
    )
  }

  return (
    <OrderedList>
      {stories.map((story, index) => {
        const rank = (page - 1) * 30 + index + 1

        return (
          <li rank={rank} key={story.id}>
            <Title 
              url={story.url} 
              title={story.title} 
              id={story.id} 
            />
            <Meta
              score={story.score}
              by={story.by}
              time={story.time}
              id={story.id}
              descendants={story.descendants}
            />
          </li>
        )
      })}
    </OrderedList>
  )
}

StoryList.propTypes = {
  stories: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
}