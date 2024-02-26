import React from "react";
import Comp1 from "../components/simplePageSections/comp1/Comp1";

const PageSections = () => {
  const cards = [
    {
      cardImage:
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
      cardTitle: "Card 1 Title",
      cardDescription: "Description for Card 1",
    },
    {
      cardImage:
        "https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/1696691175374-MJY4VWB1KS8NU3DE3JK1/Sounds-of-Nature.jpg",
      cardTitle: "Card 2 Title",
      cardDescription: "Description for Card 2",
    },
    {
      cardImage:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      cardTitle: "Card 3 Title",
      cardDescription: "Description for Card 3",
    },
    {
      cardImage:
        "https://static.theprint.in/wp-content/uploads/2022/07/Untitled-design-10-1.jpg",
      cardTitle: "Card 4 Title",
      cardDescription: "Description for Card 4",
    },
    {
      cardImage:
        "https://bpac.in/wp-content/uploads/2021/08/BlogsArtboard-1-copy-9.jpg",
      cardTitle: "Card 5 Title",
      cardDescription: "Description for Card 5",
    },
    {
      cardImage:
        "https://assets.weforum.org/article/image/DZZif56hzlwOs_HzBXT-fjzTQCb64yjMWLKsMW6OioI.jpg",
      cardTitle: "Card 6 Title",
      cardDescription: "Description for Card 6",
    },
  ];

  return (
    <>
      <Comp1
        title="Main Title"
        description="Main Description"
        cards={cards}
        fontFamily="Arial, sans-serif"
        titleFontSize={32}
        descriptionFontSize={16}
      />
    </>
  );
};

export default PageSections;
