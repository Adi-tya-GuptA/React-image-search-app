function imgshow({ image }) {
  function forceDownload(link){
    link = link.target;
    var url = link.getAttribute("data-href");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.send();
  }
  return (
    <a onClick={forceDownload} style={{display: "block"}} download="image.jpg" href="#" data-href={image.urls.small} title="ImageName">
      <img src={image.urls.small} alt={image.alt_description} className="img" />
    </a>
  );
}
export default imgshow;
