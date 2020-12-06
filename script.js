
/**
 * Update the output text as a user types in the textarea
 * Use the onkeydown function inside HTML
 */
function updateText(){

  let text = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = text;
}

/**
 * Toggle the bold class for the output text
 * Use the onclick function insite HTML
 * Look into using this keyword
 * Use the classList property
 * Toggle .active class for the button
 */
function makeBold(elem){
  
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}

/**
 * Toggle the underline class for the output text
 * Toggle the .active class for the button
 * Use the classList property
 * Use contains, remove, and add functions
 */
function makeUnderline(elem){
    
    elem.classList.toggle('active');
    let formatText = document.getElementById('text-output');
    if(formatText.classList.contains('underline'))
    {
      formatText.classList.remove('underline');
    }
    else{
      formatText.classList.add('underline');
    }
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * Use the style property of the element
 * Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType){
  document.getElementById('text-output').style.textAlign = alignType;

  let btnList = document.getElementsByClassName('align');

  for(let i = 0; i < btnList.length; i++){
    btnList[i].classList.remove('active');
  }
  elem.classList.toggle('active');  
}
