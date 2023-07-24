import img1 from "../../assets/banner 1.jpg"

const Home = () => {
  return (
    <div>
      <section className="">
        <div className="relative">
          <img src={img1} className="w-full h-[550px]"/>
          <div className="absolute flex items-center w-full h-full left-0 top-0 bg-black opacity-70">
            <div className="text-white space-y-7 text-center mx-auto w-1/2">
              <h2 className="text-5xl font-bold">
              Connecting You to College Services and Facilities
              </h2>
              <p className="text-xl font-bold">
               Your Effortless College Booking Platform. Discover, book, and review college services and facilities hassle-free
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
