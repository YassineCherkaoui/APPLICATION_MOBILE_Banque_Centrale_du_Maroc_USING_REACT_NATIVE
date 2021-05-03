import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput,Alert,FlatList,Picker,Select,Option } from 'react-native';

export default function CurrencyRow(props) {

  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
    
} = props
console.log({amount})
const [text, onChangeText] = useState(' '+`${amount}`);


  return (
    <View style={styles.container}>
        <Text>|( amount :{amount} )|</Text>
        <TextInput 
            style={styles.input}
            // placeholder='new todo...'
            keyboardType="numeric"
            value={text}
            onChangeText={onChangeAmount}
            />
        <Picker 
            selectedValue={selectedCurrency}
            style={{height:50,width:160}}
            onValueChange={onChangeCurrency}
            value={selectedCurrency}
        >
            {currencyOptions.map(option => (
            <Picker.Item 
                label={option}
                value={option}
                style={{fontWeight: "bold"}}
            />
            ))}
        </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: "row",
    alignItems: "center",
    marginTop:40,
    marginHorizontal:20
  },
  input:{
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
}
});
