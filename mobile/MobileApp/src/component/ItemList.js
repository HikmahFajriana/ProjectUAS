import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://192.168.1.9:3000'); // Ganti dengan IP yang benar
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Judul Berita: {item.judul_berita}</Text>
      <Text style={styles.itemText}>Nama Kategori: {item.nama_kategori}</Text>
      <Text style={styles.itemText}>Ringkasan: {item.ringkasan}</Text>
      <Text style={styles.itemText}>Keywords: {item.keywords}</Text>
    </View>
  );


    return (
      <View style={styles.container}>
        <Text style={styles.title}>News List</Text>
        <FlatList
          data={items}
          renderItem={renderItem}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ItemList;