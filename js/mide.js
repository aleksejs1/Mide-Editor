var lang_src = js_src;

function addW(te,id){
	editor.replaceSelection(te);
	editor.focus();
	var output = "";
	lang_src[id].alt.forEach(function(element, index, array){
		output = output + '<div class="butt" onclick="addW(\''+lang_src[element].cod+'\',\''+lang_src[element].id+'\')">'+lang_src[element].name+'</div>';
	});
	$("#actual_controls").html(output);
}

function makeControls(){
	var output = "";
	lang_src.forEach(function(element, index, array){
		output = output + '<div class="butt" onclick="addW(\''+element.cod+'\',\''+element.id+'\')">'+element.name+'</div>';
	});
	$("#all_controls").html(output);
}

makeControls();
