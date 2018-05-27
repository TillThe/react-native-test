import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    flex: 1
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    backgroundColor: 'gray'
  },
  modalStep: {
    justifyContent: 'center',
    height: 160,
    paddingVertical: 10,
    backgroundColor: '$white'
  },
  modalDate: {
    height: 510,
    paddingVertical: 10,
    backgroundColor: '$white'
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },
  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: 'transparent'
  },
  text: {
    color: "black",
    fontSize: 22
  },

  listDateContainer: {
    height: 200,
  },
  listStepContainer: {
    height: 160,
    justifyContent: 'center'
  },
  listItem: {
    height: 35,
    paddingVertical: 10,
    borderRadius: 0,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHeader: {
    marginTop: 5,
    marginBottom: 2,
    fontFamily: '$defaultFontBold',
    fontSize: 16
  }
});