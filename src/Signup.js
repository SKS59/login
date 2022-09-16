import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function Signup() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  let navigate=useNavigate();
  const handleSubmit = () =>{
    // if(email==='abc@gmail.com' && password==='1234'){
      navigate('/login')
    // }
  }
  return (
    <>
    <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
              <p className="text-white-50 mb-5">Please Enter Your Data</p>

              <div className="form-outline form-white mb-4">
                <input placeholder='Email id' value={email} onChange={(e)=> setemail(e.target.value)} type="email" id="typeEmailX" className="form-control form-control-lg" />
              </div>
              

              <div className="form-outline form-white mb-4">
                <input placeholder='password' value={password} onChange={(e)=> setpassword(e.target.value)} type="password" id="typePasswordX" className="form-control form-control-lg" />
              </div>

              <div className="form-outline form-white mb-4">
                <input placeholder='First Name' value={firstname} onChange={(e)=> setfirstname(e.target.value)} type="text" id="typeEmailX" className="form-control form-control-lg" />
              </div>

              <div className="form-outline form-white mb-4">
                <input placeholder='Last Name' value={lastname} onChange={(e)=> setlastname(e.target.value)} type="text" id="typeEmailX" className="form-control form-control-lg" />
              </div>

              <button onClick={handleSubmit} className="btn btn-outline-info btn-lg px-5" type="submit">Signup</button>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default Signup;
