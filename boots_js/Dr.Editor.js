
/**
 * DR FRONT JS
 */
;(function (window, Constructor, undefined) {

	// Constructor
	var DrEdit = function(){
		    that = this;
	};

	DrEdit.prototype = {
		init : function() {

            DrAJAX = new Dr.Ajax();
						that.preset.load_json(); //초기 로드해야함
            //$('textarea').autoGrowTextArea();


            } // init end
       ,textSave: function() {

			       Dr.Framework.textSave();

        }

	    ,preset :{

			load_json :function(){
			     var jsondata =	DrAJAX.LoadJsonData('./ajax/init.json'); //'./ajax/osc.xml'
				  console.log(jsondata.editor);

		     }


	     }
		,ajaxSet :{

	        callXmldata : function(url){   //

				var xml =	DrAJAX.ParseXml(url); //'./ajax/osc.xml'
				var $xmldata = $(xml).find("audio").find("title").text();
				console.log($xmldata);
	            // var user_image_list = (xmldata == null) ? "sssss": "fdsadaf";
	            //   console.log(user_image_list);
	        }
		 }//manager mmode 끝

	}; // DrEdit.prototype 끝

    $(".call_ajax").click(function(){ // load ajax xml

		var synthesisName =$(this).attr('id');
		var urlData ='./ajax/'+synthesisName+'.xml'
	    //console.log(urlData)
        that.ajaxSet.callXmldata(urlData); //

     });

     $('#text_play').click(function(){

        $('#real').html($('#txt').val());
     });

     $('#text_one').click(function(){

         $("#txt").val("<script></script>");
     });

	 $('#text_save').click(function(){

 		 that.textSave();

 	  });

      // Dr.Framework.Ready("gds");

	Constructor.data = DrEdit;

	      DrEdit();

})(window, DrEditor);

var newEditor= new DrEditor.data() // 객체필요
newEditor.__proto__.init(); //초기 로드해야함
