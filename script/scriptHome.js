// NavBar
const home = document.querySelector(".home");
const about = document.querySelector(".about");

home.addEventListener("click", function() {
  window.location.href = "/MadLibs/index.html";
});
about.addEventListener("click", function() {
  window.location.href = "/MadLibs/about.html";
});

// Home Page
const pnlParagraph = document.querySelector(".pnlParagraph");

function isFilled(array) {
  let blnFilled = true;
  for (textbox of array) {
    if (textbox.value == "" || textbox.value == null) {
      blnFilled = false;
      alert("Please finish the form!");
      textbox.focus();
      textbox.select();
      break;
    }
  }
  return blnFilled;
}

// Subjects Panel
const cmdSubjects = document.querySelector(".cmdSubjects");
const grpSubjects = document.querySelector(".grpSubjects");
const cmbSubjects = document.querySelector(".cmbSubjects");

// Story Output
const txtStory = document.querySelector(".txtStory");

// Dragon Form
const frmDragon = document.querySelector(".frmDragon");
const txtDragonColor = document.querySelector(".txtDragonColor");
const txtDragonSuperlative = document.querySelector(".txtDragonSuperlative");
const txtDragonAdjective1 = document.querySelector(".txtDragonAdjective1");
const txtDragonBodyPartP = document.querySelector(".txtDragonBodyPartP");
const txtDragonBodyPart = document.querySelector(".txtDragonBodyPart");
const txtDragonNoun = document.querySelector(".txtDragonNoun");
const txtDragonAnimal = document.querySelector(".txtDragonAnimal");
const txtDragonAdjective2 = document.querySelector(".txtDragonAdjective2");
const txtDragonAdjective3 = document.querySelector(".txtDragonAdjective3");
const txtDragonAdjective4 = document.querySelector(".txtDragonAdjective4");
const arrDragon = [txtDragonColor, txtDragonSuperlative, txtDragonAdjective1, txtDragonBodyPartP, txtDragonBodyPart, txtDragonNoun, txtDragonAnimal, txtDragonAdjective2, txtDragonAdjective3, txtDragonAdjective4];
const cmdDragon = document.querySelector(".cmdDragon");

cmdDragon?.addEventListener("click", function() {
  if (isFilled(arrDragon)) {
    pnlParagraph.classList.add("form-close");
    txtStory.classList.add("form-open");
    frmDragon.classList.remove("form-open");
    txtStory.innerHTML = `The ${txtDragonColor.value} Dragon is the ${txtDragonSuperlative.value} Dragon of all. It has ${txtDragonAdjective1.value} ${txtDragonBodyPartP.value}, and a ${txtDragonBodyPart.value} shaped like a ${txtDragonNoun.value}. It loves to eat ${txtDragonAnimal.value}, although it will feast on nearly anything. It is ${txtDragonAdjective2.value} and ${txtDragonAdjective3.value}. You must be ${txtDragonAdjective4.value} around it, or you may end up as its meal!`;
    console.log(`The ${txtDragonColor.value} Dragon is the ${txtDragonSuperlative.value} Dragon of all. It has ${txtDragonAdjective1.value} ${txtDragonBodyPartP.value}, and a ${txtDragonBodyPart.value} shaped like a ${txtDragonNoun.value}. It loves to eat ${txtDragonAnimal.value}, although it will feast on nearly anything. It is ${txtDragonAdjective2.value} and ${txtDragonAdjective3.value}. You must be ${txtDragonAdjective4.value} around it, or you may end up as its meal!`);
  }
})

// Example Form
const frmExample = document.querySelector(".frmExample");
const txtExampleAdjective1 = document.querySelector(".txtExampleAdjective1");
const txtExampleAdjective2 = document.querySelector(".txtExampleAdjective2");
const arrExample = [txtExampleAdjective1, txtExampleAdjective2]
const cmdExample = document.querySelector(".cmdExample");

cmdExample?.addEventListener("click", function() {
  if (isFilled(arrExample)) {
    pnlParagraph.classList.add("form-close");
    txtStory.classList.add("form-open");
    frmExample.classList.remove("form-open");
    txtStory.innerHTML = `This is an ${txtExampleAdjective1.value} and ${txtExampleAdjective2.value} example!`;
  }
})

