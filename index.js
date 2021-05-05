// EDIT THIS STUFF
const columns = 12;
const rows = 7;

const pixWidth = 80;
const pixHeight = 80;

const fontSize = 40;

const boxColors = [
    { // 1
        r:255,
        g:0,
        b:0,
        txt_r:255,
        txt_g:255,
        txt_b:255
    },
    { // 2
        r:0,
        g:255,
        b:0,
        txt_r:0,
        txt_g:0,
        txt_b:0
    },
    { // 3
        r:0,
        g:0,
        b:255,
        txt_r:255,
        txt_g:255,
        txt_b:255
    }
]


// DON'T EDIT THIS STUFF

const windowScale = window.devicePixelRatio;

const canvas = document.getElementById("canvas");

function addBox(x, y, width, height, color, text, fontSize) {
    // adjust for scaling
    x = x / windowScale;
    y = y / windowScale;
    width = width / windowScale;
    height = height / windowScale;
    fontSize = fontSize / windowScale;
    
    // create the elements
    const box = document.createElement("div");
    const txt = document.createElement("div");

    // add elements to canvas
    canvas.append(box);
    box.append(txt);

    // set the element attributes
    var boxStyle = ""
    boxStyle += "width: "  + width  + "px; ";
    boxStyle += "height: " + height + "px; ";
    boxStyle += "position: absolute; "
    boxStyle += "top: "    + x      + "px; ";
    boxStyle += "left: "   + y      + "px; ";
    boxStyle += "background-color: rgb(" + color.r + ", " + color.g + ", " + color.b + "); ";
    box.setAttribute("style", boxStyle);
    box.setAttribute("class", "box");
    box.setAttribute("id", text);

    var txtStyle = "";
    txtStyle += "margin: 0; ";
    txtStyle += "position: absolute; ";
    txtStyle += "top: 50%; ";
    txtStyle += "left: 50%; ";
    txtStyle += "transform: translate(-50%, -50%); ";
    txtStyle += "font-size: " + fontSize + "px; ";
    txtStyle += "font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; ";
    txtStyle += "color: rgb(" + color.txt_r + ", " + color.txt_g + ", " + color.txt_b + "); ";
    txt.setAttribute("style", txtStyle);
    txt.setAttribute("class", "text");
    txt.setAttribute("id", text);
    txt.innerHTML = text;
}

/////////////////
//             //
// Fill Canvas //
//             //
/////////////////

var boxNum = 1;
for (i = 0; i < rows; i++) {
    for (k = 0; k < columns; k++) {
        addBox(i * pixWidth, k * pixHeight, pixWidth, pixHeight, boxColors[(i+k) % boxColors.length], boxNum, fontSize);
        boxNum++;
        
    }
}