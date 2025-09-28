import { Calendar, ChevronRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-red-50 to-red-100 pt-30 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* main content */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Master Your <span className="text-red-600">IELTS</span> Journey
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Achieve your dream IELTS score with our comprehensive preparation
            courses, expert guidance, and proven strategies. Join thousands of
            successful candidates.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-gray-700 font-medium">4.9/5 Rating</span>
            </div>
            <div className="text-gray-700 font-medium">10,000+ Students</div>
            <div className="text-gray-700 font-medium">95% Success Rate</div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors cursor-pointer">
              <Calendar className="w-5 h-5" />
              Book Your Test
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-red-600 border-2 border-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
              Start Preparation
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
