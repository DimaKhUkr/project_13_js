import { save, load} from "./locStoregeDark.js"

const KEY_MODE = 'Mode'
save(KEY_MODE, { text: "Lorem..."})

console.log(load(KEY_MODE))

const body= document.querySelector('body')
const modeSwitch= document.getElementById('theme-switcher')

modeSwitch.addEventListener('click' , ()=>{
    body.classList.toggle("dark")
  
})


