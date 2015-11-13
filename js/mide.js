var lang_src = js_src;

function getCaretPos(objName) {
  var obj = document.getElementById(objName);
  obj.focus();
  if (document.selection) { // IE
    var sel = document.selection.createRange();
    var clone = sel.duplicate();
    sel.collapse(true);
    clone.moveToElementText(obj);
    clone.setEndPoint('EndToEnd', sel);
    return clone.text.length;
  } else if (obj.selectionStart!==false) return obj.selectionStart; // Gecko
  else return 0;
}

function setCaretPosition(el, pos){
	var ctrl = document.getElementById(el);
	if(ctrl.setSelectionRange){
		ctrl.focus();
		ctrl.setSelectionRange(pos,pos);
	}else if (ctrl.createTextRange) {
		var range = ctrl.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
}

function addW(te,id){
	var ii = getCaretPos("marea");
	s = $("#marea").val().substr(0,ii);
	s2 = $("#marea").val().substr(ii);
	$("#marea").val(s+te+s2);
	setCaretPosition("marea",ii+te.length);
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
