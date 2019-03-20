import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 20,
    flex: 1,
  },
  navbarContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 62,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  navbarTitle: {
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginLeft: 15,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#999899',
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 17,
    marginLeft: 20,
  },
  userSend: {
    alignItems: 'flex-end',
  },
  userReceive: {
    alignItems: 'flex-start',
  },
  chatContent: {
    flex: 1,
    padding: 5,
    flexDirection: 'column-reverse',
  },
  chatChip: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FAFAFA',
    margin: 2,
    borderRadius: 18,
  },
  footer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 24,
    marginBottom: 10,
    marginHorizontal: 8,
  },
  iconFooter: {
    fontSize: 20,
  },
  cam: {
    fontSize: 20,
    padding: 9
  },
  whiteColor: {
    color: 'white',
  },
  center: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    margin: 5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
