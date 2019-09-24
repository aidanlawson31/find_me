function renderPhotos() {
  let clientKey = "a3c3368163a8764a063bba8d0d3afc7444aee5515d39eb0dc3d2090b63e7b921";
  let query = document.getElementById("myInput").value;
  let url = "https://api.unsplash.com/search/photos/?client_id=" + clientKey + "&query=" + query;


  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data.results);
    })
    .catch(error => console.log(error))

  // document.getElementById("imgResponse").src = res.url;
  document.getElementById("imgResponse").setAttribute("alt", query);
}
