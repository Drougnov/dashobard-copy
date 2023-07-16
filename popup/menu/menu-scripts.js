$(document).ready(function () {
    $('.UYvZu').on('click', function() {
        $(this).closest('.BgbBR').find('.JVeuW').toggle();
    });

    $(document).on('click', function(event) {
        if(!$(event.target).is('.UYvZu') && !$(event.target).closest('.UYvZu').length) {
            $('.JVeuW:visible').hide();
        }
    });
});