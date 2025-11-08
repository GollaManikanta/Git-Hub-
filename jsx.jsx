import React, { useState } from "react";
import ResourceList from "./components/ResourceList";
import AddResourceForm from "./components/AddResourceForm";

export default function App() {
  const [resources, setResources] = useState([
    { id: 1, title: "React Documentation", type: "Website", link: "https://react.dev" },
    { id: 2, title: "JavaScript Guide", type: "Book", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  ]);

  const [search, setSearch] = useState("");

  const addResource = (newResource) => {
    setResources([...resources, { id: Date.now(), ...newResource }]);
  };

  const filteredResources = resources.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <h1>web based</h1>
      </div>
    </div>
  );
}
