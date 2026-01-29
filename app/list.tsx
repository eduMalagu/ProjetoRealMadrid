import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const jogadores = [
  {
    nome: "Courtois",
    posicao: "Goleiro",
    imagem: require("../assets/images/CourtoisReal.png"),
  },
  {
    nome: "Asencio",
    posicao: "Defensor",
    imagem: require("../assets/images/AsencioReal.png"),
  },
  {
    nome: "Carreras",
    posicao: "Defensor",
    imagem: require("../assets/images/CarrerasReal.png"),
  },
  {
    nome: "Valverde",
    posicao: "Meia",
    imagem: require("../assets/images/ValverdeReal.png"),
  },
  {
    nome: "Camavinga",
    posicao: "Meia",
    imagem: require("../assets/images/CamavingaReal.png"),
  },
  {
    nome: "Bellingham",
    posicao: "Meia",
    imagem: require("../assets/images/BellinghamReal.png"),
  },
  {
    nome: "Mbappé",
    posicao: "Atacante",
    imagem: require("../assets/images/mbappeReal.png"),
  },
  {
    nome: "Vinícius",
    posicao: "Atacante",
    imagem: require("../assets/images/viniciusReal.png"),
  },
  {
    nome: "Güler",
    posicao: "Atacante",
    imagem: require("../assets/images/GülerReal.png"),
  },
  {
    nome: "Huijsen",
    posicao: "Defensor",
    imagem: require("../assets/images/HuijsenReal.png"),
  },
  {
    nome: "Mastantuono",
    posicao: "Meia",
    imagem: require("../assets/images/mastantuonoReal.png"),
  },
  {
    nome: "Rodrygo",
    posicao: "Atacante",
    imagem: require("../assets/images/RodrygoReal.png"),
  },
  {
    nome: "Antonio Rüdiger",
    posicao: "Defensor",
    imagem: require("../assets/images/RudigerReal.png"),
  },
  {
    nome: "Brahim Díaz",
    posicao: "Meia",
    imagem: require("../assets/images/BrahimReal.png"),
  },
  {
    nome: "Trent Alexander-Arnold",
    posicao: "Defensor/Meia",
    imagem: require("../assets/images/ArnoldReal.png"),
  },
];

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    backgroundColor: "#002147",
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#ccc",
  },
  listContainer: {
    padding: 15,
  },
  jogadorCard: {
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    marginBottom: 15,
    overflow: "hidden",
    flexDirection: "row",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  imgWrapper: {
    width: 100,
    height: 120,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  jogadorImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  infoWrapper: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  jogadorNome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#002147",
    marginBottom: 8,
  },
  posicao: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
});

export default function ListPage() {
  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <Text style={s.headerText}>Elenco Real Madrid</Text>
        <Text style={s.subtitle}>Últimas contratações 2024/2025</Text>
      </View>
      <ScrollView style={s.listContainer}>
        {jogadores.map((jogador, index) => (
          <View key={index} style={s.jogadorCard}>
            <View style={s.imgWrapper}>
              <Image source={jogador.imagem} style={s.jogadorImg} />
            </View>
            <View style={s.infoWrapper}>
              <Text style={s.jogadorNome}>{jogador.nome}</Text>
              <Text style={s.posicao}>{jogador.posicao}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
