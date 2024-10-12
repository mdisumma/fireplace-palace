import Card from "./card/card";
import { ImageCard } from "@/components/image/image";

const contents = [
  {
    image: "/images/how-it-works-1.png",
    alt: "description",
    title: "Give a a call...",
    description:
      "Call us and book in a 'Design Consultation' on a date and time that suits you.",
    width: 340,
    height: 340,
  },
  {
    image: "/images/how-it-works-2.png",
    alt: "description",
    title: "We come to you...",
    description:
      "We come to your home to do an assessment of the space and to your style preference.",
    width: 340,
    height: 340,
  },
  {
    image: "/images/how-it-works-3.png",
    alt: "description",
    title: "We reccomend...",
    description: "We send you a bespoke set of fireplace recommendations.",
    width: 340,
    height: 340,
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="cards-container">
      <h2 className="cards-title">How It Works</h2>
      <div className="card-container">
        {contents.map((content) => (
          <Card
            image={
              <ImageCard
                src={content.image}
                alt={content.alt}
                width={content.width}
                height={content.height}
                className="card-image"
              />
            }
            key={content.title}
            title={content.title}
            description={content.description}
          />
        ))}

      </div>
    </section>
  );
}

export default HowItWorks;
