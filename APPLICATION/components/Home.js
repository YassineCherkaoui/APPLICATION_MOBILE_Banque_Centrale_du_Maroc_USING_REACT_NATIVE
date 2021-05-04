import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { AntDesign } from '@expo/vector-icons';

import { SafeAreaView, StyleSheet, Text, View, Icon, ImageBackground, Image, Pressable, Picker, TextInput, TextComponent } from 'react-native';
import axios from 'axios';

const image = { uri: "https://previews.123rf.com/images/tolkachev/tolkachev1911/tolkachev191108299/134140332-stock-market-chart-with-trading-desk-bank-office-interior-on-background-double-exposure-concept-of-f.jpg" };

function HomeScreen({navigation}) {
  const [selectedFromValue, setSelectedFromValue] = useState("EUR");
  const [selectedToValue, setSelectedToValue] = useState(String);

  const [selectedCurrency, setSelectedCurrency] = useState([]);

  const [input, setInput] = useState()

  const [currencyVal, setCurrencyVal] = useState(0)

  const getDataUsingSimpleGetCall = async () => {
    let data = {currencyVal: currencyVal}
    let requestOptions = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json"
      }
    };

    await axios
      .get('http://api.exchangeratesapi.io/v1/latest?access_key=56c14bd5b86e728bcb125ff40d918d7f&symbols=USD,MAD,AUD,CAD,PLN,MXN&format=1')
      .then(function (response) {
        setSelectedCurrency(response.data.rates)
        // console.log(selectedToValue)
      })
      .catch(function (error) {
        console.log(error.message);
      })

      if(selectedToValue == "USD")
        setCurrencyVal(selectedCurrency.USD * input)

      if(selectedToValue == "CAD")
        setCurrencyVal(selectedCurrency.CAD * input)

      if(selectedToValue == "AUD")
        setCurrencyVal(selectedCurrency.AUD * input)

      if(selectedToValue == "EUR")
        setCurrencyVal(selectedCurrency.EUR * input)

      if(selectedToValue == "MXN")
        setCurrencyVal(selectedCurrency.MXN * input)

      if(selectedToValue == "PLN")
        setCurrencyVal(selectedCurrency.PLN * input)

      if(selectedToValue == "MAD")
        setCurrencyVal(selectedCurrency.MAD * input)

      console.log(currencyVal)

      await axios.post('https://currencyexchangeb.herokuapp.com/addData', data)
      .then(() => {
        console.log("ADDED")
      })
      .catch((e) => {
        console.log("ERROR" + e)
      })
  };

  return (
    <View style={styles.container1}>
      <ImageBackground source={image} style={styles.image}>
        <SafeAreaView style={styles.container2}>          

          <View style={styles.contents2}>

            

            

            <View style={{flexDirection:'row', flexWrap:'wrap', top: 60 }}>
            <Text>FROM</Text>  
              <Picker
                selectedValue={selectedFromValue}
                style={{color: '#000000', height: 50, width: 150}}
                onValueChange={(itemValue, itemIndex) => setSelectedFromValue(itemValue)}
              >
                <Picker.Item label="EUR" value="EUR" />

              </Picker>
              <Text>TO</Text>                
              <Picker
                selectedValue={selectedToValue}
                style={{color: '#000000', height: 50, width: 150}}
                onValueChange={(itemValue, itemIndex) => setSelectedToValue(itemValue)}
              >
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="MAD" value="MAD" />
                <Picker.Item label="AUD" value="AUD" />
                <Picker.Item label="CAD" value="CAD" />
                <Picker.Item label="MXN" value="MXN" />
                <Picker.Item label="PLN" value="PLN" />
                {/* AUD CAD EUR MXN PLN*/}
              </Picker>
              </View>

              <View style={{flexDirection:'row', flexWrap:'wrap', top: 90}} >
                  <TextInput
                    style={styles.default}
                    onChangeText={(text) => setInput(text)}
                    value={input}
                    keyboardType="numeric"
                  />

                  <View style={styles.contents}>

                    <Pressable onPress={() => { getDataUsingSimpleGetCall() }} style={[styles.contentsText, styles.marginButtom]}>
                      <Text style={[styles.contentsText2]}>CONVERT</Text>
                    </Pressable>

                  </View>        
              </View>

              {selectedToValue == "USD" && (
                  <Text style={{color: '#000000', textAlign:'center', top: 200}}>USD: {selectedCurrency.USD * input}</Text>
              )}
              {selectedToValue == "MAD" && (
                  <Text style={{color: '#000000', textAlign:'center', top: 200}}>MAD: {selectedCurrency.MAD * input}</Text>
              )}
              {selectedToValue == "CAD" && (
                  <Text style={{color: '#000000', textAlign:'center', top: 200}}>CAD: {selectedCurrency.CAD * input}</Text>
              )}
              {selectedToValue == "AUD" && (
                  <Text style={{color: '#000000', textAlign:'center', top: 200}}>AUD: {selectedCurrency.AUD * input}</Text>
              )}
              {selectedToValue == "EUR" && (
                  <Text style={{color: '#000000', textAlign:'center', top: 200}}>EUR: {selectedCurrency.EUR * input}</Text>
              )}
              {selectedToValue == "MXN" && (
                  <Text style={{color: '#000000', textAlign:'center', top: 200}}>MXN: {selectedCurrency.MXN * input}</Text>
              )}
              {selectedToValue == "PLN" && (
                  <Text style={{color: '#000000', textAlign:'center', top: 200}}>PLN: {selectedCurrency.PLN * input}</Text>
              )}         
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container2: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    zIndex: 2
  },
  contents: {
    // flex: 1,
    marginTop : 20,
    marginRight: 90,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '94%',
  },
  contents2: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  marginButtom: {
    marginBottom: 10
  },
  contentsText: {
    color: '#000000',
    padding: 10,
    width: '80%',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 30
  },
  contentsText2: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 30,
  },
  default: {
    backgroundColor: 'white',
    width: '94%',
    marginLeft:10,
    height: 50,
    padding: 10,
    top: 150,
  }
});

export default HomeScreen
