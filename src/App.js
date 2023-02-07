import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
export default function App() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        console.table(response.data);
        if (response.status == 200) {
          setMyData(response.data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>body</th>
        </tr>
        {myData.map((post) => {
          const { id, title, body } = post;
          return (
            <tr>
              <td>{id}</td>
              <td>{title}</td>
              <td>{body}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
