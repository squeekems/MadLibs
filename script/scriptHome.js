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
const arrWowIntro;
const cmdWowIntro = document.querySelector(".cmdWowIntro");

cmdWowIntro?.addEventListener("click", function() {
  if (isFilled(arrWowIntro)) {
    pnlParagraph.classList.add("form-close");
    txtStory.classList.add("form-open");
    frmWowIntro.classList.add("form-open");
    txtStory.innerHTML = `The eccentric, often brilliant Gnomes are held as one of the most peculiar races of the world.
With their obsession for developing radical new technologies and constructing marvels of mind-bending engineering, it's a wonder that any Gnomes have survived to proliferate.
Over the years, the Gnomes have contributed ingenious weapons to aid the Grand Alliance in its fierce battles against the Horde.
Thriving within the wondrous techno-city of Gnomeregan, the Gnomes shared the resources of the forests of Dun Morogh peaks with their Dwarven cousins.
Yet recently, a barbaric menace rose up from the bowels of the earth and invaded Gnomeregan.
Aided by their Dwarven allies, the Gnomes fought a valiant battle to save their beloved city.
Nevertheless, Gnomeregan was irrevocably lost.
The surviving Gnomes fled to the safety of the Dwarven stronghold of Ironforge.
There they remain, devising strategies to retake their city.
As a Gnome of proud standing, it falls to you to answer the challenge and lead your curious people to a brighter future.`
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
