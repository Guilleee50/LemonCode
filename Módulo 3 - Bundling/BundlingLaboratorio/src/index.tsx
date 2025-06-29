import React from "react";
import  { AverageComponent } from "./average-component"
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
    <AverageComponent />
)