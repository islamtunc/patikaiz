// Bismillahir-Rahmanir-Rahim
// Elhamdu lillahi Rabbil 'alamin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
//SubhanAllahi vel hamdu lillahi ve la ilahe illallah ve Allahu Ekber

//Hasbuna Allahu ve ni'mel vekil
// La havle ve la kuvvete illa billahi'l-aliyyi'l-azim
// La ilahe illallah, Muhammedur Resulullah

import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: 'https://firotann.vercel.app' }} style={styles.webview} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});
