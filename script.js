const members = [
    {
        "Nome" : "Wayne Barnett",
        "Ruolo" : "Founder & CEO",
        "Foto" : "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "Nome" : "Angela Caroll",
        "Ruolo" : "Chief Editor",
        "Foto" : "img/angela-caroll-chief-editor.jpg"
    },
    {
        "Nome" : "Walter Gordon",
        "Ruolo" : "Office Manager",
        "Foto" : "img/walter-gordon-office-manager.jpg"
    },
    {
        "Nome" : "Angela Lopez",
        "Ruolo" : "Social Media Manager",
        "Foto" : "img/angela-lopez-social-media-manager.jpg"
    },
    {
        "Nome" : "Scott Estrada",
        "Ruolo" : "Developer",
        "Foto" : "img/scott-estrada-developer.jpg"
    },
    {
        "Nome" : "Barbara Ramos",
        "Ruolo" : "Graphic Designer",
        "Foto" : "img/barbara-ramos-graphic-designer.jpg"
    }
];
console.log(members);

let card = document.querySelector(".team-container");
// console.log (card);

for (let i = 0; i < members.length; i++) {

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("team-card");
    card.append(cardDiv);

    let img = document.createElement("div");
    img.classList.add("card-image");
    cardDiv.append(img);

    let createImg = document.createElement("img");
    createImg.src = members[i].Foto;
    createImg.alt = members[i].Nome;
    img.append(createImg);

    let text = document.createElement("div");
    text.classList.add("card-text");
    cardDiv.append(text);

    let createH3 = document.createElement("h3");
    text.append(createH3);
    let h3 = document.createTextNode(members[i].Nome);
    createH3.append(h3);

    let createP = document.createElement("p");
    text.append(createP);
    let pText = document.createTextNode(members[i].Ruolo);
    createP.append(pText);
}