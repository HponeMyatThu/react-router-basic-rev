import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetail() {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>CareerDetail : {career.title}</h2>
      <p>Starting salary : {career.salary}</p>
      <p>Location : {career.location}</p>
      <div className="details">
        <h2>Detail</h2>
        <p>Lorem</p>
      </div>
    </div>
  );
}

export const careerDetailLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  if (!res.ok) {
    throw Error("Could not fetch single career");
  }
  return res.json();
};
