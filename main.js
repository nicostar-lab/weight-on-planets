
// Mercure	3,7
// Vénus	8,87
// Terre	9,81
// Mars	3,71
// Jupiter	24,79
// Saturne	10,44
// Uranus	8,69
// Neptune	11,15

let masse = document.getElementById('masse')
let select = document.getElementById('select')
let choice = select.options[select.selectedIndex].text
const image = document.querySelector('img')
select.addEventListener('change', () => {
    choice = select.options[select.selectedIndex].text
})

let g = 0
let poids = 0

const planets = [
   'Mercure',	3.7,
    'Vénus', 8.87,
    'Terre' ,	9.81,
    'Mars' , 3.71,
    'Jupiter' , 24.79,
    'Saturne'	, 10.44,
    'Uranus' , 8.69,
    'Neptune' , 11.15
]

const btn = document.getElementById('btn')
btn.addEventListener('click',()=>{

    image.src = `/src/asset/${choice.toLowerCase()}.png`

    for(let i = 0; i<planets.length-1; i++){
        if(planets[i] == choice){
            g = planets[i+1]
            poids = g*parseFloat(masse.value)
            document.getElementById('result').textContent= Math.round(poids)+' N'
            

        }
    
   }
})