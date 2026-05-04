 import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, FlatList, TouchableOpacity, 
  ScrollView, SafeAreaView, StatusBar, Alert
} from 'react-native';

const COLORS = {
  bg: '#0A0A0A',
  gold: '#DAAB2D',
  textMain: '#FFFFF0',
  textDim: '#A5A5A5',
  card: '#1A1A1A'
};

const menuData = [
  // --- DRINKS ---
  { id: 1, name: "Coca Cola", category: "Drinks", subCategory: "Alkoholfrei", price: 3.50, description: "0.33l Glas" },
  { id: 2, name: "Apfelsaftschorle", category: "Drinks", subCategory: "Alkoholfrei", price: 3.80, description: "Naturtrüb" },
  { id: 3, name: "Pils vom Fass", category: "Drinks", subCategory: "Biers", price: 4.50, description: "0.3l Frisch gezapft" },
  { id: 4, name: "Hefeweizen", category: "Drinks", subCategory: "Biers", price: 5.20, description: "0.5l Flasche" },
  { id: 5, name: "Primitivo", category: "Drinks", subCategory: "Weins", price: 7.50, description: "Rotwein 0.2l" },
  { id: 6, name: "Aperol Spritz", category: "Drinks", subCategory: "Cocktails", price: 8.50, description: "Der Klassiker" },
  { id: 7, name: "Espresso", category: "Drinks", subCategory: "Hot Drinks", price: 2.50, description: "Premium Roast" },

  // --- PIZZA ---
  { id: 10, name: "Pizza Margherita", category: "Pizza", price: 10.50, description: "Tomaten, Mozzarella, Basilikum" },
  { id: 11, name: "Pizza Salami", category: "Pizza", price: 12.00, description: "Rindersalami" },
  { id: 12, name: "Pizza Prosciutto", category: "Pizza", price: 12.00, description: "Edelschinken" },
  { id: 13, name: "Pizza Tonno", category: "Pizza", price: 13.50, description: "Thunfisch & Zwiebeln" },

  // --- SPECIALS PIZZAS ---
  { id: 20, name: "Pizza Amsterdam", category: "Specials Pizzas", price: 17.50, description: "Hähnchen, Hollandaise, Broccoli" },
  { id: 21, name: "Pizza Chiara", category: "Specials Pizzas", price: 18.50, description: "Scharfe Salami, Auberginen, Büffelmozzarella" },
  { id: 22, name: "Pizza Parma", category: "Specials Pizzas", price: 16.50, description: "Parmschinken, Rucola, Parmesan" },

  // --- PASTA ---
  { id: 30, name: "Spaghetti Bolognese", category: "Pasta", price: 15.50, description: "100% Rinderhackfleisch" },
  { id: 31, name: "Spaghetti Carbonara", category: "Pasta", price: 16.50, description: "Guanciale Speck, Ei, Parmesan" },
  { id: 32, name: "Lasagne Hausgemacht", category: "Pasta", price: 16.50, description: "Frisch aus dem Ofen (Al Forno)" },

  // --- VEGAN SECTIONS ---
  { id: 40, name: "V. Pizza Margherita", category: "Vegan Pizza", price: 12.50, description: "Mit veganem Käse" },
  { id: 41, name: "V. Pizza Amsterdam", category: "Vegan Pizza", price: 20.50, description: "Veg. Hähnchen, veg. Hollandaise" },
  { id: 42, name: "V. Spaghetti Bolognese", category: "Vegan Pasta", price: 18.50, description: "Hausgemachtes veganes Hack" },
  { id: 43, name: "V. Tiramisu", category: "Vegan Desserts", price: 8.50, description: "100% Vegan" },

  // --- DESSERTS ---
  { id: 50, name: "Tiramisu Classic", category: "Desserts", price: 8.00, description: "Hausgemacht" },
  { id: 51, name: "Schoko Souffle", category: "Desserts", price: 7.00, description: "Flüssiger Kern" }
];

