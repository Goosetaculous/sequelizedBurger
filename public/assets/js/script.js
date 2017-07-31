$(document).ready(function(){
    $('#add-burger').on("click",function(){
        if($('#burger-input').val().length === 0){
            return false
        }
    })
})
