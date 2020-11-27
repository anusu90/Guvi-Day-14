let ss = document.getElementById('food');


// WE SHALL SET UP CUSTOM VALIDATION FOR FOOD SELECTION
// TO ENSURE AT LEAST 2 OPTIONS ARE SLECTED

ss.addEventListener('click', ()=> {

    console.log(ss.selectedOptions.length);
    if( ss.selectedIndex === -1){

        ss.setCustomValidity('Please Select at least 2 options'); //SET UP CUSTOM MESSAGE
        console.log('here')

    } else if (ss.selectedOptions.length < 2) {

        ss.setCustomValidity('Please Select at least 2 options'); //SET UP CUSTOM MESSAGE
    } else {
        ss.setCustomValidity('');
    }
});

form = document.getElementById('my-form');

//ADD EVENT LISTENER ON FORM

form.addEventListener('submit', (e)=>{

    e.preventDefault(); // PREVENT DEFAULT
    formData = new FormData(form);

    // USE ARRAY DESTRUCTUING TO LOOP THROUGH THE ELEMENTS OF FORMDATA AND APPEND THEM TO TBODY
    // USING .append METHOD.

    //CLEAR EXISTING COLS OF THE TABLE
    document.getElementById('input-cols').childNodes.forEach(v => (v.innerHTML = ''));

    for ([k,v] of formData){
        e = document.getElementById(k);
        e.append(v + ' ');
    }

    //WE WILL NOw UNHIDE THE TABLE
    document.getElementById('my-table').classList.remove('invisible');
    document.getElementById('my-table').classList.add('visible');

    //NOW WE RESET THE FORM
    form.reset();

})
