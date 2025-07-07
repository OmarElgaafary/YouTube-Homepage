let youtubeVideoGrid = document.querySelector('.yt-grid');

let videos = [1, 2, 3, 4, 5, 6, 7, 8];

function updateVideos() {
    youtubeVideoGrid.innerHTML = '';
    videos.forEach(() => {
        youtubeVideoGrid.innerHTML += `<div class="yt-box">
      <div class="upper-div">
        <img src="thumbnails/thumbnail1.avif" alt="" class="thumbnails">
        <div class="time">6:31:24</div>
      </div>
      <div class="bottom-div">

        <div class="profile-pic">
          <img src="youtuber-profile-picture/profile.jpg" style="width: 100%;">
        </div>
        <div class="video-description">
          <p class="video-title">HTML & CSS Full Course - Beginner to Pro</p>
          <p class="video-author">SuperSimpleDev &check;</p>
          <p class="video-info">15M views &#183; 3 years ago</p>
        </div>

      </div>

    </div>`;
    })
}

updateVideos();
