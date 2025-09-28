import { Quote, Star, User, Calendar } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Junaid Khan",
      location: "India",
      score: "Band 8.5",
      image: "JK",
      rating: 5,
      text: "IELTS Pro transformed my preparation journey completely. The structured approach and expert guidance helped me achieve my target score in just 3 months. The speaking practice sessions were incredibly helpful!",
      course: "Academic IELTS",
    },
    {
      name: "Prithviraj Raghuvanshi",
      location: "Bol Bachhan",
      score: "Band 9.0",
      image: "PR",
      rating: 5,
      text: "Before this center my English was baby crawling.Now my English is cheetah running.Grammar people doing mistake, not me.This IELTS is English Taj Mahal.thanking full-hearted for English-full tongue",
      course: "General IELTS",
    },
    {
      name: "Priya Sharma",
      location: "India",
      score: "Band 8.0",
      image: "PS",
      rating: 5,
      text: "The mock tests were exactly like the real exam. The platform's user-friendly interface and comprehensive materials helped me build confidence. Thank you IELTS Pro team!",
      course: "Academic IELTS",
    },
    {
      name: "Ahmed Rashid",
      location: "UAE",
      score: "Band 8.5",
      image: "AR",
      rating: 5,
      text: "Outstanding preparation materials and excellent teacher support. The listening practice with different accents was particularly valuable. Achieved my dream score for university admission!",
      course: "Academic IELTS",
    },
    {
      name: "Emma W.",
      location: "Australia",
      score: "Band 7.5",
      image: "EW",
      rating: 5,
      text: "IELTS Pro's flexible schedule worked perfectly with my job. The online classes were interactive and engaging. The reading strategies helped me improve significantly.",
      course: "General IELTS",
    },
    {
      name: "Carlos R.",
      location: "Spain",
      score: "Band 8.0",
      image: "CR",
      rating: 5,
      text: "From Band 6 to Band 8 in just 2 months! The personalized feedback on writing tasks and speaking practice made the difference. Excellent value for money.",
      course: "Academic IELTS",
    },
  ];

  return (
    <div className="min-h-screen flex items-center py-8 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our students achieved their IELTS goals and transformed
            their futures. Join thousands of successful candidates who trusted
            IELTS Pro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-red-200" />
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.score}
                </span>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Student Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-semibold text-sm">
                    {testimonial.image}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.location}
                  </p>
                  <p className="text-red-600 text-sm font-medium">
                    {testimonial.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-red-600 mb-2">
              10,000+
            </div>
            <div className="text-gray-600 font-medium">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-red-600 mb-2">95%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-red-600 mb-2">
              4.9/5
            </div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-red-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Countries</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Start your IELTS preparation journey today and achieve the score you
            need for your dreams. Expert guidance, proven methods, guaranteed
            results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-red-600 bg-white rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
              <User className="w-5 h-5" />
              Start Free Trial
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-red-600 transition-colors cursor-pointer">
              <Calendar className="w-5 h-5" />
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
