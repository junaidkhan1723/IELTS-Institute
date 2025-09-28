import {
  Headphones,
  Mic,
  PenTool,
  MessageCircle,
  ChevronRight,
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

  const colorClasses = {
    red: {
      bg: "bg-red-50",
      icon: "bg-red-100 text-red-600",
      border: "border-red-200",
      button: "bg-red-600 hover:bg-red-700",
    },
    blue: {
      bg: "bg-blue-50",
      icon: "bg-blue-100 text-blue-600",
      border: "border-blue-200",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    green: {
      bg: "bg-green-50",
      icon: "bg-green-100 text-green-600",
      border: "border-green-200",
      button: "bg-green-600 hover:bg-green-700",
    },
    purple: {
      bg: "bg-purple-50",
      icon: "bg-purple-100 text-purple-600",
      border: "border-purple-200",
      button: "bg-purple-600 hover:bg-purple-700",
    },
  };

  return (
    <div className="min-h-screen flex items-center py-16 px-4 bg-gray-50">
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
            const colors = colorClasses[format.color];
            const IconComponent = format.icon;

            return (
              <div
                key={format.title}
                className={`${colors.bg} ${colors.border} border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Icon and Title */}
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 ${colors.icon} rounded-full flex items-center justify-center mx-auto mb-4`}
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

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {format.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full ${colors.button} text-white py-3 rounded-full font-medium transition-colors cursor-pointer`}
                >
                  Prepare Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestFormatCards;
