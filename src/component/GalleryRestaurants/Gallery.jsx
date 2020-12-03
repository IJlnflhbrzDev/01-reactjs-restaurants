import React, { Fragment } from 'react'

export default function Gallery() {
  const Gallery = [
    {
      id: 1,
      image: 'https://bootstrapmade.com/demo/templates/Delicious/assets/img/gallery/gallery-1.jpg'
    },
    {
      id: 2,
      image: 'https://bootstrapmade.com/demo/templates/Delicious/assets/img/gallery/gallery-2.jpg'
    },
    {
      id: 3,
      image: 'https://bootstrapmade.com/demo/templates/Delicious/assets/img/gallery/gallery-3.jpg'
    },
    {
      id: 4,
      image: 'https://bootstrapmade.com/demo/templates/Delicious/assets/img/gallery/gallery-4.jpg'
    },
    {
      id: 5,
      image: 'https://bootstrapmade.com/demo/templates/Delicious/assets/img/gallery/gallery-5.jpg'
    },
    {
      id: 6,
      image: 'https://bootstrapmade.com/demo/templates/Delicious/assets/img/gallery/gallery-6.jpg'
    },
    {
      id: 7,
      image: 'https://bootstrapmade.com/demo/templates/Delicious/assets/img/gallery/gallery-7.jpg'
    },
    {
      id: 8,
      image: 'https://bootstrapmade.com/demo/templates/Delicious/assets/img/gallery/gallery-8.jpg'
    },
  ];
  const listGallery = Gallery.map((Gallerys) => {
    return (
      <div key={Gallerys.id} className="col-lg-3  p-0 overflow-hidden">
        <a href={Gallerys.image} className="overflow-hidden">
          <img src={Gallerys.image} alt="Gallery  Restaurants" className="img-fluid" />
        </a>
      </div>
    )
  })

  return (
    <Fragment >
      <section id="GalleryRestaurants">
        <div className="GalleryRestaurants_contents">
          <h2>Some Photo from <b style={{ color: '#ff9b08' }}>Our Restaurant</b></h2>
          <p>Ut Lorem ipsum dolor sit. possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div className="row overflow-hidden">
          {
            listGallery
          }
        </div>
      </section>
    </Fragment>
  )
}
