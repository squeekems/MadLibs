# MadLibs
## Written by Squeekems
MadLibs is a phrasal template word game. It prompts players for a list of words to substitute for blanks in a story before reading aloud. The game is frequently played as a party game or as a pastime.

Checkout [GossipCurl](https://www.twitch.tv/gossipcurl)!

## For Developers
### How to Upload New MadLibs
Add a Form to the div with the id "pnlForms" in index.html.
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
