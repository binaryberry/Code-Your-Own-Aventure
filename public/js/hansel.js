jQuery(document).ready(function(){
	var SUCCESS_TXT = "Let's get to the house!";
	var ONE_CORRECT_TXT = "Get lost in the woods";
	var NO_CORRECT_TXT = "Keep walking anyway";

	var n_honeycombs_start = parseInt(jQuery("#n_honeycombs").text());

	jQuery("bc_btn_continue").click(function(e){
		console.log("FIRING");
		e.preventDefault();

		var current_text = jQuery("#bc_btn_continue").text();
		//If the success text is displayed is because it is possible to continue

		console.log(current_text);
		if(current_text === SUCCESS_TXT){
			window.location.href = "/house";
			return;
		}else if(current_text === ONE_CORRECT_TXT){
			window.location.href = "/get_lost";
			return;
		}else if(current_text === NO_CORRECT_TXT){
			window.location.href = "/wake_up";
			return;
		}
	});

	jQuery("#bc_btn_continue").hide();

	jQuery("#bc_btn_answer").click(function(e){
		e.preventDefault();

		var TOTAL_QUESTIONS = 2;

		var answer_less = jQuery("#bc_answer_less").val();
		var answer_equal = jQuery("#bc_answer_equal").val();
		var correct_answer = 0;

		var n_earned_honeycombs = 0;

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
			jQuery("#bc_btn_continue").text(SUCCESS_TXT);
			jQuery("#ask_the_bear span").text("Brilliant! They will arrive to the house");
		}else if(correct_answer == 1){
			jQuery("#bc_btn_continue").text(ONE_CORRECT_TXT);
			jQuery("#ask_the_bear span").text("You almost got it, keep trying!");
		}else{
			jQuery("#bc_btn_continue").text(NO_CORRECT_TXT);
			jQuery("#ask_the_bear span").text("Don´t give up, you can solve it!");
		}

		//The number of honeycombs displayed at the top is modified
		n_earned_honeycombs = n_honeycombs_start + correct_answer;
		jQuery("#n_honeycombs").text(n_earned_honeycombs);

		//After answering, he can follow the story
		jQuery("#bc_btn_answer").text("Throw breadcrumbs again!");
		jQuery("#bc_btn_continue").show();
	});
});