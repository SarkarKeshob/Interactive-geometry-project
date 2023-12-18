// Triangle Area Calculation

let triangleCalculate=idElement('triangle-calculate');
triangleCalculate.addEventListener('click',function(){
    let check= valueChecker('triangle-base','triangle-height');
    if(check!==0){
        
        areaShower(('The Area of Your Triangle Is =  '+(0.5*check)+' square cm '),('triangle-area'));

        areaCalculator((0.5*check),'Triangle');
        idElement('triangle-base').value='';
        idElement('triangle-height').value='';
    }
    else{
        idElement('triangle-base').value='';
        idElement('triangle-height').value='';
    }
});

// Rectangle Area Calculation

let rectangleCalculate=idElement('rectangle-calculate');
rectangleCalculate.addEventListener('click',function(){
    let check= valueChecker('rectangle-width','rectangle-length');
    if(check!==0){
        areaShower(('The Area of Your Rectangle Is =  '+check+' square cm '),('rectangle-area'));
        areaCalculator((check),'Rectangle');
        idElement('rectangle-width').value='';
        idElement('rectangle-length').value='';
    
    }

    else{
        idElement('rectangle-width').value='';
        idElement('rectangle-length').value='';
    }

});

// parallelogram Area Calculation

let parallelogramCalculate=idElement('parallelogram-calculate');
parallelogramCalculate.addEventListener('click',function(){
    let check= valueChecker('parallelogram-base','parallelogram-height');
    if(check!==0){
        areaShower(('The Area of Your Parallelogram Is =  '+check+' square cm '),('parallelogram-area'));
        areaCalculator((check),'Parrallelogram');
        idElement('parallelogram-base').value='';
        idElement('parallelogram-height').value='';
    }

    else{
        idElement('parallelogram-base').value='';
        idElement('parallelogram-height').value='';
    }
});
// rhombus Area Calculation

let rhombusCalculate=idElement('rhombus-calculate');
rhombusCalculate.addEventListener('click',function(){
    let check= valueChecker('rhombus-dia1','rhombus-dia2');
    if(check!==0){
        areaShower(('The Area of Your Rhombus Is =  '+(0.5*check)+' square cm '),('rhombus-area'));
        areaCalculator((0.5*check),'Rhombus');
        idElement('rhombus-dia1').value='';
        idElement('rhombus-dia2').value='';
    }

    else{
        idElement('rhombus-dia1').value='';
        idElement('rhombus-dia2').value='';
    }
});

// pentagon Area Calculation

let pentagonCalculate=idElement('pentagon-calculate');
pentagonCalculate.addEventListener('click',function(){
    let check= valueChecker('pentagon-p','pentagon-b');
    if(check!==0){
        areaShower(('The Area of Your Pentagon Is =  '+(0.5*check)+' square cm '),('pentagon-area'));
        areaCalculator((0.5*check),'Pentagon');
        idElement('pentagon-p').value='';
        idElement('pentagon-b').value='';
    }

    else{
        idElement('pentagon-p').value='';
        idElement('pentagon-b').value='';
    }
});
// ellipse Area Calculation

let ellipseCalculate=idElement("ellipse-calculate");
ellipseCalculate.addEventListener('click',function(){
    let check= valueChecker("ellipse-breadth","ellipse-height");
    if(check!==0){
        areaShower(('The Area of Your Ellipse Is =  '+(3.1416*check)+' square cm '),('ellipse-area'));
        areaCalculator((3.1416*check),'Ellipse');
        idElement("ellipse-breadth").value='';
        idElement("ellipse-height").value='';
    }

    else{
        idElement("ellipse-breadth").value='';
        idElement("ellipse-height").value='';
    }
});







