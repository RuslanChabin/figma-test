//form validation

var inputFields = document.querySelectorAll(".form__input");
var errorNote = document.querySelectorAll(".form_error-note");
var submitButton = document.querySelector(".form__btn");

submitButton.onclick = function(evt) {
	evt.preventDefault();
	for(var i = 0; i < inputFields.length; i++){
		if(!inputFields[i].value){
			errorNote[i].classList.add("error");
		}else{
			errorNote[i].classList.remove("error");
		}
	}
}

//scroll

$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});

