var inputbox;
var checkbox;
var button;
var index = 0;
task_name = []

function newInputBox() {
	index++;
	button=document.createElement("INPUT");                    // take input in checkbox
	button.setAttribute("id", "task_done_"+index);                    // id to checkbox
    button.setAttribute("type","checkbox");                    // checkbox
    button.setAttribute("onclick","completedTask1()"); 
    document.body.appendChild(button);                         //print checkbox in body
	inputbox = document.createElement("INPUT");                // take input in inputbox
	inputbox.setAttribute("type","text");                      // type text
	inputbox.setAttribute("id", "mainTask_"+index);                    // id to inputbox
	inputbox.setAttribute("value","");
	document.body.appendChild(inputbox);                       //print input type box in body  
	var tag = document.createElement("br");
    document.body.appendChild(tag);
	var tag_= document.createElement("br");
    document.body.appendChild(tag_);

}

function completedTask1() {
	task_ids = []      //array for index
	all_task_name = []
	var q = 1;
	var j = 1;
 
	for (var i = 1; i <= index; i++) {
		if(document.getElementById("task_done_"+i).checked == true){
			if(j == i){
				document.getElementById("Values").innerHTML = document.getElementById("mainTask_"+i).value+
				`<button id = 'task_delete_${i}' onclick = reallocation(${i})>`+'Delete' +
				 "</button>"+"<br>"+"<br>";
				document.getElementById("mainTask_"+i).style.display="none";
		
			}
			else{
				document.getElementById("Values").innerHTML += document.getElementById("mainTask_"+i).value+

				`<button id = 'task_delete_${i}' onclick=reallocation(${i})>`+'Delete' +
				 "</button>"+"<br>"+"<br>";
				document.getElementById("mainTask_"+i).style.display="none";	
			}
			q++;
	console.log(`task_delete_${i}`);

			task_ids.push("mainTask_"+i);
			
			all_task_name.push(document.getElementById("mainTask_"+i).value);
			console.log(all_task_name);

		}
	}
	for (var i = 1; i <= index; i++) {

		if(document.getElementById("task_done_"+i).checked == true)
		{
			document.getElementById("task_done_"+i).style.display="none";
		}
	}
}
function reallocation(_delete){
	var i;
	console.log("id : ", _delete);
	document.getElementById(`task_delete_${_delete}`).remove();
	all_task_name.splice(i - 1, 1);
	console.log("all_task_name : ",all_task_name);
}

