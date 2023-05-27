import axios from "axios";

const Searchimg = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID thoQQKHnyWZKKFNQzrFOeYR4pZ8toMBNs_ocWNNbfF4",
    },
    params: {
      query: term,
    },
  });
  //   console.log(response.data.results);
  return response.data.results;
};

export default Searchimg;
