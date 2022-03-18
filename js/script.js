const log = console.log 


function myFunction(){
	if(document.body.classList.contains("menu_open")){
		document.body.classList.remove("menu_open")
	}else {
		document.body.classList.add("menu_open")
	}
}
