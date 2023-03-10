/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./Banner.style";

const Banner = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title} >Budotekno Store</Text>
            <TextInput style={styles.txtSearch} placeholder='Ara...'/>
        </View>
    );
};


export default Banner;