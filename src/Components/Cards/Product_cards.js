import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Product_cards_style';

const Product_card = ({product}) => {
  // Kartları oluşturacağım
  return (
    <View style={styles.card_Container}>
      <Image style={styles.product_Image} source={{uri:product.imgURL}}/>
      <Text style={styles.product_Name}>{product.title}</Text>
      <Text style={styles.product_Price}>{product.price}</Text>
      <Text style={styles.in_Stock}>{product.inStock === true ? " " :"Stokta Yok"}</Text>
    </View>
  );
};

export default Product_card;
