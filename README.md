# MadLibs  
## Written by Squeekems  
MadLibs is a phrasal template word game. It prompts players for a list of words to substitute for blanks in a story before reading aloud. The game is frequently played as a party game or as a pastime.  

Checkout [GossipCurl](https://www.twitch.tv/gossipcurl)!  

## For Developers  
### How to Upload New MadLibs  
Add the name to the dropdown menu. Add an option to the switch with the id "cmbSubjects" in index.html.  
```
<option value="Example">Example</option>
```
Here is a template of an option:  
```
<option value="[Title]">[Title]</option>
```
Add a Form to the div with the id "pnlForms" in index.html.  
Here is an example of a form:  
```
<!----------------------------------------------------------------------- FORM EXAMPLE -->
<form id="frmExample" class="actual-form frmExample">
  <table>
    <tr><th>Type</th><th>Word</th></tr>
    <tr><td>Adjective 1</td><td><input
            class="txtExampleAdjective1"
            placeholder="Adjective" autocapitalize="off"></td></tr>
    <tr><td>Adjective 2</td><td><input
            class="txtExampleAdjective2"
            placeholder="Adjective" autocapitalize="off"></td></tr>
  </table>
  <button class="btn btn-dark cmdExample" type="button">Submit</button>
</form>
<!--------------------------------------------------------------------------------------->
```
Here is a template of a form:  
```
<!----------------------------------------------------------------------- FORM [TITLE] -->
<form id="frm[Title]" class="actual-form frm[Title]">
  <table>
    <tr><th>Type</th><th>Word</th></tr>
    <tr><td>[WordDescription][ Count]</td><td><input
            class="txt[Title][WordDescription][Count]"
            placeholder="[WordDescription]" autocapitalize="off"></td></tr>
    <tr><td>[WordDescription][ Count]</td><td><input
            class="txt[Title][WordDescription][Count]"
            placeholder="[WordDescription]" autocapitalize="off"></td></tr>
  </table>
  <button class="btn btn-dark cmd[Title]" type="button">Submit</button>
</form>
<!--------------------------------------------------------------------------------------->
```
You need a title, word descriptions, and a count of how many times a word description is repeated.  
Here is a single word description template:
```
<tr><td>[WordDescription][ Count]</td><td><input
        class="txt[Title][WordDescription][Count]"
        placeholder="[WordDescription]" autocapitalize="off"></td></tr>
```
Now that the page has the necessary components, we need to add the code to make it function.  
Here is an example of the code that needs to be added to scriptHome.js.  
```
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
    txtStory.innerHTML = ``;
  }
})
```
Here is a template of the code:  
```
// [Title] Form
const frm[Title] = document.querySelector(".frm[Title]");
const txt[Title][WordDescription][Count] = document.querySelector(".txt[Title][WordDescription][Count]");
const txt[Title][WordDescription][Count] = document.querySelector(".txt[Title][WordDescription][Count]");
const arr[Title] = [txt[Title][WordDescription][Count], txt[Title][WordDescription][Count]]
const cmd[Title] = document.querySelector(".cmd[Title]");

cmd[Title]?.addEventListener("click", function() {
  if (isFilled(arr[Title])) {
    pnlParagraph.classList.add("form-close");
    txtStory.classList.add("form-open");
    frm[Title].classList.remove("form-open");
    txtStory.innerHTML = ``;
  }
})
```
You need the same title, word descriptions, and a count used in the form template.  

Remember that the order matters when working with the word descriptions and associated counts.  

The submit button needs logic to select the new form.
Here is an example of what to add to the eventListener of cmdSubjects:
```
case "Example":
  frmExample.classList.add("form-open")
  break;
```
Here is the template version of the example above:
```
case "[Title]":
  frm[Title].classList.add("form-open")
  break;
```
Tack the new case after the break of the last case.
