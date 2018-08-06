import {
  StyleSheet,
  Platform,
} from 'react-native'

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008EFF',
    marginBottom: 10,
    ...Platform.select({
      ios: {
        paddingTop: 15,
        height: 65,
        shadowColor: '#333333',
        shadowOffset: {
          width: 1,
          height: 5,
        },
        shadowRadius: 3,
        shadowOpacity: 0.35,
      },
      android: {
        elevation: 2,
        position: 'relative',
        height: 55,
      },
    }),
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    margin: 10,
  },
})

export default styles
