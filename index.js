let male = 'He';
let female = 'She';

function goalOne() {
	let clientFirstName = document.getElementById('clientFirstName').value,
		gender = document.getElementById('gender').value,
		numOfScripts = document.getElementById('numOfScripts').value,
		verbalProtest = document.getElementById('verbalProtest').value,
		tantrumNumber = document.getElementById('tantrumNumber').value,
		inappropriateComments = document.getElementById('inappropriateComments').value,
		inflexibilityTimes = document.getElementById('inflexibilityTimes').value,
		perseveratedTimes = document.getElementById('perseveratedTimes').value,
		outputValue = 'For Goal 1 today, ' + clientFirstName + ',';
	if (numOfScripts.length != 0) {
		outputValue += ' scripted ' + numOfScripts + ' times.';
	}
	if (verbalProtest.length != 0) {
		outputValue += ' ' + gender + ' ' + 'verbally protested' + ' ' + verbalProtest + ' times. ';
	}
	if (tantrumNumber.length != 0) {
		outputValue += gender + ' ' + 'had ' + tantrumNumber + ' ' + 'tantrums. ';
	}
	if (inappropriateComments.length != 0) {
		outputValue += gender + ' made ' + inappropriateComments + ' inappropriate comments. ';
	}
	if (inflexibilityTimes.length != 0) {
		outputValue += gender + ' was inflexible ' + inflexibilityTimes + ' times. ';
	}
	if (perseveratedTimes.length != 0) {
		outputValue += gender + ' perseverated ' + perseveratedTimes + ' times in session.';
	}
	document.getElementById('outputForm').value = outputValue;
}
function goalTwo() {
	let clientFirstName = document.getElementById('clientFirstName').value,
		convoActivity = document.getElementById('convoActivity').value,
		identityTopicPrompts = document.getElementById('identityTopicPrompts').value,
		promptsToOrient = document.getElementById('promptsToOrient').value,
		promptsOnTopic = document.getElementById('promptsOnTopic').value,
		inappropriateCommentsConvo = document.getElementById('inappropriateCommentsConvo').value,
		percentCorrect = document.getElementById('percentCorrect').value,
		outputValue2 = 'For Goal 2, ' + clientFirstName + "'s";
	if (convoActivity.length != 0) {
		outputValue2 += ' conversational activity that he picked today was ' + convoActivity + '. ';
	}
	if (identityTopicPrompts.length != 0) {
		outputValue2 += ' ' + male + ' ' + 'needed' + ' ' + identityTopicPrompts + ' prompts to identify his topic. ';
	}
	if (promptsToOrient.length != 0) {
		outputValue2 += ' ' + male + ' ' + 'needed ' + promptsToOrient + ' ' + 'prompts to orient to his partner. ';
	}
	if (promptsOnTopic.length != 0) {
		outputValue2 += male + ' needed ' + promptsOnTopic + ' prompts to stay on topic. ';
	}
	if (inappropriateCommentsConvo.length != 0) {
		outputValue2 += male + ' made ' + inappropriateCommentsConvo + ' inappropriate comments during this activity. ';
	}
	if (percentCorrect.length != 0) {
		outputValue2 += male + ' got ' + percentCorrect + '% correct on this activity.';
	}
	document.getElementById('outputForm2').value = outputValue2;
}
function goalThree() {
	let clientFirstName = document.getElementById('clientFirstName').value,
		activityEmotion = document.getElementById('activityEmotion').value,
		promptsToIdentifyEmotion = document.getElementById('promptsToIdentifyEmotion').value,
		levelUnderstandingEmotion = document.getElementById('levelUnderstandingEmotion').value,
		outputValue3 = 'For Goal 3, ' + clientFirstName;
	if (activityEmotion.length != 0) {
		outputValue3 += ' worked on ' + activityEmotion + '. ';
	}
	if (promptsToIdentifyEmotion.length != 0) {
		outputValue3 +=
			' ' + male + ' ' + 'needed' + ' ' + promptsToIdentifyEmotion + ' prompts to identify the emotion. ';
	}
	if (levelUnderstandingEmotion.length != 0) {
		outputValue3 +=
			'For this activity ' +
			clientName +
			"'s " +
			'level of understanding was: ' +
			levelUnderstandingEmotion +
			'.';
	}
	document.getElementById('outputForm3').value = outputValue3;
}
function goalFour() {
	let clientFirstName = document.getElementById('clientFirstName').value,
		promptsCreateSchedule = document.getElementById('promptsCreateSchedule').value,
		promptsExercise = document.getElementById('promptsExercise').value,
		promptCalmStrategy = document.getElementById('promptCalmStrategy').value,
		promptLeisure = document.getElementById('promptLeisure').value,
		promptHealthy = document.getElementById('promptHealthy').value,
		promptOrgManner = document.getElementById('promptOrgManner').value,
		promptThreeChore = document.getElementById('promptThreeChore').value,
		totalPromptsSchedule = document.getElementById('totalPromptsSchedule').value,
		outputValue4 = 'For Goal 4, ' + clientFirstName;
	if (promptsCreateSchedule.length != 0) {
		outputValue4 += ' needed ' + promptsCreateSchedule + ' prompts to create a schedule. ';
	}

	if (promptsExercise.length != 0) {
		outputValue4 += ' ' + male + ' ' + 'needed' + ' ' + promptsExercise + ' prompts to engage in exercise. ';
	}
	if (promptCalmStrategy.length != 0) {
		outputValue4 +=
			' ' + male + ' ' + 'needed ' + promptCalmStrategy + ' prompts to implement a calming strategy. ';
	}
	if (promptLeisure.length != 0) {
		outputValue4 += male + ' needed ' + promptLeisure + ' prompts to engage in leisure activities. ';
	}
	if (promptHealthy.length != 0) {
		outputValue4 += male + ' needed ' + promptHealthy + ' prompts to make a healthy meal. ';
	}
	if (promptOrgManner.length != 0) {
		outputValue4 += male + ' needed ' + promptOrgManner + ' prompts to work in an organized manner. ';
	}
	if (promptThreeChore.length != 0) {
		outputValue4 += male + ' needed ' + promptThreeChore + ' prompts to complete 3 chores using a checklist. ';
	}
	if (totalPromptsSchedule.length != 0) {
		outputValue4 += male + ' had a total of ' + totalPromptsSchedule + ' prompts for this activity.';
	}
	document.getElementById('outputForm4').value = outputValue4;
}

