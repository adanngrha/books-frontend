import { logout } from "../../api";  
import { useNavigate } from "react-router-dom";

function Header({ token }) {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await logout(token);
      console.log(response.data);
      localStorage.removeItem('token')
      navigate('/login')
    } catch (error) {
      alert('service error');
      console.error(error);
    }
  };
  
  return (
    <header className="p-1 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li className="nav-link px-2 text-white">Ardan's Books</li>
        </ul>

        <div className="text-end">
          <form onSubmit={handleSubmit}>
            <button type="submit" className="btn btn-outline-light me-2">Logout</button>
          </form>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header