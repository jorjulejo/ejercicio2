import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";

import CoinItem from "./components/CoinItem";
import CoinDetail from "./components/CoinDetail";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    try {
      const response = await fetch(
        "https://api.binance.com/api/v3/ticker/24hr"
      );
      const data = await response.json();
      setCoins(data);
    } catch (error) {
      console.error("Error al cargar datos de la API de Binance:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCoinSelection = (coin) => {
    setSelectedCoin(coin);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#141414" />

      <View style={styles.header}>
        <Text style={styles.title}>CryptoMarket</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a Coin"
          placeholderTextColor="#858585"
          onChangeText={(text) => text && setSearch(text)}
        />
      </View>

      {selectedCoin ? (
        // Show CoinDetail screen if a coin is selected
        <CoinDetail
          coin={selectedCoin}
          onBackPress={() => setSelectedCoin(null)}
        />
      ) : (
        // Show the coin list
        <FlatList
          style={styles.list}
          data={coins.filter(
            (coin) =>
              coin.symbol.toLowerCase().includes("usdt") &&
              coin.symbol.toLowerCase().includes(search.toLowerCase())
          )}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCoinSelection(item)}>
              <CoinItem coin={item} />
            </TouchableOpacity>
          )}
          refreshing={refreshing}
          onRefresh={async () => {
            setRefreshing(true);
            await loadData();
            setRefreshing(false);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginTop: 10,
  },
  list: {
    width: "90%",
  },
  searchInput: {
    color: "#fff",
    borderBottomColor: "#4657CE",
    borderBottomWidth: 1,
    width: "40%",
    textAlign: "center",
  },
});

export default App;
