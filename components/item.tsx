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

export default function Item({ jogador }: Props) {
  return (
    <View style={styles.jogadorCard}>
      <View style={styles.imgWrapper}>
        <Image source={jogador.imagem} style={styles.jogadorImg} />
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.jogadorNome}>{jogador.nome}</Text>
        <Text style={styles.posicao}>{jogador.posicao}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
