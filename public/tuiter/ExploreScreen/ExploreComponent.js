import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`<div>
            <div class="row search" style="margin: 12px 0;background-color: #fff;">
                <form class="bs-example bs-example-form" role="form">
                    <div class="input-group">
                        <i class="fa fa-search" style="line-height: 36px"></i>
                        <input type="text" class="form-control" placeholder="Search Twitter">
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
           ${PostSummaryList()}
           </div>
    `);
}

export default ExploreComponent;
