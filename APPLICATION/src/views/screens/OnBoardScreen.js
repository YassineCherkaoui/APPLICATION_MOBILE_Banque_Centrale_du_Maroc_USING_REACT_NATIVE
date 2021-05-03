import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';

const OnBoardScreen = ({navigation}) => {
    return (
        <SafeAreaView 
            style={{
                flex:1,
                backgroundColor:COLORS.white
            }}
        >
            <View style={style.textContainer} >
               
                <PrimaryButton 
                    onPress={() => navigation.navigate('Home')} 
                    title="Start"
                />
            </View>
            
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    textContainer: {
        flex: 1,
        paddingHorizontal:50,
        justifyContent:"space-between",
        paddingBottom:40,
        marginTop: 320
    },
    indicatorContainer: {
        height:50,
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
    },
    currentIndicator: {
        height: 12,
        width: 30,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        marginHorizontal: 5,
    },
    indicator: {
        height:12,
        width:12,
        borderRadius:6,
        backgroundColor:COLORS.grey,
        marginHorizontal:5,
    }
});

export default OnBoardScreen;