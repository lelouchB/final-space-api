---
id: react
title: React
hide_title: false
hide_table_of_contents: false
keywords:
  - final space
  - finalspace
  - finalspaceapi
  - final space wiki
  - api
  - restapi
  - rest api
  - example
  - react
description: A live example of the Final Space API using React.
---

You can play around with this live example and add new features, styles and so much more.


:::tip Hint 
Uncomment the following line:
 ```jsx
 <div className="card--text">{character.species}</div>
 ```

 PS: remove `{/* */}`
:::


```jsx live
function App() {
  const [data, setData] = useState([]);

  const cardStyle = {
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    padding: "12px",
    marginBottom: "10px",
    textAlign: "center",
    backgroundColor: "#fafafa",
  };
  const rootStyle = {
    margin: "0 auto",
    width: "max-content",
    padding: "0 10px",
  };
  useEffect(() => {
    fetch("https://finalspaceapi.com/api/v0/character")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="root" style={rootStyle}>
      {data.slice(0, 5).map((character) => (
        <div className="card" style={cardStyle} key={character.id}>
          <div className="card--image">
            <img src={character.img_url} alt={character.name} />{" "}
          </div>
          <div className="card--title">{character.name}</div>
         {/* <div className="card--text">{character.species}</div>*/}
        </div>
      ))}
    </div>
  );
}
```
