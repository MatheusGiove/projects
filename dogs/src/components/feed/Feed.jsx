import React from "react";
import FeedModal from "./FeedModal";
import FeedPhoto from "./FeedPhoto";
import PropTypes from "prop-types";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [scroll, setScroll] = React.useState(true);
  const [pages, setPages] = React.useState([1]);
  const total = React.useRef(6);
  React.useEffect(() => {
    let wait = false;
    function infiniteScroll(e) {
      if (scroll) {
        const scrollY = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scrollY > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }
    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [scroll]);

  return (
    <section>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhoto
          key={page}
          page={page}
          total={total.current}
          user={user}
          setModalPhoto={setModalPhoto}
          setScroll={setScroll}
        />
      ))}
      {!scroll && !user && (
        <p
          style={{
            textAlign: "center",
            padding: "2rem 0 4rem 0",
            color: "#888",
          }}
        >
          Não existem mais postagens.
        </p>
      )}
    </section>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default Feed;
