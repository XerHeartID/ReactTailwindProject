import { useEffect } from "react";
import { useState } from "react";

function Restaurant() {
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
      <ul className="mx-16 my-4">
        {data?.map((item, id) => (
          <>
            <ul className="font-semibold flex justify-between">
              <li key={id}>{item.name}</li>
              <li key={id}>Daerah: {item.city}</li>
            </ul>
            <li key={id} className="mb-6 text-justify">
              {item.description}
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default Restaurant;
