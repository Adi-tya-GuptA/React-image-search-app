import React, { useDeferredValue, useEffect, useState, useTransition } from "react";
import Imageshow from "./imgshow";
import Searchimg from "../api";
import "./style.css";

function imglist({ input }) {
  const query = useDeferredValue(input);
  const [images, setImages] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const getItems = async () => {
      const result = await Searchimg(query);
      setImages(result);
    };
    startTransition(() => {
      getItems();
    })
  }, [query]);

  return isPending ? <div>Loading...</div> : <div className="imgshow">{
    images.map((image) => {
    return <Imageshow key={image.id} image={image} />;
  })
  }</div>;
}

export default imglist;
