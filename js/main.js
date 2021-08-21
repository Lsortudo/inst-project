

function getUrl(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function createList(client) {
    // console.log(client)
    img = document.createElement("img")
    img.src = ("/assets/img/user.png")

    listitem = document.createElement("li");
    listitem.className = 'list-item-i';
    listitemdetails = document.createElement("div")
    listitemdetails.className = 'list-item-details'
    listitemdetails.id = 'id-list-item-details'

    imgContainer = document.createElement("div")
    imgContainer.className = 'img-wrapper'
    h4Name = document.createElement("h4")
    pCompanyBs = document.createElement("p")



    h4Name.innerHTML = client.name;
    pCompanyBs.innerHTML = client.company.bs;

    listitem.appendChild(imgContainer)
    imgContainer.appendChild(img);
    listitem.appendChild(listitemdetails)
    listitemdetails.appendChild(h4Name);
    listitemdetails.appendChild(pCompanyBs);



    return listitem;
}
function main() {
    let data = getUrl("https://jsonplaceholder.typicode.com/users");
    let clients = JSON.parse(data);

    let list = document.getElementById("list-ul")

    // console.log(clients)
    clients.forEach(element => {
        let listitem = createList(element);
        list.appendChild(listitem)
    });
}

// let filterInput = document.getElementById('inputTaskTxtId')

//     filterInput.addEventListener('keyup', filterNames)
//     function filterNames() {
//         let filterValue = document.getElementById('inputTaskTxtId').value.toLowerCase();
//         console.log(filterValue)
//     }
//     let ul = document.getElementById('list-ul')
//     // let ul = document.getElementById('id-list-item-details')
//     let li = ul.querySelectorAll('li')
//     console.log(li)
//     for (let i = 0; i < li.length; i++) {
//         let divLi = li[i].getElementsByClassName('.list-item-details')[0];
//         let h4 = divLi.getElementsByTagName('h4')
//         console.log(h4)
//         console.log(divLi)
//         if (h4.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
//             li[i].style.display = '';
//         }
//         else {
//             li[i].style.display = 'none';
//         }
//     }

let filterInput = document.getElementById('inputTaskTxtId')
filterInput.addEventListener('keyup', filterNames)
function filterNames() {
    let filterValue = document.getElementById('inputTaskTxtId').value.toLowerCase()
    console.log(filterValue)
}
let ul = document.getElementById('list-ul');
let li = ul.querySelectorAll('li.list-item-i');
console.log(ul)
console.log(li)
for (let i = 0; i < li.length; i++) {
    let divLi = li.getElementsByClassName('.list-item-details')
    let h4 = divLi[i].getElementsByTagName('h4')[0];
    console.log("teste")
    if (h4.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
        li[i].style.display = '';
        li[i].style.color = 'white';
    }
    else {
        lii[i].style.display = 'none';
        lii[i].style.color = 'white';
    }
}

// pegar valor do textinput com jquery >>

// $(".inputTaskTxt").on("keyup", function (e) {
//     if (e.keyCode == 13 && $(".inputTaskTxt").val() != "") {
//         pesquisar()
//     }
// })

// pesquisar = () => {
//     if ($(".inputTaskTxt").val() != "")



//     // // searchContent = $(".inputTaskTxt").val().toLowerCase();
//     // // let books = document.getElementById("id-list-item-details").getElementsByTagName("h4")
//     // // const title = books.textContent;
//     // // if (title.toLowerCase().indexOf(term) != -1) {
//     // //     books.style.display = 'block'
//     // // }
//     // // else {
//     // //     books.style.display = 'none'
//     // // }

//     // // console.log(searchContent)
//     // // console.log(books)
// }

main()