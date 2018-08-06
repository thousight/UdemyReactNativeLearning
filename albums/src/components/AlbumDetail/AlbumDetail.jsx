import React from 'react'
import {
  Text,
  View,
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './style'


const AlbumDetail = ({ album }) => (
  <View key={album.url} style={styles.detailView}>
    <Text>
      {album.title}
    </Text>
  </View>
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
