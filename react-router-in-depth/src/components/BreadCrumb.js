import React from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";

export default function BreadCrumb() {
  const location = useLocation();
  let currentLocation = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumbs) => crumbs !== "")
    .map((crumbs) => {
      currentLocation += `/${crumbs}`;

      return (
        <div className="crumb" key={crumbs}>
          <Link to={currentLocation}>{crumbs}</Link>
        </div>
      );
    });
  return <div className="breadcrumbs">{crumbs}</div>;
}
