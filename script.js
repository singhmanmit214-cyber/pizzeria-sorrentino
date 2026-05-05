 const menuData = {
    "Antipasti": [
        { name: "Bruschetta Classic", price: 8.50 }, { name: "Focaccia", price: 6.50 },
        { name: "Pizzabrötchen (8 Stk)", price: 5.50 }, { name: "Caprese", price: 12.50 },
        { name: "Carpaccio di Manzo", price: 14.00 }, { name: "Carpaccio di Pesce", price: 14.50 },
        { name: "Ziegenkäse", price: 15.50 }, { name: "Antipasto Italiano", price: 24.50 },
        { name: "Antipasto Vegetale", price: 11.50 }
    ],
    "Insalate": [
        { name: "Insalata Mista", price: 9.00 }, { name: "Insalata Pomodoro", price: 7.50 },
        { name: "Insalata Rucola", price: 10.50 }, { name: "Insalata Contadina", price: 12.50 },
        { name: "Insalata Pollo", price: 12.50 }, { name: "Insalata Salmone", price: 15.50 },
        { name: "Insalata Capricciosa", price: 14.50 }
    ],
    "Pizza": [
        { name: "Pizza Margherita", price: 10.50 }, { name: "Pizza Bufalina", price: 12.00 },
        { name: "Pizza Primavera", price: 12.00 }, { name: "Pizza Salami", price: 12.00 },
        { name: "Pizza Prosciutto", price: 12.00 }, { name: "Pizza Funghi", price: 12.00 },
        { name: "Pizza Pugliese", price: 14.00 }, { name: "Pizza Inferno", price: 13.00 },
        { name: "Pizza Spinaci", price: 12.00 }, { name: "Pizza Prosc. e Funghi", price: 13.50 },
        { name: "Pizza Tonno", price: 13.50 }, { name: "Pizza Hawaii", price: 13.00 },
        { name: "Pizza Verdura", price: 14.50 }, { name: "Pizza Quattro Stagioni", price: 14.50 },
        { name: "Pizza Quattro Formaggi", price: 14.50 }, { name: "Pizza Carciofi", price: 14.50 },
        { name: "Pizza Rustica", price: 14.50 }, { name: "Pizza Frutti di Mare", price: 14.50 },
        { name: "Pizza Capri", price: 14.00 }, { name: "Pizza Melanzane", price: 15.50 },
        { name: "Pizza Chef", price: 15.50 }, { name: "Pizza Salmone", price: 16.50 },
        { name: "Pizza Parma", price: 16.50 }, { name: "Pizza Salvatore", price: 16.50 },
        { name: "Pizza Pollo", price: 16.50 }, { name: "Pizza Amsterdam", price: 17.50 },
        { name: "Pizza Chiara", price: 18.50 }, { name: "Pizza Calzone", price: 15.00 }
    ],
    "Spezial Pizza": [
        { name: "Pizza Asparagi", price: 17.50 }, { name: "Pizza Gorgonzola", price: 16.50 },
        { name: "Pizza Salsiccia", price: 17.50 }, { name: "Pizza Di Capra", price: 18.00 }
    ],
    "Pasta": [
        { name: "Spaghetti Napoli", price: 12.00 }, { name: "Spaghetti Bolognese", price: 15.50 },
        { name: "Spaghetti Aglio Olio", price: 12.00 }, { name: "Spaghetti Carbonara", price: 16.50 },
        { name: "Tortellini Panne e Prosc.", price: 15.50 }, { name: "Penne Arrabbiata", price: 13.00 },
        { name: "Penne Amatriciana", price: 16.50 }, { name: "Rigatoni Gorgonzola", price: 15.50 },
        { name: "Rigatoni Norcina", price: 16.50 }, { name: "Rigatoni 4 Formaggi", price: 15.50 },
        { name: "Tagliatelle Salmone", price: 19.50 }, { name: "Tagliatelle Scampi", price: 19.50 },
        { name: "Tagliatelle di Manzo", price: 20.50 }
    ],
    "Al Forno": [
        { name: "Hausgemachte Lasagne", price: 16.50 }, { name: "Tortellini al Forno", price: 16.50 },
        { name: "Rigatoni al Forno", price: 16.50 }, { name: "Hausgemachte Cannelloni", price: 17.50 },
        { name: "Auflauf Spezial", price: 17.50 }
    ],
    "Carne & Fisch": [
        { name: "Schnitzel Wiener Art", price: 15.50 }, { name: "Paprikaschnitzel", price: 18.50 },
        { name: "Jägerschnitzel", price: 18.50 }, { name: "Schnitzel Funghi", price: 18.50 },
        { name: "Schnitzel Hollandaise", price: 18.50 }, { name: "Zwiebelschnitzel", price: 18.50 },
        { name: "Arg. Rinderfilet Grill", price: 30.50 }, { name: "Arg. Rumpsteak Grill", price: 25.50 },
        { name: "Salmone Griglia", price: 25.50 }, { name: "Calamari fritti", price: 20.00 },
        { name: "Pesce Misto", price: 35.50 }
    ],
    "Snacks": [
        { name: "Pommes Frites", price: 6.00 }, { name: "Chicken Nuggets (9)", price: 8.50 },
        { name: "Chicken Nuggets (20)", price: 16.00 }
    ],
    "Desserts": [
        { name: "Tiramisu", price: 8.00 }, { name: "Tartufo Eis", price: 7.00 },
        { name: "Cassata", price: 7.00 }, { name: "Schoko Souffle", price: 7.00 }
    ],
    "Vegan Food": {
        "Vegan Pizza": [
            { name: "V. Pizza Primavera", price: 12.00 }, { name: "V. Pizza Margherita", price: 12.50 },
            { name: "V. Pizza Salami", price: 14.50 }, { name: "V. Pizza Funghi", price: 14.00 },
            { name: "V. Pizza Calzone", price: 18.50 }, { name: "V. Pizza Amsterdam", price: 20.50 }
        ],
        "Vegan Pasta": [
            { name: "V. Spaghetti Napoli", price: 13.50 }, { name: "V. Penne Arrabbiata", price: 14.50 },
            { name: "V. Spaghetti Bolognese", price: 18.50 }, { name: "V. Tagliatelle Salmone", price: 20.50 }
        ],
        "Vegan Al Forno": [
            { name: "V. Rigatoni al Forno", price: 18.50 }, { name: "V. Lasagne", price: 19.50 },
            { name: "V. Auflauf Spezial", price: 20.50 }
        ],
        "Vegan Fisch/Meat": [
            { name: "V. Salmone Griglia", price: 26.50 }, { name: "V. Schnitzel Wiener Art", price: 17.00 },
            { name: "V. Zwiebelschnitzel", price: 19.50 }
        ],
        "Vegan Snacks": [
            { name: "V. Nuggets (9)", price: 10.50 }, { name: "V. Nuggets (20)", price: 19.00 }
        ],
        "Vegan Desserts": [
            { name: "V. Cheesecake", price: 8.50 }, { name: "V. Tiramisu", price: 8.50 }
        ]
    }
};
