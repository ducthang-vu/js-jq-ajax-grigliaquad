$(document).ready(function() {

    $('.box').click(function() {
        var self = $(this)

        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            
            success: function(data) {
                data.response <= 5 ? self.addClass('yellow') : self.addClass('green')

                self.text(data.response)
            },
            
            error: () => console.log('Error')
        })
    })

})
