/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
// yarn add victory-native or npm install victory-native
import { VictoryBar,VictoryChart,VictoryTheme,VictoryAxis } from "victory-native";

const BarChartComponent = () => {
  return (
    <View style = {styles.container}> 
        <VictoryChart width  = {360} theme = {VictoryTheme.material} domainPadding = {20}>
            <VictoryAxis 
                tickValues = {[2011,2012,2013,2014,2015]}
                tickFormat ={['2011','2012','2013','2014','2015']}
            />
            <VictoryAxis dependentAxis tickFormat = {(x) =>`${x/1000}k` } />
            <VictoryBar data = {[
                {year : 2011,earnings : 13000},
                {year : 2012,earnings : 14050},
                {year : 2013,earnings : 15700},
                {year : 2014,earnings : 16900},
                {year : 2015,earnings : 17800},
            ]} 
            x = "year" y = "earnings" />
        </VictoryChart>
        <Text style = {{textAlign : "center",fontWeight : "500",fontSize : 18}}>
            Sales Chart 
        </Text>
    </View>
  );
};

export default BarChartComponent;

const styles = StyleSheet.create({
    container : {
        justifyContent : "center",
        alignItems : "center",
    }
});
