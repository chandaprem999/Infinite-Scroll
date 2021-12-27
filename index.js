let mainDiv = document.getElementById("main");
async function getData() {
  let data = await (
    await fetch(
      "https://api.unsplash.com/photos/?per_page=16&&client_id=3GUg98VgmC6AuD69cBoDq3ezk-Op-341Jn4_BVCCiZA"
    )
  ).json();
  data.forEach((ele) => {
    let image = ele.urls.full;
    // console.log(image);
    let div = document.createElement("div");
    div.setAttribute("class", "imgDiv");
    let img = document.createElement("img");
    img.src = image;
    div.append(img);
    mainDiv.append(div);
  });
}
getData();
window.addEventListener("scroll", () => {
  console.log("scrolled", window.scrollY); //scrolled from top
  console.log(window.innerHeight); //visible part of screen
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    getData();
  }
});
