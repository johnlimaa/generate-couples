let couplesQuantity = 30;
let homosexualCouple = true;

function generateAge() {
    
};

function generateNames(firstName, lastName) {
    let name = [], quantityOfLastNames = Math.floor(Math.random() * 3) + 1;

    name.push(firstName[Math.floor(Math.random() * firstName.length)]);

    for(let i = 0; i < quantityOfLastNames; i++) {
        name.push(lastName[Math.floor(Math.random() * lastName.length)]);
    };        

    return name.join(' ');
};

function generateCouples(couples, homosexual) {
    let maleNames = ["Bernardo", "Matheus", "Davi", "Heitor", "Henrique", "Bruno", "Samuel", "Felipe", "Lorenzo", "Benjamim", "Vinícius", "Eduardo", "Noah", "Antônio", "Diego", "Leonardo", "Nicolas", "Daniel", "Thiago", "José", "Alexandre", "Gael", "André", "Vitor", "Mateus", "Carlos", "Caleb", "Paulo", "Theo", "Caio", "Joaquim", "Marcos", "Bryan", "Pietro", "Tiago", "Victor", "Francisco", "Yuri", "Fernando", "Ruan"];

    let femaleNames = ["Helena", "Isabela", "Lara", "Camila", "Letícia", "Valentina", "Luana", "Amanda", "Yasmin", "Sophia", "Juliana", "Bruna", "Cecília", "Fernanda", "Isadora", "Lorena", "Lívia", "Manuela", "Vitória", "Sara", "Aline", "Luiza", "Luna", "Gabriela", "Giovanna", "Jéssica", "Bianca", "Melissa", "Carolina", "Ester", "Regina", "Vanessa", "Heloísa", "Rafaela", "Nicole", "Milena", "Isabella", "Laís", "Ana Clara", "Eloá"];

    let lastNames = ["Abravanel", "Albuquerque", "Alencar", "Almada", "Álvares", "Alves", "Amoreira", "Andrade", "Annenberg", "Antena", "Barroso", "Bastos", "Beltrão", "Bentes", "Bernardes", "Bernardi", "Bial", "Bittencourt", "Bittencourt", "Boaventura", "Bonfim", "Carreira", "Carvalheira", "Carvalho", "Coutinho", "Crespo", "D’Ávila", "da Costa", "da Cruz", "da Cunha", "da Fonseca", "da Fontoura", "da Fronteira", "da Gama", "da Luz", "da Madureira", "da Maia", "da Rosa", "da Silva", "da Silveira", "da Veiga", "Dantas", "Dantas", "das Neves", "de Assunção", "de Borba", "de Lara", "de Lins", "de Oliveira", "de Quadros", "de Sá", "Dias", "Diegues", "do Prado", "Henriques", "Hermingues", "Hernandes", "Laranjeira", "Louzada", "Macieira", "Madeira", "Maldonado", "Mangueira", "Marcondes", "Marinho", "Marins", "Ribeira", "Rodrigues", "Sales", "Soares", "Soeira", "Solimões", "Steves", "Tavares", "Teixeira", "Teles", "Torres", "Trindade", "Vargas", "Vasconcelos", "Vasques"];

    let couplesList = [],
        age;

    for(let i = 0; i < couples; i++) {
        if (homosexual) {
            age =  generateAge();
            console.log(age[0]);
            console.log(age[1]);
        } else {
            age = generateAge();
            couplesList.push({
                firstPerson: generateNames(maleNames, lastNames),
                secondPerson: generateNames(femaleNames, lastNames),
                ageFirstPerson: age[0],
                ageSecondPerson: age[1]
            });
        }
        console.log(Math.floor(Math.random() * 2) ? true : false);        
        console.log(generateNames(maleNames, lastNames));
    };
    
    return couplesList;
};

generateCouples(couplesQuantity, homosexualCouple);

