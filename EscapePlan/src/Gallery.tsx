import Backdoor from "./assets/Backdoor.png";
import BloomBloom from "./assets/BloomBloom.png";
import FromYourLove from "./assets/FromYourLove.png";
import Denial from "./assets/Denial.webp";

type GalleryItem = {
  id: number;
  imgSrc: string;
};

const Gallery = () => {
  const data: GalleryItem[] = [
    {
      id: 1,
      imgSrc: BloomBloom,
    },
    {
      id: 2,
      imgSrc: FromYourLove,
    },
    {
      id: 3,
      imgSrc: Backdoor,
    },
  ];

  return (
    <>
      {/* Header img */}
      <div className="container">
        <div className="row mb-4"></div>
        <div className="col-12 mb-3">
          <img className="img-fluid w-100" src={Denial} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <img
                className="img-fluid"
                src={item.imgSrc}
                alt={"Gallery item ${item.id}"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
