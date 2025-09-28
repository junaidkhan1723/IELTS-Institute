import {
  Calendar,
  ChevronRight,
  Star,
  Headphones,
  Mic,
  PenTool,
  MessageCircle,
} from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-red-50 to-red-100 px-4 pt-25 sm:pt-0 pb-12 sm:pb-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
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

          {/* Right side  */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Listening</h3>
                    <p className="text-gray-600 text-sm">
                      Master audio comprehension
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Reading</h3>
                    <p className="text-gray-600 text-sm">
                      Improve text analysis skills
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <PenTool className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Writing</h3>
                    <p className="text-gray-600 text-sm">
                      Perfect your written English
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Mic className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Speaking</h3>
                    <p className="text-gray-600 text-sm">
                      Build confidence & fluency
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating circles */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
