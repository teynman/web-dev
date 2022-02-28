import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import WhoToFollowList from "../WhoToFollowList";

const posts = [
    {
        topic: 'Web Development',
        userName: 'ReactJS',
        time: '2h',
        title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
        image: '../images/react.png'
    },
    {
        topic: '',
        userName: 'JavaScript',
        time: '1 day',
        title: 'JavaScript is programming language that can run on browsers as well as desktops',
        image: '../images/js.png',
        tweets: '123K',
    },
    {
        topic: 'Web Development',
        userName: '',
        title: 'jQuery',
        time: 'last week',
        image: '../images/jquery.png',
        tweets: '122K',
    },
    {
        topic: 'Web Development',
        userName: 'NodeJS',
        title: '',
        time: 'last month',
        image: '../images/nodejs.jpg',
        tweets: '120K',
    },];

const who = [
    {
        avatarIcon: '../images/java.jpg',
        userName: 'Java', handle: 'Java',
    },
    {
        avatarIcon: '../images/relativity.jpg',
        userName: 'Relativity Space',
        handle: 'relativityspace',
    },
    {
        avatarIcon: '../images/virgin.jpg',
        userName: 'Virgin Galactic',
        handle: 'virgingalactic',
    },
    {
        avatarIcon: '../images/nasa.jpg',
        userName: 'NASA', handle: 'NASA',
    },
    {
        avatarIcon: '../images/tesla.jpg',
        userName: 'Tesla', handle: 'Tesla',
    },];

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        <div class="col-10 col-md-10 col-lg-8 col-xl-6">
        <div class="row search" style="margin: 12px 0;background-color: #fff;">
                <form class="bs-example bs-example-form" role="form">
                    <div class="input-group">
                        <i class="fa fa-search" style="line-height: 36px"></i>
                        <input type="text" class="form-control" placeholder="Search Tuiter">
                    </div>
                </form>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-link active">For you</li>
                <li class="nav-link">Trending</li>
                <li class="nav-link">News</li>
                <li class="nav-link">Sports</li>
                <li class="nav-link">Entertainment</li>   
           </ul>
           <div class="poster-wrapper">
                <img src="https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/30/thumbs_b_c_a4a6996640e91d4ff86a71f5d9d9f84b.jpg?v=225920" />
           </div>
           ${PostSummaryList(posts)}
           </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${WhoToFollowList(who)}
        </div>
        </div>
    `);
})($);
