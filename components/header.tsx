import { ImageSourcePropType, StyleSheet, View } from "react-native"


export const Header = (image: ImageSourcePropType) => {
    return (
        <View style={s.wrap}>
            <Image/>
        </View>
    )
}

const s = StyleSheet.create({
wrap {
    alingnItems: 'center',
    justifyContent: 'center',
},
img:{
    width: 100,
    height: 145,
}
})