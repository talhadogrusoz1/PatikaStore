import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
  search: {
    margin: 5,
    backgroundColor: '#F5F5F5',
    borderWidth: 0.1,
    borderRadius: 2,
  },

  product_Title:{
    fontWeight:"500",
    fontSize:25,
    color:"#B000B9"
  },

  main_Container: {
    flex: 1,
    backgroundColor: '#FFFAFF',
  },

  card_Container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
    margin: 5,
    borderWidth: 0.1,
    borderRadius: 2,
  },

  product_Image: {
    height: Dimensions.get('screen').height / 4,
    resizeMode: 'contain',
    borderRadius: 2,
  },

  product_Name: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },

  product_Price: {
    color: '#BBBBBB',
    fontSize: 14,
  },

  in_Stock: {
    fontWeight: '500',
    color: '#F90716',
  },
});
