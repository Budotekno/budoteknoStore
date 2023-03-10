/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Banner from "./components/Banner/Banner";
import Product from "./components/Product/Product";

const App = () => {


  return(
    <View style={style.container}> 

      <Banner/>

      <Product/>
     
    </View>
  );
};


const style = StyleSheet.create({
  container:{
    flex:1, 
  },
  
});

export default App;