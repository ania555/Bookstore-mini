let url = "https://api.myjson.com/bins/udbm5";
fetch(url).then((response) => {
        return response.json()
    })
    .then((json) => {
        var myBooks = json.books;
        console.log(json);
        showBooks(myBooks);
        filterBooks(myBooks);
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
        let fancyBox = document.createElement("div");
        var att5 = document.createAttribute("class");
        att5.value = "imglist";
        fancyBox.setAttributeNode(att5);
        flipBack.appendChild(fancyBox);

        let infButton = document.createElement("a");
        infButton.innerHTML = "More Info";
        infButton.href = item[i].detalle;
        var att6 = document.createAttribute("class");
        att6.value = "myButton";
        infButton.setAttributeNode(att6);
        var attr = document.createAttribute("data-fancybox");
        attr.value = "images";
        infButton.setAttributeNode(attr);
        fancyBox.appendChild(infButton);
    }
}

function filterBooks(item) {
    console.log("search");
    document.querySelector("#mySearch").addEventListener("click", function () {
        doSearch(item)
    });
}





function doSearch(item) {
    console.log("result");
    var findInput = document.querySelector("#searchInput");
    var myInput = findInput.value;
    console.log(myInput);
    let container = document.querySelector("#putBooks");
    container.innerHTML = " ";
    if (myInput === "") {
        showBooks(item);
    } 
    else {
        for (let i = 0; i < item.length; i++) {
            if (item[i].titulo.toLowerCase().indexOf(myInput.toLowerCase()) > -1 || item[i].descripcion.toLowerCase().indexOf(myInput.toLowerCase()) > -1) {
                let flipCard = document.createElement("div");
                container.appendChild(flipCard);
                var att1 = document.createAttribute("class");
                att1.value = "flip-card";
                flipCard.setAttributeNode(att1);

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
                let fancyBox = document.createElement("div");
                var att5 = document.createAttribute("class");
                att5.value = "imglist";
                fancyBox.setAttributeNode(att5);
                flipBack.appendChild(fancyBox);

                let infButton = document.createElement("a");
                infButton.innerHTML = "More Info";
                infButton.href = item[i].detalle;
                var att6 = document.createAttribute("class");
                att6.value = "myButton";
                infButton.setAttributeNode(att6);
                var attr = document.createAttribute("data-fancybox");
                attr.value = "images";
                infButton.setAttributeNode(attr);
                fancyBox.appendChild(infButton);
            }
        }
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
