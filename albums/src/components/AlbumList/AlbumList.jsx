import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'
import axios from 'axios'

import AlbumDetail from '../AlbumDetail'

import styles from './style'


class AlbumList extends Component {
  state = {
    list: [],
    loading: false,
    error: null,
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then((res) => {
          this.setState({ list: res.data, loading: false })
        })
        .catch((error) => {
          this.setState({ list: error.response, loading: false })
        })
    })
  }

  renderAlbum = this.renderAlbum.bind(this)

  renderAlbum() {
    const { list, loading } = this.state

    if (!list || list.length <= 0) {
      return (
        <Text>
          No albums are fetched
        </Text>
      )
    }

    if (loading) {
      return (
        <Text>
          Loading...
        </Text>
      )
    }

    return list.map(album => (
      <AlbumDetail key={album.url} album={album} />
    ))
  }

  render() {
    const { error } = this.state

    return (
      <View style={styles.listWrapper}>
        {
          !error
            ? this.renderAlbum()
            : (
              <Text>
                Something wrong happened...
              </Text>
            )
        }
      </View>
    )
  }
}

export default AlbumList
