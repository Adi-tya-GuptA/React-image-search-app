import Imageshow from "./imgshow";
// import "./s"
import "./style.css";
function imglist({ images }) {
  const renderedimg = images.map((image) => {
    return <Imageshow key={image.id} image={image} />;
  });

  return <div className="imgshow">{renderedimg}</div>;
}

export default imglist;
