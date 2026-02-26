const emp= [
    "Mansha","Chaithra","Ambika","Prasanna","Vishnu","Amit"
];
const Input = document.getElementById('searchInput');
const dispItems = document.getElementById('namesList');
//const dispItems = document.getElementById('namesList').getElementsByTagName('li');

//render list
function displayItems(items){
    dispItems.innerHTML = '';
    //loop
    items.forEach(item =>{
        const list=document.createElement('div');
        list.classList.add('empdata');
        list.textContent=item;
        dispItems.appendChild(list);
   });
}
displayItems(emp);

//Input.addEventListener('input', (e) => {
    // const text = e.target.value.toLowerCase();
    // console.log(text);
    // for(let i=0; i< dispItems.length; i++){
    
    //     const name = dispItems[i].textContent;
    //     if(name.includes(text))
    //         {
    //         dispItems[i].style.display = "block";
    //     } else {
    //         dispItems[i].style.display = "none";
    //     }
    // }
    //-----------------------------------------
    //filterfunction
    Input.addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase();
    //filtering names
    const filterName=emp.filter(nm => {
        return nm.toLowerCase().includes(text);
    });
    displayItems(filterName);
})
