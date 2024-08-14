
//alert("welcom")


const missiles;

const addMIssile = () => {
    const missilesDiv = document.getElementById("missiles-div")
    const p = document.createElement("p")
    p.innerText = missiles.shift();
    missilesDiv.appendChild(p)
}
let result;

let j = 0;

const loadMissilesjson = async() => {

    const response = await fetch("/missiles.json");
    result = await response.json();

    if (j < 1) {
        const missilesDiv = document.getElementById("div1")
        const p = document.createElement("p")
        p.innerText = "Missiles loaded"

        missilesDiv.appendChild(p)
        j++;
    }
}

const socket = new WebSocket('ws://localhost:3108/MissileHanlder');

const shutMissiles = () => {

    if (result.length){
        socket.send(JSON.stringify(result.shift()));
    }
    

    const missilesDiv = document.getElementById("div2")
    const p = document.createElement("p")
    p.innerText = `Missile ${result[0]["name"]} has been shut!!`

    missilesDiv.appendChild(p)
}

// Handle messages from the backend
socket.onmessage = (event) => {
  console.log('got message', JSON.stringify(event.data));

    const missilesDiv = document.getElementById("div3")
    const p = document.createElement("p")
    p.innerText = `Missile ${event.missileName} has been ${event.intercepted}!!`

    missilesDiv.appendChild(p)

}