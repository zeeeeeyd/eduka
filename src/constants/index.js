import {
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
  } from "../utils";

export const navList = ['Learn','Blogs','Events','About'];

export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Online tutos",
        "The best way to learn more",
        "Best offers at very competitive prices",
      ],
      video: highlightFirstVideo,
      videoDuration: 3,
    },
    {
      id: 2,
      textLists: ["Online courses", "In one Click. Just get ready to study."],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "QCM & Tests",
        "Test your revision",
        "New tests every time",
      ],
      video: highlightThirdVideo,
      videoDuration: 4,
    },
    {
      id: 4,
      textLists: ["Many others things.", "What are you waiting for ?"],
      video: highlightFourthVideo,
      videoDuration: 3.5,
    },
  ];