firstname = document.getElementById("fname");
lastname = document.getElementById("lname");
button = document.getElementById("mybtn");


button.addEventListener("click", function(){
	if (firstname.value != "justin" && lastname.value != "warger") {
		let para = document.createElement("p");
		let node = document.createTextNode("Sorry, both fields are invalid...");
		para.appendChild(node);
		let element = document.getElementById("myform");
		element.appendChild(para)
		} else if (firstname.value != "justin") {
			let para = document.createElement("p");
			let node = document.createTextNode("Sorry, first name is invalid...");
			para.appendChild(node);
			let element = document.getElementById("myform");
			element.appendChild(para)
		} else if (lastname.value != "warger") {
			let para = document.createElement("p");
			let node = document.createTextNode("Sorry, last name is invalid...");
			para.appendChild(node);
			let element = document.getElementById("myform");
			element.appendChild(para)
		} else {
			window.location.href = "inc/thumb.php";
		}
});