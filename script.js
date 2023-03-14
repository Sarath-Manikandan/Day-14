function labels (tagname, attrname,attrvalue, contents) {
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue)
    ele.innerHTML=contents;
    return ele;
}

function inputs(tagname, attrname, attrvalue, attrname1, attrvalue1, attrname2, attrvalue2, button){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    return ele1;

}
function linebreak(tagname){
var br=document.createElement(tagname);
return br;
}

var Firstname=labels("label","for","First Name","First Name");
var br=linebreak("br");
var input=inputs("input", "type", "First Name", "name", "First Name", "id", "firstName");
var br1=linebreak("br"); 
var Middlename=labels("label","for","Middle Name","Middle Name");
var br2=linebreak("br");
var input1=inputs("input", "type", "midde Name", "name", "Middle Name", "id", "middleName");
var br3=linebreak("br"); 
var Lastname=labels("label","for","Last Name","Last Name");
var br4=linebreak("br");
var input2=inputs("input", "type", "Last Name", "name", "Last Name", "id", "lastName");
var br5=linebreak("br"); 
var Email=labels("label","for","Email","Email");
var br6=linebreak("br");
var input3=inputs("input", "type", "email", "name", "email", "id", "email");
var br7=linebreak("br"); 
var Password=labels("label","for","password","Password");
var br8=linebreak("br");
var input4=inputs("input", "type", "password", "name", "password", "id", "password");
var br9=linebreak("br"); 


document.body.append(Firstname,br,input,br1,Middlename,br2,input1,br3,Lastname,br4,input2,br5,Email,br6,input3,br7,Password,br8,input4)
