const getCats = document.querySelectorAll(".paw").length;

for (let i = 0; i < getCats; i++) {
  document.querySelectorAll(".paw")[i].addEventListener("click", function () {
    const finallyFound = this.src;
    // console.log(finallyFound);

    const a =
      "https://i.pinimg.com/564x/77/c7/2d/77c72d2c54f361bb2de738fd31e4bbdd.jpg";
    const b =
      "https://i.pinimg.com/736x/c7/7d/34/c77d34ed9463621943aed2edd72fdb4a.jpg";
    const c =
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2022%2F04%2F19%2Fsomali-sitting-grey-background-592242308.jpg";

    switch (finallyFound) {
      case a:
        const aaa = new Audio("sounds/calling.mp3");
        aaa.play();
        break;
      case b:
        const bbb = new Audio("sounds/cuddling.mp3");
        bbb.play();
        break;
      case c:
        const ccc = new Audio("sounds/angry.mp3");
        ccc.play();
        break;
      default:
        console.log(finallyFound);
    }
  });
}
