import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as moment from 'moment'

const MetaSpan = styled.span`
  font-size: .875rem;
  color: slategray;

  a,
  a:visited {
    text-decoration: none;
    color: inherit;
    transition: .2s color;
  }

  a:hover,
  a:focus,
  a:active {
    color: dodgerblue;
  }

  span {
    margin-left: .5em;
    margin-right: .5em;
    color: gainsboro;
  }
`
const Divider = () => (
  <span>&bull;</span>
)

export default function Meta ({ score, by, time, id, descendants }) {
  return (
    <MetaSpan>
      {score && 
        <>
          {`${score} Points`}
          <Divider />
        </>
      }
      <Link to={`/story?id=${id}`}>by {by}</Link>
      <Divider />
      <Link to={`/story?id=${id}`}>{moment.unix(time).fromNow()}</Link>
      {typeof descendants === 'number' && (
        <>
          <Divider />
          <Link to={`/story?id=${id}`}>
            {descendants === 1 ? `${descendants} comment` : descendants > 1 ? `${descendants} comments` : `Leave a comment`}
          </Link>
        </>
      )}
    </MetaSpan>
  )
}

Meta.propTypes = {
  by: PropTypes.string,
  time: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  descendants: PropTypes.number
}