const elementMain = document.querySelector("main");

const list = [];

list.push("jacare.jpg");
list.push("leao.jpg");
list.push("macaco.jpg");
list.push("vaca.jpg");
list.push("bode.jpg");
list.push("cobra.jpg");
list.push("dragao-de-komodo.jpg");
list.push("galinha.jpg");
list.push("gorila.jpg");
list.push("hipopotamo.jpg");

const listRandom = [];

while(list.length>0) {
    const random = Math.floor(Math.random() *  list.length);
    listRandom.push(list[random]);
    list.splice(random, 1);
}

listRandom.forEach(function(animal){
    elementMain.innerHTML+=
    `
    <div class="card">
    <img src="./img/${animal}">
    </div>
    `
});