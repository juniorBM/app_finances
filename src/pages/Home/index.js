import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Actions from '../../components/Actions';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';

const list = [
  {
    id: 1,
    label: 'Boleto conta Luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0
  },
  {
    id: 2,
    label: 'Boleto conta Agua',
    value: '100,00',
    date: '17/09/2022',
    type: 0
  },
  {
    id: 3,
    label: 'Boleto conta Internet',
    value: '300,00',
    date: '17/09/2022',
    type: 0
  },
  {
    id: 4,
    label: 'IPVA Carro',
    value: '1500,90',
    date: '18/12/2022',
    type: 0
  },
  {
    id: 5,
    label: 'IPVA Moto',
    value: '250,90',
    date: '17/10/2022',
    type: 0
  },
  {
    id: 6,
    label: 'Boleto Contabilidade',
    value: '110,00',
    date: '01/10/2022',
    type: 0
  },
  {
    id: 7,
    label: 'Freela PHP',
    value: '3000,00',
    date: '17/09/2022',
    type: 1
  },
  {
    id: 8,
    label: 'Freela Eletricista',
    value: '400,00',
    date: '17/12/2022',
    type: 1
  },

];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Júnior Mendonça" />

      <Balance saldo="9.250.90" gastos="-527,20" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
