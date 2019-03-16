import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 62,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  navbarTitle: {
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginLeft: 15,
  },
  icon: { 
    width: 20, 
    height: 20, 
    tintColor: '#999899' 
  },
  searchContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 10, 
    paddingLeft: 10, 
    marginHorizontal: 10, 
    borderBottomWidth: 1, 
    borderColor: '#ddd' 
  },
  searchPlaceholder: { 
    color: '#999899', 
    marginLeft: 10 
  },
  contactContainer: { 
    flex: 1, 
    backgroundColor: 'white', 
    height: 50, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    marginVertical: 5, 
  },
  contactPhoto: { 
    width: 45, 
    height: 45, 
    borderRadius: 22.5 
  },
  cameraButton: { 
    flexDirection: 'row', 
    height: 40, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderTopWidth: 3, 
    borderColor: '#ddd', 
    backgroundColor: '#fefefe' 
  },
  cameraButtonIcon: { 
    width: 25, 
    height: 25, 
    tintColor: '#5DA7FF' 
  },
  cameraButtonText: { 
    marginLeft: 8, 
    fontWeight: '500', 
    color: '#3285EE' 
  },
})