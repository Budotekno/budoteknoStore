/* eslint-disable prettier/prettier */
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import style from "./Product.style";
import ProductData from "./product.json";


const Product = () => {

  const productData = (product:any)=>{  
    return(
      
      <View style={style.product}>
  
        <Image style={style.Image} source={{uri: product.imgURL }} />
        <View style={style.info}>
          <Text style={style.brand}>{product.title}</Text>
          <Text style={style.price}>{product.price}</Text>
          {
            product.inStock == false ?
            <Text style={style.inStock}>Stokta Yok</Text>
            : ""
           }
          
        </View>
  
      </View>
    );
  }

  
    return(
        <View style={style.content}>
        <FlatList
      
        numColumns={2} data={ProductData} 
        renderItem={({item})=> productData(item)} />
        
      </View>
    );
};

export default Product;