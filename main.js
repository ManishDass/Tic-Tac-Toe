let Zero0 = document.getElementById("Zero0");
let Zero1 = document.getElementById("Zero1");
let Zero2 = document.getElementById("Zero2");

let One0 = document.getElementById("One0");
let One1 = document.getElementById("One1");
let One2 = document.getElementById("One2");

let Two0 = document.getElementById("Two0");
let Two1 = document.getElementById("Two1");
let Two2 = document.getElementById("Two2");

let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let line4 = document.getElementById("line4");
let line5 = document.getElementById("line5");
let line6 = document.getElementById("line6");
let line7 = document.getElementById("line7");
let line8 = document.getElementById("line8");

let player1pointer = document.getElementById("player1pointer");
let player2pointer = document.getElementById("player2pointer");

let newGame = document.getElementById('newgame');
let reset = document.getElementById('reset');

let score = document.getElementById("score");

let winner = 5;

let player1Score = 0;
let player2Score = 0;

reset.addEventListener('click',resetMethod)
newGame.addEventListener('click',newGameMethod)



let x = 9;
let temp;

let arr = [[false, false, false], [false, false, false], [false, false, false]];


let clicked = [false, false, false, false, false, false, false, false, false];

Zero0.addEventListener("click", () => {
    //console.log(x)
    if (x > 0 && clicked[0] == false) {
        clicked[0] = true;
        x % 2 == 0 ? temp = "0" : temp = "X";
        arr[0][0] = temp;
        Zero0.innerText = temp;
        showHidePointer(temp);
        x--;
    }
    test();
})

Zero1.addEventListener("click", () => {
    //console.log(x)
    if (x > 0 && clicked[1] == false) {
        clicked[1] = true;
        x % 2 == 0 ? temp = "0" : temp = "X";
        arr[0][1] = temp;
        Zero1.innerText = temp;
        showHidePointer(temp);
        x--;
    }
    test();
})

Zero2.addEventListener("click", () => {
    //console.log(x)
    if (x > 0 && clicked[2] == false) {
        clicked[2] = true;
        x % 2 == 0 ? temp = "0" : temp = "X";
        arr[0][2] = temp;
        Zero2.innerText = temp;
        showHidePointer(temp);
        x--;
    }
    test();
})

One0.addEventListener("click", () => {
    //console.log(x)
    if (x > 0 && clicked[3] == false) {
        clicked[3] = true;
        x % 2 == 0 ? temp = "0" : temp = "X";
        arr[1][0] = temp;
        One0.innerText = temp;
        showHidePointer(temp);
        x--;
    }
    test();
})

One1.addEventListener("click", () => {
    //console.log(x)
    if (x > 0 && clicked[4] == false) {
        clicked[4] = true;
        x % 2 == 0 ? temp = "0" : temp = "X";
        arr[1][1] = temp;
        One1.innerText = temp;
        showHidePointer(temp);
        x--;
    }
    test();
})

One2.addEventListener("click", () => {
    //console.log(x)
    if (x > 0 && clicked[5] == false) {
        clicked[5] = true;
        x % 2 == 0 ? temp = "0" : temp = "X";
        arr[1][2] = temp;
        One2.innerText = temp;
        showHidePointer(temp);
        x--;
    }
    test();
})

Two0.addEventListener("click", () => {
    //console.log(x)
    if (x > 0 && clicked[6] == false) {
        clicked[6] = true;
        x % 2 == 0 ? temp = "0" : temp = "X";
        arr[2][0] = temp;
        Two0.innerText = temp;
        showHidePointer(temp);
        x--;
    }
    test();
})

Two1.addEventListener("click", () => {
    //console.log(x)
    if (x > 0 && clicked[7] == false) {
        clicked[7] = true;
        x % 2 == 0 ? temp = "0" : temp = "X";
        arr[2][1] = temp;
        Two1.innerText = temp;
        showHidePointer(temp);
        x--;
    }
    test();
})

Two2.addEventListener("click", () => {
    //console.log(x)
    if (x > 0 && clicked[8] == false) {
        clicked[8] = true;
        x % 2 == 0 ? temp = "0" : temp = "X";
        arr[2][2] = temp;
        Two2.innerText = temp;
        showHidePointer(temp);
        x--;
    }
    test();
})

let one1 = 0, two1 = 0, three1 = 0, four1 = 0, five1 = 0, six1 = 0, seven1 = 0, eight1 = 0;
let player1 = [9, 9, 9, 9, 9, 9, 9, 9];
let player2 = [9, 9, 9, 9, 9, 9, 9, 9];
let one2 = 0, two2 = 0, three2 = 0, four2 = 0, five2 = 0, six2 = 0, seven2 = 0, eight2 = 0;


function test() {

    if(x==0)
    {
        brutForce();
        drawLine();
    }
}


// ['X', '0', 'X']
// ['0', 'X', '0']
// ['X', '0', 'X']

 // 00 01 02
 // 10 11 12
 // 20 21 22

 //1 - 00 01 02 Done
 //2 - 10 11 12 Done
 //3 - 20 21 22 Done
 //4 - 00 10 20 Done
 //5 - 01 11 21 Done
 //6 - 02 12 22 Done
 //7 - 00 11 22 Done
 //8 - 20 11 02

