import {Link} from "react-router-dom"

export default function App() {
  return (
    <div>
      <h1>리액트로 만든 페이지임</h1>
      <nav>
        <Link to="/deploy">to deploy page</Link><br/>
        <Link to="send">to send page</Link>
      </nav>
    </div>
  );
}
