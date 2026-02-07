const photoItems = [
  {
    src: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    alt: "Grain sacks arranged in processing unit",
  },
  {
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
    alt: "Rice grains close up",
  },
  {
    src: "https://images.unsplash.com/photo-1604524621893-b7b6a3bc9c3f?auto=format&fit=crop&w=1200&q=80",
    alt: "Red chilli pile",
  },
];

const videoItems = [
  {
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster:
      "https://images.unsplash.com/photo-1605007493699-af65834f8a00?auto=format&fit=crop&w=1200&q=80",
  },
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=80",
  },
];

function Gallery({ gallery }) {
  return (
    <section className="section" id="gallery" aria-labelledby="gallery-title">
      <div className="section__head">
        <h2 id="gallery-title">{gallery.title}</h2>
      </div>

      <h3 className="gallery__subheading">{gallery.photosTitle}</h3>
      <div className="media-grid">
        {photoItems.map((photo) => (
          <figure className="media-card" key={photo.src}>
            <img loading="lazy" decoding="async" src={photo.src} alt={photo.alt} />
          </figure>
        ))}
      </div>

      <h3 className="gallery__subheading">{gallery.videosTitle}</h3>
      <div className="media-grid">
        {videoItems.map((video) => (
          <figure className="media-card" key={video.src}>
            <video controls preload="none" poster={video.poster}>
              <source src={video.src} type="video/mp4" />
            </video>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
