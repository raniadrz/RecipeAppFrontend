// styles.js
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const styles = {
  container: {
    width: wp('50%'), // Take up 50% of the width on larger screens
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  labelContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
  },
  input_name: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 5,
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 5,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  chip: {
    marginHorizontal: 4,
    marginVertical: 2,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#dcdcdc',
    textAlign: 'center', // Center the text horizontally
    textAlignVertical: 'center', // Center the text vertically (for Android)
  },
  buttonText_Add: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#8b0000',
    textAlign: 'center', // Center the text horizontally
    textAlignVertical: 'center', // Center the text vertically (for Android)
  },
  buttonText_Cancel: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#dcdcdc',
    textAlign: 'center', // Center the text horizontally
    textAlignVertical: 'center', // Center the text vertically (for Android)
  },
  header: {
    fontSize: 20,
    marginBottom: 16,
  },
  button_add: {
    backgroundColor: '#8b0000',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  button_cancel: {
    backgroundColor: '#dcdcdc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: '#dcdcdc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  imageContainer: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  containerImages: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 16,
  },
};
