 const megaMenu = {
    "GETRÄNKE": {
        "ALKOHOLFREI": [
            {id: "D1", name: "S. Pellegrino 0,25l", price: 3.00},
            {id: "D2", name: "S. Pellegrino 0,75l", price: 7.50},
            {id: "D3", name: "Aqua Panna 0,25l", price: 3.00},
            {id: "D4", name: "Aqua Panna 0,75l", price: 7.50},
            {id: "D5", name: "Coca Cola 0,20l", price: 3.00},
            {id: "D6", name: "Coca Cola 0,33l", price: 3.50},
            {id: "D7", name: "Cola Zero 0,20l", price: 3.00},
            {id: "D8", name: "Cola Zero 0,33l", price: 3.50},
            {id: "D9", name: "Fanta 0,20l", price: 3.00},
            {id: "D10", name: "Fanta 0,33l", price: 3.50},
            {id: "D11", name: "Sprite 0,20l", price: 3.00},
            {id: "D12", name: "Sprite 0,33l", price: 3.50},
            {id: "D13", name: "Mezzo Mix 0,20l", price: 3.00},
            {id: "D14", name: "Mezzo Mix 0,33l", price: 3.50},
            {id: "D15", name: "Apfelschorle 0,20l", price: 3.00},
            {id: "D16", name: "Apfelschorle 0,33l", price: 3.50},
            {id: "D17", name: "Orangensaft 0,20l", price: 3.00},
            {id: "D18", name: "Orangensaft 0,33l", price: 3.50},
            {id: "D19", name: "Fassbrause 0,33l", price: 4.00},
            {id: "D20", name: "Vio Zitrone 0,33l", price: 4.00},
            {id: "D21", name: "Vio Rhabarberschorle 0,33l", price: 4.00},
            {id: "D22", name: "Vio Johannisbeerschorle 0,33l", price: 4.00},
            {id: "D23", name: "Vio Apfelschorle 0,33l", price: 4.00},
            {id: "D24", name: "Vio Orangensaft 0,33l", price: 4.00}
        ],
        "APERITIFS": [
            {id: "A1", name: "Prosecco 0,1l", price: 6.00},
            {id: "A2", name: "Aperol Spritz 0,2l", price: 7.50},
            {id: "A3", name: "Martini Blanco 0,1l", price: 6.50},
            {id: "A4", name: "Gin Tonic 0,2l", price: 8.50},
            {id: "A5", name: "Campari Soda 0,2l", price: 6.50},
            {id: "A6", name: "Campari Orange 0,2l", price: 7.50},
            {id: "A7", name: "Limoncello Spritz 0,2l", price: 7.50},
            {id: "A8", name: "Lillet 0,2l", price: 7.50},
            {id: "A9", name: "Mojito 0,2l", price: 9.50}
        ],
        "BIER": [
            {id: "B1", name: "Kölsch 0,2l", price: 3.00},
            {id: "B2", name: "Kölsch 0,3l", price: 3.50},
            {id: "B3", name: "Pils 0,3l", price: 4.00},
            {id: "B4", name: "Jever 0,3l", price: 4.00},
            {id: "B5", name: "Jever Fun (AF) 0,3l", price: 4.00},
            {id: "B6", name: "Weizenbier 0,5l", price: 6.00},
            {id: "B7", name: "Weizenbier (AF) 0,5l", price: 6.00},
            {id: "B8", name: "Malzbier 0,33l", price: 4.00}
        ],
        "VINO BIANCO": [
            {id: "W1", name: "Pinot Grigio 0,2l", price: 6.50},
            {id: "W2", name: "Pinot Grigio 0,5l", price: 14.00},
            {id: "W3", name: "Pinot Grigio 1,0l", price: 26.00}
        ],
        "VINO ROSÉ": [
            {id: "R1", name: "Spineli Rosato 0,2l", price: 6.50},
            {id: "R2", name: "Spineli Rosato 0,5l", price: 14.00},
            {id: "R3", name: "Spineli Rosato 1,0l", price: 26.00}
        ],
        "VINO ROSSO": [
            {id: "RO1", name: "Montepulciano 0,2l", price: 6.50},
            {id: "RO2", name: "Montepulciano 0,5l", price: 14.00},
            {id: "RO3", name: "Montepulciano 1,0l", price: 26.00},
            {id: "RO4", name: "Lambrusco 0,2l", price: 6.50},
            {id: "RO5", name: "Lambrusco 0,5l", price: 14.00},
            {id: "RO6", name: "Lambrusco 1,0l", price: 26.00}
        ],
        "SPIRITUOSEN": [
            {id: "S1", name: "Ramazotti 4cl", price: 6.00},
            {id: "S2", name: "Averna 4cl", price: 6.00},
            {id: "S3", name: "Montenegro 4cl", price: 6.00},
            {id: "S4", name: "Fernet Branca 4cl", price: 6.00},
            {id: "S5", name: "Sambuca 4cl", price: 6.00},
            {id: "S6", name: "Limoncello 4cl", price: 5.00},
            {id: "S7", name: "Vecchia Romanga 4cl", price: 6.00},
            {id: "S8", name: "Red Label 4cl", price: 7.00},
            {id: "S9", name: "Black Label 4cl", price: 8.50},
            {id: "S10", name: "Jack Daniels 4cl", price: 8.00},
            {id: "S11", name: "Wodka 4cl", price: 6.50},
            {id: "S12", name: "Disaronno 4cl", price: 6.00},
            {id: "S13", name: "Tequila 4cl", price: 6.00},
            {id: "S14", name: "Gin 4cl", price: 6.00}
        ],
        "GRAPPA": [
            {id: "G1", name: "Grappa Riserva 2cl", price: 6.00},
            {id: "G2", name: "Sarpa Oro di Poli 2cl", price: 8.00}
        ],
        "HEISSE GETRÄNKE": [
            {id: "H1", name: "Espresso", price: 2.50},
            {id: "H2", name: "Kaffee", price: 3.00},
            {id: "H3", name: "Cappuccino", price: 3.50},
            {id: "H4", name: "Milchkafee", price: 3.50},
            {id: "H5", name: "Latte Macchiato", price: 4.00},
            {id: "H6", name: "Tee", price: 2.00}
        ]
    },
    "ESSEN": {
        "ANTIPASTI": [
            {id: "1", name: "Bruschetta Clasic", price: 8.50},
            {id: "1a", name: "Focaccia", price: 6.50},
            {id: "PB", name: "Pizzabrötchen", price: 5.50},
            {id: "2", name: "Caprese", price: 12.50},
            {id: "3", name: "Carpaccio di Manzo", price: 14.00},
            {id: "4", name: "Carpaccio di Pesce", price: 14.50},
            {id: "5", name: "Antipasto Italiano", price: 24.50},
            {id: "6", name: "Antipasto Vegetale", price: 11.50},
            {id: "7", name: "Ziegenkäse", price: 15.50}
        ],
        "INSALATE": [
            {id: "10", name: "Insalata Mista", price: 9.00},
            {id: "11", name: "Insalata Pomodoro", price: 7.50},
            {id: "12", name: "Insalata Rucola", price: 10.50},
            {id: "13", name: "Insalata Contadina", price: 12.50},
            {id: "14", name: "Insalata Pollo", price: 12.50},
            {id: "15", name: "Insalata Salmone", price: 15.50},
            {id: "16", name: "Insalata Capricciosa", price: 14.50}
        ],
        "PIZZA": [
            {id: "20", name: "Pizza Margherita", price: 10.50},
            {id: "21", name: "Pizza Bufalina", price: 12.00},
            {id: "22", name: "Pizza Primavera", price: 12.00},
            {id: "23", name: "Pizza Salami", price: 12.00},
            {id: "24", name: "Pizza Prosciutto", price: 12.00},
            {id: "25", name: "Pizza Funghi", price: 12.00},
            {id: "26", name: "Pizza Pugliese", price: 14.00},
            {id: "27", name: "Pizza Inferno", price: 13.00},
            {id: "28", name: "Pizza Spinaci", price: 12.00},
            {id: "29", name: "Pizza Prosc. e Funghi", price: 13.50},
            {id: "30", name: "Pizza Tonno", price: 13.50},
            {id: "31", name: "Pizza Hawaii", price: 13.00},
            {id: "32", name: "Pizza Verdura", price: 14.50},
            {id: "33", name: "Pizza 4 Stagioni", price: 14.50},
            {id: "34", name: "Pizza 4 Formaggi", price: 14.50},
            {id: "35", name: "Pizza Carciofi", price: 14.50},
            {id: "36", name: "Pizza Calzone", price: 15.00},
            {id: "37", name: "Pizza Rustica", price: 14.50},
            {id: "38", name: "Pizza Frutti di Mare", price: 14.50},
            {id: "39", name: "Pizza Capri", price: 14.00},
            {id: "40", name: "Pizza Melanzane", price: 15.50},
            {id: "41", name: "Pizza Chef", price: 15.50},
            {id: "42", name: "Pizza Salmone", price: 16.50},
            {id: "43", name: "Pizza Parma", price: 16.50},
            {id: "44", name: "Pizza Salvatore", price: 16.50},
            {id: "45", name: "Pizza Pollo", price: 16.50},
            {id: "46", name: "Pizza Amsterdam", price: 17.50},
            {id: "47", name: "Pizza Chiara", price: 18.50}
        ],
        "SPECIAL PIZZA": [
            {id: "51", name: "Pizza Asparagi", price: 17.50},
            {id: "52", name: "Pizza Gorgonzola", price: 16.50},
            {id: "53", name: "Pizza Salsiccia", price: 17.50},
            {id: "54", name: "Pizza Di Capra", price: 18.00}
        ],
        "PASTA": [
            {id: "61", name: "Spaghetti Napoli", price: 12.00},
            {id: "62", name: "Spaghetti Bolognese", price: 15.50},
            {id: "63", name: "Spaghetti Aglio Olio", price: 12.00},
            {id: "64", name: "Spaghetti Carbonara", price: 16.50},
            {id: "65", name: "Tortellini Panna", price: 15.50},
            {id: "66", name: "Penne Arrabbiata", price: 13.00},
            {id: "67", name: "Penne Amatriciana", price: 16.50},
            {id: "68", name: "Rigatoni Gorgonzola", price: 15.50},
            {id: "69", name: "Rigatoni Norcina", price: 16.50},
            {id: "70", name: "Rigatoni 4 Formaggi", price: 15.50},
            {id: "71", name: "Tagliatelle Salmone", price: 19.50},
            {id: "72", name: "Tagliatelle Scampi", price: 19.50},
            {id: "73", name: "Tagliatelle di Manzo", price: 20.50}
        ],
        "AL FORNO": [
            {id: "100", name: "Lasagne Hausgem.", price: 16.50},
            {id: "101", name: "Tortellini al Forno", price: 16.50},
            {id: "102", name: "Rigatoni al Forno", price: 16.50},
            {id: "103", name: "Cannelloni Hausgem.", price: 17.50},
            {id: "104", name: "Auflauf Spezial", price: 17.50}
        ],
        "FISCH": [
            {id: "120", name: "Salmone Griglia", price: 25.50},
            {id: "121", name: "Salmone Basilico", price: 26.50},
            {id: "F1", name: "Calamari Fritti", price: 20.00},
            {id: "F2", name: "Calamari Griglia", price: 25.50},
            {id: "F3", name: "Pesce Misto", price: 35.50}
        ],
        "SNACKS": [
            {id: "110", name: "Pommes Frites", price: 6.00},
            {id: "111", name: "Chicken Nuggets (6)", price: 8.50},
            {id: "112", name: "Chicken Nuggets (12)", price: 16.00}
        ],
        "SCHNITZEL": [
            {id: "113", name: "Schnitzel Wiener Art", price: 15.50},
            {id: "114", name: "Paprikaschnitzel", price: 18.50},
            {id: "115", name: "Jägerschnitzel", price: 18.50},
            {id: "116", name: "Schnitzel Funghi", price: 18.50},
            {id: "117", name: "Schnitzel Hollandaise", price: 18.50},
            {id: "118", name: "Zwiebelschnitzel", price: 18.50},
            {id: "B1", name: "Rinderfilet Grill", price: 30.50},
            {id: "B2", name: "Rinderfilet Funghi", price: 35.50},
            {id: "B3", name: "Rumpsteak 200g", price: 25.50},
            {id: "B4", name: "Rumpsteak 250g", price: 27.50}
        ],
        "DESSERT": [
            {id: "140", name: "Tiramisu Hausgem.", price: 8.00},
            {id: "141", name: "Tartufo Eis", price: 7.00},
            {id: "142", name: "Cassata", price: 7.00},
            {id: "143", name: "Schoko Souffle", price: 8.50}
        ]
    },
    "VEGAN": {
        "ANTIPASTI": [
            {id: "201", name: "V. Pizzabrötchen", price: 5.50},
            {id: "202", name: "V. Focaccia", price: 6.50},
            {id: "203", name: "V. Bruschetta", price: 8.50},
            {id: "204", name: "V. Antipasto Veg.", price: 11.50},
            {id: "205", name: "V. Ziegenkäse", price: 15.50}
        ],
        "INSALATE": [
            {id: "210", name: "V. Ins. Pomodoro", price: 7.50},
            {id: "211", name: "V. Ins. Mista", price: 9.00},
            {id: "212", name: "V. Ins. Rucola", price
