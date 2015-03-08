jQuery("#bc_btn_answer").click(function(e){
	e.preventDefault();

	var TOTAL_QUESTIONS = 2;
	var SUCCESS_TXT = "Let's get to the house!";

	var answer_less = jQuery("#bc_answer_less").val();
	var answer_equal = jQuery("#bc_answer_equal").val();
	var correct_answer = 0;

	//If the success text is displayed is because it is possible to continue
	if(jQuery("#bc_btn_answer").text() === SUCCESS_TXT){
		window.location.href = "/house";
		return;
	}

	jQuery("#bc_answer_less").removeClass("has-success");
	jQuery("#bc_answer_less").removeClass("has-error");
	jQuery("#bc_answer_equal").removeClass("has-success");
	jQuery("#bc_answer_equal").removeClass("has-error");

	if (parseInt(answer_less) == 5){
		jQuery("#bc_answer_less").addClass("has-success");
		jQuery("#bc_answer_less_tick").show();
		correct_answer++;
	}else{
		jQuery("#bc_answer_less").addClass("has-error");
		jQuery("#bc_answer_less_tick").hide();
	}
	if(parseInt(answer_equal) == 6){
		jQuery("#bc_answer_equal").addClass("has-success");
		jQuery("#bc_answer_equal_tick").show();
		correct_answer++
	}else{
		jQuery("#bc_answer_equal").addClass("has-error");
		jQuery("#bc_answer_equal_tick").hide();
	}

	if(correct_answer == TOTAL_QUESTIONS){
		//Success!
		jQuery("#bc_btn_answer").text(SUCCESS_TXT);
	}
});