// WowIntro Form
const frmWowIntro = document.querySelector(".frmWowIntro");
const txtWowIntroAdjective1 = document.querySelector(".txtWowIntroAdjective1");
const txtWowIntroAdjective2 = document.querySelector(".txtWowIntroAdjective2");
const txtWowIntroProperNoun = document.querySelector(".txtWowIntroProperNoun");
const txtWowIntroAdjective3 = document.querySelector(".txtWowIntroAdjective3");
const txtWowIntroNoun1 = document.querySelector(".txtWowIntroNoun1");
const txtWowIntroVerb1 = document.querySelector(".txtWowIntroVerb1");
const txtWowIntroNoun2 = document.querySelector(".txtWowIntroNoun2");
const txtWowIntroVerb2 = document.querySelector(".txtWowIntroVerb2");
const txtWowIntroAdjective4 = document.querySelector(".txtWowIntroAdjective4");
const txtWowIntroVerb3 = document.querySelector(".txtWowIntroVerb3");
const txtWowIntroAdjective5 = document.querySelector(".txtWowIntroAdjective5");
const txtWowIntroAdjective6 = document.querySelector(".txtWowIntroAdjective6");
const txtWowIntroNoun3 = document.querySelector(".txtWowIntroNoun3");
const txtWowIntroVerb4 = document.querySelector(".txtWowIntroVerb4");
const txtWowIntroAdjective7 = document.querySelector(".txtWowIntroAdjective7");
const txtWowIntroCity1 = document.querySelector(".txtWowIntroCity1");
const txtWowIntroPlace = document.querySelector(".txtWowIntroPlace");
const txtWowIntroRelationalAdjective = document.querySelector(".txtWowIntroRelationalAdjective");
const txtWowIntroAdjective8 = document.querySelector(".txtWowIntroAdjective8");
const txtWowIntroVerb5 = document.querySelector(".txtWowIntroVerb5");
const txtWowIntroAdjective9 = document.querySelector(".txtWowIntroAdjective9");
const txtWowIntroCity2 = document.querySelector(".txtWowIntroCity2");
const txtWowIntroVerb6 = document.querySelector(".txtWowIntroVerb6");
const arrWowIntro = [txtWowIntroAdjective1, txtWowIntroAdjective2, txtWowIntroProperNoun, txtWowIntroAdjective3, txtWowIntroNoun1, txtWowIntroVerb1, txtWowIntroNoun2, txtWowIntroVerb2, txtWowIntroAdjective4, txtWowIntroVerb3, txtWowIntroAdjective5, txtWowIntroAdjective6, txtWowIntroNoun3, txtWowIntroVerb4, txtWowIntroAdjective7, txtWowIntroCity1, txtWowIntroPlace, txtWowIntroRelationalAdjective, txtWowIntroAdjective8, txtWowIntroVerb5, txtWowIntroAdjective9, txtWowIntroCity2, txtWowIntroVerb6];
const cmdWowIntro = document.querySelector(".cmdWowIntro");

cmdWowIntro?.addEventListener("click", function() {
  if (isFilled(arrWowIntro)) {
    pnlParagraph.classList.add("form-close");
    txtStory.classList.add("form-open");
    frmWowIntro.classList.add("form-open");
    txtStory.innerHTML = `The ${txtWowIntroAdjective1}, often ${txtWowIntroAdjective2} ${txtWowIntroProperNoun} are held as one of the most ${txtWowIntroAdjective3} races of the world. With their ${txtWowIntroNoun1} for ${txtWowIntroVerb1} radical new ${txtWowIntroNoun2} and ${txtWowIntroVerb2} marvels of ${txtWowIntroAdjective4} engineering, it is a wonder that any ${txtWowIntroProperNoun} have survived to proliferate. Over the years, the ${txtWowIntroProperNoun} have ${txtWowIntroVerb3} ${txtWowIntroAdjective5} ${txtWowIntroNoun3} to aid their faction in its ${txtWowIntroAdjective6} battles against the enemy. ${txtWowIntroVerb4} within the ${txtWowIntroAdjective7} techno-city of ${txtWowIntroCity1}, the ${txtWowIntroProperNoun} shared the resources of the forests of ${txtWowIntroPlace} peaks with their ${txtWowIntroRelationalAdjective} cousins. Yet recently, a ${txtWowIntroAdjective8} menace ${txtWowIntroVerb5} up from the bowels of the earth and invaded ${txtWowIntroCity1}. Aided by their ${txtWowIntroRelationalAdjective} allies, the ${txtWowIntroProperNoun} fought a ${txtWowIntroAdjective9} battle to save their beloved city. Nevertheless, ${txtWowIntroCity1} was irrevocably lost. The surviving ${txtWowIntroProperNoun} fled to the safety of the ${txtWowIntroRelationalAdjective} stronghold of ${txtWowIntroCity2}. There they remain, ${txtWowIntroVerb6} strategies to retake their city.`
  }
})

cmdSubjects?.addEventListener("click", function() {
  grpSubjects.classList.add("form-close")
  switch (cmbSubjects.value) {
    case "Dragon":
      frmDragon.classList.add("form-open")
      break;
    case "Example":
      frmExample.classList.add("form-open")
      break;
    case "WowIntro":
      frmWowIntro.classList.add("form-open")
      break;
  }
})
