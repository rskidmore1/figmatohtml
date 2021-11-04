let $itemNumber = document.querySelector('.item-number')
let $addItem = document.querySelector('.add-item')
let $subItem = document.querySelector('.sub-item')

$addItem.addEventListener('click', (event) =>{
    
        $itemNumber.value++; 
        

    
})


$subItem.addEventListener('click', (event) =>{
    if(Number($itemNumber.value) === 0){
        $itemNumber.value = 0; 
      
    } else {
        
        $itemNumber.value--; 
    }
    
    
})