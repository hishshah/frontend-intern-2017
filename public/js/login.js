function validasiUsername() {
	var usern = document.forms["login"]["usern"].value;
	
	if (usern == null || usern == "") {
		alert("Email atau Username tidak boleh kosong");
		return false;
	} else 
	if (usern.length < 4) {
		alert("Email atau Username minimal 4 karakter");
		return false;
	} else return true;
}

function validasiPassword() {
	var passw = document.forms["login"]["pass"].value;
	
	if (passw == null || passw == "") {
		alert("Password tidak boleh kosong");
		return false;
	} else 
	if (passw.length < 6) {
		alert("Password minimal 6 karakter");
		return false;
	} else return true;
}

function validasi() {
	var pass = validasiPassword(), user = validasiUsername();
	
	if ((pass==true) && (user==true)) {
		return true;
	} else return false;
}

function popupBox() {
	window.alert('Still in Development');
}