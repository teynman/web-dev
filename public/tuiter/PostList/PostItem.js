const PostItem = (item) => {
    return (`
            <li class="list-group-item bg">
            <div class="row">
                <div class="col-md-2 user">
                    <img src="${item.avatarIcon}" >
                </div>
                <div class="col-md-10 detail">
                    <div class="row">
                        <div class="col-md-10 post_title">
                        ${item.username}
                            <img src="../images/author.png" >
                            <span class="sub_title">
                                <span>${item.handle} . </span><span>${item.time}</span>
                            </span>

                        </div>
                        <div class="col-md-2 more">...</div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 post_sub">${item.description}</div>
                    </div>
                </div>
            </div>
            <div class="row main">
                <div class="col-md-2 user"></div>
                <div class="col-md-10 detail"><img src="${item.image}"></div>
            </div>
            <div class="row">
                <div class="col-md-2 user"></div>
                <div class="col-md-10 detail">
                    <div class="row">
                        <div class="col-md-3"><i class="fa fa-comment"></i>${item.comment}</div>
                        <div class="col-md-3"><i class="fa fa-retweet"></i>${item.retweet}</div>
                        <div class="col-md-3"><i class="fa fa-heart"></i>${item.likes}</div>
                        <div class="col-md-3"><i class="fa fa-upload"></i></div>
                    </div>
                </div>
            </div>
        </li>
    `

    );
}

export default PostItem;