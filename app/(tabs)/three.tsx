import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useAuth } from '../context/auth';
import ViewFavoriteNumber from '../../components/ShowFavoriteNumber';

export default function TabThreeScreen() {
  const { signOut, user } = useAuth();
  return (
    <View style={styles.container}>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ViewFavoriteNumber />
      <View style={styles.container}>
        <Text style={{fontSize:20, color:'blue', fontWeight:'bold' , textAlign: 'center',}} onPress={() => signOut()} >Sign Out - {user}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
