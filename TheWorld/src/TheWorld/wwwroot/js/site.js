/*site.js*/

$(function () {

    var $sidebarAndWrapper = $('#sidebar, #wrapper');

    $('#sidebar-toggle').click(function () {
        $sidebarAndWrapper.toggleClass('hide-sidebar');
        var $icon = $('#sidebar-toggle i.fa');
        if($sidebarAndWrapper.hasClass('hide-sidebar')) {
            $icon.removeClass('fa-angle-left');
            $icon.addClass('fa-angle-right');
        } else {
            $icon.removeClass('fa-angle-right');
            $icon.addClass('fa-angle-left');
        }
    });
});

