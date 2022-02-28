const PostSummaryItem = (item) => {
    return (`<li class="list-group-item bg">
                        <div class="txt-info">
                            <p class="topic">${item.topic}</p>
                            <p class="userName">
                                <span>${item.userName}</span>
                                <i class="rad-fill"></i>
                                <span class="time">- ${item.time}</span>
                            </p>
                            <p class="title">${item.title}</p>
                        </div>
                        <img src="${item.image}" />
                    </li>
    `);
}

export default PostSummaryItem;