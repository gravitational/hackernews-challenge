import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinksOut = styled.span`
  display: block;

  a {
    text-decoration: none;
    color: inherit;
    transition: .2s color;
    margin-right: .5rem; 

    &:hover,
    &:focus,
    &:active {
      color: dodgerblue;
    }
  }

  .link-out {
    color: dodgerblue;
    font-size: .75em;
    transition: .2s color;

    &:hover,
    &:focus,
    &:active {
      color: inherit;
    }
  }
`
const LinkIn = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: .2s color;

  &:hover,
  &:focus,
  &:active {
    color: dodgerblue;
  }
`

function shortenURL(url) {
  const regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/
  const match = regex.exec(url)
  if (!match) return ''
  const shortenedURL = match[1] ? match[1] : url
  return shortenedURL
}

export default function Title ({ url, title, id }) {
  return url
    ? <LinksOut>
        <a href={url} rel='nofollow noopener'>{title}</a>
        <a className='link-out' href={url} rel='nofollow noopener'>{`(${shortenURL(url)})`}</a>
      </LinksOut>
    : <LinkIn to={`/story?id=${id}`}>
        {title}
      </LinkIn>
}

Title.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}