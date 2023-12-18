function idElement(string1){
    return (document.getElementById(string1));

}

function valueChecker(string1,string2){
    let num1= idElement(string1).value;
    let num2 = idElement(string2).value;
    if((isNaN(num1))|| (isNaN(num2))||(num1==='')||(num2==='')){
       alert('Please Insert A Valid Number !!!!');
        return 0;
    }

    else{
        return ((parseFloat(num1))*(parseFloat(num2))) ;
    }


}

function areaShower(string1,string2,string3){
   let area=idElement(string2);
    area.innerText=string1;
}

function areaCalculator(area,areaType){
    let areaCalculator= idElement('area-calculator');
    let count=areaCalculator.childElementCount;
    let p= document.createElement('p');
    p.classList.add('mb-4')
    p.innerHTML=`${count+1}. ${areaType} ${area} cm<sup>2</sup> <button class='btn btn-sm btn-accent'>Convert</button>`
    areaCalculator.appendChild(p);
}

