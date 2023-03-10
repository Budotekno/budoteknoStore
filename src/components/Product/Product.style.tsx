/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    product:{
        width:175,
        height:350,
        backgroundColor:"#eceff1",
        marginTop:20,
        marginRight:10,
        borderRadius:10,
        
      },
      content:{
        alignItems:'center',
    
      },
      Image:{
        width:'90%',
        height:220,
        margin:10,
        alignItems:'center',
        justifyContent:"center",
        borderRadius:10
      },
      price:{
        marginLeft:10,
        
      },
      info:{
        justifyContent:'center',
        
      },
      brand:{
        fontWeight:'bold',
        fontSize:18,
        color:'black',
        marginLeft:10,
      },
      inStock:{
    
        marginLeft:10,
        color:"red",
        fontWeight:'bold',
    
      }

    
});

export default styles;