const api = `https://hacker-news.firebaseio.com/v0`
const json = '.json'

export function fetchItem (id) {
  return fetch(`${api}/item/${id}${json}`)
    .then((res) => res.json())
}

export function fetchComments (ids) {
  return Promise.all(ids.map(id => fetchItem(id)))
}

export function fetchTopStories (page) {
  return fetch(`${api}/topstories${json}`)
    .then((res) => res.json())
    .then((ids) => {
      if (!ids) {
        throw new Error(`There was an error fetching top stories.`)
      }
      const min = page * 30 - 30
      const max = page * 30
      return ids.slice(min, max)
    })
    .then((ids) => Promise.all(ids.map(fetchItem)))
}

export function fetchStories (ids) {
  return Promise.all(ids.map(fetchItem))
}