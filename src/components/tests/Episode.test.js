import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";

test("renders without error", () => {
    render(<Episode episode={exampleEpisodeData}/>);
});

test("renders the summary test passed as prop", () => {
    render(<Episode episode={exampleEpisodeData}/>);
    const summary = screen.queryByText(/test summary/i);
    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).toHaveTextContent("test summary");
});

test("renders default image when image is not defined", () => {
    render(<Episode episode={exampleEpisodeWithoutImage}/>);
    const image = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png');
    expect(image).toBeInTheDocument();
});
    
// ----- EXAMPLE EPISODE TEST OBJECT -----
 const exampleEpisodeData = {
   id: 553946,
   image: "https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg",
   name: "Chapter One: The Vanishing of Will Byers",
   number: 1,
   runtime: 49,
   season: 1,
   summary: "test summary"
};

const exampleEpisodeWithoutImage = {
    id: 553946,
    image: null,
    name: "Chapter One: The Vanishing of Will Byers",
    number: 1,
    runtime: 49,
    season: 1,
    summary: "test summary"
 };
