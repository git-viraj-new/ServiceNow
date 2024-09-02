function processSelection() {
	var form = document.getElementById("checkBoxForm");
	var options = form.elements["option"];
	var comments =document.getElementById("long_text_input").value;
	var number =document.getElementById("long_text_input_number").value;
	//long_text_input_number 
	var selectedOption = [];
	for (var i = 0; i < options.length; i++) {
		if (options[i].checked) {
			selectedOption.push(options[i].value);
		}
	}

	if (selectedOption.length == 0 ) alert("please select atleast one attachment");
	else {

		var ga = new GlideAjax('global.TeamsUtil');
		ga.addParam('sysparm_name', 'sendAttachments');
		ga.addParam('attachArray', selectedOption);
		ga.addParam('comments', comments);
		ga.addParam('num', number);
		ga.getXMLAnswer(getResponse);

		GlideDialogWindow.get().destroy();

	}

}
function getResponse(answer) {

}


function closePage() {
	GlideDialogWindow.get().destroy();
}
