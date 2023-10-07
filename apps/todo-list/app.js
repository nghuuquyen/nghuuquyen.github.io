import './style.css'
import Alpine from 'alpinejs'
import toDoList from './todo-list.js'

window.Alpine = Alpine
window.toDoList = toDoList

Alpine.start()

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register('./serviceWorker.js')
            .then(() => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}