/* IMAGES */
import Backdoor from "./assets/Backdoor.png";
import BloomBloom from "./assets/BloomBloom.png";
import FromYourLove from "./assets/FromYourLove.png";
import Denial from "./assets/Denial.webp";
import ABSPanel from "./assets/ABSPanel.png";
import AppBrand from "./assets/AppBrand.jpg";
import IMG4 from "./assets/IMG4.jpg";
import IMG5 from "./assets/IMG5.jpg";
import IMG6 from "./assets/IMG6.jpg";
import IMG7 from "./assets/IMG7.jpg";
import IMG8 from "./assets/IMG8.jpg";

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
    {
      id: 4,
      imgSrc: IMG4,
    },
    {
      id: 5,
      imgSrc: IMG5,
    },
    {
      id: 6,
      imgSrc: IMG6,
    },
  ];

  return (
    <>
      <div className="container d-flex pl-3 justify-content-center text-center">
        <h4 className="">
          Can you believe this website was made by me? Check out my Front-end
          Website{" "}
          <span>
            <strong>
              <a
                className=""
                target="blank"
                rel="noopener noreferrer"
                href="https://stackhustla.github.io/TonyTCreates.github.io/"
              >
                here!
              </a>{" "}
            </strong>
          </span>
        </h4>
      </div>
      {/* Header img */}
      <div className="container">
        <div className="row mb-4"></div>
        <div className="col-12 mb-4">
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
      {/* bottom img */}
      <div className="container">
        <div className="col-12 mb-3">
          <img className="img-fluid w-100" src={ABSPanel} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 mb-3">
            <img className="img-fluid w-100" src={IMG7} alt="" />
          </div>
          <div className="col-6 mb-3">
            <img className="img-fluid w-100" src={IMG8} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-12 mb-3">
          <img className="img-fluid w-100" src={AppBrand} alt="" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
