const githubURL = "https://api.github.com/repos/<publicflashing>/<publicflashing.github.io>/contents/<images>";
const gallery = document.getElementById("image-list");

fetch(githubURL)
  .then(response => response.json())
  .then(data => {
    data.forEach(image => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      
      img.src = image.download_url;
      img.alt = image.name;
      
      li.appendChild(img);
      gallery.appendChild(li);
    })
  })
  .catch(error => console.error(error));
