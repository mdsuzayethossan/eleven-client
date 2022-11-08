import React from "react";
import PracticeCard from "./PracticeCard";

const Care = () => {
  const Ways = [
    {
      title: "Don’t go to bed without brushing your teeth",
      description:
        "It’s no secret that the general recommendation is to brush at least twice a day. Still, many of us continue to neglect brushing our teeth at night. But brushing before bed gets rid of the germs and plaque that accumulate throughout the day.",
    },
    {
      title: "Brush properly",
      description:
        "The way you brush is equally important — in fact, doing a poor job of brushing your teeth is almost as bad as not brushing at all. Take your time, moving the toothbrush in gentle, circular motions to remove plaque. Unremoved plaque can harden, leading to calculus buildup and gingivitis (early gum disease).",
    },
    {
      title: "Don’t neglect your tongue",
      description:
        "Plaque can also build up on your tongue. Not only can this lead to bad mouth odor, but it can lead to other oral health problems. Gently brush your tongue every time you brush your teeth.",
    },
    {
      title: "Use a fluoride toothpaste",
      description:
        "When it comes to toothpaste, there are more important elements to look for than whitening power and flavors. No matter which version you choose, make sure it contains fluoride. While fluoride has come under scrutiny by those worried about how it impacts other areas of health, this substance remains a mainstay in oral health. This is because fluoride is a leading defense against tooth decay. It works by fighting germs that can lead to decay, as well as providing a protective barrier for your teeth.",
    },
    {
      title: "Treat flossing as important as brushing",
      description:
        "Many who brush regularly neglect to floss. Flossing is not just for getting little pieces of food or broccoli that may be getting stuck in between your teeth, as Jonathan Schwartz, DDS. points out. “It’s really a way to stimulate the gums, reduce plaque, and help lower inflammation in the area.” Flossing once a day is usually enough to reap these benefits.",
    },
    {
      title: "Don’t let flossing difficulties stop you",
      description:
        "Flossing can be difficult, especially for young children and older adults with arthritis. Rather than give up, look for tools that can help you floss your teeth. Ready-to-use dental flossers from the drugstore can make a difference.",
    },
    {
      title: "Consider mouthwash",
      description:
        "Advertisements make mouthwash seem necessary for good oral health, but many people skip them because they don’t know how they work. Schwartz says mouthwash helps in three ways: It reduces the amount of acid in the mouth, cleans hard-to-brush areas in and around the gums, and re-mineralizes the teeth. “Mouthwashes are useful as an adjunct tool to help bring things into balance,” he explains. “I think in children and older people, where the ability to brush and floss may not be ideal, a mouthwash is particularly helpful.” Ask your dentist for specific mouthwash recommendations. Certain brands are best for children, and those with sensitive teeth. Prescription mouthwash is also available.",
    },
    {
      title: "Drink more water",
      description:
        "Water continues to be the best beverage for your overall health — including oral health. Also, as a rule of thumb, Schwartz recommends drinking water after every meal. This can help wash out some of the negative effects of sticky and acidic foods and beverages in between brushes.",
    },
    {
      title: "Eat crunchy fruits and vegetables",
      description:
        "Ready-to-eat foods are convenient, but perhaps not so much when it comes to your teeth. Eating fresh, crunchy produce not only contains more healthy fiber, but it’s also the best choice for your teeth. “I tell parents to get their kids on harder-to-eat and chew foods at a younger age,” says Schwartz. “So try to avoid the overly mushy processed stuff, stop cutting things into tiny pieces, and get those jaws working!”",
    },
    {
      title: "Limit sugary and acidic foods",
      description:
        "Ultimately, sugar converts into acid in the mouth, which can then erode the enamel of your teeth. These acids are what lead to cavities. Acidic fruits, teas, and coffee can also wear down tooth enamel. While you don’t necessarily have to avoid such foods altogether, it doesn’t hurt to be mindful.",
    },
    {
      title: "See your dentist at least twice a year",
      description:
        "Your own everyday habits are crucial to your overall oral health. Still, even the most dutiful brushers and flossers need to see a dentist regularly. At minimum, you should see your dentist for cleanings and checkups twice a year. Not only can a dentist remove calculus and look for cavities, but they will also be able to spot potential issues and offer treatment solutions. Some dental insurance companies even cover more frequent dental checkups. If this is the case for you, take advantage of it. Doing so is especially helpful if you have a history of dental issues, such as gingivitis or frequent cavities.",
    },
  ];
  return (
    <>
      <h2 className="font-semibold text-4xl text-center mb-7">
        11 Ways to Keep Your Teeth Healthy
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mb-20">
        {Ways.map((way, index) => (
          <PracticeCard key={index} way={way}></PracticeCard>
        ))}
      </div>
    </>
  );
};

export default Care;
