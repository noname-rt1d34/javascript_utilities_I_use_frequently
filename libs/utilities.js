function DoIKick(){

    let testinbase = new Uint8Array(4);
    testinbase[0] = 'h';
    testinbase[1] = 'e';
    testinbase[2] = 'l';
    testinbase[3] = 'o';

alert("Ishouldkickright?: " + JIMS_B256arraytoHex(testinbase, 4) + " " + JIMS_HextoB256array("61616161"));

//just curious
alert("should not be visible: " + hextoval('5'));

}

/* |><><>| 3a) Hex to val |><><|
Want to create a method for handling data conversion from different bases
*/

//Gives back a string, expects an array as input
function JIMS_B256arraytoHex(datain, datalen, uppercase=true){
    let output = "";
    let lookup = ['0','1', '2', '3', '4', '5', '6','7','8','9','A','B','C','D','E','F'];
    if (uppercase == false){
        lookup[10] = 'a';
        lookup[11] = 'b';
        lookup[12] = 'c';
        lookup[13] = 'd';
        lookup[14] = 'e';
        lookup[15] = 'f';
    }
    for (let i=0; i < datalen; ++i){
        output += lookup[((datain[i] >> 4) & 0x0f)];
        output += lookup[(datain[i] & 0x0f)];
    }
    return output;
}

//hex string to base256 uint8array, does not need to give length
function JIMS_HextoB256array(datain){
    let datalength = datain.length;
    if ((datalength & 1) != 0){//uneven input, add a leading 0 to input
        datain = '0' + datain; //This is ok since datain is a string
        datalength++;
    }
    //Using a switch case incase other alphabets/languages does something weird with the character vals
    function hextoval(inval) { //Never tried a nested function before :o I wonder if it's visible from other places?
        switch (inval){
            case '0': return 0;
            case '1': return 1;
            case '2': return 2;
            case '3': return 3;
            case '4': return 4;
            case '5': return 5;
            case '6': return 6;
            case '7': return 7;
            case '8': return 8;
            case '9': return 9;
            case 'a': case 'A': return 10;
            case 'b': case 'B': return 11;
            case 'c': case 'C': return 12;
            case 'd': case 'D': return 13;
            case 'e': case 'E': return 14;
            case 'f': case 'F': return 15;
            default: return 0;
        }
  }

  alert(datain.chartAt(5));


    let output = new Uint8Array(datalength >> 1);
  //  for (let i=0; i != (datalength >> 1); ++i){
  //      output[i] = (hextoval(datain.chartAt(i << 1) << 4) | (hextoval(datain.chartAt((i<<1)+1))));
  //  }
    return output;
}