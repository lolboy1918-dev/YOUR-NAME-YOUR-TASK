let nameInput = document.getElementById("name");
let hobbyInput = document.getElementById("hobby");
let button = document.getElementById("sub");
let result1 = document.getElementById("result1");
let nasave = localStorage.getItem("nm")
if(nasave !== null){
     result1.textContent = "welcome   " + nasave;
}

button.addEventListener("click", function(event){
    event.preventDefault();

    let name = nameInput.value;
    let hobby = hobbyInput.value;
    
     if(name === ""){
        result1.textContent = "ENTER YOUR NAME.";
        return;
    }
    localStorage.setItem("nm" , name)

    result1.textContent = "YOUR NAME IS:                               ," + name + ",                                     YOUR HOBBY IS:" + hobby;
})

let taskInput = document.getElementById("textask");
let taskTime = document.getElementById("tasktime");
let taskButton = document.getElementById("taskbutt");
let taskList = document.getElementById("tasklist");
let taskCount = document.getElementById("taskcount");
let taskp = document.getElementById("taskpa");
let count = 0;

let tak = [];

let editindex = null;

let sts = localStorage.getItem("tak");
if(sts !== null){
    tak = JSON.parse(sts);
}
dis()

function stask (){
    localStorage.setItem("tak" , JSON.stringify(tak));
}

function dis () {
    taskList.innerHTML = "";

    tak.forEach (function(taks , index){
        taskList.innerHTML +=

`
        <div class = "task-card">
<h3 id="as">${taks.task}</h3>
<button type = "button" onclick="kb(${index})">remove</button>
        </div>
`

    })
}
taskp.textContent ="total   :" + tak.length;
taskButton.addEventListener("click" , function(EVENT){
event.preventDefault();

let taks = {
        task : taskInput.value
}

    let tas = taskInput.value;
    if(tas === ""){
        taskp.textContent = "ENTER NEW TASK";
        return;
    }
taskp.textContent ="total   :" + tak.length;


if(editindex === null){
    tak.push(taks)
}
else{
    tak[editindex] = taks;
    taskInput.value;

}
dis();

localStorage.setItem("tak" , JSON.stringify(tak))

taskInput.value = ""; 

dis();
})
function kb (index){
    tak.splice (index,1);
    stask();
    dis();
    taskp.textContent ="total   :" + tak.length;
}



let startbtn = document.getElementById("start");
let boxes =document.querySelectorAll(".box");
let rst = document.getElementById("result0");
let snsd = document.getElementById("spso");
let emojis = ["👩‍🎨","🏊","⚽","🍽️","🏃","😭","🤼‍♀️","✂️💵","💡","📸","⚰️","📞","🚬","🎼🎤","🎯","🎾","🏒","🛷","⛳","🏈","🎳","💄","🎱","🧶","🎉"]

startbtn.addEventListener("click" , function(){
snsd.play()
    let spin = setInterval(function(){
        boxes.forEach(function(box){
            {
                let random = Math.floor(Math.random()
            *emojis.length);

            box.textContent = emojis[random];
            
            }
        })
    },50);
            setTimeout(function(){
            clearInterval(spin);
            },3000);
            if(boxes === "👩‍🎨","🏊","⚽","🍽️","🏃","😭","🤼‍♀️","💵✂️","💡","📸","⚰️","📞","🚬","🎼🎤","🎯","🎾","🏒","🛷","⛳","🏈","🎳","💄","🎱","🧶","🎉"){
            rst.textContent = spin;
            }
});