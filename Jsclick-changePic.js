let natureLikeElement = document.getElementById ("natureImage");
let likeButtonElement = document.getElementById("likeButton");
let isImageliked = false;

function onClickLikeButton() {
    if (isImageliked === false) {
        natureLikeElement.src = "project2.jpg";
        likeButtonElement.style.backgroundColor = "#0967d2";
        likeButtonElement.style.color = "#cbd2d9";
        isImageliked = true;
    } else {
        natureLikeElement.src = "project3.jpg";
        likeButtonElement.style.backgroundColor = "#cbd2d9";
        likeButtonElement.style.color = "#9aa5b1";
        isImageliked = false;
    }
}