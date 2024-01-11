import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(email, username, password, password2);
  };

  return (
    <div>
      <section>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        name="username"
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        onChange={(e) => setPassword2(e.target.value)}
                        name="password2"
                      />
                    </div>
                    <div>
                      <button
                        className="btn btn-dark btn-block"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                    <p style={{ color: '#393f81' }}>
                      Already have an account?{' '}
                      <Link to="/login" style={{ color: '#393f81' }}>
                        Login Now
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegisterPage;
