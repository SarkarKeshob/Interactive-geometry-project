function idElement(string1){
    return (document.getElementById(string1));

}

function valueChecker(string1,string2){
    let num1= idElement(string1).value;
    let num2 = idElement(string2).value;
    if((isNaN(num1))|| (isNaN(num2))||(num1==='')||(num2==='')){
        areaShower('Please Insert A Valid Number !!!!');
        return 0;
    }

    else{
        return ((parseFloat(num1))*(parseFloat(num2))) ;
    }


}

function areaShower(string1){
    let area= idElement('area-calculator');
    area.innerText= string1;


}

