import React, { useEffect,useState } from 'react';
import {Text, StyleSheet, View, Image,Alert,TouchableOpacity,TextInput,ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';


const HomeScreen = ({navigation}) => {

    const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=2739b2331b1010220a696b99d3d3e828';

    // ---------------------------------
    const [currencyOptions,setCurrencyOptions] = useState([]);
    const [fromCurrency,setFromCurrency] = useState();
    const [toCurrency,setToCurrency] = useState();
    const [exchangeRate,setExchangeRate] = useState();
    const [amount,setAmount] = useState(1);
    const [amountInFromCurrency,setAmountInFromCurrency] = useState(true);
    // ----------------------------------------------------

    const [currencyOptionstoto,setCurrencyOptionstoto] = useState([]);
    const [fromCurrencytoto,setFromCurrencytoto] = useState();

    const [ToCurrencytotoEUR,setToCurrencyTototEUR] = useState();

    const [toCurrencyMAD,setToCurrencyMAD] = useState();
    const [exchangeRateMAD,setExchangeRateMAD] = useState();

    const [toCurrencyAED,setToCurrencyAED] = useState();
    const [exchangeRateAED,setExchangeRateAED] = useState();

    const [toCurrencyAFN,setToCurrencyAFN] = useState();
    const [exchangeRateAFN,setExchangeRateAFN] = useState();

    const [toCurrencyALL,setToCurrencyALL] = useState();
    const [exchangeRateALL,setExchangeRateALL] = useState();

    const [toCurrencyAMD,setToCurrencyAMD] = useState();
    const [exchangeRateAMD,setExchangeRateAMD] = useState();

    const [toCurrencyANG,setToCurrencyANG] = useState();
    const [exchangeRateANG,setExchangeRateANG] = useState();

    const [toCurrencyAOA,setToCurrencyAOA] = useState();
    const [exchangeRateAOA,setExchangeRateAOA] = useState();

    const [toCurrencyARS,setToCurrencyARS] = useState();
    const [exchangeRateARS,setExchangeRateARS] = useState();

    const [toCurrencyAUD,setToCurrencyAUD] = useState();
    const [exchangeRateAUD,setExchangeRateAUD] = useState();

    const [toCurrencyAWG,setToCurrencyAWG] = useState();
    const [exchangeRateAWG,setExchangeRateAWG] = useState();

    const [toCurrencyBTC,setToCurrencyBTC] = useState();
    const [exchangeRateBTC,setExchangeRateBTC] = useState();

    const [toCurrencyUSD,setToCurrencyUSD] = useState();
    const [exchangeRateUSD,setExchangeRateUSD] = useState();

    const [toCurrencyGBP,setToCurrencyGBP] = useState();
    const [exchangeRateGBP,setExchangeRateGBP] = useState();

    const [toCurrencyKWD,setToCurrencyKWD] = useState();
    const [exchangeRateKWD,setExchangeRateKWD] = useState();
    // ----------------------------------------------------
    const [amountInFromCurrencyMAD,setAmountInFromCurrencyMAD] = useState(true);
    const [amountInFromCurrencyAED,setAmountInFromCurrencyAED] = useState(true);
    const [amountInFromCurrencyAFN,setAmountInFromCurrencyAFN] = useState(true);
    const [amountInFromCurrencyALL,setAmountInFromCurrencyALL] = useState(true);
    const [amountInFromCurrencyAMD,setAmountInFromCurrencyAMD] = useState(true);
    const [amountInFromCurrencyANG,setAmountInFromCurrencyANG] = useState(true);
    const [amountInFromCurrencyAOA,setAmountInFromCurrencyAOA] = useState(true);
    const [amountInFromCurrencyARS,setAmountInFromCurrencyARS] = useState(true);
    const [amountInFromCurrencyAUD,setAmountInFromCurrencyAUD] = useState(true);
    const [amountInFromCurrencyAWG,setAmountInFromCurrencyAWG] = useState(true);
    const [amountInFromCurrencyBTC,setAmountInFromCurrencyBTC] = useState(true);
    const [amountInFromCurrencyUSD,setAmountInFromCurrencyUSD] = useState(true);
    const [amountInFromCurrencyGBP,setAmountInFromCurrencyGBP] = useState(true);
    const [amountInFromCurrencyKWD,setAmountInFromCurrencyKWD] = useState(true);
    // ----------------------------------------------------
    const [amountMAD,setAmountMAD] = useState(1);
    const [amountAED,setAmountAED] = useState(1);
    const [amountAFN,setAmountAFN] = useState(1);
    const [amountALL,setAmountALL] = useState(1);
    const [amountAMD,setAmountAMD] = useState(1);
    const [amountANG,setAmountANG] = useState(1);
    const [amountAOA,setAmountAOA] = useState(1);
    const [amountARS,setAmountARS] = useState(1);
    const [amountAUD,setAmountAUD] = useState(1);
    const [amountAWG,setAmountAWG] = useState(1);
    const [amountBTC,setAmountBTC] = useState(1);
    const [amountUSD,setAmountUSD] = useState(1);
    const [amountGBP,setAmountGBP] = useState(1);
    const [amountKWD,setAmountKWD] = useState(1);
    // ----------------------------------------------------
    let toAmount, fromAmount
    if(amountInFromCurrency){
      fromAmount = amount
      toAmount = amount * exchangeRate
    } else{
      toAmount = amount
      fromAmount = amount / exchangeRate
    }
    // ----------------------------------------------------
    //MAD
    let toAmountMAD, fromAmountMAD
    if(amountInFromCurrencyMAD){
      fromAmountMAD = amountMAD
      toAmountMAD = amountMAD * exchangeRateMAD
    } else{
      toAmounMADToto = amountMAD
      fromAmountMAD = amountMAD / exchangeRateMAD
    }
    function addVallMAD (){
        setAmountMAD(amountMAD + 1)
    }
    function minusVallMAD (){
        if(amountMAD > 0){
            setAmountMAD(amountMAD - 1)
        }
    }
    // ----------------------------------------------------
    //AED
    let toAmountAED, fromAmountAED
    if(amountInFromCurrencyAED){
      fromAmountAED = amountAED
      toAmountAED = amountAED * exchangeRateAED
    } else{
      toAmountAED = amountAED
      fromAmountAED = amountAED / exchangeRateAED
    }
    function addVallAED (){
        setAmountAED(amountAED + 1)
    }
    function minusVallAED (){
        if(amountAED > 0){
            setAmountAED(amountAED - 1)
        }
    }
    // ----------------------------------------------------
    //AFN
    let toAmountAFN, fromAmountAFN
    if(amountInFromCurrencyAFN){
      fromAmountAFN = amountAFN
      toAmountAFN = amountAFN * exchangeRateAFN
    } else{
      toAmountAFN = amountAFN
      fromAmountAFN = amountAFN / exchangeRateAFN
    }
    function addVallAFN (){
        setAmountAFN(amountAFN + 1)
    }
    function minusVallAFN (){
        if(amountAFN > 0){
            setAmountAFN(amountAFN - 1)
        }
    }
    // ----------------------------------------------------
    //ALL
    let toAmountALL, fromAmountALL
    if(amountInFromCurrencyALL){
      fromAmountALL = amountALL
      toAmountALL = amountALL * exchangeRateALL
    } else{
      toAmountALL = amountALL
      fromAmountALL = amountALL / exchangeRateALL
    }
    function addVallALL (){
        setAmountALL(amountALL + 1)
    }
    function minusVallALL (){
        if(amountALL > 0){
            setAmountALL(amountALL - 1)
        }
    }
    // ----------------------------------------------------
    //AMD
    let toAmountAMD, fromAmountAMD
    if(amountInFromCurrencyAMD){
      fromAmountAMD = amountAMD
      toAmountAMD = amountAMD * exchangeRateAMD
    } else{
      toAmountAMD = amountAMD
      fromAmountAMD = amountAMD / exchangeRateAMD
    }
    function addVallAMD (){
        setAmountAMD(amountAMD + 1)
    }
    function minusVallAMD (){
        if(amountAMD > 0){
            setAmountAMD(amountAMD - 1)
        }
    }
    // ----------------------------------------------------
    //ANG
    let toAmountANG, fromAmountANG
    if(amountInFromCurrencyANG){
      fromAmountANG = amountANG
      toAmountANG = amountANG * exchangeRateANG
    } else{
      toAmountANG = amountANG
      fromAmountANG = amountANG / exchangeRateANG
    }
    function addVallANG (){
        setAmountANG(amountANG + 1)
    }
    function minusVallANG (){
        if(amountANG > 0){
            setAmountANG(amountANG - 1)
        }
    }
    // ----------------------------------------------------
    //AOA
    let toAmountAOA, fromAmountAOA
    if(amountInFromCurrencyAOA){
      fromAmountAOA = amountAOA
      toAmountAOA = amountAOA * exchangeRateAOA
    } else{
      toAmountAOA = amountAOA
      fromAmountAOA = amountAOA / exchangeRateAOA
    }
    function addVallAOA (){
        setAmountAOA(amountAOA + 1)
    }
    function minusVallAOA (){
        if(amountAOA > 0){
            setAmountAOA(amountAOA - 1)
        }
    }
    // ----------------------------------------------------
    //ARS
    let toAmountARS, fromAmountARS
    if(amountInFromCurrencyARS){
      fromAmountARS = amountARS
      toAmountARS = amountARS * exchangeRateARS
    } else{
      toAmountARS = amountARS
      fromAmountARS = amountARS / exchangeRateARS
    }
    function addVallARS (){
        setAmountARS(amountARS + 1)
    }
    function minusVallARS (){
        if(amountARS > 0){
            setAmountARS(amountARS - 1)
        }
    }
    // ----------------------------------------------------
    //AUD
    let toAmountAUD, fromAmountAUD
    if(amountInFromCurrencyAUD){
      fromAmountAUD = amountAUD
      toAmountAUD = amountAUD * exchangeRateAUD
    } else{
      toAmountAUD = amountAUD
      fromAmountAUD = amountAUD / exchangeRateAUD
    }
    function addVallAUD (){
        setAmountAUD(amountAUD + 1)
    }
    function minusVallAUD (){
        if(amountAUD > 0){
            setAmountAUD(amountAUD - 1)
        }
    }
    // ----------------------------------------------------
    //AWG
    let toAmountAWG, fromAmountAWG
    if(amountInFromCurrencyAWG){
      fromAmountAWG = amountAWG
      toAmountAWG = amountAWG * exchangeRateAWG
    } else{
      toAmountAWG = amountAWG
      fromAmountAWG = amountAWG / exchangeRateAWG
    }
    function addVallAWG (){
        setAmountAWG(amountAWG + 1)
    }
    function minusVallAWG (){
        if(amountAWG > 0){
            setAmountAWG(amountAWG - 1)
        }
    }
    // ----------------------------------------------------
    //BTC
    let toAmountBTC, fromAmountBTC
    if(amountInFromCurrencyBTC){
      fromAmountBTC = amountBTC
      toAmountBTC = amountBTC * exchangeRateBTC
    } else{
      toAmountBTC = amountBTC
      fromAmountBTC = amountBTC / exchangeRateBTC
    }
    function addVallBTC (){
        setAmountBTC(amountBTC + 1)
    }
    function minusVallBTC (){
        if(amountBTC > 0){
            setAmountBTC(amountBTC - 1)
        }
    }
    // ----------------------------------------------------
    //USD
    let toAmountUSD, fromAmountUSD
    if(amountInFromCurrencyUSD){
      fromAmountUSD = amountUSD
      toAmountUSD = amountUSD * exchangeRateUSD
    } else{
      toAmountUSD = amountUSD
      fromAmountUSD = amountUSD / exchangeRateUSD
    }
    function addVallUSD (){
        setAmountUSD(amountUSD + 1)
    }
    function minusVallUSD (){
        if(amountUSD > 0){
            setAmountUSD(amountUSD - 1)
        }
    }
    // ----------------------------------------------------
    //GBP
    let toAmountGBP, fromAmountGBP
    if(amountInFromCurrencyGBP){
      fromAmountGBP = amountGBP
      toAmountGBP = amountGBP * exchangeRateGBP
    } else{
      toAmountGBP = amountGBP
      fromAmountGBP = amountGBP / exchangeRateGBP
    }
    function addVallGBP (){
        setAmountGBP(amountGBP + 1)
    }
    function minusVallGBP (){
        if(amountGBP > 0){
            setAmountGBP(amountGBP - 1)
        }
    }
    // ----------------------------------------------------
    //KWD
    let toAmountKWD, fromAmountKWD
    if(amountInFromCurrencyKWD){
      fromAmountKWD = amountKWD
      toAmountKWD = amountKWD * exchangeRateKWD
    } else{
      toAmountKWD = amountKWD
      fromAmountKWD = amountKWD / exchangeRateKWD
    }
    function addVallKWD (){
        setAmountKWD(amountKWD + 1)
    }
    function minusVallKWD (){
        if(amountKWD > 0){
            setAmountKWD(amountKWD - 1)
        }
    }
    // ----------------------------------------------------

    useEffect(() => {
        fetch(BASE_URL)
          .then(res => res.json())
          .then(data => {
            const firstCurrency = Object.keys(data.rates)[0]
            setCurrencyOptions([data.base, ...Object.keys(data.rates) ])
            setFromCurrency(data.base)
            setToCurrency(firstCurrency)
            setExchangeRate(data.rates[firstCurrency])
            // ----------------------------------------------------
            const firstCurrencyVal = Object.keys(data.rates)[91]
            const firstAEDCurrencyVal = Object.keys(data.rates)[0]
            const firstAFNCurrencyVal = Object.keys(data.rates)[1]
            const firstALLCurrencyVal = Object.keys(data.rates)[2]
            const firstAMDCurrencyVal = Object.keys(data.rates)[3]
            const firstANGCurrencyVal = Object.keys(data.rates)[4]
            const firstAOACurrencyVal = Object.keys(data.rates)[5]
            const firstARSCurrencyVal = Object.keys(data.rates)[6]
            const firstAUDCurrencyVal = Object.keys(data.rates)[7]
            const firstAWGCurrencyVal = Object.keys(data.rates)[8]
            const firstBTCCurrencyVal = Object.keys(data.rates)[21]
            const firstUSDCurrencyVal = Object.keys(data.rates)[149]
            const firstGBPCurrencyVal = Object.keys(data.rates)[49]
            const firstKWDCurrencyVal = Object.keys(data.rates)[80]
            // ----------------------------------------------------
            setCurrencyOptionstoto([data.base, ...Object.keys(data.rates) ])
            setFromCurrencytoto(data.base)
            setToCurrencyMAD(firstCurrencyVal)
            setToCurrencyAED(firstAEDCurrencyVal)
            setToCurrencyAFN(firstAFNCurrencyVal)
            setToCurrencyALL(firstALLCurrencyVal)
            setToCurrencyAMD(firstAMDCurrencyVal)
            setToCurrencyANG(firstANGCurrencyVal)
            setToCurrencyAOA(firstAOACurrencyVal)
            setToCurrencyARS(firstARSCurrencyVal)
            setToCurrencyAUD(firstAUDCurrencyVal)
            setToCurrencyAWG(firstAWGCurrencyVal)
            setToCurrencyBTC(firstBTCCurrencyVal)
            setToCurrencyUSD(firstUSDCurrencyVal)
            setToCurrencyGBP(firstGBPCurrencyVal)
            setToCurrencyKWD(firstKWDCurrencyVal)
            // ----------------------------------------------------
            setExchangeRateMAD(data.rates[firstCurrencyVal])
            setExchangeRateAED(data.rates[firstAEDCurrencyVal])
            setExchangeRateAFN(data.rates[firstAFNCurrencyVal])
            setExchangeRateALL(data.rates[firstALLCurrencyVal])
            setExchangeRateAMD(data.rates[firstAMDCurrencyVal])
            setExchangeRateANG(data.rates[firstANGCurrencyVal])
            setExchangeRateAOA(data.rates[firstAOACurrencyVal])
            setExchangeRateARS(data.rates[firstARSCurrencyVal])
            setExchangeRateAUD(data.rates[firstAUDCurrencyVal])
            setExchangeRateAWG(data.rates[firstAWGCurrencyVal])
            setExchangeRateBTC(data.rates[firstBTCCurrencyVal])
            setExchangeRateUSD(data.rates[firstUSDCurrencyVal])
            setExchangeRateGBP(data.rates[firstGBPCurrencyVal])
            setExchangeRateKWD(data.rates[firstKWDCurrencyVal])
            // ----------------------------------------------------
          })
    },[])
    // ----------------------------------------------------
    return (
        <SafeAreaView
            style={{
                backgroundColor:COLORS.white,
                flex:1,
            }}
        >

            <View style={{
                justifyContent:'center',
                alignItems:'center',
                marginVertical: 10,
                marginHorizontal: 20,
                paddingHorizontal: 10,
                // backgroundColor:'#95a5a6'
            }}>
                <Text style={{fontSize:17,fontWeight:'bold'}}>Taux</Text>
            </View>
         

            <ScrollView style={style.scrollView}>
                {/* 1 - START MAD */}
                <View style={style.cartCard} >
                    <View style={{
                        height:100,
                        marginLeft:10,
                        paddingVertical:20,
                        flex:1,
                        flexDirection: 'row',
                        justifyContent:'space-between'
                    }} >
                        <View style={{flexDirection:'row'}} >
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} = </Text>
                            </View>
                            <View style={{marginLeft:10}}>
                                <TextInput 
                                    style={style.input}
                                    // placeholder='new todo...'
                                    keyboardType="numeric"
                                    value={`${fromAmountMAD}`}
                                    onChangeText={setAmountMAD}
                                />
                                <View style={{flexDirection:'row'}} >
                                    <TouchableOpacity onPress={minusVallMAD}>
                                        <View style={style.actionBtn}>
                                            <Icon name="remove" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                    <Text> </Text>
                                    <TouchableOpacity onPress={addVallMAD}>
                                        <View style={style.actionBtn}>
                                            <Icon name="add" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View  style={{alignItems:'center',justifyContent:'center'}}>
                            <Image 
                                style={{
                                    width:30,
                                    height:30,
                                }}
                                source={require("../../assets/iconfinder_transaction.png")}
                            />
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyMAD}</Text>
                            <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                            <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountMAD}</Text>
                        </View>
                    </View>
                </View>
                {/* 1 - END MAD */}

                {/* 2 - START BTC */}
                <View style={style.cartCard} >
                    <View style={{
                        height:100,
                        marginLeft:10,
                        paddingVertical:20,
                        flex:1,
                        flexDirection: 'row',
                        justifyContent:'space-between'
                    }} >
                        <View style={{flexDirection:'row'}} >
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} = </Text>
                            </View>
                            <View style={{marginLeft:10}}>
                                <TextInput 
                                    style={style.input}
                                    // placeholder='new todo...'
                                    keyboardType="numeric"
                                    value={`${fromAmountBTC}`}
                                    onChangeText={setAmountBTC}
                                />
                                <View style={{flexDirection:'row'}} >
                                    <TouchableOpacity onPress={minusVallBTC}>
                                        <View style={style.actionBtn}>
                                            <Icon name="remove" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                    <Text> </Text>
                                    <TouchableOpacity onPress={addVallBTC}>
                                        <View style={style.actionBtn}>
                                            <Icon name="add" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View  style={{alignItems:'center',justifyContent:'center'}}>
                            <Image 
                                style={{
                                    width:30,
                                    height:30,
                                }}
                                source={require("../../assets/iconfinder_transaction.png")}
                            />
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyBTC}</Text>
                            <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                            <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountBTC}</Text>
                        </View>
                    </View>
                </View>
                {/* 2 - END BTC */}

                {/* 3 - START USD */}
                <View style={style.cartCard} >
                    <View style={{
                        height:100,
                        marginLeft:10,
                        paddingVertical:20,
                        flex:1,
                        flexDirection: 'row',
                        justifyContent:'space-between'
                    }} >
                        <View style={{flexDirection:'row'}} >
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                            </View>
                            <View style={{marginLeft:10}}>
                                <TextInput 
                                    style={style.input}
                                    // placeholder='new todo...'
                                    keyboardType="numeric"
                                    value={`${fromAmountUSD}`}
                                    onChangeText={setAmountUSD}
                                />
                                <View style={{flexDirection:'row'}} >
                                    <TouchableOpacity onPress={minusVallUSD}>
                                        <View style={style.actionBtn}>
                                            <Icon name="remove" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                    <Text> </Text>
                                    <TouchableOpacity onPress={addVallUSD}>
                                        <View style={style.actionBtn}>
                                            <Icon name="add" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View  style={{alignItems:'center',justifyContent:'center'}}>
                            <Image 
                                style={{
                                    width:30,
                                    height:30,
                                }}
                                source={require("../../assets/iconfinder_transaction.png")}
                            />
                        </View>
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyUSD}</Text>
                            <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>

                            <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountUSD}</Text>
                        </View>
                    </View>
                </View>
                {/* 3 - END USD */}

                {/* 4 - START GBP */}
                <View style={style.cartCard} >
                    <View style={{
                        height:100,
                        marginLeft:10,
                        paddingVertical:20,
                        flex:1,
                        flexDirection: 'row',
                        justifyContent:'space-between'
                    }} >
                        <View style={{flexDirection:'row'}} >
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                            </View>
                            <View style={{marginLeft:10}}>
                                <TextInput 
                                    style={style.input}
                                    // placeholder='new todo...'
                                    keyboardType="numeric"
                                    value={`${fromAmountGBP}`}
                                    onChangeText={setAmountGBP}
                                />
                                <View style={{flexDirection:'row'}} >
                                    <TouchableOpacity onPress={minusVallGBP}>
                                        <View style={style.actionBtn}>
                                            <Icon name="remove" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                    <Text> </Text>
                                    <TouchableOpacity onPress={addVallGBP}>
                                        <View style={style.actionBtn}>
                                            <Icon name="add" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View  style={{alignItems:'center',justifyContent:'center'}}>
                            {/* <Image 
                                style={{
                                    width:30,
                                    height:30,
                                }}
                                source={require("../../assets/iconfinder_transaction.png")}
                            /> */}
                        </View>
                        
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyGBP}</Text>
                            <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountGBP}</Text>
                        </View>
                    </View>
                </View>
                {/* 4 - END GBP */}

                {/* 5 - START KWD */}
                <View style={style.cartCard} >
                    <View style={{
                        height:100,
                        marginLeft:10,
                        paddingVertical:20,
                        flex:1,
                        flexDirection: 'row',
                        justifyContent:'space-between'
                    }} >
                        <View style={{flexDirection:'row'}} >
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                            </View>
                            <View style={{marginLeft:10}}>
                                <TextInput 
                                    style={style.input}
                                    // placeholder='new todo...'
                                    keyboardType="numeric"
                                    value={`${fromAmountKWD}`}
                                    onChangeText={setAmountKWD}
                                />
                                <View style={{flexDirection:'row'}} >
                                    <TouchableOpacity onPress={minusVallKWD}>
                                        <View style={style.actionBtn}>
                                            <Icon name="remove" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                    <Text> </Text>
                                    <TouchableOpacity onPress={addVallKWD}>
                                        <View style={style.actionBtn}>
                                            <Icon name="add" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View  style={{alignItems:'center',justifyContent:'center'}}>
                            <Image 
                                style={{
                                    width:30,
                                    height:30,
                                }}
                                source={require("../../assets/iconfinder_transaction.png")}
                            />
                        </View>
                        
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyKWD}</Text>
                            <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountKWD}</Text>
                        </View>
                    </View>
                </View>
                {/* 5 - END KWD */}

                {/* 6 - START AED */}
                <View style={style.cartCard} >
                    <View style={{
                        height:100,
                        marginLeft:10,
                        paddingVertical:20,
                        flex:1,
                        flexDirection: 'row',
                        justifyContent:'space-between'
                    }} >
                        <View style={{flexDirection:'row'}} >
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                            </View>
                            <View style={{marginLeft:10}}>
                                <TextInput 
                                    style={style.input}
                                    // placeholder='new todo...'
                                    keyboardType="numeric"
                                    value={`${fromAmountAED}`}
                                    onChangeText={setAmountAED}
                                />
                                <View style={{flexDirection:'row'}} >
                                    <TouchableOpacity onPress={minusVallAED}>
                                        <View style={style.actionBtn}>
                                            <Icon name="remove" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                    <Text> </Text>
                                    <TouchableOpacity onPress={addVallAED}>
                                        <View style={style.actionBtn}>
                                            <Icon name="add" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View  style={{alignItems:'center',justifyContent:'center'}}>
                            <Image 
                                style={{
                                    width:30,
                                    height:30,
                                }}
                                source={require("../../assets/iconfinder_transaction.png")}
                            />
                        </View>
                        
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAED}</Text>
                            <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountAED}</Text>
                        </View>
                    </View>
                </View>
                {/* 6 - END AED */}

                {/* 7 - START AFN */}
                <View style={style.cartCard} >
                    <View style={{
                        height:100,
                        marginLeft:10,
                        paddingVertical:20,
                        flex:1,
                        flexDirection: 'row',
                        justifyContent:'space-between'
                    }} >
                        <View style={{flexDirection:'row'}} >
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                            </View>
                            <View style={{marginLeft:10}}>
                                <TextInput 
                                    style={style.input}
                                    // placeholder='new todo...'
                                    keyboardType="numeric"
                                    value={`${fromAmountAFN}`}
                                    onChangeText={setAmountAFN}
                                />
                                <View style={{flexDirection:'row'}} >
                                    <TouchableOpacity onPress={minusVallAFN}>
                                        <View style={style.actionBtn}>
                                            <Icon name="remove" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                    <Text> </Text>
                                    <TouchableOpacity onPress={addVallAFN}>
                                        <View style={style.actionBtn}>
                                            <Icon name="add" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View  style={{alignItems:'center',justifyContent:'center'}}>
                            <Image 
                                style={{
                                    width:30,
                                    height:30,
                                }}
                                source={require("../../assets/iconfinder_transaction.png")}
                            />
                        </View>
                        
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAFN}</Text>
                            <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountAFN}</Text>
                        </View>
                    </View>
                </View>
                {/* 7 - END AFN */}

                {/* 8 - START ALL */}
                <View style={style.cartCard} >
                    <View style={{
                        height:100,
                        marginLeft:10,
                        paddingVertical:20,
                        flex:1,
                        flexDirection: 'row',
                        justifyContent:'space-between'
                    }} >
                        <View style={{flexDirection:'row'}} >
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                            </View>
                            <View style={{marginLeft:10}}>
                                <TextInput 
                                    style={style.input}
                                    // placeholder='new todo...'
                                    keyboardType="numeric"
                                    value={`${fromAmountALL}`}
                                    onChangeText={setAmountALL}
                                />
                                <View style={{flexDirection:'row'}} >
                                    <TouchableOpacity onPress={minusVallALL}>
                                        <View style={style.actionBtn}>
                                            <Icon name="remove" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                    <Text> </Text>
                                    <TouchableOpacity onPress={addVallALL}>
                                        <View style={style.actionBtn}>
                                            <Icon name="add" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View  style={{alignItems:'center',justifyContent:'center'}}>
                            <Image 
                                style={{
                                    width:30,
                                    height:30,
                                }}
                                source={require("../../assets/iconfinder_transaction.png")}
                            />
                        </View>
                        
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyALL}</Text>
                            <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountALL}</Text>
                        </View>
                    </View>
                </View>
                {/* 8 - END ALL */}

                {/* 9 - START AMD */}
                <View style={style.cartCard} >
                    <View style={{
                        height:100,
                        marginLeft:10,
                        paddingVertical:20,
                        flex:1,
                        flexDirection: 'row',
                        justifyContent:'space-between'
                    }} >
                        <View style={{flexDirection:'row'}} >
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                            </View>
                            <View style={{marginLeft:10}}>
                                <TextInput 
                                    style={style.input}
                                    // placeholder='new todo...'
                                    keyboardType="numeric"
                                    value={`${fromAmountAMD}`}
                                    onChangeText={setAmountAMD}
                                />
                                <View style={{flexDirection:'row'}} >
                                    <TouchableOpacity onPress={minusVallAMD}>
                                        <View style={style.actionBtn}>
                                            <Icon name="remove" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                    <Text> </Text>
                                    <TouchableOpacity onPress={addVallAMD}>
                                        <View style={style.actionBtn}>
                                            <Icon name="add" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View  style={{alignItems:'center',justifyContent:'center'}}>
                            <Image 
                                style={{
                                    width:30,
                                    height:30,
                                }}
                                source={require("../../assets/iconfinder_transaction.png")}
                            />
                        </View>
                        
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAMD}</Text>
                            <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountAMD}</Text>
                        </View>
                    </View>
                </View>
                {/* 9 - END AMD */}

                {/* 10 - START ANG */}
                <View style={style.cartCard} >
                    <View style={{
                        height:100,
                        marginLeft:10,
                        paddingVertical:20,
                        flex:1,
                        flexDirection: 'row',
                        justifyContent:'space-between'
                    }} >
                        <View style={{flexDirection:'row'}} >
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                            </View>
                            <View style={{marginLeft:10}}>
                                <TextInput 
                                    style={style.input}
                                    // placeholder='new todo...'
                                    keyboardType="numeric"
                                    value={`${fromAmountANG}`}
                                    onChangeText={setAmountANG}
                                />
                                <View style={{flexDirection:'row'}} >
                                    <TouchableOpacity onPress={minusVallANG}>
                                        <View style={style.actionBtn}>
                                            <Icon name="remove" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                    <Text> </Text>
                                    <TouchableOpacity onPress={addVallANG}>
                                        <View style={style.actionBtn}>
                                            <Icon name="add" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View  style={{alignItems:'center',justifyContent:'center'}}>
                            <Image 
                                style={{
                                    width:30,
                                    height:30,
                                }}
                                source={require("../../assets/iconfinder_transaction.png")}
                            />
                        </View>
                        
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyANG}</Text>
                            <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountANG}</Text>
                        </View>
                    </View>
                </View>
                {/* 10 - END ANG */}

                {/* 11 - START AOA */}
                <View style={style.cartCard} >
                    <View style={{
                        height:100,
                        marginLeft:10,
                        paddingVertical:20,
                        flex:1,
                        flexDirection: 'row',
                        justifyContent:'space-between'
                    }} >
                        <View style={{flexDirection:'row'}} >
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                            </View>
                            <View style={{marginLeft:10}}>
                                <TextInput 
                                    style={style.input}
                                    // placeholder='new todo...'
                                    keyboardType="numeric"
                                    value={`${fromAmountAOA}`}
                                    onChangeText={setAmountAOA}
                                />
                                <View style={{flexDirection:'row'}} >
                                    <TouchableOpacity onPress={minusVallAOA}>
                                        <View style={style.actionBtn}>
                                            <Icon name="remove" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                    <Text> </Text>
                                    <TouchableOpacity onPress={addVallAOA}>
                                        <View style={style.actionBtn}>
                                            <Icon name="add" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View  style={{alignItems:'center',justifyContent:'center'}}>
                            <Image 
                                style={{
                                    width:30,
                                    height:30,
                                }}
                                source={require("../../assets/iconfinder_transaction.png")}
                            />
                        </View>
                        
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAOA}</Text>
                            <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountAOA}</Text>
                        </View>
                    </View>
                </View>
                {/* 11 - END AOA */}

                {/* 12 - STARARS */}
                <View style={style.cartCard} >
                    <View style={{
                        height:100,
                        marginLeft:10,
                        paddingVertical:20,
                        flex:1,
                        flexDirection: 'row',
                        justifyContent:'space-between'
                    }} >
                        <View style={{flexDirection:'row'}} >
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                            </View>
                            <View style={{marginLeft:10}}>
                                <TextInput 
                                    style={style.input}
                                    // placeholder='new todo...'
                                    keyboardType="numeric"
                                    value={`${fromAmountARS}`}
                                    onChangeText={setAmountARS}
                                />
                                <View style={{flexDirection:'row'}} >
                                    <TouchableOpacity onPress={minusVallARS}>
                                        <View style={style.actionBtn}>
                                            <Icon name="remove" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                    <Text> </Text>
                                    <TouchableOpacity onPress={addVallARS}>
                                        <View style={style.actionBtn}>
                                            <Icon name="add" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View  style={{alignItems:'center',justifyContent:'center'}}>
                            <Image 
                                style={{
                                    width:30,
                                    height:30,
                                }}
                                source={require("../../assets/iconfinder_transaction.png")}
                            />
                        </View>
                        
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyARS}</Text>
                            <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountARS}</Text>
                        </View>
                    </View>
                </View>
                {/* 12 - END ARS */}

                {/* 13 - STAR AUD */}
                <View style={style.cartCard} >
                    <View style={{
                        height:100,
                        marginLeft:10,
                        paddingVertical:20,
                        flex:1,
                        flexDirection: 'row',
                        justifyContent:'space-between'
                    }} >
                        <View style={{flexDirection:'row'}} >
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                            </View>
                            <View style={{marginLeft:10}}>
                                <TextInput 
                                    style={style.input}
                                    // placeholder='new todo...'
                                    keyboardType="numeric"
                                    value={`${fromAmountAUD}`}
                                    onChangeText={setAmountAUD}
                                />
                                <View style={{flexDirection:'row'}} >
                                    <TouchableOpacity onPress={minusVallAUD}>
                                        <View style={style.actionBtn}>
                                            <Icon name="remove" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                    <Text> </Text>
                                    <TouchableOpacity onPress={addVallAUD}>
                                        <View style={style.actionBtn}>
                                            <Icon name="add" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View  style={{alignItems:'center',justifyContent:'center'}}>
                            <Image 
                                style={{
                                    width:30,
                                    height:30,
                                }}
                                source={require("../../assets/iconfinder_transaction.png")}
                            />
                        </View>
                        
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAUD}</Text>
                            <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountAUD}</Text>
                        </View>
                    </View>
                </View>
                {/* 13 - END AUD */}

                {/* 14 - STA AWG */}
                <View style={style.cartCard} >
                    <View style={{
                        height:100,
                        marginLeft:10,
                        paddingVertical:20,
                        flex:1,
                        flexDirection: 'row',
                        justifyContent:'space-between'
                    }} >
                        <View style={{flexDirection:'row'}} >
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:17,fontWeight:'bold'}}>{fromCurrencytoto} : </Text>
                            </View>
                            <View style={{marginLeft:10}}>
                                <TextInput 
                                    style={style.input}
                                    // placeholder='new todo...'
                                    keyboardType="numeric"
                                    value={`${fromAmountAWG}`}
                                    onChangeText={setAmountAWG}
                                />
                                <View style={{flexDirection:'row'}} >
                                    <TouchableOpacity onPress={minusVallAWG}>
                                        <View style={style.actionBtn}>
                                            <Icon name="remove" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                    <Text> </Text>
                                    <TouchableOpacity onPress={addVallAWG}>
                                        <View style={style.actionBtn}>
                                            <Icon name="add" size={25} color={COLORS.white} />
                                        </View>    
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View  style={{alignItems:'center',justifyContent:'center'}}>
                            <Image 
                                style={{
                                    width:30,
                                    height:30,
                                }}
                                source={require("../../assets/iconfinder_transaction.png")}
                            />
                        </View>
                        
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:18}} >{toCurrencyAWG}</Text>
                            <Text style={{fontSize:13,color:COLORS.grey}} >=</Text>
                            <Text style={{fontSize:17,fontWeight:'bold'}} >{toAmountAWG}</Text>
                        </View>
                    </View>
                </View>
                {/* 14 - END AWG */}
            </ScrollView>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '20',
    }, 
    cartCard:{
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems:'center',
        paddingBottom:20
    },
    actionBtn: {
        width: 40,
        height: 30,
        backgroundColor: COLORS.primary,
        borderRadius:30,
        paddingHorizontal:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    input:{
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      width:"100%",
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      
    },
    scrollView: {
      backgroundColor: '#ecf0f1',
      // marginHorizontal: 20,
      padding:0,
    //   marginTop:60,
      marginBottom:2,
    //   width: '80%',
      // flexDirection: "column",
    }
});

export default HomeScreen;