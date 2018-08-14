import React from 'react'
import {
  Text,
} from 'react-native'
import PropTypes from 'prop-types'

import Card from '../Card'
import styles from './style'


const AlbumDetail = ({ album }) => (
  <Card key={album.url} style={styles.detailView}>
    <Text>
      {album.title}
    </Text>
  </Card>
)

AlbumDetail.propTypes = {
  album: PropTypes.exact({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    thumbnail_image: PropTypes.string.isRequired,
  }).isRequired,
}

export default AlbumDetail
