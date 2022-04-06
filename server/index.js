const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')
// const { url } = require('inspector')
const app = express()

app.use(cors())

const port = 9999

let animals = getJsonFile()
console.log(animals)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('dist'))

// add animal 
app.post('/animal', (req, res) => {
    const newAnimal = req.body
    console.log(newAnimal)
    const oldAnimals = findAnimals(newAnimal.id)

    if (oldAnimals.length) {
        res.status(400).send('ID taken. Choose another ID')
        return
    }

    console.log(newAnimal)
    animals.push(newAnimal)
    updateJsonFile()
    res.status(201).send(newAnimal.name + ' is saved to the database.')
})


// view the animal
app.get('/animals', (req, res) => {
    res.json(animals)
})

app.get('/animal/:id', (req, res) => {
    const id = req.params.id
    for (let animal of animals) {
        if (+animal.id === +id) {
            res.json(animal)
            return
        }
    }
    res.status(404).send('Animal not found.')
})

// delete the animal 
app.delete('/animal/:id', (req, res) => {
    const id = req.params.id

    const oldAnimals = findAnimals(id)

    if (!oldAnimals.length) {
        res.status(404).send('Animal not found.')
        return
    }

    animals = animals.filter(i => {
        if (i.id !== id) {
            return true;
        }
        return false;
    });
    updateJsonFile()
    res.send(id + ' is deleted');
})

// edit animal
app.put('/animal/:id', (req, res) => {
    const id = req.params.id
    const newAnimal = req.body

    const oldAnimals = findAnimals(id)

    if (!oldAnimals.length) {
        res.status(404).send('Animal not found.')
        return
    }


    for (let i = 0; i < animals.length; i++) {
        let animal = animals[i]
        if (animal.id === id) {
            animals[i] = newAnimal
        }
    }

    updateJsonFile()
    res.send(id + ' has been edited')
})


app.listen(port, () => {
    console.log('app is now running on port:' + port)
})

function findAnimals(id) {

    const oldAnimals = animals.filter(i => {
        if (i.id === id) {
            return true;
        }
        return false;
    });

    return oldAnimals
}


function getJsonFile() {
    let animals = []

    try {
        animals = JSON.parse(fs.readFileSync('./server/animals.json', { encoding: 'utf-8', flag: 'r' }))
    }
    catch (err) {
        animals = []
    }
    return animals
}

function updateJsonFile() {
    fs.writeFile('./server/animals.json', JSON.stringify(animals), (err) => {

        if (err) {
            console.log(err)
        }
        else { console.log('JSON data is saved.') }
    })
}
