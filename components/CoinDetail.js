import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const CoinDetail = ({ coin, onBackPress  }) => {
  const dataKeys = Object.keys(coin);
  const dataValues = Object.values(coin);
  const tableData = [];
  for (let i = 0; i < dataKeys.length; i++) {
    tableData.push({ key: dataKeys[i], value: dataValues[i] });
  }

  const renderTableItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.text}>{item.key}</Text>
      <Text style={styles.text}>{item.value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onBackPress}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onGraphicsPress}>
        <Text style={styles.buttonText}>Graphics</Text>
      </TouchableOpacity>

      <FlatList
        data={tableData}
        renderItem={renderTableItem}
        keyExtractor={(item) => item.key.toString()}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    padding: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
  button: {
    backgroundColor: "black",
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  flatList: {
    width: "90%",
  },
});

export default CoinDetail;
