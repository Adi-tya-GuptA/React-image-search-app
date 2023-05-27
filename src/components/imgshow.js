function imgshow({ image }) {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} className="img" />
    </div>
  );
}
export default imgshow;
