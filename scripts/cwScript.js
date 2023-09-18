function frmTest1() {
    let x = document.getElementById("frm1").elements[0].value;
    let y = document.getElementById("frm1").elements[1].value;
    var text = "";
    if (x.toLowerCase() === "adam") {
    text = "Adam!";
    } else {
      text = "Welcome " + x + " " + y +"!";
    }
    document.getElementById("demo").innerHTML = text;
      
  
  }

let tempy = [];

let avgWeight;


function time() {
  let now = new Date();
  document.getElementById("time").innerHTML = now.toLocaleTimeString();
}

time();
setInterval(time, 1000);
function calAvg() {
    
    let targetItem = document.getElementById("fname").value;
    
    //test item number - '2113015909601';
    
    if (tempy.length !== 0) {
        let item = tempy.find(obj => obj['Item Number'] === targetItem);

        let maxCatch = item['Maximum Catch Qty'];
        let minCatch = item['Minimum Catch Qty'];
        document.getElementById("minCW").innerHTML = minCatch;
        document.getElementById("maxCW").innerHTML = maxCatch;


        avgWeight = (Number(minCatch) + Number(maxCatch)) / 2;
        avgWeight = Math.floor(avgWeight * 100) / 100;
        document.getElementById("test").innerHTML = avgWeight.toFixed(3);

    } else {
        document.getElementById("test").innerHTML = "No File Seleceted";
    }
    
}

function totalCatch(){

    
    
    let numCases = document.getElementById("lname").value;
    
    let totalCW = Number(numCases) * Number(avgWeight);
    totalCW = Math.floor(totalCW * 100) / 100;
    document.getElementById("demo").innerHTML = totalCW.toFixed(3);
    
    let currentCW = document.getElementById("currentCW").value;
    let currentCWnum = Number(currentCW);

    if (document.getElementById("addSel").checked) {
      palletCW = currentCWnum + totalCW;
      
    } else if (document.getElementById("subSel").checked) {
      palletCW = currentCWnum - totalCW;

    } else {
      palletCW = "";
      alert("Adding or Removing Cases not checked.");
    }

    document.getElementById("paCW").innerHTML = palletCW;


    console.log(totalCW);
}

function runAll() {
  calAvg();
  totalCatch();
}

x = document.getElementById("csvFileInput")

if (x !== undefined && x !== null) {
  x.addEventListener("change", handleFileSelect);

}

//get CSV file data. 
function handleFileSelect(event) {
    const file = event.target.files[0];
    
    Papa.parse(file, {
      header: true,
      complete: function (results) {
        console.log(results.data); // This will contain the parsed CSV data as an array of objects
        tempy = results.data;
  
      },
    });

  }

  function clearFields() {
    document.getElementById("test").innerHTML = "";
    document.getElementById("demo").innerHTML = "";
    document.getElementById("paCW").innerHTML = "";
  
    document.getElementById("minCW").innerHTML = "";
    document.getElementById("maxCW").innerHTML = "";
  
}