function brutForce()
{


    if(arr[0][0] == "X" && arr[0][1] == "X" && arr[0][2] == "X")
    {
        player1[0] = 1;
        console.log("One 1");
    }
    if(arr[1][0] == "X" && arr[1][1] == "X" && arr[1][2] == "X")
    {
        player1[1] = 1;
        console.log("Two 1"); 
    }
    if(arr[2][0] == "X" && arr[2][1] == "X" && arr[2][2] == "X")
    {
        console.log(arr[2][0],":",arr[2][1],":",arr[2][2])
        player1[2] = 1;
        console.log("Three 1"); 
    }
    if(arr[0][0] == "X" && arr[1][0] == "X" && arr[2][0] == "X")
    {
        player1[3] = 1;
        console.log("Four 1"); 
    }
    if(arr[0][1] == "X" && arr[1][1] == "X" && arr[2][1] == "X")
    {
        player1[4] = 1;
        console.log("Five 1"); 
    }
    if(arr[0][2] == "X" && arr[1][2] == "X" && arr[2][2] == "X")
    {
        player1[5] = 1;
        console.log("Six 1"); 
    }
    if(arr[0][0] == "X" && arr[1][1] == "X" && arr[2][2] == "X")
    {
        player1[6] = 1;
        console.log("Seven 1"); 
    }
    if(arr[2][0] == "X" && arr[1][1] == "X" && arr[0][2] == "X")
    {
        player1[7] = 1;
        console.log("Eight 1"); 
    }





    if(arr[0][0] == "0" && arr[0][1] == "0" && arr[0][2] == "0")
    {
        player2[0] = 1;
        console.log("One"); //
    }
    if(arr[1][0] == "0" && arr[1][1] == "0" && arr[1][2] == "0")
    {
        player2[1] = 1;
        console.log("Two"); 
    }
    if(arr[2][0] == "0" && arr[2][1] == "0" && arr[2][2] == "0")
    {
        player2[2] = 1;
        console.log("Three"); //
    }
    if(arr[0][0] == "0" && arr[1][0] == "0" && arr[2][0] == "0")
    {
        player2[3] = 1;
        console.log("Four");  //
    }
    if(arr[0][1] == "0" && arr[1][1] == "0" && arr[2][1] == "0")
    {
        player2[4] = 1;
        console.log("Five"); 
    }
    if(arr[0][2] == "0" && arr[1][2] == "0" && arr[2][2] == "0")
    {
        player2[5] = 1;
        console.log("Six"); //
    }
    if(arr[0][0] == "0" && arr[1][1] == "0" && arr[2][2] == "0")
    {
        player2[6] = 1;
        console.log("Seven"); 
    }
    if(arr[2][0] == "0" && arr[1][1] == "0" && arr[0][2] == "0")
    {
        player2[7] = 1;
        console.log("Eight"); 
    }
  

    if(x==0)
    {
        console.log(player1);
        console.log(player2)
    }
}

function drawLine()
{
    let counter = 1;
    let counter2 = 1;

    let marker1 = 0;
    player1.forEach((element)=>{

        
        let lol = "line" + counter;
        counter++;
        

        if(element == 1)
        {
            marker1 = 1;
            
            document.getElementById(lol).style.display = "unset";
        }
    })

    if(marker1)
    {
    player1Score++;
    score.innerText = `${player2Score}:${player1Score}`;
    }


    let marker2 = 0;
    player2.forEach((element)=>{

        
        let lolx = "line" + counter2;
        counter2++;
        

        if(element == 1)
        {
            marker2 = 1;
            document.getElementById(lolx).style.display = "unset";
        }
    })

    if(marker2)
    {
        player2Score++;
        score.innerText = `${player2Score}:${player1Score}`
    }




    console.log("Winner: ",winner);
    winner--;

    console.log("Player1 Score: ",player1Score, " Player 2 Score:",player2Score)

    // if(player1Score == 5 || player2Score == 5)
    // {
    //     console.log("We have a winner");
    // }
   

}

function showHidePointer(status)
{
    if(x == 1)
    {
        player2pointer.style.display = "none";
        player1pointer.style.display = "none"; 
    }
    else
    {
    if(status == "0")
    {
        player1pointer.style.display = "unset";
        player2pointer.style.display = "none";

    }
    else if(status == "X")
    {
        player2pointer.style.display = "unset";
        player1pointer.style.display = "none";
    }
    }
}

// if(temp == "0")
// {
//     player2pointer.style.display = "unset";
// }

function resetMethod()
{
    Zero0.innerText = "";
    Zero1.innerText = "";
    Zero2.innerText = "";

    One0.innerText = "";
    One1.innerText = "";
    One2.innerText = "";

    Two0.innerText = "";
    Two1.innerText = "";
    Two2.innerText = "";

    x = 9;

    player2pointer.style.display = "none";
    player1pointer.style.display = "unset";

    line1.style.display = "none";
    line2.style.display = "none";
    line3.style.display = "none";
    line4.style.display = "none";
    line5.style.display = "none";
    line6.style.display = "none";
    line7.style.display = "none";
    line8.style.display = "none";

    player1 = [0, 0, 0, 0, 0, 0, 0, 0];
    player2 = [0, 0, 0, 0, 0, 0, 0, 0];
    clicked = [false, false, false, false, false, false, false, false, false];
 
}

function newGameMethod()
{   
    resetMethod();
    player1Score = 0;
    player2Score = 0;
    score.innerText = `${player2Score}:${player1Score}`;
}