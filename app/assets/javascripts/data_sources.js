$(document).ready(function () {
    $('.delete-check').on('click', function () {
        $(this).prev('input[type=hidden]').val('1');
        $(this).closest('fieldset').hide();
        event.preventDefault();
    });

    $('form').on('click', '.add_fields', function(event) {
        const time = new Date().getTime();
        const regexp = new RegExp($(this).data('id'), 'g');
        $(this).before($(this).data('fields').replace(regexp, time));
        $('.selectpicker').selectpicker();
        return event.preventDefault();
    });
});