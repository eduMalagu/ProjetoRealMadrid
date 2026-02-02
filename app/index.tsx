import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const s = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "#797878",
  },
  body: {
    padding: 20,
    alignItems: "center",
  },
  body2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: "rgb(230, 230, 230)",
  },
  shirt: {
    width: 200,
    height: 300,
    resizeMode: "contain",
  },
  btn: {
    backgroundColor: "#000000",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default function HomePage() {
  const router = useRouter();

  const visit = () => {
    router.push("/list");
  };

  return (
    <SafeAreaView style={s.wrap}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={s.body}>
          <Text style={s.title}>Real Madrid</Text>
          <Text style={s.price}>Elenco</Text>
        </View>
        <View style={s.body2}>
          <Image
            style={s.shirt}
            source={require("../assets/images/RealMadridD.png")}
          />
        </View>
        <View style={s.body2}>
          <TouchableOpacity style={s.btn} onPress={visit}>
            <Text style={s.btnText}>Olhe o elenco</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
