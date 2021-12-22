import React from 'react';
import {View, Text, FlatList,TextInput} from 'react-native';
import Product_card from './Components/Cards/Product_cards';
import product_data from './products.json';
import styles from "./Components/Cards/Product_cards_style"

const App = () => {
  const renderProduct = ({item}) => <Product_card product={item} />;

  return (
    <View style={styles.main_Container}>

        <Text style={styles.product_Title}>PATİKASTORE</Text>
        
       <TextInput style={styles.search}
        placeholder='Search'
        value=""
       />

        <FlatList
          data={product_data}
          renderItem={renderProduct}
          numColumns={2}
        />
      </View>
    
  );
};

export default App;
