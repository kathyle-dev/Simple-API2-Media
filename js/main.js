let media = {
  btnBook: document.getElementById('btnBook'),
  btnVideo: document.getElementById('btnVideo'),
  btnPhoto: document.getElementById('btnPhoto'),
  btnMore: document.getElementById('btnMore'),
  photo: document.getElementById('photo'),
  video: document.getElementById('video'),
  input: document.getElementById('input'),
  book: document.getElementById('book'),
  count: 0,
  getPhoto(){
    let input = media.input.value.replace(" ","+");
      fetch(`https://pixabay.com/api/?key=18152452-ad2ae05e127c7b14eba5e7e37&q=${input}&image_type=photo&per_page=15`)
        .then(response => response.json())
        .then(data => {
            media.photo.classList.remove("hide")
            media.photo.src= data.hits[media.count].largeImageURL
            media.video.classList.add("hide")
            setTimeout(function(){
              media.btnMore.classList.remove("hide")
            }, 165)
      })
        .catch(err => alert("Out of photos! Try another search."))
      
  },
  getVideo(){
      let input = media.input.value.replace(" ","+");
      fetch(`https://pixabay.com/api/videos/?key=18152452-ad2ae05e127c7b14eba5e7e37&q=${input}&page=1&per_page=15`)
        .then(response => response.json())
        .then(data => {
            media.video.classList.remove("hide")
            media.video.src= data.hits[media.count].videos.large.url
            media.photo.classList.add("hide")
            setTimeout(function(){
              media.btnMore.classList.remove("hide")
            }, 165)
          })
            .catch(err => alert("Out of videos! Try another search."))

        }
}

media.btnVideo.addEventListener("click", media.getVideo);
media.btnPhoto.addEventListener("click", media.getPhoto);
media.btnMore.addEventListener("click", ()=>{
  if(media.photo.classList.contains("hide")){
    media.getVideo();
    media.count+=1
  }else if(media.video.classList.contains("hide")){
    media.getPhoto();
    media.count+=1
  }
});
