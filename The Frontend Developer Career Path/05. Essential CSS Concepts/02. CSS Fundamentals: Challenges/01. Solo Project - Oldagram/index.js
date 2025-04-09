const posts = [
    {
        name: 'Vincent van Gogh',
        username: 'vincey1853',
        location: 'Zundert, Netherlands',
        avatar: 'images/avatar-vangogh.jpg',
        post: 'images/post-vangogh.jpg',
        comment: 'just took a few mushrooms lol',
        likes: 21,
    },
    {
        name: 'Gustave Courbet',
        username: 'gus1819',
        location: 'Ornans, France',
        avatar: 'images/avatar-courbet.jpg',
        post: 'images/post-courbet.jpg',
        comment: 'i\'m feelin a bit stressed tbh',
        likes: 4,
    },
    {
        name: 'Joseph Ducreux',
        username: 'jd1735',
        location: 'Paris, France',
        avatar: 'images/avatar-ducreux.jpg',
        post: 'images/post-ducreux.jpg',
        comment: 'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
        likes: 152,
    },
];

let posts_html = '';
for (let post of posts) {
    posts_html += `
<section>
    <div class="post-header-container">
        <img class="avatar post-avatar" src="${post.avatar}" alt="${post.name}">
        <div>
            <h1 class="post-h1">${post.name}</h1>
            <p class="post-p">${post.location}</p>
        </div>
    </div>
    <img class="post-image" src="${post.post}" alt="Vangogh">
    <div class="post-icon-container">
        <img class="icon" src="images/icon-heart.png" alt="heart icon">
        <img class="icon" src="images/icon-comment.png" alt="comment icon">
        <img class="icon" src="images/icon-dm.png" alt="dm icon">
    </div>
    <p class="post-like-count">${post.likes} likes</p>
    <div class="post-comment-container">
        <h2 class="post-comment-h2">${post.username}</h2>
        <p class="post-comment-p">${post.comment}</p>
    </div>
</section>
`;
}

document.getElementsByTagName('main')[0].innerHTML = posts_html;
