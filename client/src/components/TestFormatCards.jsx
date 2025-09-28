import {
  Headphones,
  Mic,
  PenTool,
  MessageCircle,
} from "lucide-react";

const TestFormatCards = () => {
  const formats = [
    {
      icon: Headphones,
      title: "Listening",
      duration: "30 minutes",
      description:
        "4 sections with increasing difficulty. Listen to recordings answer questions.",
      color: "red",
      features: ["Academic & General", "40 Questions", "Multiple Accents"],
    },
    {
      icon: Mic,
      title: "Speaking",
      duration: "15-20 minutes",
      description:
        "Face-to-face conversation with examiner in three distinct parts.",
      color: "blue",
      features: [
        "Part 1: Introduction",
        "Part 2: Individual Talk",
        "Part 3: Discussion",
      ],
    },
    {
      icon: PenTool,
      title: "Writing",
      duration: "60 minutes",
      description: "Two writing tasks testing different skills and text types.",
      color: "green",
      features: ["Task 1: Report/Letter", "Task 2: Essay", "150 & 250 words"],
    },
    {
      icon: MessageCircle,
      title: "Reading",
      duration: "60 minutes",
      description:
        "Three reading passages with 40 questions testing comprehension.",
      color: "purple",
      features: ["Academic Texts", "40 Questions", "Various Question Types"],
    },
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            IELTS Test Formats
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understanding the four components of IELTS is crucial for your
            success. Master each section with our targeted preparation.
          </p>
        </div>

        {/* Test Format Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {formats.map((format) => {
            const IconComponent = format.icon;

            return (
              <div
                key={format.title}
                className={` border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Icon and Title */}
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {format.title}
                  </h3>
                  <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full">
                    {format.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
                  {format.description}
                </p>
              </div>
            );
          })}
        </div>

       
      </div>
    </div>
  );
};

export default TestFormatCards;
