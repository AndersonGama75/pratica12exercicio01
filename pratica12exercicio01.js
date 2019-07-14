function iniciaModal(y) {
	var modal = document.getElementById(y);
	modal.classList.add('mostrar');
	modal.addEventListener('click', (e) => {
		if (e.target.id == y || e.target.className == 'fechar') {
			modal.classList.remove('mostrar');
		}
		//console.log(e.target.id);
	});
}
/*function fecharModal(modalId) {
	console.log("Okkk.");
	var modal = document.getElementById(modalId);
	modal.classList.remove('mostrar');
}*/