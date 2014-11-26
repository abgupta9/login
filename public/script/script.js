function allowDrop(ev){
	  ev.preventDefault();
	 }
	 
	 function drag(ev){
	 ev.dataTransfer.setData("text/html",ev.target.id);
	}
	
	function drop(ev){
	ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");
	var ele = document.getElementById(data).cloneNode(true);
	var newDiv = document.createElement('div');
	ele.style.height = '50px';
	ele.style.width = '50px';
	newDiv.appendChild(ele);
    ev.target.appendChild(ele);
	}
	
	function successMessage(){
	 document.body.innerHTML = '';
	 var newDiv = document.createElement('div');
	 newDiv.style.padding = '10px';
	 
	 var newBtn = document.createElement('button');
	 newBtn.className = 'btn btn-primary';
	 var btnText = document.createTextNode("Place Another Order"); 
	 newBtn.appendChild(btnText);
	 newBtn.style.float = 'right';
	 newBtn.onclick = function(){
	     location.href = 'index.html';
		 }
	 var newP = document.createElement("p");
	 newP.style.padding = '10px';
	 var node = document.createTextNode("Your Order has been Placed Successfully!!");
	 newP.className = 'bg-success';
	 newP.appendChild(node);
	 newDiv.appendChild(newP);
	 newDiv.appendChild(newBtn);
	 document.body.appendChild(newDiv);
	 
	}
	
	
	
	