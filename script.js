
const btn = document.getElementById('btn');
btn.addEventListener('click', function(event){
    event.preventDefault();
    let p = document.getElementById('Prin').value;
    let y = document.getElementById('year').value;
    let r = document.getElementById('rate').value;

    p = Number(p);
    y = Number(y);
    r = Number(r);

    if(p>0 && y>0 && r>0){

    let result1 = simpleInt(p, y, r);
    let amount = p + result1;
    document.getElementById('result').classList.add('show');
    document.getElementById('p').innerHTML = p;
    document.getElementById('y').innerHTML = y;
    document.getElementById('r').innerHTML = r;
    document.getElementById('s').innerHTML = result1;
    document.getElementById('a').innerHTML = amount;


    document.getElementById('Prin').value = '';
    document.getElementById('year').value = '';
    document.getElementById('rate').value = '';
}else{
    alert('Please enter all fields.');
}

})
function simpleInt(p,t,r) {
    let result = (p*t*r)/100;
    return result;
}