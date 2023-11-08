import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const CoinDetail = ({ coin, onBackPress }) => {
  const tableData = [
    ["Symbol", coin.symbol],
    ["Price", `$${parseFloat(coin.lastPrice).toFixed(2)}`],
    ["Price Change", `${coin.priceChange}`],
    ["Price Change Percentage", `${coin.priceChangePercent}%`],
    ["Weighted Avg Price", `${coin.weightedAvgPrice}`],
    ["Prev Close Price", `${coin.prevClosePrice}`],
    ["Last Qty", `${coin.lastQty}`],
    ["Bid Price", `${coin.bidPrice}`],
    ["Bid Qty", `${coin.bidQty}`],
    ["Ask Price", `${coin.askPrice}`],
    ["Ask Qty", `${coin.askQty}`],
    ["Open Price", `${coin.openPrice}`],
    ["High Price", `${coin.highPrice}`],
    ["Low Price", `${coin.lowPrice}`],
    ["Volume", `${coin.volume}`],
    ["Quote Volume", `${coin.quoteVolume}`],
    ["Open Time", `${coin.openTime}`],
    ["Close Time", `${coin.closeTime}`],
    ["First ID", `${coin.firstId}`],
    ["Last ID", `${coin.lastId}`],
    ["Count", `${coin.count}`],
    // Agrega más detalles de la moneda aquí
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity style={styles.button} onPress={onBackPress}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <Table
          borderStyle={{
            borderWidth: 2,
            borderColor: "#fff",
            width: "100%",
          }}
        >
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
      </ScrollView>
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
  scrollContainer: {
    width: "90%",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    margin: 6,
  },
  button: {
    backgroundColor: "black", // Fondo negro
    width: "100%",
    marginBottom:"10px",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff", // Borde blanco
    borderWidth: 2,

  },
  buttonText: {
    color: "#fff", // Texto en blanco
    fontSize: 18,
  },
});

export default CoinDetail;
