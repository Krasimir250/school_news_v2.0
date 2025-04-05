import empty from "../images/empty.png";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function Gallery() {
  return (
    <>
      <Header />
      <main>
        <p className="text-center text-3xl my-4 font-medium">
          Галерия на училището
        </p>
        <div className="w-full flex ">
          <img src={empty} alt="test" className="w-1/4 p-5" />
          <img src={empty} alt="test" className="w-1/4 p-5" />
          <img src={empty} alt="test" className="w-1/4 p-5" />
          <img src={empty} alt="test" className="w-1/4 p-5" />
        </div>
        <div className="w-full flex ">
          <img src={empty} alt="test" className="w-1/4 p-5" />
          <img src={empty} alt="test" className="w-1/4 p-5" />
          <img src={empty} alt="test" className="w-1/4 p-5" />
          <img src={empty} alt="test" className="w-1/4 p-5" />
        </div>
        <div className="w-full flex ">
          <img src={empty} alt="test" className="w-1/4 p-5" />
          <img src={empty} alt="test" className="w-1/4 p-5" />
          <img src={empty} alt="test" className="w-1/4 p-5" />
          <img src={empty} alt="test" className="w-1/4 p-5" />
        </div>
        <div className="w-full flex ">
          <img src={empty} alt="test" className="w-1/4 p-5" />
          <img src={empty} alt="test" className="w-1/4 p-5" />
          <img src={empty} alt="test" className="w-1/4 p-5" />
          <img src={empty} alt="test" className="w-1/4 p-5" />
        </div>
        <div className="w-full flex ">
          <img src={empty} alt="test" className="w-1/4 p-5" />
          <img src={empty} alt="test" className="w-1/4 p-5" />
          <img src={empty} alt="test" className="w-1/4 p-5" />
          <img src={empty} alt="test" className="w-1/4 p-5" />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Gallery;
