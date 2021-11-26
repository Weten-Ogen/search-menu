const SearchBar = document.querySelector('#mySearch');

SearchBar.addEventListener('keyup',function(){

    //declare variables
    let a;
    //filter is the input value to uppercase
     let filter = SearchBar.value.toUpperCase();
     
     const ul = document.querySelector('ul');

    let list = ul.querySelectorAll('li');
    
    //looping through  the list
    for(let i = 0; i < list.length;i++){
        //get the a values
        a = list[i].querySelectorAll('a')[0];

        //check to see if any of the a.value mactches the filter text;
        if(a.textContent.toUpperCase().indexOf(filter) > -1){
            //if yes 
            list[i].style.display = "";
        }else{
            list[i].style.display = "none"
        }
       
    }

});

