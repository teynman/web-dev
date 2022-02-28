import PostSummaryList from "../PostSummaryList";

const posts = [
    { topic: 'Web Development', userName: 'ReactJS', time: '2h', title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs', image: '../../images/react-blue.png'},
    {   topic: '', userName: 'JavaScript', time: '1 day', title: 'JavaScript is programming language that can run on browsers as well as desktops', image: '../../images/js.png', tweets: '123K', },
    {   topic: 'Web Development', userName: '', title: 'jQuery', time: 'last week', image: '../../images/jquery.png', tweets: '122K', },
    {   topic: 'Web Development', userName: 'NodeJS', title: '', time: 'last month', image: '../../images/node.png', tweets: '120K', }, ];

const ExploreComponent = () => {
    return(`
            <div class="row search" style="margin: 12px 0;background-color: #fff;">
                <!-- search field and cog -->
                <form class="bs-example bs-example-form" role="form">
                    <div class="input-group">
                        <i class="fa fa-search" style="line-height: 36px"></i>
                        <input type="text" class="form-control" placeholder="Search Twitter">
                    </div>
                </form>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                <li class="nav-link active">For you</li>
                <li class="nav-link">Trending</li>
                <li class="nav-link">News</li>
                <li class="nav-link">Sports</li>
                <li class="nav-link">Entertainment</li>   
           </ul>
           <!-- image with overlaid text -->
           <div class="poster-wrapper">
                <img src="http://n.sinaimg.cn/spider20220227/366/w700h466/20220227/fcc5-4c38fe745e066f00c67dfad75c157dfc.jpg" />
           </div>
           ${PostSummaryList(posts)}
    `);
}

export default ExploreComponent;
