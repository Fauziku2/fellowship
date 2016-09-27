console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1


function makeMiddleEarth () {
  // create a section tag with an id of middle-earth
  var section1 = document.createElement('section')
  section1.setAttribute('id', 'middle-earth')
  document.body.appendChild(section1)
  // add each land as an article tag
// for(var i = 0; i < lands.length; i++){
//   var lands = document.createElement('article')
//   document.section.appendChild(lands)
// }
  for (var i = 0; i < lands.length; i++) {
  var land = document.createElement('article')
section1.appendChild(land)
var head = document.createElement('h1')
land.appendChild(head)
head.innerHTML = lands[i]
}
// inside each article tag include an h1 with the name of the land
// append middle-earth to your document body
}

makeMiddleEarth()


// Part 2

function makeHobbits () {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var shireList = document.createElement('ul')
  var firstArticle = document.querySelector('article')
  var newUl = firstArticle.appendChild(shireList)
  // give each hobbit a class of hobbit
  for (var i = 0; i < hobbits.length; i++){
    var newHobbits = document.createElement('li')
    shireList.appendChild(newHobbits)
    newHobbits.innerHTML = hobbits[i]
    newHobbits.setAttribute('class', 'hobbit')
  }
}
makeHobbits()


// Part 3

function keepItSecretKeepItSafe () {
  // create a div with an id of 'the-ring'
  var newDiv = document.createElement('div')
  newDiv.setAttribute('id', 'the-ring')
  // give the div a class of 'magic-imbued-jewelry'
  newDiv.setAttribute('class', 'magic-imbued-jewelry')
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

  // add the ring as a child of Frodo
  var frodoList = document.querySelector('li')
  var newFrodo = frodoList.appendChild(newDiv)
  newFrodo.addEventListener('click', nazgulScreech)
}
keepItSecretKeepItSafe()

// Part 4


function makeBuddies () {
  // create an aside tag
  var asideTag = document.createElement('aside')
  // attach an unordered list of the 'buddies' in the aside
  var asideList = document.createElement('ul')
  asideTag.appendChild(asideList)
  for (var i = 0; i < buddies.length; i++){
    var buddiesList = document.createElement('li')
    asideList.appendChild(buddiesList)
    buddiesList.innerHTML = buddies[i]
  }
  // insert your aside as a child element of rivendell
  var secondArticle = document.querySelectorAll('article')[1]
  secondArticle.appendChild(asideTag)
}
makeBuddies()

// Part 5


function beautifulStranger () {
  // change the 'Strider' textnode to 'Aragorn'
  var secondArticle = document.querySelector('article aside ul li:nth-child(4)')
  secondArticle.innerHTML = 'Aragorn'
}
beautifulStranger()

// Part 6

function leaveTheShire () {
  // assemble the hobbits and move them to Rivendell
  var theHobbits = document.querySelector('article')
  var newhobbits = theHobbits.querySelector('ul')
  var rivList = document.querySelector('article:nth-child(2) aside')
  rivList.appendChild(newhobbits)
}

leaveTheShire()

// Part 7s


function forgeTheFellowShip () {
  // create a new div called 'the-fellowship' within rivendell
  var newDiv = document.createElement('div')
  newDiv.className = ('the-fellowship')
  var theArticle = document.querySelector('article:nth-child(2)')
  var newUl = document.createElement('ul')
  theArticle.appendChild(newDiv)
  newDiv.appendChild(newUl)

  // add each hobbit and buddy one at a time to 'the-fellowship'
  var newList = document.querySelectorAll('li')

  // after each character is added make an alert that they have joined your party
for(var i = 0; i < newList.length; i++){
var newParty = newUl.appendChild(newList[i])
alert(newList[i] + 'has joined the party')

  }
}
forgeTheFellowShip()


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var newGandalf = document.querySelector('.the-fellowship')
  var newGan = newGandalf.querySelector('li')

  newGan.textContent = 'Gandalf the White'
  // apply style to the element
  newGan.style.backgroundColor = 'white'
  newGan.style.border = 'grey'
  // make the background 'white', add a grey border
}
theBalrog()


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert('Horn of Gondor has been blown')
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  var boro = document.querySelector('.the-fellowship ul li:nth-child(5)')
  boro.style.textDecoration = 'line-through'
  // Remove Boromir from the Fellowship
  var parent = document.querySelector('.the-fellowship ul')
  parent.removeChild(boro)
}
hornOfGondor()


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var frodo = document.querySelector('.the-fellowship ul li:nth-child(5)')
  var sam = document.querySelector('.the-fellowship ul li:nth-child(6)')
  // add a div with an id of 'mount-doom' to Mordor
  var morDiv = document.createElement('div')
  var mordor = document.querySelector('article:nth-child(3)')
  morDiv.setAttribute('id', 'mount-doom')
  mordor.appendChild(frodo)
  mordor.appendChild(sam)
  mordor.appendChild(morDiv)
}
itsDangerousToGoAlone()


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var golDiv = document.createElement('div')
  golDiv.id = 'gollum'
  var mordor = document.querySelector('article:nth-child(3)')
  mordor.appendChild(golDiv)
  // Remove the ring from Frodo and give it to Gollum
  var ring = document.querySelector('#the-ring')
  var gollum = document.querySelector('#gollum')
  gollum.appendChild(ring)
  // Move Gollum into Mount Doom
  var mount = document.querySelector('#mount-doom')
  mount.appendChild(gollum)
}
weWantsIt()


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  var mount = document.querySelector('#mount-doom')
  var gollum = document.querySelector('#gollum')
  mount.removeChild(gollum)
  // remove all the buddies from the document
  // var bud = document.querySelector('.the-fellowship ul')
  // var rem = document.querySelector('.the-fellowship')
  // rem.removeChild(bud)

  // Move all the hobbits back to the shire
  var shire = document.querySelector('article:nth-child(1)')
  var newUl = document.createElement('ul')
  shire.appendChild(newUl)
  for(var i = 0; i < hobbits.length; i++){
  var hob = document.querySelectorAll('.hobbit')
  // var shire = document.querySelector('article:nth-child(1)')
  newUl.appendChild(hob[i])
}

  var bud = document.querySelector('.the-fellowship ul')
  var rem = document.querySelector('.the-fellowship')
  rem.removeChild(bud)



}
thereAndBackAgain()
