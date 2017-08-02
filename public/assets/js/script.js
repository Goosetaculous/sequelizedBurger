$(document).ready(function(){
    $('#add-burger').on("click",function(){
        if($('#burger-input').val().length === 0){
            return false
        }
    })

    $(".devoured").on("submit","button",function(){
        console.log( $(this).text())
    })

})
