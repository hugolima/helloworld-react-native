import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getMovies } from "../commons/api";
import { useAppState } from "../context/AppContext";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
  },
  userText: {
    marginTop: 50,
    marginBottom: 50,
  },
  headText: {
    marginBottom: 40,
  }
});

export function DetailsScreen() {
  const [{ userInfo }] = useAppState();
  const [isLoading, setLoading] = useState(true);
  const [movieObj, setMovieObj] = useState(null);

  useEffect(() => {
    getMovies()
      .then(movieObj => {
        setMovieObj(movieObj);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <SafeAreaView style={{flex: 1}}>
          <Text style={styles.headText}>{userInfo.user.id} - {userInfo.user.name}</Text>
          <Text style={styles.headText}>Movies details Screen</Text>
          <FlatList data={movieObj.movies} keyExtractor={({ id }, index) => id}
            renderItem={
              ({item}) => (<Text>{item.title}, {item.releaseYear}</Text>)
            }
          />
        </SafeAreaView>
      )}
    </View>
  )
}
