
//alert("welcom")


const missiles = []

const addMIssile = () => {
    const missilesDiv = document.getElementById("missiles-div")
    const p = document.createElement("p")
    p.innerText = missiles.shift();
    missilesDiv.appendChild(p)
}
let result;
 
const loadMissilesjson = async() => {

    const response = await fetch("/missiles.json");
    result = await response.json();

    console.log(missiles);
    
    
}

const socket = new WebSocket('ws://localhost:3108/MissileHandler');

let i = 0;

const publishMessage = () => {
    if(i < result.length){
        socket.send(JSON.stringify(result[i]));
    }
  i++;
}