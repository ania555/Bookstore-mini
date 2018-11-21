let url = "https://api.myjson.com/bins/udbm5";
fetch(url).then((response) => {
        return response.json()
    })
    .then((json) => {
        console.log("books");
        var myBooks = json.books;
        console.log(json);
        showBooks(myBooks);
        //testTest(json.books);
    })
    .catch((error) => {
        console.log("Request failed: " + error.message)
    })

function showBooks(item) {
    let container = document.querySelector("#putBooks");
    
    for (let i = 0; i < item.length; i++) {
        let flipCard = document.createElement("div");
        container.appendChild(flipCard);
        var att1 = document.createAttribute("class");
        att1.value = "flip-card";
       flipCard.setAttributeNode(att1);
        
//        
//        var liNk = document.createElement("a");
//        wholeName.appendChild(liNk);
//        var att = document.createAttribute("class");
//        att.value = "to-left";
//        wholeName.setAttributeNode(att);
//        
        
        let flipInner = document.createElement("div");
        var att2 = document.createAttribute("class");
        att2.value = "flip-card-inner";
        flipInner.setAttributeNode(att2);
        flipCard.appendChild(flipInner);
        
        let flipFront = document.createElement("div");
        var att3 = document.createAttribute("class");
        att3.value = "flip-card-front";
        flipFront.setAttributeNode(att3);
        flipInner.appendChild(flipFront);
        
        let bookItem = document.createElement("img");
        bookItem.src = item[i].portada;
        flipFront.appendChild(bookItem);
        
        let flipBack = document.createElement("div");
        var att4 = document.createAttribute("class");
        att4.value = "flip-card-back";
        flipBack.setAttributeNode(att4);
        flipInner.appendChild(flipBack);
        
        let cardTitel = document.createElement("h5");
        cardTitel.innerHTML = item[i].titulo;
        flipBack.appendChild(cardTitel);
        let cardDescrptn = document.createElement("p");
        cardDescrptn.innerHTML = item[i].descripcion;
        flipBack.appendChild(cardDescrptn); 
        let infButton = document.createElement("a");
        infButton.innerHTML = "More Info";
        infButton.href = item[i].detalle;
        infButton.data-toggle 
        var att5 = document.createAttribute("class");
        att5.value = "myButton";
        infButton.setAttributeNode(att5);
        
        flipBack.appendChild(infButton);
        
//        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
        //<a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
        
    }
}
function testTest(x) {
    let container = document.querySelector("#test");
    for (let i = 0; i < x.length; i++) {
        let teXt = document.createElement("p");
        teXt.innerHTML = "testetse";
        container.appendChild(teXt);
        console.log("test");
    }
}




