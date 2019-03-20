import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('screen').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRegular: {
    color: "white",
    fontSize: 18
  },
  textSmall: {
    color: "white",
    fontSize: 12,
    textAlign: "center"
  },
  header: {
    marginBottom: 40,
    color: "white"
  },
  logo: {
    width: 180,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 50
  },
  textFields: {
    width: WIDTH * 0.8,
    height: 40,
    marginVertical: 10, 
    paddingHorizontal: 20,
    borderRadius: 4,
    backgroundColor: "white"
  },
  loginButton: {
      backgroundColor: "#0097F7"
  }
})
