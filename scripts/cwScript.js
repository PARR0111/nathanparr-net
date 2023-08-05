function frmTest1() {
    let x = document.getElementById("frm1").elements[0].value;
    let y = document.getElementById("frm1").elements[1].value;
    var text = (Number(x) + Number(y)) / 2;
    if (Number.isNaN(text)){
        text = "You entered " + x + " " + y;
    } else if (text === 0) {
        text = "Nothing"
    }
    document.getElementById("demo").innerHTML = text;
      
  
  }

let tempy = [];

let avgWeight;


function calAvg() {
    
    let targetItem = document.getElementById("frm1").elements[0].value;
    
    //test item number - '2113015909601';
    
    if (tempy.length !== 0) {
        let item = tempy.find(obj => obj['Item Number'] === targetItem);

        let minCatch = item['Maximum Catch Qty'];
        let maxCatch = item['Minimum Catch Qty'];


        avgWeight = (Number(minCatch) + Number(maxCatch)) / 2;

        
        document.getElementById("test").innerHTML = avgWeight + " kg";

    } else {
        document.getElementById("test").innerHTML = "No File Seleceted";
    }
    
}

function totalCatch(){
    let numCases = document.getElementById("frm1").elements[1].value;

    let totalCW = Number(numCases) * Number(avgWeight);
    document.getElementById("demo").innerHTML = totalCW + " kg";
    console.log(totalCW);
}

document.getElementsByName

document.getElementById("csvFileInput").addEventListener("change", handleFileSelect);

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

