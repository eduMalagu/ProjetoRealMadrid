import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Jogador {
  nome: string;
  posicao: string;
  imagem: any;
}

interface Props {
  jogador: Jogador;
}

export default function Reserva({ jogador }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.imgWrapper}>
        <Image source={jogador.imagem} style={styles.img} />
      </View>
      <View style={styles.info}>
        <Text style={styles.nome}>{jogador.nome}</Text>
        <Text style={styles.posicao}>{jogador.posicao}</Text>
        <Text style={styles.tag}>Reserva</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginBottom: 12,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  imgWrapper: {
    width: 80,
    height: 96,
    backgroundColor: "#e9e9e9",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  info: {
    flex: 1,
    padding: 12,
  },
  nome: {
    fontSize: 16,
    fontWeight: "700",
    color: "#002147",
  },
  posicao: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
  },
  tag: {
    marginTop: 6,
    fontSize: 12,
    color: "#999",
    fontStyle: "italic",
  },
});
