import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'

import Card from '../Card'
import CardSection from '../CardSection'
import styles from './style'


const AlbumDetail = ({ album }) => (
  <Card key={album.url}>
    <CardSection>
      <View>
        <Image
          source={{ uri: album.thumbnail_image }}
          style={styles.thumbnail}
        />
      </View>
      <View style={styles.texts}>
        <Text style={styles.title}>
          {album.title}
        </Text>
        <Text>
          {album.artist}
        </Text>
      </View>
    </CardSection>

    <CardSection>
      <Image
        source={{ uri: album.image }}
        style={styles.albumImage}
      />
    </CardSection>

    <CardSection style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        // onPress={}
      >
        <Text style={styles.buttonText}>
          Buy
        </Text>
      </TouchableOpacity>
    </CardSection>
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
