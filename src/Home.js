import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  let data = [
    {
      img: "logo512.png",
      course: "React",
      desc: "React Course",
    },
    {
      img: "logo512.png",
      course: "Angular",
      desc: "Angular Course",
    },
    {
      img: "logo512.png",
      course: "Vue",
      desc: "Vue Course",
    },
    {
        img: "logo512.png",
        course: "Java",
        desc: "Java Course",
      },
  ];
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {data.map((elem, index) => {
            return (
              <div key={index} className="col-2">
                <div className="card text-center" style={{height:'16rem' ,width: "12rem",borderColor:'grey',borderWidth:'2px'}}>
                  <img className="d-block mx-auto" style={{height:'7rem',width:'7rem'}} src={elem.img} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">{elem.course}</h5>
                    <p className="card-text">{elem.desc}</p>
                    <button href="#" className="btn btn-primary">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
