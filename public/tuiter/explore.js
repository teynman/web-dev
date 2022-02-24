$(window).resize(function () {
    var viewport = $(window).width();
    if (viewport >= 1501) {
        $('.container-fluid').attr("class", "container")
        $(".bg").css("background-color", "#000000").css("color", "#ffffff");
        $('mynav').empty();
        $('mynav').append('<li class="list-group-item bg"><i class="fa fa-twitter"></i></li>\n'
                          + '                    <li class="list-group-item bg"><i class="fa fa-home"></i>&nbsp;&nbsp;Home</li>\n'
                          + '                    <li class="list-group-item bg"><i class="fa fa-hashtag"></i>&nbsp;&nbsp;Explore</li>\n'
                          + '                    <li class="list-group-item bg"><i class="fa fa-bell-o"></i>&nbsp;&nbsp;Notifications</li>\n'
                          + '                    <li class="list-group-item bg"><i class="fa fa-envelope-o"></i>&nbsp;&nbsp;Messages</li>\n'
                          + '                    <li class="list-group-item bg"><i class="fa fa-bookmark-o"></i>&nbsp;&nbsp;Bookmarks</li>\n'
                          + '                    <li class="list-group-item bg"><i class="fa fa-list-ul"></i>&nbsp;&nbsp;Lists</li>\n'
                          + '                    <li class="list-group-item bg"><i class="fa fa-user-o"></i>&nbsp;&nbsp;Profile</li>\n'
                          + '                    <li class="list-group-item bg"><i class="fa fa-circle-"></i>&nbsp;&nbsp;More</li>'
        );
    } else if (viewport <= 1500 && viewport >= 960) {
        $('.container-fluid').attr("class", "container")
        this.Tabs();
    } else if (viewport >= 540 && viewport <= 959) {
        $('.container-fluid').attr("class", "container")
        $('span').remove();
        $('mynav').empty();
        $('mynav').append('<li class="list-group-item bg"><i class="fa fa-twitter"></i></li>\n'
                          + '                    <li class="list-group-item bg"><i class="fa fa-home"></i></li>\n'
                          + '                    <li class="list-group-item bg"><i class="fa fa-hashtag"></i></li>\n'
                          + '                    <li class="list-group-item bg"><i class="fa fa-bell-o"></i></li>\n'
                          + '                    <li class="list-group-item bg"><i class="fa fa-envelope-o"></i></li>\n'
                          + '                    <li class="list-group-item bg"><i class="fa fa-bookmark-o"></i></li>\n'
                          + '                    <li class="list-group-item bg"><i class="fa fa-list-ul"></i></li>\n'
                          + '                    <li class="list-group-item bg"><i class="fa fa-user-o"></i></li>\n'
                          + '                    <li class="list-group-item bg"><i class="fa fa-circle-"></i></li>')
    }
})
$(function () {
    $('.tab').find('li').click(function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.content').find('li').eq(index).show().siblings().hide();
    })
})
