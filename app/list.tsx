import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "../components/item";
// Jogadores
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
// Estilo da pagina
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
  footerBtn: {
    marginTop: 12,
    backgroundColor: "#002147",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: "center",
  },
  footerBtnText: {
    color: "#fff",
    fontWeight: "600",
  },
});
// Campo da pagina
export default function ListPage() {
  const router = useRouter();
  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <Text style={s.headerText}>Elenco Real Madrid</Text>
        <Text style={s.subtitle}>Últimas contratações 2024/2025</Text>
      </View>
      <ScrollView style={s.listContainer}>
        {jogadores.map((jogador, index) => (
          <Item key={index} jogador={jogador} />
        ))}

        <TouchableOpacity
          style={s.footerBtn}
          onPress={() => router.push("/list2")}
        >
          <Text style={s.footerBtnText}>Ver reservas</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
