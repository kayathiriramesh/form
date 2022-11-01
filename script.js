var col1=document.getElementById("col-md");
var forms=document.createElement("form");
var h1=document.createElement("h1");
h1.innerHTML="FORM SUBMISSION:";

var fname=labels("label","for","fname","FIRST NAME");
var br1=breaks("br");
var finput=inputs("input","type","text","id","fname","name","fname","placeholder","enter your first name");
var br2=breaks("br");
var br3=breaks("br");
var lname=labels("label","for","lname","LAST NAME");
var br4=breaks("br");
var linput=inputs("input","type","text","id","lname","name","lname","placeholder","enter your last name");
var br5=breaks("br");
var br6=breaks("br");
var addrl1=labels("label","for","addr1","ADDRESS 1");
var br7=breaks("br");
var addri1=inputs("input","type","text","id","addr1","name","addr1","placeholder","enter your address line 1");
var br8=breaks("br");
var br9=breaks("br");
var addrl2=labels("label","for","addr2","ADDRESS 2");
var br10=breaks("br");
var addri2=inputs("input","type","text","id","addr2","name","addr2","placeholder","enter your address line 2");
var br11=breaks("br");
var br12=breaks("br");
var pin=labels("label","for","pin","PINCODE");
var br13=breaks("br");
var pini=inputs("input","type","number","id","pin","name","pin","placeholder","enter your pincode");
var br14=breaks("br");
var br15=breaks("br");
var gender=labels("label","for","gender","GENDER");
//var gender=document.createElement("label");
//gender.setAttribute("for","gender");
//gender.innerHTML="GENDER"; 
var br16=breaks("br");
var male=inputs("input","type","radio","id","gender","name","gender","value","male");
var male1=labels1("label","for","male","name","genders","Male");
var female=inputs("input","type","radio","id","gender","name","gender","value","female");
var female1=labels1("label","for","female","name","genders","Female");
var br17=breaks("br");
var br18=breaks("br");
var food=labels("label","for","food",`Choice of FOOD:<span style="font-weight: lighter;"> (must choose at least 2 out of 5 options)</span>`);
var br19=breaks("br");
var br20=breaks("br");
var food1=inputs("input","type","checkbox","id","food1","name","food","value","North Indian");
var foods1=labels1("label","for","food1","name","flists","North Indian");
var br21=breaks("br");
var food2=inputs("input","type","checkbox","id","food2","name","food","value","South Indian");
var foods2=labels1("label","for","food2","name","flists","South Indian");
var br22=breaks("br");
var food3=inputs("input","type","checkbox","id","food3","name","food","value","Chinese");
var foods3=labels1("label","for","food3","name","flists","Chinese");
var br23=breaks("br");
var food4=inputs("input","type","checkbox","id","food4","name","food","value","Japanese");
var foods4=labels1("label","for","food4","name","flists","Japanese");
var br24=breaks("br");
var food5=inputs("input","type","checkbox","id","food5","name","food","value","Sea Food");
var foods5=labels1("label","for","food5","name","flists","Sea Food");
var br25=breaks("br");
var br26=breaks("br");
var state=labels("label","for","state","STATE");
var br27=breaks("br");
var statei=inputs("input","type","text","id","state","name","state","placeholder","enter your state name");
var br28=breaks("br");
var br29=breaks("br");
var country=labels("label","for","country","COUNTRY");
var br30=breaks("br");
var countryi=inputs("input","type","text","id","country","name","country","placeholder","enter your country name");
var br31=breaks("br");
var br32=breaks("br");
var submit=document.createElement("button");
submit.setAttribute("type","submit");
submit.setAttribute("id","submit");
submit.setAttribute("class","btn btn-dark");
submit.innerHTML="SUBMIT";

forms.append(h1,fname,br1,finput,br2,br3,lname,br4,linput,br5,br6,addrl1,br7,addri1,br8,br9,addrl2,br10,addri2,br11,br12,pin,br13,pini,br14,br15,gender,br16,male,male1,female,female1,br17,br18,food,br19,br20,food1,foods1,br21,food2,foods2,br22,food3,foods3,br23,food4,foods4,br24,food5,foods5,br25,br26,state,br27,statei,br28,br29,country,br30,countryi,br31,br32,submit);
col1.append(forms);
row.append(col1);
container.append(row);
document.body.append(container);

function labels(tagname,attriname,attrivalue,content)
{
var ele=document.createElement("tagname");
ele.setAttribute(attriname,attrivalue);
ele.innerHTML=content;
return ele;
}

function inputs(tagname,attriname,attrivalue,attriname1,attrivalue1,attriname2,attrivalue2,attriname3,attrivalue3){
    var ele=document.createElement(tagname);
    ele.setAttribute(attriname,attrivalue);
    ele.setAttribute(attriname1,attrivalue1);
    ele.setAttribute(attriname2,attrivalue2);
    ele.setAttribute(attriname3,attrivalue3);
    return ele;
}
function inputs1(tagname,attriname,attrivalue,attriname1,attrivalue1,attriname2,attrivalue2,attriname3,attrivalue3,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attriname,attrivalue);
    ele.setAttribute(attriname1,attrivalue1);
    ele.setAttribute(attriname2,attrivalue2);
    ele.setAttribute(attriname3,attrivalue3);
    ele.innerHTML=content;
    return ele;
}
function labels1(tagname,attriname,attrivalue,attriname1,attrivalue1,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attriname,attrivalue);
    ele.setAttribute(attriname1,attrivalue1);
    ele.innerHTML=content;
    return ele;
}
function breaks(tagname){
var ele=document.createElement(tagname);
return ele;
}

function tablecontent(fninput,lninput,address,pinl,gender3,foodl,statel,countryl){
    var tbody = document.getElementById("tbody");
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");
    var td8 = document.createElement("td");
    td1.innerHTML = fninput;
    td2.innerHTML = lninput;
    td3.innerHTML = address;
    td4.innerHTML = pinl;
    td5.innerHTML = gender3;
    td6.innerHTML = foodl;
    td7.innerHTML = statel;
    td8.innerHTML = countryl;
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    tbody.append(tr);
}

//var submit=document.getElementById("submit");
submit.addEventListener("click",function(event)
{
    event.preventDefault();
    var address=[];
    address.push(addri1.value);
    address.push(addri2.value);

    var gender1=document.getElementsByName("gender");
    var gender2;
    for(let i=0;i<gender1.length;i++){
        if(gender1[i].checked){
            gender2 =gender1[i].value;
        }
    }
    
    var foodLists=document.getElementsByName("food");
    var foodList=[];
    var Count=0;
    for(let i=0;i<foodLists.length;i++){
        if(foodLists[i].checked){
            foodList.push(foodLists[i].value);
            Count++;
        }
    }
    if(foodLists.length>=2){
        value=foodList.join(",");
    }else{
        value=alert("Choose atleast 2 options out of 5 in food");
    }
    tablecontent(finput.value,linput.value,address.join(","),pini.value,gender2,value,statei.value,countryi.value)
    finput.value="";
    linput.value="";
    addri1.value="";
    addri2.value="";
    pini.value="";
    gender2.value="";
    foodList=[];
    statei.value="";
    countryi.value="";
})
