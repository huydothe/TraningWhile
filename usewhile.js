let num= parseInt(prompt('Nhập 1 số'));
let total=num;
while (num != -1){
    num = +prompt('Nhập 1 số');
    total += num;
}
alert(total);