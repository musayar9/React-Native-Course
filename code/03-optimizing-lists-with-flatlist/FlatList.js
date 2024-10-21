import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

import { useState } from "react";

const DATA = [
  { id: "1", title: "Apple" },
  { id: "2", title: "Banana" },
  { id: "3", title: "Orange" },
  { id: "4", title: "Mango" },
];

export default function FlaList() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // horizontal={true} //listeyi yatay hale getirir
        // numColumns={2} // listeyi sütunlara böle

        ListHeaderComponent={<Text style={{ fontSize: 24 }}>Meyve Tabağı</Text>}
        ListFooterComponent={<Text>Footer Area</Text>}
        ListEmptyComponent={<Text>Veri bulunamadı</Text>}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: "#000" }} />
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
        // initialScrollIndex={2}
        getItemLayout={(data, index) => ({
          length: 50,
          offset: 50 * index,
          index,
        })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    borderRadius: 20,
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});
