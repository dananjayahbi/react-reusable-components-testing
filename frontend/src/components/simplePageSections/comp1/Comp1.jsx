import React from "react";
import { Card, Col, Row } from "antd";

const Comp1 = ({
  title,
  description,
  cards,
  fontFamily,
  titleFontSize,
  descriptionFontSize,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: titleFontSize ? titleFontSize : "30px",
            fontFamily: fontFamily ? fontFamily : "Arial, sans-serif",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: descriptionFontSize ? descriptionFontSize : "14px",
            fontFamily: fontFamily ? fontFamily : "Arial, sans-serif",
          }}
        >
          {description}
        </p>
      </div>
      <div style={{ padding: "20px" }}>
        <Row gutter={[16, 16]}>
          {cards.map((card, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card style={{ height: "100%" }}>
                <div style={{ paddingTop: "75%", position: "relative" }}>
                  <img
                    alt={card.cardTitle}
                    src={card.cardImage}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "85%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <Card.Meta
                  title={card.cardTitle}
                  description={card.cardDescription}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Comp1;

// Usage example for this component:
//..................................


// import React from "react";
// import Comp1 from "../components/simplePageSections/comp1/Comp1";

// const PageSections = () => {
//   const cards = [
//     {
//       cardImage:
//         "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
//       cardTitle: "Card 1 Title",
//       cardDescription: "Description for Card 1",
//     },
//     {
//       cardImage:
//         "https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/1696691175374-MJY4VWB1KS8NU3DE3JK1/Sounds-of-Nature.jpg",
//       cardTitle: "Card 2 Title",
//       cardDescription: "Description for Card 2",
//     },
//     {
//       cardImage:
//         "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
//       cardTitle: "Card 3 Title",
//       cardDescription: "Description for Card 3",
//     },
//     {
//       cardImage:
//         "https://static.theprint.in/wp-content/uploads/2022/07/Untitled-design-10-1.jpg",
//       cardTitle: "Card 4 Title",
//       cardDescription: "Description for Card 4",
//     },
//     {
//       cardImage:
//         "https://bpac.in/wp-content/uploads/2021/08/BlogsArtboard-1-copy-9.jpg",
//       cardTitle: "Card 5 Title",
//       cardDescription: "Description for Card 5",
//     },
//     {
//       cardImage:
//         "https://assets.weforum.org/article/image/DZZif56hzlwOs_HzBXT-fjzTQCb64yjMWLKsMW6OioI.jpg",
//       cardTitle: "Card 6 Title",
//       cardDescription: "Description for Card 6",
//     },
//   ];

//   return (
//     <>
//       <Comp1
//         title="Main Title"
//         description="Main Description"
//         cards={cards}
//         fontFamily="Arial, sans-serif"
//         titleFontSize={32}
//         descriptionFontSize={16}
//       />
//     </>
//   );
// };

// export default PageSections;
