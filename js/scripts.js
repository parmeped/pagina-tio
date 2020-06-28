$(function() {
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#projectName').text($(this).find('img').attr('alt'));                
        $('#imagemodal').find('img').attr('height', getModalHeight());
        $('#imagemodal').show()
        $('.content').find('a').hide();
    });		
});

$(function() {
    $('#back').on('click', function() {                
        $('.content').find('a').show();        
        $('#imagemodal').hide()
    });		
});

function getModalHeight() {
    let viewWidth = $('body').width();
    if (viewWidth > 1000) {
        return $('#content').height() - 15         
    }
    if (viewWidth > 500) {
        return $('#content').find('img').height() * 2
    }
    return $('#content').find('img').height()
}