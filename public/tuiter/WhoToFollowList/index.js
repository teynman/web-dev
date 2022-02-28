import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
            <h6 style="margin-top: 20px;">Who to follow</h6>
            <ul class="list-group foll-list">
            ${
        who.map(user => {
            return WhoToFollowListItem(user);
        }).join('')
    }
            </ul>
    `);
}

export default WhoToFollowList;
