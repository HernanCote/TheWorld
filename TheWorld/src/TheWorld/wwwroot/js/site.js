/*site.js*/

$(function () {        

    var $sidebarAndWrapper = $('#sidebar, #wrapper');

    $('#sidebar-toggle').click(function () {
        $sidebarAndWrapper.toggleClass('hide-sidebar');
        if($sidebarAndWrapper.hasClass('hide-sidebar')) {
            $(this).text('Show sidebar');
        } else {
            $(this).text('Hide sidebar');
        }
    });
});

