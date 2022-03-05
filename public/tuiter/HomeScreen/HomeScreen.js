import PostList from "../PostList";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar()}
            </div>
            <div class="col-10 col-md-10 col-lg-8 col-xl-6">
                ${PostList()}
            </div>
        </div>
    `);
})($);