let subscriptionsBar = document.querySelector('.subscriptions-bar');

let youtubers = [];

function addYoutuber(name, id) {
    youtubers.push({
        name,
        id,
        profilePicture: `youtuber-profile-picture/${id}.jpg`
    });
}

addYoutuber('PewDiePie', 'pewds');
addYoutuber('TEDx Talks', 'ted');
addYoutuber('GothamChess', 'gotham');
addYoutuber('ThePrimeTime', 'prime');
addYoutuber('NeetCode', 'neet');
addYoutuber('Ben Awad', 'ben');

function updateYoutubers() {
    youtubers.forEach((youtuber) => {
        subscriptionsBar.innerHTML += `<button class="youtuber-name"><img class="youtuber-pfp" src="youtuber-profile-picture/${youtuber.id}.jpg" alt="">${youtuber.name}</button>`;
    })
}

updateYoutubers();