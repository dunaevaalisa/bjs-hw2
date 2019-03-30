

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
      let discriminant = b ** 2 - 4 * a * c; {
        let root = ['(((-b + Math.sqrt(discriminant)) / 2 * a))', ''];
        if (discriminant < 0) {
        console.log('Корней нет');
        } else if (discriminant === 0) {
        
        console.log(`Корень уравнения: ${root}`);
        return root;
        } else {
        let root1 = (((-b + Math.sqrt(discriminant)) / 2 * a));
        let root2 = (((-b - Math.sqrt(discriminant)) / 2 * a));
        console.log(`Корни уравнения: ${root1} и ${root2}`);
        return root1;
        return root2;
        }
        }
        return root;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    //return averageMark;
}
