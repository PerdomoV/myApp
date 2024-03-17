import { SafeAreaView, Text, Button } from "react-native";

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToHome = () => {
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView>
      <Text>Estamos en Settings Screen</Text>
      <Button onPress={goToHome} title="Ir al Home" />
    </SafeAreaView>
  );
}