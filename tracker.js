window.onload = function(){  
    let total = 0;
    let expense = [];
    const data = document.getElementById('name');
    const num = document.getElementById('amount');
    const addbtn = document.getElementById('button');
    const table = document.getElementById('table');
    const see = document.getElementById('see');

    addbtn.onclick = function(){
        if (!localStorage)
        {
            table.innerHTML = `<table></table>`;
        }
        console.log('enter');
        const dvalue = data.value;
        const nvalue = num.value;
        localStorage.setItem(dvalue,nvalue);
        location.reload();

    };
    for (let i = 0; i<localStorage.length; i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        see.innerHTML += `<tr><td>${key}</td><td class="right">Rs.${value}</td></tr>`;
    };
    
}