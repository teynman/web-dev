const WhoToFollowList = (users) => {
    return (`
            <h6 style="margin-top: 20px;">Who to follow</h6>
            <ul class="list-group foll-list">
            ${
        users.map(user => {
            return `<li class="list-group-item bg">
                    <img src="${user.avatarIcon}" />
                        <div class="info">
                            <p>${user.userName} <i class="rad-fill"></i></p>
                            <p>@${user.handle}</p>
                        </div>
                        <button class="btn btn-primary btn-sm">Follow</button>
                    </li>
                    `
        }).join('')
    }
            </ul>
    `);
}

export default WhoToFollowList;
