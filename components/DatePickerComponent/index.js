/** @format */

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
// yarn add react-native-datepicker or npm install react-native-datepicker
import DatePicker from "react-native-datepicker";

const DatePickerComponent = () => {
  const [date, setDate] = useState("");
  return (
    <View>
      <DatePicker
        date={date}
        placeholder='Select Date'
        format='DD-MM-YYYY'
        confirmBtnText='Confirm'
        cancelBtnText='Cancel'
        onDateChange={(d) => setDate(d)}
      />
    </View>
  );
};

export default DatePickerComponent;

const styles = StyleSheet.create({});
