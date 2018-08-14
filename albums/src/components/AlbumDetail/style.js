import {
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
  },
  texts: {
    justifyContent: 'space-around',
  },
  albumImage: {
    height: 300,
    width: null,
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
  },
  buttonText: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#007aff',
  },
})

export default styles