export default function App() {
  const [step, setStep] = useState('welcome'); 
  const [table, setTable] = useState(null);
  const [mainCat, setMainCat] = useState('Pizza');
  const [subCat, setSubCat] = useState('Alkoholfrei');
  const [cart, setCart] = useState([]);

  const mainCategories = ['Drinks', 'Pizza', 'Pasta', 'Specials Pizzas', 'Desserts', 'Vegan Pizza', 'Vegan Pasta', 'Vegan Desserts'];
  const drinkSubs = ['Alkoholfrei', 'Biers', 'Weins', 'Cocktails', 'Hot Drinks'];

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  // SCREEN 1: WELCOME
  if (step === 'welcome') {
    return (
      <TouchableOpacity style={styles.center} onPress={() => setStep('table')}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.logoMain}>SORRENTINO</Text>
        <Text style={styles.estText}>EST. 2019</Text>
        <Text style={styles.startHint}>Tippen zum Starten</Text>
      </TouchableOpacity>
    );
  }

  // SCREEN 2: TABLE
  if (step === 'table') {
    return (
      <View style={styles.center}>
        <Text style={styles.goldTitle}>Wählen Sie Ihren Tisch</Text>
        <View style={styles.grid}>
          {[...Array(12)].map((_, i) => (
            <TouchableOpacity key={i} style={styles.tBtn} onPress={() => { setTable(i+1); setStep('menu'); }}>
              <Text style={styles.tBtnT}>{i+1}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }

  // SCREEN 3: MENU
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <View>
          <Text style={styles.hTisch}>Tisch {table}</Text>
          <Text style={styles.hTotal}>{totalPrice}€</Text>
        </View>
        <TouchableOpacity style={styles.orderBtn} onPress={() => Alert.alert("Bestellung", "Vielen Dank für Ihre Bestellung!")}>
          <Text style={styles.orderBtnT}>BESTELLEN ({cart.length})</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catBar}>
        {mainCategories.map(c => (
          <TouchableOpacity key={c} onPress={() => setMainCat(c)} style={styles.catItem}>
            <Text style={[styles.catText, mainCat === c && styles.catActive]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {mainCat === 'Drinks' && (
        <View style={styles.subBar}>
          {drinkSubs.map(s => (
            <TouchableOpacity key={s} onPress={() => setSubCat(s)} style={styles.subItem}>
              <Text style={[styles.subText, subCat === s && {color: COLORS.gold}]}>{s}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <FlatList
        data={menuData.filter(i => mainCat === 'Drinks' ? i.category === mainCat && i.subCategory === subCat : i.category === mainCat)}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={{flex: 1}}>
              <Text style={styles.iName}>{item.name}</Text>
              <Text style={styles.iDesc}>{item.description}</Text>
              <Text style={styles.iPrice}>{item.price.toFixed(2)}€</Text>
            </View>
            <TouchableOpacity style={styles.addBtn} onPress={() => setCart([...cart, item])}>
              <Text style={styles.addSign}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, backgroundColor: COLORS.bg, justifyContent: 'center', alignItems: 'center' },
  logoMain: { color: COLORS.gold, fontSize: 40, fontWeight: '900', letterSpacing: 5 },
  estText: { color: COLORS.textDim, fontSize: 14, letterSpacing: 2, marginTop: 5 },
  startHint: { color: COLORS.gold, marginTop: 50, opacity: 0.5 },
  goldTitle: { color: COLORS.gold, fontSize: 20, marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  tBtn: { width: 60, height: 60, borderRadius: 30, borderWidth: 1, borderColor: COLORS.gold, margin: 10, justifyContent: 'center', alignItems: 'center' },
  tBtnT: { color: COLORS.gold, fontSize: 18 },
  container: { flex: 1, backgroundColor: COLORS.bg },
  header: { padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: '#222' },
  hTisch: { color: COLORS.textDim, fontSize: 12 },
  hTotal: { color: COLORS.gold, fontSize: 24, fontWeight: 'bold' },
  orderBtn: { backgroundColor: COLORS.gold, padding: 12, borderRadius: 20 },
  orderBtnT: { fontWeight: 'bold', color: COLORS.bg },
  catBar: { maxHeight: 50, marginVertical: 10 },
  catItem: { paddingHorizontal: 20 },
  catText: { color: COLORS.textDim, fontSize: 16 },
  catActive: { color: COLORS.gold, fontWeight: 'bold' },
  subBar: { flexDirection: 'row', padding: 10, backgroundColor: '#111' },
  subItem: { marginRight: 15 },
  subText: { color: COLORS.textDim, fontSize: 12 },
  card: { backgroundColor: COLORS.card, marginHorizontal: 15, marginVertical: 8, padding: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' },
  iName: { color: COLORS.gold, fontSize: 16, fontWeight: 'bold' },
  iDesc: { color: COLORS.textDim, fontSize: 12, marginTop: 3 },
  iPrice: { color: COLORS.textMain, marginTop: 5, fontWeight: '600' },
  addBtn: { width: 38, height: 38, backgroundColor: COLORS.gold, borderRadius: 19, justifyContent: 'center', alignItems: 'center' },
  addSign: { fontSize: 22, fontWeight: 'bold' }
});
