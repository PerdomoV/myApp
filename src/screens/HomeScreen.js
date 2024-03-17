import { SafeAreaView, Text, Button } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings");
  }

  return (
    <SafeAreaView>
      <Text>Estamos en Home Screen</Text>
      <Button onPress={goToSettings} title="Ir a Ajustes" />
    </SafeAreaView>
  );
}