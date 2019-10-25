// Line-through when item is clicked
$('ul').on('click','li',function(){
    $(this).toggleClass('done');
})
// Click on X do delete item
$('ul').on('click','.delete',function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
})

// Create new todo
$("input[type='text']").keypress(function(event){
    if(event.which == 13) {
        let val = $(this).val();
        $('ul').append('<li><span class="delete">X</span>'+val+'</li>');
        $(this).val('');
    }    
})