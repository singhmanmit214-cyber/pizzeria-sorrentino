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
  { id: 2, name: "San Pellegrino", category: "Drinks", subCategory: "Alkoholfrei", price: 6.50, description: "0.75l Flasche" },
  { id: 3, name: "Pils vom Fass", category: "Drinks", subCategory: "Biers", price: 4.50, description: "0.3l" },
  { id: 4, name: "Peroni", category: "Drinks", subCategory: "Biers", price: 4.80, description: "Italienisches Lager" },
  { id: 5, name: "Primitivo", category: "Drinks", subCategory: "Weins", price: 7.50, description: "Rotwein 0.2l" },
  { id: 6, name: "Aperol Spritz", category: "Drinks", subCategory: "Cocktails", price: 8.50, description: "Prosecco, Aperol, Soda" },
  { id: 7, name: "Cappuccino", category: "Drinks", subCategory: "Hot Drinks", price: 3.80, description: "mit Milchschaum" },

  // --- PIZZA ---
  { id: 101, name: "Pizza Margherita", category: "Pizza", price: 10.50, description: "Tomatensauce, Mozzarella & Oregano" },
  { id: 102, name: "Pizza Salami", category: "Pizza", price: 12.00, description: "mit Rindersalami" },
  { id: 103, name: "Pizza Tonno", category: "Pizza", price: 13.50, description: "mit Thunfisch & Zwiebeln" },
  { id: 104, name: "Pizza Hawaii", category: "Pizza", price: 13.00, description: "Schinken & Ananas" },

  // --- SPECIALS PIZZA ---
  { id: 201, name: "Pizza Amsterdam", category: "Specials Pizzas", price: 17.50, description: "Hähnchenbrust, Broccoli & Sauce Hollandaise" },
  { id: 202, name: "Pizza Chiara", category: "Specials Pizzas", price: 18.50, description: "Scharfe Salami, Auberginen, Büffelmozzarella" },
  { id: 203, name: "Pizza Di Capra", category: "Specials Pizzas", price: 18.00, description: "Ziegenkäse, Honig & Pinienkerne" },

  // --- PASTA ---
  { id: 301, name: "Spaghetti Napoli", category: "Pasta", price: 12.00, description: "Tomatensauce & Basilikum" },
  { id: 302, name: "Spaghetti Bolognese", category: "Pasta", price: 15.50, description: "Rinderhackfleischsauce" },
  { id: 303, name: "Tagliatelle Salmone", category: "Pasta", price: 19.50, description: "Lachsstreifen & Knoblauch" },

  // --- AL FORNO (New Category!) ---
  { id: 401, name: "Hausgemachte Lasagne", category: "Al Forno", price: 16.50, description: "mit Rinderhackfleischsauce & Käse überbacken" },
  { id: 402, name: "Hausgemachte Cannelloni", category: "Al Forno", price: 17.50, description: "Hackfleischfüllung & Sahne, überbacken" },
  { id: 403, name: "Penne al Forno", category: "Al Forno", price: 15.50, description: "mit Bolognese & Sahnesauce" },
  { id: 404, name: "Auflauf Spezial", category: "Al Forno", price: 17.50, description: "Hähnchen, Broccoli, Kartoffeln & Hollandaise" },

  // --- VEGAN SECTIONS ---
  { id: 501, name: "V. Pizza Amsterdam", category: "Vegan Pizza", price: 20.50, description: "Veg. Hähnchen & veg. Hollandaise" },
  { id: 502, name: "V. Pizza Calzone", category: "Vegan Pizza", price: 18.50, description: "Veg. Schinken, Pilze & veg. Thunfisch" },
  { id: 503, name: "V. Spaghetti Bolognese", category: "Vegan Pasta", price: 18.50, description: "mit veganem Hackfleisch" },
  { id: 504, name: "V. Tagliatelle Salmone", category: "Vegan Pasta", price: 20.50, description: "mit veganem Lachs" },

  // --- DESSERTS ---
  { id: 601, name: "Hausgem. Tiramisu", category: "Desserts", price: 8.00, description: "Klassisch" },
  { id: 602, name: "V. Cheesecake", category: "Vegan Desserts", price: 8.50, description: "mit Himbeeren" }
];

export default function App() {
  const [step, setStep] = useState('welcome'); 
  const [table, setTable] = useState(null);
  const [mainCat, setMainCat] = useState('Pizza');
  const [subCat, setSubCat] = useState('Alkoholfrei');
  const [cart, setCart] = useState([]);

  // Updated Category List
  const mainCategories = ['Drinks', 'Pizza', 'Specials Pizzas', 'Pasta', 'Al Forno', 'Vegan Pizza', 'Vegan Pasta', 'Desserts', 'Vegan Desserts'];
  const drinkSubs = ['Alkoholfrei', 'Biers', 'Weins', 'Cocktails', 'Hot Drinks'];

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

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

  if (step === 'table') {
    return (
      <View style={styles.center}>
        <Text style={styles.goldTitle
