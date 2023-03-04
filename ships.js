const ships = [
    {    
        name: "Spacefish",
        description: "Le vaisseau spatial en forme de poisson est une merveille de l'ingénierie spatiale. Avec sa silhouette élégante et fluide, il est conçu pour naviguer facilement dans les profondeurs de l'espace. Le corps principal du vaisseau est fuselé et s'étend en une queue fine et agile. Le vaisseau est équipé d'une propulsion avancée qui utilise une combinaison de réacteurs à plasma et de moteurs ioniques pour se déplacer rapidement dans l'espace. Il dispose également d'un système de navigation sophistiqué qui utilise des capteurs stellaires pour cartographier les étoiles et les planètes environnantes. A l'intérieur, le vaisseau est spacieux et confortable, avec des sièges rembourrés et des panneaux de contrôle ergonomiques. Il dispose de cabines privées pour les membres d'équipage et d'une grande salle de réunion pour les discussions et les briefings.",
        premium_food: false,
        entertainement: false,
        equipment: {
            bathroom: 1,
            bedroom: 2,
            livingroom: 1
        },
        price: 1980,
        capacity: 3
    },
    {    
        name: "Candy",
        description: "\"Voir la vie en rose\" prend tout son sens à bord de Candy. Chaque détail a été soigneusement pensé pour vous offrir une expérience de voyage exceptionnelle. Le salon luxueux est parfait pour se détendre après une journée d'aventures galactiques. La cuisine équipée vous permettra de préparer de délicieux repas pour vous et votre équipage. La chambre douillette est équipée d'un lit confortable pour des nuits paisibles. Et la salle de bain luxueuse vous permettra de vous ressourcer pour continuer votre voyage dans les meilleures conditions. Candy est également équipé de technologies avancées pour garantir votre sécurité et votre confort. Des propulseurs ultra-performants pour des voyages rapides, un système de navigation sophistiqué pour explorer les moindres recoins de l'univers, et une communication de pointe pour rester en contact avec vos proches. En résumé, Candy est bien plus qu'un simple vaisseau, c'est un véritable havre de paix et de luxe dans l'espace. Prête à embarquer pour l'aventure de votre vie ? Venez vivre votre rêve avec nous, et voir la vie en rose à bord de Candy.",
        premium_food: false,
        entertainement: false,
        equipment: {
            bathroom: 2,
            bedroom: 2,
            livingroom: 1
        },
        price: 2536,
        capacity: 4
    },
    {    
        name: "Orion",
        description: "Bienvenue à bord d'Orion, le vaisseau de luxe le plus prestigieux de l'univers ! Avec son design magnifique en or et noir, il est impossible de ne pas être émerveillé par sa beauté. Le nom fait référence à la célèbre constellation d'Orion, synonyme de puissance et de majesté dans le ciel nocturne. À bord d'Orion, le confort est roi. Tout a été conçu pour que votre voyage soit aussi agréable que possible. Le salon spacieux est équipé de sièges en cuir luxueux, tandis que la cuisine équipée de matériaux haut de gamme vous permettra de préparer des repas exquis pour vous et votre équipage. La chambre principale est digne d'un palace, avec un grand lit douillet pour vous reposer après une journée d'aventures. La salle de bain est équipée de tout le nécessaire pour vous dorloter, y compris une baignoire spa. En résumé, Orion est un vaisseau de luxe par excellence, conçu pour les voyageurs les plus exigeants. Détendez-vous, profitez du confort et laissez-vous emporter dans l'univers avec style et élégance.",
        premium_food: false,
        entertainement: false,
        equipment: {
            bathroom: 2,
            bedroom: 3,
            livingroom: 2
        },
        price: 5480,
        capacity: 6
    },
    {    
        name: "Azure",
        description: "Bienvenue à bord de l'Azure, notre vaisseau spatial unique en son genre, en forme de papillon et d'une couleur bleue éclatante ! Le vaisseau a été conçu avec une esthétique aérodynamique semblable à celle d'un papillon. Ce design n'est pas seulement esthétique, mais il offre également une manœuvrabilité supérieure dans l'espace. Malgré son apparence élégante, le vaisseau est également abordable, offrant une option accessible pour les voyageurs spatiaux en quête d'aventure. À bord de l'Azure, le confort est tout aussi important que le style. Bien que le vaisseau soit compact, il est équipé de tout ce dont vous avez besoin pour un voyage confortable et agréable. Le cockpit est équipé d'une console de pilotage facile à utiliser, tandis que la cabine est équipée de sièges confortables pour les passagers. La cuisine compacte est équipée de tout le nécessaire pour préparer des repas simples, tandis que la salle de bain comprend une douche et des toilettes.",
        premium_food: false,
        entertainement: false,
        equipment: {
            bathroom: 1,
            bedroom: 1,
            livingroom: 1
        },
        price: 1260,
        capacity: 2
    },
    {    
        name: "Verdeon",
        description: "Bienvenue à bord du Verdeon, ce nom est un jeu de mots entre \"vert\" en français et \"eon\" qui est une unité de temps astronomique représentant un milliard d'années. Ainsi, le nom \"Verdeon\" évoque l'idée d'un vaisseau spatial qui traverse les étoiles depuis des temps immémoriaux. À bord du Verdeon, le confort est tout aussi important que le style. Le cockpit est équipé d'une console de pilotage facile à utiliser, tandis que la cabine est équipée de sièges confortables pour les passagers. La cuisine compacte est équipée de tout le nécessaire pour préparer des repas simples, tandis que la salle de bain comprend une douche et des toilettes. Le Verdeon est également équipé de technologies avancées pour garantir votre sécurité et votre confort pendant votre voyage. Les propulseurs performants vous permettront de voyager rapidement, tandis que le système de navigation sophistiqué vous guidera à travers les étoiles en toute sécurité.",
        premium_food: false,
        entertainement: false,
        equipment: {
            bathroom: 1,
            bedroom: 2,
            livingroom: 1
        },
        price: 2650,
        capacity: 4 
    },
    {    
        name: "Gardenia",
        description: "Gardenia est un vaisseau spatial de voyage unique et exceptionnel, conçu pour offrir une expérience de voyage inoubliable dans l'espace. Sa coque violette est ornée de magnifiques fleurs et plantes qui donnent l'impression d'une véritable oasis en plein cœur de l'espace.À l'intérieur, Gardenia offre des espaces spacieux et lumineux, décorés avec des plantes et des fleurs qui créent une ambiance de paix et de sérénité. Le vaisseau est équipé des dernières technologies en matière de navigation spatiale, de communication et de sécurité, offrant ainsi une expérience de voyage confortable et sûre.",
        premium_food: false,
        entertainement: false,
        equipment: {
            bathroom: 2,
            bedroom: 2,
            livingroom: 1
        },
        price: 3400,
        capacity: 6
    }
];