
//alert("welcom")


const missiles = ["missile 1", "missile 2", "missile 3", "missile 4"]

const addMIssile = () => {
    const missilesDiv = document.getElementById("missiles-div")
    const p = document.createElement("p")
    p.innerText = missiles.shift();
    missilesDiv.appendChild(p)
}


const loadMissilesjson = async() => {
    
    const response = await fetch("/missiles.json");
    const result = await response.json();
    console.log(`result is: ${JSON.stringify(result)}`);
    
}