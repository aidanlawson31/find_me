async function renderPhotos() {
  let clientKey = "a3c3368163a8764a063bba8d0d3afc7444aee5515d39eb0dc3d2090b63e7b921";
  let query = document.getElementById("myInput").value;
  let url = "https://api.unsplash.com/search/photos/?client_id=" + clientKey + "&query=" + query;

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      data.results.forEach(photo => {
        let altText = photo.alt_description;
        let returnedPhoto = photo.urls.regular;
        let downloadLink = photo.links.download;

        document.getElementById("downloadLink").href = downloadLink;
        document.getElementById("imgResponse").src = returnedPhoto;
        document.getElementById("imgResponse").alt = altText;
      })
    })
    .catch(error => console.log(error))
}
