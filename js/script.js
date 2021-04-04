const shareButton = document.querySelector('.article__repost-link');
const shareSection = document.querySelector('.repost');


shareButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  shareButton.classList.toggle('article__repost-link--active');
  shareSection.classList.toggle('repost--hidden');
});

