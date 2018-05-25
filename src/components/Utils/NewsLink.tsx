import React from 'react'
import { Link } from 'react-router-dom'
import { News } from '../News/NewsListRow'

type Props = {
  news: News
}

const NewsLink: React.SFC<Props> = ({ news }) => {
  if (news.url && news.url.startsWith('http')) {
    return <a href={news.url}>{news.title}</a>
  } else {
    return <Link to={`/comments/${news.id}`}>{news.title}</Link>
  }
}

export default NewsLink