function goalFive() {
	let clientFirstName = document.getElementById('clientFirstName').value,
		activitySchedule = document.getElementById('activitySchedule').value,
		didCreateChecklist = document.getElementById('didCreateChecklist').value,
		numberOfSteps = document.getElementById('numberOfSteps').value,
		promptsToCreateTask = document.getElementById('promptsToCreateTask').value,
		didCheckOff = document.getElementById('didCheckOff').value,
		verballyProtestTask = document.getElementById('verballyProtestTask').value;
	outputValue5 = 'For Goal 5, ' + clientFirstName;
	if (activitySchedule.length != 0) {
		outputValue5 += ' planned a schedule for ' + activitySchedule + '. ';
	}

	if (didCreateChecklist.length != 0) {
		outputValue5 += male + ' ' + didCreateChecklist + ' create a checklist. ';
	}
	if (numberOfSteps.length != 0) {
		outputValue5 += male + ' ' + 'used ' + numberOfSteps + ' steps for this task. ';
	}
	if (promptsToCreateTask.length != 0) {
		outputValue5 += male + ' needed ' + promptsToCreateTask + ' prompts to complete the task. ';
	}
	if (didCheckOff.length != 0) {
		outputValue5 += male + ' ' + didCheckOff + ' the completed tasks. ';
	}
	if (verballyProtestTask.length != 0) {
		outputValue5 += male + ' verbally protested ' + verballyProtestTask + ' times during this task.';
	}
	document.getElementById('outputForm5').value = outputValue5;
}

