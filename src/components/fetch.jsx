import { useEffect } from "react";
import { useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restaurant-api.dicoding.dev/list")
      .then((res) => res.json())
      .then((result) => setData(result.restaurants))
      .catch((error) => console.log("data unavailable", error));
  }, []);

  console.log(data);
  if (!data) return "Loading..";

  return (
    <>
      <div>
        <ul className="">
          {data?.map((item, id) => (
            <>
              <ul className="font-bold flex justify-between">
                <li key={id}>{item.name}</li>
                <li key={id}>{item.city}</li>
              </ul>
              <li key={id} className="mb-4 text-justify">
                {item.description}
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Fetch;
