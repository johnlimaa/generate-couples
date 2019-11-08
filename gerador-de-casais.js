let couplesQuantity = 30;
let homosexualCouple = true;

function generateAge(age) {
    let lowerAge = 18, higherAge = 85;

    if (typeof age === 'number') {
        lowerAge = age - 10 < 18 ? lowerAge : age - 10;
        higherAge = age + 10 > 90 ? higherAge : age + 10;

        return Math.floor(Math.random() * (higherAge - lowerAge)) + lowerAge;
    } else if (typeof age === 'undefined') {
        return Math.floor(Math.random() * (higherAge - 18)) + 18;
    };
};

function generateNames(firstName, lastName) {
    let name = [], quantityOfLastNames = Math.floor(Math.random() * 3) + 1;

    name.push(firstName[Math.floor(Math.random() * firstName.length)]);

    for (let i = 0; i < quantityOfLastNames; i++) {
        name.push(lastName[Math.floor(Math.random() * lastName.length)]);
    };

    return name.join(' ');
};

function generateCouples(couples, homosexual) {
    let maleNames = ["Bernardo", "Matheus", "Davi", "Heitor", "Henrique", "Bruno", "Samuel", "Felipe", "Lorenzo", "Benjamim", "Vinícius", "Eduardo", "Noah", "Antônio", "Diego", "Leonardo", "Nicolas", "Daniel", "Thiago", "José", "Alexandre", "Gael", "André", "Vitor", "Mateus", "Carlos", "Caleb", "Paulo", "Theo", "Caio", "Joaquim", "Marcos", "Bryan", "Pietro", "Tiago", "Victor", "Francisco", "Yuri", "Fernando", "Ruan"],
        femaleNames = ["Helena", "Isabela", "Lara", "Camila", "Letícia", "Valentina", "Luana", "Amanda", "Yasmin", "Sophia", "Juliana", "Bruna", "Cecília", "Fernanda", "Isadora", "Lorena", "Lívia", "Manuela", "Vitória", "Sara", "Aline", "Luiza", "Luna", "Gabriela", "Giovanna", "Jéssica", "Bianca", "Melissa", "Carolina", "Ester", "Regina", "Vanessa", "Heloísa", "Rafaela", "Nicole", "Milena", "Isabella", "Laís", "Ana Clara", "Eloá"],
        lastNames = ["Abravanel", "Albuquerque", "Alencar", "Almada", "Álvares", "Alves", "Amoreira", "Andrade", "Annenberg", "Antena", "Barroso", "Bastos", "Beltrão", "Bentes", "Bernardes", "Bernardi", "Bial", "Bittencourt", "Bittencourt", "Boaventura", "Bonfim", "Carreira", "Carvalheira", "Carvalho", "Coutinho", "Crespo", "D’Ávila", "da Costa", "da Cruz", "da Cunha", "da Fonseca", "da Fontoura", "da Fronteira", "da Gama", "da Luz", "da Madureira", "da Maia", "da Rosa", "da Silva", "da Silveira", "da Veiga", "Dantas", "Dantas", "das Neves", "de Assunção", "de Borba", "de Lara", "de Lins", "de Oliveira", "de Quadros", "de Sá", "Dias", "Diegues", "do Prado", "Henriques", "Hermingues", "Hernandes", "Laranjeira", "Louzada", "Macieira", "Madeira", "Maldonado", "Mangueira", "Marcondes", "Marinho", "Marins", "Ribeira", "Rodrigues", "Sales", "Soares", "Soeira", "Solimões", "Steves", "Tavares", "Teixeira", "Teles", "Torres", "Trindade", "Vargas", "Vasconcelos", "Vasques"];

    let couplesList = [], firstAge, secondAge;

    for (let i = 0; i < couples; i++) {
        firstAge = generateAge();
        secondAge = generateAge(firstAge);

        if (homosexual) {
            if (Math.floor(Math.random() * 2) ? true : false) {
                couplesList.push({
                    firstPerson: generateNames(maleNames, lastNames),
                    secondPerson: generateNames(femaleNames, lastNames),
                    ageFirstPerson: firstAge,
                    ageSecondPerson: secondAge
                });
            } else {
                if (Math.floor(Math.random() * 2) ? true : false) {
                    couplesList.push({
                        firstPerson: generateNames(maleNames, lastNames),
                        secondPerson: generateNames(maleNames, lastNames),
                        ageFirstPerson: firstAge,
                        ageSecondPerson: secondAge
                    });
                } else {
                    couplesList.push({
                        firstPerson: generateNames(femaleNames, lastNames),
                        secondPerson: generateNames(femaleNames, lastNames),
                        ageFirstPerson: firstAge,
                        ageSecondPerson: secondAge
                    });
                }
            }
        } else {
            couplesList.push({
                firstPerson: generateNames(maleNames, lastNames),
                secondPerson: generateNames(femaleNames, lastNames),
                ageFirstPerson: firstAge,
                ageSecondPerson: secondAge
            });
        };        
    };
    
    return couplesList;
};

console.log(generateCouples(couplesQuantity, homosexualCouple));