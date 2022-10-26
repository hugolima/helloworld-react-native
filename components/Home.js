import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { changeUserInfo } from "../context/actions";
import { useAppState } from "../context/AppContext";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function HomeScreen({ navigation }) {
  const [, dispatch] = useAppState();

  useEffect(() => {
    dispatch(changeUserInfo({ loaded: true, user: {id: 222887, name: 'Jack Bauer'} }));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Ir Tela de Detalhes" onPress={() => navigation.navigate('Detalhes')}></Button>
    </View>
  );
}