import {
  Building,
  Users,
  CheckCircle,
} from "lucide-react";

const faq = [
  {
    icon: CheckCircle,
    question: "Proof of Concept",
    answer:
      "Over 1 million items autonomously checked out across North American deployments—offices, universities, hotels—demonstrating scale and reliability.",
  },
  {
    icon: Building,
    question: "Formats & Use Cases",
    answer:
      "Brysk adapts to diverse environments: Store-in-store, Micromarkets, Gyms, Transit hubs, Residential lobbies, Hotels, Campuses, Warehouses, Healthcare facilities.",
  },
  {
    icon: Users,
    question: "Who It’s For?",
    answer:
      "Entrepreneurs launching autonomous stores, property owners monetizing unused spaces, CPG brands testing new retail sites, organizations (universities, offices, hotels, hospitals) enhancing amenities with smart retail.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20"
    >
      <div className="max-w-(--breakpoint-lg)">
        <h2 className="text-3xl xs:text-4xl md:text-5xl leading-[1.15]! font-bold tracking-tight text-center mb-4">
          Brysk in Action
        </h2>
        <p className="mt-3 xs:text-lg text-center text-muted-foreground mb-10">
          Real-world proof, flexible deployments, and a solution for every operator.
        </p>
        <div className="mt-12 grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-6 -mt-px -ml-px">
              <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-accent">
                <Icon className="h-4 w-4 xs:h-6 xs:w-6" />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-lg xs:text-[1.35rem] font-semibold tracking-tight">
                <span>{question}</span>
              </div>
              <p className="text-sm xs:text-base">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
