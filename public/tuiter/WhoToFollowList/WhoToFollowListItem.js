const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item bg">
                    <img src="${who.avatarIcon}" />
                        <div class="info">
                            <p>${who.userName} <i class="rad-fill"></i></p>
                            <p>@${who.handle}</p>
                        </div>
                        <button class="btn btn-primary btn-sm">Follow</button>
                    </li>
    `);
}
export default WhoToFollowListItem;