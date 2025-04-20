import { useRouter } from 'expo-router';
import { Button, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const onPress = () => {
    router.navigate('/(solo-run)')
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title='go to run' onPress={onPress}></Button>
    </View>
  );
}
