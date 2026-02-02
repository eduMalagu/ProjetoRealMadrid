import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Reserva from "../components/item2";

// Reservas
const reservas = [
  {
    nome: "Fran García",
    posicao: "Defensor",
    imagem: require("../assets/images/FranReal.png"),
  },
  {
    nome: "Mendy",
    posicao: "Defensor",
    imagem: require("../assets/images/MendyReal.png"),
  },
  {
    nome: "Tchouaméni",
    posicao: "Meia",
    imagem: require("../assets/images/TchoumeniReal.png"),
  },
  {
    nome: "Álvaro Leiva",
    posicao: "Meia",
    imagem: require("../assets/images/AlvaroReal.png"),
  },
  {
    nome: "Carvajal",
    posicao: "Atacante",
    imagem: require("../assets/images/CarvajalReal.png"),
  },
  {
    nome: "Lunin",
    posicao: "Defensor",
    imagem: require("../assets/images/LuninReal.png"),
  },
];

export default function List2Page() {
  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <Text style={s.headerText}>Reservas Real Madrid</Text>
        <Text style={s.subtitle}>Jogadores no banco / elenco estendido</Text>
      </View>
      <ScrollView style={s.listContainer}>
        {reservas.map((r, i) => (
          <Reserva key={i} jogador={r} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { padding: 20, backgroundColor: "#002147", alignItems: "center" },
  headerText: { fontSize: 22, fontWeight: "700", color: "#fff" },
  subtitle: { fontSize: 13, color: "#ccc", marginTop: 4 },
  listContainer: { padding: 15 },
});
