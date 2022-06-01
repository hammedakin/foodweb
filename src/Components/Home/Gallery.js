import img from '../../assets/image-gallery-cone.jpg'
import img1 from '../../assets/image-gallery-milkbottles.jpg'
import img2 from '../../assets/image-gallery-orange.jpg'
import img3 from '../../assets/image-gallery-sugarcubes.jpg'

const Gallery = () => {
    return (
        <>
        <section className="gallery">
            <div className="row m-0">
                <div className="col-md-3 col-6 p-0">
                    <img src={img1} alt="" width="100%" />
                </div>
                <div className="col-md-3 col-6 p-0">
                    <img src={img2} alt="" width="100%" />
                </div>
                <div className="col-md-3 col-6 p-0">
                    <img src={img} alt="" width="100%" />
                </div>
                <div className="col-md-3 col-6 p-0">
                    <img src={img3} alt="" width="100%" />
                </div>
            </div>
        </section>
        </>
      );
}
 
export default Gallery;