 const megaMenu = {
    "FOOD": {
        "Antipasti": [
            {name:"Bruschetta Classic",price:8.50},{name:"Focaccia",price:6.50},{name:"Pizzabrötchen (8 Stk)",price:5.50},{name:"Caprese",price:12.50},{name:"Carpaccio di Manzo",price:14.00},{name:"Carpaccio di Pesce",price:14.50},{name:"Ziegenkäse",price:15.50},{name:"Antipasto Italiano",price:24.50},{name:"Antipasto Vegetale",price:11.50}
        ],
        "Salate": [
            {name:"Insalata Mista",price:9.00},{name:"Insalata Pomodoro",price:7.50},{name:"Insalata Rucola",price:10.50},{name:"Insalata Contadina",price:12.50},{name:"Insalata Pollo",price:12.50},{name:"Insalata Salmone",price:15.50},{name:"Insalata Capricciosa",price:14.50}
        ],
        "Pizza": [
            {name:"Pizza Margherita",price:10.50},{name:"Pizza Bufalina",price:12.00},{name:"Pizza Primavera",price:12.00},{name:"Pizza Salami",price:12.00},{name:"Pizza Prosciutto",price:12.00},{name:"Pizza Funghi",price:12.00},{name:"Pizza Pugliese",price:14.00},{name:"Pizza Inferno",price:13.00},{name:"Pizza Spinaci",price:12.00},{name:"Pizza Prosc. e Funghi",price:13.50},{name:"Pizza Tonno",price:13.50},{name:"Pizza Hawaii",price:13.00},{name:"Pizza Verdura",price:14.50},{name:"Pizza Quattro Stagioni",price:14.50},{name:"Pizza Quattro Formaggi",price:14.50},{name:"Pizza Carciofi",price:14.50},{name:"Pizza Rustica",price:14.50},{name:"Pizza Frutti di Mare",price:14.50},{name:"Pizza Capri",price:14.00},{name:"Pizza Melanzane",price:15.50},{name:"Pizza Chef",price:15.50},{name:"Pizza Salmone",price:16.50},{name:"Pizza Parma",price:16.50},{name:"Pizza Salvatore",price:16.50},{name:"Pizza Pollo",price:16.50},{name:"Pizza Amsterdam",price:17.50},{name:"Pizza Chiara",price:18.50},{name:"Pizza Calzone",price:15.00}
        ],
        "Spezial Pizza": [
            {name:"Pizza Asparagi",price:17.50},{name:"Pizza Gorgonzola",price:16.50},{name:"Pizza Salsiccia",price:17.50},{name:"Pizza Di Capra",price:18.00}
        ],
        "Pasta": [
            {name:"Spaghetti Napoli",price:12.00},{name:"Spaghetti Bolognese",price:15.50},{name:"Spaghetti Aglio Olio",price:12.00},{name:"Spaghetti Carbonara",price:16.50},{name:"Tortellini Panna Prosc.",price:15.50},{name:"Penne Arrabbiata",price:13.00},{name:"Penne Amatriciana",price:16.50},{name:"Rigatoni Gorgonzola",price:15.50},{name:"Rigatoni Norcina",price:16.50},{name:"Rigatoni 4 Formaggi",price:15.50},{name:"Tagliatelle Salmone",price:19.50},{name:"Tagliatelle Scampi",price:19.50},{name:"Tagliatelle di Manzo",price:20.50}
        ],
        "Al Forno": [
            {name:"Lasagne Hausgem.",price:16.50},{name:"Tortellini al Forno",price:16.50},{name:"Rigatoni al Forno",price:16.50},{name:"Cannelloni Hausgem.",price:17.50},{name:"Auflauf Spezial",price:17.50}
        ],
        "Snacks": [
            {name:"Pommes Frites",price:6.00},{name:"Chicken Nuggets (9 Stk)",price:8.50},{name:"Chicken Nuggets (20 Stk)",price:16.00}
        ],
        "Fisch": [
            {name:"Salmone Griglia",price:25.50},{name:"Salmone Basilico",price:26.50},{name:"Calamari Fritti",price:20.00},{name:"Calamari Griglia",price:25.50},{name:"Pesce Misto",price:35.50}
        ],
        "Carne": [
            {name:"Schnitzel Wiener Art",price:15.50},{name:"Paprikaschnitzel",price:18.50},{name:"Jägerschnitzel",price:18.50},{name:"Schnitzel Funghi",price:18.50},{name:"Schnitzel Hollandaise",price:18.50},{name:"Zwiebelschnitzel",price:18.50},{name:"Rinderfilet Grill",price:30.50},{name:"Rumpsteak Grill",price:25.50}
        ]
    },
    "VEGAN": {
        "V-Salate": [
            {name:"V. Insalata Mista",price:10.50},{name:"V. Insalata Pomodoro",price:8.50},{name:"V. Insalata Rucola",price:12.50},{name:"V. Insalata Contadina",price:15.50},{name:"V. Insalata Pollo",price:15.50},{name:"V. Insalata Salmone",price:16.50},{name:"V. Insalata Capricciosa",price:17.50}
        ],
        "V-Pizza": [
            {name:"V. Pizza Primavera",price:12.00},{name:"V. Pizza Margherita",price:12.50},{name:"V. Pizza Salami",price:14.50},{name:"V. Pizza Prosciutto",price:14.50},{name:"V. Pizza Funghi",price:14.00},{name:"V. Pizza Verdura",price:16.50},{name:"V. Pizza Amsterdam",price:20.50}
        ],
        "V-Pasta": [
            {name:"V. Spaghetti Napoli",price:13.50},{name:"V. Spaghetti Bolognese",price:18.50},{name:"V. Penne Arrabbiata",price:14.50},{name:"V. Tagliatelle Salmone",price:20.50}
        ],
        "V-Schnitzel": [
            {name:"V. Schnitzel Wiener Art",price:17.00},{name:"V. Jägerschnitzel",price:19.50},{name:"V. Schnitzel Funghi",price:19.50},{name:"V. Zwiebelschnitzel",price:19.50}
        ]
    },
    "DRINKS": {
        "Alkoholfrei": [
            {name:"S. Pellegrino 0.25l",price:3.00},{name:"S. Pellegrino 0.75l",price:7.50},{name:"Coca Cola 0.2l",price:3.00},{name:"Coca Cola 0.33l",price:3.50},{name:"Cola Zero 0.33l",price:3.50},{name:"Fanta 0.33l",price:3.50},{name:"Sprite 0.33l",price:3.50},{name:"Gaffels Fassbrause",price:4.00},{name:"VIO Apfelschorle",price:4.00},{name:"VIO Rhabarberschorle",price:4.00},{name:"VIO Johannisbeerschorle",price:4.00}
        ],
        "Bier": [
            {name:"Kölsch 0.2l",price:3.00},{name:"Kölsch 0.3l",price:3.50},{name:"Bitburger Pils",price:4.00},{name:"Jever",price:4.00},{name:"Weizenbier 0.5l",price:6.00},{name:"Radler",price:3.50}
        ],
        "Wein": [
            {name:"Pinot Grigio 0.25l",price:6.50},{name:"Rosato 0.25l",price:6.50},{name:"Montepulciano 0.25l",price:6.50},{name:"Primitivo 0.25l",price:7.50}
        ],
        "Spirituosen": [
            {name:"Ramazzotti",price:6.00},{name:"Averna",price:6.00},{name:"Grappa Haus",price:5.00},{name:"Grappa Riserva",price:8.50},{name:"Sambuca",price:6.00},{name:"Jack Daniels",price:8.00}
        ]
    }
};
