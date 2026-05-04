 import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, FlatList, TouchableOpacity, 
  ScrollView, SafeAreaView, StatusBar, Image 
} from 'react-native';

const COLORS = {
  bg: '#0A0A0A',
  gold: '#DAAB2D',
  textMain: '#FFFFF0',
  textDim: '#A5A5A5',
  card: '#1A1A1A'
};

// FULL MENU DATA
const menuData = [
    { id: 1, name: "Coca Cola", category: "Drinks", subCategory: "Alkoholfrei", price: 3.50, description: "0.33l" },
    { id: 2, name: "Peroni", category: "Drinks", subCategory: "Biers", price: 4.80, description: "Italienisches Lager" },
    { id: 3, name: "Pizza Margherita", category: "Pizza", price: 10.50, description: "Tomaten, Mozzarella, Basilikum" },
    { id: 4, name: "Pizza Amsterdam", category: "Specials Pizzas", price: 17.50, description: "Hähnchen, Hollandaise, Broccoli" },
    { id: 5, name: "Spaghetti Bolognese", category: "Pasta", price: 15.50, description: "100% Rinderhackfleisch" },
    { id: 6, name: "Lasagne Hausgemacht", category: "Pasta", price: 16.50, description: "Al Forno Spezialität" },
    { id: 7, name: "V. Pizza Margherita", category: "Vegan Pizza", price: 12.50, description: "Veganer Käse" },
    { id: 8, name: "Tiramisu Classic", category: "Desserts", price: 8.00, description: "Hausgemacht seit 2019" },
];

export default function App() {
  const [step, setStep] = useState('welcome'); // welcome -> table -> menu
  const [selectedTable, setSelectedTable] = useState(null);
  const [mainCat, setMainCat] = useState('Pizza');
  const [subCat, setSubCat] = useState('Alkoholfrei');
  const [cart, setCart] = useState([]);

  const mainCategories = ['Drinks', 'Pizza', 'Pasta', 'Specials Pizzas', 'Desserts', 'Vegan Pizza', 'Vegan Pasta', 'Vegan Desserts'];
  const drinkSubs = ['Alkoholfrei', 'Biers', 'Weins', 'Cocktails', 'Hot Drinks'];

  // 1. WELCOME SCREEN
  if (step === 'welcome') {
    return (
      <TouchableOpacity style={styles.fullCentering} onPress={() => setStep('table')}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.logoLg}>SORRENTINO</Text>
        <Text style={styles.estText}>EST. 2019</Text>
        <Text style={styles.touchStart}>Tippen zum Starten</Text>
      </TouchableOpacity>
    );
  }

  // 2. TABLE SELECTION
  if (step === 'table') {
    return (
      <View style={styles.fullCentering}>
        <Text style={styles.goldTitle}>Welcher Tisch?</Text>
        <View style={styles.grid}>
          {[...Array(15)].map((_, i) => (
            <TouchableOpacity key={i} style={styles.tableBtn} onPress={() => { setSelectedTable(i+1); setStep('menu'); }}>
              <Text style={styles.tableBtnT}>{i+1}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }

  // 3. MAIN MENU
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Mini Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Tisch {selectedTable}</Text>
        <TouchableOpacity onPress={() => setStep('welcome')}>
          <Text style={{color: COLORS.gold}}>Abmelden</Text>
        </TouchableOpacity>
      </View>

      {/* Main Categories (Horizontal) */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catScroll}>
        {mainCategories.map(c => (
          <TouchableOpacity key={c} onPress={() => setMainCat(c)} style={styles.catTab}>
            <Text style={[styles.catText, mainCat === c && styles.activeCatText]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Sub-Categories for Drinks only */}
      {mainCat === 'Drinks' && (
        <View style={styles.subBar}>
          {drinkSubs.map(s => (
            <TouchableOpacity key={s} onPress={() => setSubCat(s)} style={[styles.subTab, subCat === s && styles.activeSubTab]}>
              <Text style={[styles.subTabText, subCat === s && {color: COLORS.gold}]}>{s}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Items List */}
      <FlatList
        data={menuData.filter(i => mainCat === 'Drinks' ? i.category === mainCat && i.subCategory === subCat : i.category === mainCat)}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.itemCard}>
            <View style={{flex: 1}}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDesc}>{item.description}</Text>
              <Text style={styles.itemPrice}>{item.price.toFixed(2)}€</Text>
            </View>
            <TouchableOpacity style={styles.addBtn} onPress={() => setCart([...cart, item])}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullCentering: { flex: 1, backgroundColor: COLORS.bg, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logoLg: { color: COLORS.gold, fontSize: 45, fontWeight: '900', letterSpacing: 6 },
  estText: { color: COLORS.textDim, fontSize: 16, marginTop: 10, letterSpacing: 2 },
  touchStart: { color: COLORS.gold, marginTop: 100, opacity: 0.6, fontSize: 12 },
  goldTitle: { color: COLORS.gold, fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  tableBtn: { width: 65, height: 65, borderRadius: 35, borderWidth: 1, borderColor: COLORS.gold, margin: 10, justifyContent: 'center', alignItems: 'center' },
  tableBtnT: { color: COLORS.gold, fontSize: 20, fontWeight: 'bold' },
  container: { flex: 1, backgroundColor: COLORS.bg },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, borderBottomWidth: 1, borderColor: '#222' },
  headerText: { color: COLORS.gold, fontSize: 18, fontWeight: 'bold' },
  catScroll: { maxHeight: 60, marginVertical: 10 },
  catTab: { paddingHorizontal: 20, justifyContent: 'center' },
  catText: { color: COLORS.textDim, fontSize: 16 },
  activeCatText: { color: COLORS.gold, fontWeight: 'bold', borderBottomWidth: 2, borderColor: COLORS.gold },
  subBar: { flexDirection: 'row', padding: 10, backgroundColor: '#111' },
  subTab: { marginRight: 15, paddingBottom: 5 },
  activeSubTab: { borderBottomWidth: 1, borderColor: COLORS.gold },
  subTabText: { color: COLORS.textDim, fontSize: 13 },
  itemCard: { backgroundColor: COLORS.card, margin: 10, padding: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' },
  itemName: { color: COLORS.gold, fontSize: 17, fontWeight: 'bold' },
  itemDesc: { color: COLORS.textDim, fontSize: 12, marginVertical: 4 },
  itemPrice: { color: COLORS.textMain, fontWeight: 'bold', fontSize: 15 },
  addBtn: { width: 40, height: 40, backgroundColor: COLORS.gold, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }
});
