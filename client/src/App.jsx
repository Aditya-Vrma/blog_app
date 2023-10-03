import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <header>
        <a href="  " className="logo">
          Myblog
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>

      <div className="post">
        <div className="image">
          <img
            src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1406973674_20190829171223_20190829171515.png"
            alt=""
          />
        </div>

        <div className="texts">
          <h2>Famous Jakhu Mandir of Lord Hanuman</h2>
          <p className="info">
            <a href="" className="author">
              Aditya Verma
            </a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            voluptates nihil praesentium placeat saepe, aut quisquam eius
            doloribus sequi perspiciatis dolorem id optio beatae quibusdam
            corrupti laboriosam cupiditate error ea. Nesciunt illo maxime
            excepturi vitae mollitia quos iste quidem, consectetur eaque ullam
            perspiciatis aspernatur ea sunt molestias fugiat. Quibusdam nulla
            possimus, hic nostrum excepturi voluptatibus repellat libero.
            Voluptate, adipisci sunt?
          </p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img
            src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1406973674_20190829171223_20190829171515.png"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Famous Jakhu Mandir of Lord Hanuman</h2>
          <p className="info">
            <a href="" className="author">
              Aditya Verma
            </a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            voluptates nihil praesentium placeat saepe, aut quisquam eius
            doloribus sequi perspiciatis dolorem id optio beatae quibusdam
            corrupti laboriosam cupiditate error ea. Nesciunt illo maxime
            excepturi vitae mollitia quos iste quidem, consectetur eaque ullam
            perspiciatis aspernatur ea sunt molestias fugiat. Quibusdam nulla
            possimus, hic nostrum excepturi voluptatibus repellat libero.
            Voluptate, adipisci sunt?
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1406973674_20190829171223_20190829171515.png"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Famous Jakhu Mandir of Lord Hanuman</h2>
          <p className="info">
            <a href="" className="author">
              Aditya Verma
            </a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            voluptates nihil praesentium placeat saepe, aut quisquam eius
            doloribus sequi perspiciatis dolorem id optio beatae quibusdam
            corrupti laboriosam cupiditate error ea. Nesciunt illo maxime
            excepturi vitae mollitia quos iste quidem, consectetur eaque ullam
            perspiciatis aspernatur ea sunt molestias fugiat. Quibusdam nulla
            possimus, hic nostrum excepturi voluptatibus repellat libero.
            Voluptate, adipisci sunt?
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
