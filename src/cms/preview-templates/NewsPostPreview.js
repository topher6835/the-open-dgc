import React from 'react'
// import PropTypes from 'prop-types'
import { NewsItem } from '../../components/newsItem'

const NewsPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <NewsItem
    //   content={widgetFor('body')}
    //   description={entry.getIn(['data', 'description'])}
    //   tags={tags && tags.toJS()}
      html={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
      date={entry.getIn(['data', 'date'])}
    />
  )
}

// NewsPostPreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   widgetFor: PropTypes.func,
// }

export default NewsPostPreview
