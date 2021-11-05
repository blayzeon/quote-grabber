function formatText(){
    const input = document.getElementById('user-dump').value;
    const output = document.getElementById('js-dump');

    /* 
        How this program works:
        1. It will grab the user's text from the input element from the HTML document
        2. It will cycle through the text until it finds a quote
        3. It will grab each letter of the text until it finds another quote
        4. It will add the text between the two quotes to an array
        5. It will continue until it finds another quote and then repeat
        6. Once it has finished cycling through the text, it will return the array to the output element of the HTML document
    */

    let copyText = false; // ensures we are only copying when we need to
    let str = ``; // holds the current string that we are grabbing
    let dump = []; // holds all of the fully-formed strings

    for (i = 0; i < input.length; i++){
        // manage the on/off switch for whether we are copying text
        if (input[i] == `"`){
            if (copyText == true){
                copyText = false;
                str += `"`;
                dump.push(str);
                str = ``;
            } else {
                copyText = true;
            }
        }
        // copy or skip text depending on whether or not the "switch" is on or off
        if (copyText == true){
            str += input[i]
        }
    }

    // adds the text to the output
    output.value = dump;
}

document.getElementById('submit').addEventListener('click', formatText)