function goalSix() {
	let clientFirstName = document.getElementById('clientFirstName').value,
		readingMaterial = document.getElementById('readingMaterial').value,
		promptsToComplete = document.getElementById('promptsToComplete').value,
		percentCorrectReading = document.getElementById('percentCorrectReading').value;
	outputValue6 = 'For Goal 6, ' + clientFirstName;
	if (readingMaterial.length != 0) {
		outputValue6 += ' worked on ' + readingMaterial + '. ';
	}

	if (promptsToComplete.length != 0) {
		outputValue6 += male + ' ' + 'needed' + ' ' + promptsToComplete + ' prompts to complete the activity. ';
	}
	if (percentCorrectReading.length != 0) {
		outputValue6 += male + ' ' + 'earned ' + percentCorrectReading + '% on this activity.';
	}
	document.getElementById('outputForm6').value = outputValue6;
}

function goalSeven() {
	let clientFirstName = document.getElementById('clientName').value,
		mealDescription = document.getElementById('mealDescription').value,
		createMealCheck = document.getElementById('createMealCheck').value,
		prepareMeal = document.getElementById('prepareMeal').value,
		promptFollowList = document.getElementById('promptFollowList').value,
		totalPromptsMeal = document.getElementById('promptHealthy').value;
	outputValue7 = 'For Goal 7, ' + clientFirstName;
	if (mealDescription.length != 0) {
		outputValue7 += ' made ' + mealDescription + ' for the cooking activity today. ';
	}

	if (createMealCheck.length != 0) {
		outputValue7 += male + ' ' + 'needed' + ' ' + createMealCheck + ' prompts to create a checklist. ';
	}
	if (prepareMeal.length != 0) {
		outputValue7 += male + ' ' + 'needed ' + prepareMeal + ' prompts to prepare the meal. ';
	}
	if (promptFollowList.length != 0) {
		outputValue7 += male + ' needed ' + promptFollowList + ' prompts to follow a checklist. ';
	}
	if (totalPromptsMeal.length != 0) {
		outputValue7 += male + ' needed ' + totalPromptsMeal + ' total prompts for this activity. ';
	}
	document.getElementById('outputForm7').value = outputValue7;
}

function goalEight() {
	let clientFirstName = document.getElementById('clientFirstName').value,
		promptWashBedding = document.getElementById('promptWashBedding').value,
		promptsDryBedding = document.getElementById('promptsDryBedding').value,
		promptsRemakeBed = document.getElementById('promptsRemakeBed').value,
		promptsTotalBed = document.getElementById('promptsTotalBed').value;
	outputValue8 = 'For Goal 8, ' + clientFirstName;
	if (promptWashBedding.length != 0) {
		outputValue8 += male + ' needed ' + promptWashBedding + ' prompts to create a schedule. ';
	}

	if (promptsDryBedding.length != 0) {
		outputValue8 += male + ' ' + 'needed' + ' ' + promptsDryBedding + ' prompts to dry his bedding. ';
	}
	if (promptsRemakeBed.length != 0) {
		outputValue8 += male + ' ' + 'needed ' + promptsRemakeBed + ' prompts to remake his bed. ';
	}
	if (promptsTotalBed.length != 0) {
		outputValue8 += male + ' needed ' + promptsTotalBed + ' prompts to complete this activity. ';
	}
	document.getElementById('outputForm8').value = outputValue8;
}

function goalNine() {
	let clientFirstName = document.getElementById('clientFirstName').value,
		taskRoomOrganize = document.getElementById('taskRoomOrganize').value,
		promptsCheckPic = document.getElementById('promptsCheckPic').value,
		promptsToCompleteTask = document.getElementById('promptsToCompleteTask').value,
		numberProtests = document.getElementById('numberProtests').value,
		totalPromptsClean = document.getElementById('totalPromptsClean').value;
	outputValue9 = 'For Goal 9, ' + clientFirstName;
	if (taskRoomOrganize.length != 0) {
		outputValue9 += male + ' worked on ' + taskRoomOrganize + '. ';
	}

	if (promptsCheckPic.length != 0) {
		outputValue9 +=
			male + ' ' + 'needed' + ' ' + promptsCheckPic + ' prompts to check the model picture of the room. ';
	}
	if (promptsToCompleteTask.length != 0) {
		outputValue9 += male + ' ' + 'needed ' + promptsToCompleteTask + ' prompts to complete this task. ';
	}
	if (numberProtests.length != 0) {
		outputValue9 += male + ' protested' + numberProtests + ' times during this activity. ';
	}
	if (totalPromptsClean.length != 0) {
		outputValue9 += male + ' needed ' + totalPromptsClean + ' total prompts to complete this activity.';
	}
	document.getElementById('outputForm9').value = outputValue9;
}

