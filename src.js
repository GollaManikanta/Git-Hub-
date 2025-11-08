import React from "react";

export default function ResourceList({ resources }) {
  return (
    <div className="space-y-3 mb-6">
      {resources.length === 0 ? (
        <p className="text-center text-gray-500">No resources found.</p>
      ) : (
        resources.map((res) => (
          <div
            key={res.id}
            className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500"
          >
            <h2 className="text-xl font-semibold">{res.title}</h2>
            <p className="text-sm text-gray-600">Type: {res.type}</p>
            <a
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Visit Resource
            </a>
          </div>
        ))
      )}
    </div>
  );
}
