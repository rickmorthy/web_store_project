function valueBtn(element){
    let flag = $(element).val(),
        input = $(element).parent().find('input'),
        input_val  = parseInt( input.val() );
    
    if ( flag  === 'p' ){
        input.val( input_val  + 1 );
    } else {
        if ( input_val > 1 ) {
            input.val( input_val - 1 );
        }else{
            console.log('Quantity can\'t be less then 1');
        }
    }
}    