function goalTen() {
	let clientName = document.getElementById('clientName').value,
		thirtyMinIntervals = document.getElementById('thirtyMinIntervals').value,
		monitorSystemUsed = document.getElementById('monitorSystemUsed').value,
		reportedBehaviors = document.getElementById('reportedBehaviors').value,
		reportedOutcome = document.getElementById('reportedOutcome').value,
		numberOfTimes = document.getElementById('numberOfTimes').value;
	outputValue10 = 'For Goal 10, ' + clientName + ' ';
	if (monitorSystemUsed.length != 0) {
		outputValue10 += monitorSystemUsed + ' for this activity. ';
	}
	if (thirtyMinIntervals.length != 0) {
		outputValue10 += male + ' had ' + thirtyMinIntervals + ' thirty-minute intervals. ';
	}
	if (numberOfTimes.length != 0) {
		outputValue10 += male + ' used the monitoring system ' + numberOfTimes + ' times. ';
	}
	if (reportedBehaviors.length != 0) {
		outputValue10 += male + ' had the following behaviors: ' + reportedBehaviors + '. ';
	}
	if (reportedOutcome.length != 0) {
		outputValue10 += male + ' had the following outcome: ' + reportedOutcome + '.';
	}
	document.getElementById('outputForm10').value = outputValue10;
}
let expanded = false;

function showCheckboxes() {
	let checkboxes = document.getElementById('checkboxes');
	if (!expanded) {
		checkboxes.style.display = 'block';
		expanded = true;
	} else {
		checkboxes.style.display = 'none';
		expanded = false;
	}
}
// Dropdown menu settings

function myFunction() {
	let checkBox1 = document.getElementById('checkBox1');
	let checkBox2 = document.getElementById('checkBox2');
	let checkBox3 = document.getElementById('checkBox3');
	let checkBox4 = document.getElementById('checkBox4');
	let checkBox5 = document.getElementById('checkBox5');
	let checkBox6 = document.getElementById('checkBox6');
	let checkBox7 = document.getElementById('checkBox7');
	let checkBox8 = document.getElementById('checkBox8');
	let checkBox9 = document.getElementById('checkBox9');
	let checkBox10 = document.getElementById('checkBox10');

	let grid1 = document.getElementById('grid-1');
	let grid2 = document.getElementById('grid-2');
	let grid3 = document.getElementById('grid-3');
	let grid4 = document.getElementById('grid-4');
	let grid5 = document.getElementById('grid-5');
	let grid6 = document.getElementById('grid-6');
	let grid7 = document.getElementById('grid-7');
	let grid8 = document.getElementById('grid-8');
	let grid9 = document.getElementById('grid-9');
	let grid10 = document.getElementById('grid-10');
	if (checkBox1.checked == true) {
		grid1.style.display = 'block';
	} else {
		grid1.style.display = 'none';
	}
	if (checkBox2.checked == true) {
		grid2.style.display = 'block';
	} else {
		grid2.style.display = 'none';
	}
	if (checkBox3.checked == true) {
		grid3.style.display = 'block';
	} else {
		grid3.style.display = 'none';
	}
	if (checkBox4.checked == true) {
		grid4.style.display = 'block';
	} else {
		grid4.style.display = 'none';
	}
	if (checkBox5.checked == true) {
		grid5.style.display = 'block';
	} else {
		grid5.style.display = 'none';
	}
	if (checkBox6.checked == true) {
		grid6.style.display = 'block';
	} else {
		grid6.style.display = 'none';
	}
	if (checkBox7.checked == true) {
		grid7.style.display = 'block';
	} else {
		grid7.style.display = 'none';
	}
	if (checkBox8.checked == true) {
		grid8.style.display = 'block';
	} else {
		grid8.style.display = 'none';
	}
	if (checkBox9.checked == true) {
		grid9.style.display = 'block';
	} else {
		grid9.style.display = 'none';
	}
	if (checkBox10.checked == true) {
		grid10.style.display = 'block';
	} else {
		grid10.style.display = 'none';
	}
}
