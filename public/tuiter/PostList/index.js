import PostItem from "./PostItem.js";
import homeposts from "./homeposts.js";

const PostList = () => {
    return (`
        <ul class="list-group post">
        ${
        homeposts.map(item => {
            return PostItem(item);
        }).join('')
    }
    `);
}

export default PostList;