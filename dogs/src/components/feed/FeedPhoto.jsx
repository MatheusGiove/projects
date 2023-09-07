import React from "react";
import FeedPhotoItem from "./FeedPhotoItem";
import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import Error from "../helper/Error";
import Loading from "../helper/Loading";
import styles from "./FeedPhoto.module.css";

const FeedPhoto = ({ setModalPhoto, page, total, user, setScroll }) => {
  const { data, loading, error, request } = useFetch();
  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setScroll(false)
      }
    }
    fetchPhotos();
  }, [request, page, total, user, setScroll]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotoItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhoto;
