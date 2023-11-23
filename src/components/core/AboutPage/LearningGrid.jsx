import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "News Shared by",
    highliteText: "Anyone, Anywhere",
    description:
      "Empowering Voices, Inspiring Perspectives: Our platform is a hub for news shared by anyone, anywhere. Unleash the power of community-driven storytelling, where diverse voices converge to shape a shared narrative. Join us in celebrating the stories that connect us all, transcending boundaries and fostering a global exchange of ideas.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Global Collaboration",
    description:
      "Connect with a worldwide community of contributors, sharing news and perspectives from every corner of the globe.",
  },
  {
    order: 2,
    heading: "Local Insights, Global Impact",
    description:
      "Amplify local stories to a global audience, recognizing the significance of diverse narratives and their collective influence on a global scale",
  },
  {
    order: 3,
    heading: "Open Forum for Ideas",
    description:
      "Embrace an open platform where anyone can contribute, fostering a rich tapestry of ideas and insights that spark meaningful conversations.",
  },
  {
    order: 4,
    heading: "Citizen Journalism Unleashed",
    description:
      "Empower individuals to become citizen journalists, sharing firsthand accounts and unique perspectives on events that matter most to them.",
  },
  {
    order: 5,
    heading: "A Tapestry of Stories",
    description:
      "Weave together a rich tapestry of stories contributed by individuals worldwide, creating a mosaic of experiences that reflects the shared human narrative.",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-richblack-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highliteText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
