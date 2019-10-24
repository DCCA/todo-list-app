console.log('Conected');

// Click on item to mark done or not done
$('li').click(function(){
    $(this).toggleClass('done');
})

// Click on X do delete item
$('.delete').click(function(event){
    $(this).parent().fadeOut();
})