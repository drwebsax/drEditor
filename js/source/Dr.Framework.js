
	 // Editor
Dr.Framework = new function() {
    var that = this;

    this.saveCurrentPos=function(objTextArea) {

      if (objTextArea.createTextRange){
         objTextArea.currentPos = document.selection.createRange().duplicate();
      }

    }

    this.Ready = function(state) {

      alert(state);

    }

    this.textSave = function() {

	    //For Blobs, use \r\n for new line
	    var textToWrite = $("textarea").val();

	    //Check if browser supports Blob
	    if (window.Blob) {
	        var textFileAsBlob = new Blob([textToWrite], {
	            type: 'text/plain'
	        });

	        //Need to specify the filename that we are going to set here
	        var fileNameToSaveAs = Date.now()+".txt";
	        var downloadLink = document.createElement("a");
	        downloadLink.download = fileNameToSaveAs;
	        downloadLink.innerHTML = "Download File";
	        if (window.webkitURL != null) {
	            // Chrome allows the link to be clicked
	            // without actually adding it to the DOM.
	            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	        } else {
	            // Firefox requires the link to be added to the DOM
	            // before it can be clicked.
	            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
	            downloadLink.onclick = destroyClickedElement;
	            downloadLink.style.display = "none";
	            document.body.appendChild(downloadLink);
	        }
	        if (navigator.msSaveBlob) {
	            navigator.msSaveBlob(textFileAsBlob, fileNameToSaveAs);
	        } else {
	            downloadLink.click();
	        }
	    }

    }




};




function saveCurrentPos (objTextArea) {
if (objTextArea.createTextRange)
objTextArea.currentPos = document.selection.createRange().duplicate();
}
// function insertText (objTextArea, text) {
//     if (objTextArea.createTextRange && objTextArea.currentPos) {
//     var currentPos = objTextArea.currentPos;
//     currentPos.text =
//     currentPos.text.charAt(currentPos.text.length - 1) == ' ' ?
//     text + ' ' : text;
//     }
//     else{
//     objTextArea.value = text;
//     }
// }
// function stop(){
//  osc.stop();
// }
