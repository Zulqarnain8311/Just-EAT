import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-5 border-t border-gray-200">
      <div className="container">
        <ul className="text-sm flex justify-center gap-5">
          <li className="text-[#000] hover:underline">
            <Link to="/">Diventa Partner Just Eat</Link>
          </li>
          <li className="text-[#000] hover:underline">
            <Link to="/">Lavora con noi</Link>
          </li>
          <li className="text-[#000] hover:underline">
            <Link to="/">Termini di servizio</Link>
          </li>
          <li className="text-[#000] hover:underline">
            <Link to="/">Informativa sulla privacy</Link>
          </li>
          <li className="text-[#000] hover:underline">
            <Link to="/">Informazioni legali</Link>
          </li>
        </ul>
        <div className="flex items-center justify-center mt-5">
          © 2025 Just Eat
        </div>
      </div>
    </footer>
  );
}

export default Footer;
