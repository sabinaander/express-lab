
const editAnimal = (name) => {
    const url = new XMLHttpRequest()

    url.open("GET", `http://localhost:1337/animal/${name}`, false)
    url.send()

    const animal = JSON.parse(url.responseText)

    const {name, dangerous, img} = animal

    document.getElementById('name').value = name;
    document.getElementById('dangerous').value = dangerous;
    document.getElementById('img').value = img;

    document.getElementById('editAnimal').action = `http://localhost:1337/animal/${name}`;
}

const deleteAnimal = (name) => {

}

const getAnimals = () => {
    const url = new XMLHttpRequest()

    url.open("GET", "http://localhost:1337/animals", false)
    url.send()

    const animals = JSON.parse(url.responseText)

    for (let animal of animals) {
        const x = `
     <div class="col-4">
         <div class="card">
             <div class="card-body">
                 <h5 class="card-title">${animal.name}</h5>
                 <div>Dangerous: ${animal.dangerous}</div>
                 <div>Image: ${animal.img}</div>
                 <button type="button">Delete</button>
                 <button types="button">
                     Submit
                 </button>
             </div>
         </div>
     </div>
 `

        document.getElementById('animals').innerHTML = document.getElementById('animals').innerHTML + x;
    }
}

loadAnimals()