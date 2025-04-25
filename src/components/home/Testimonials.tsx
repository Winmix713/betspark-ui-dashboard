
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Professional Bettor",
    content: "The AI predictions are incredibly accurate. I've improved my win rate by 40% since using this platform.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Sports Enthusiast",
    content: "Easy to use and the real-time odds updates are game-changing. Highly recommended!",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Fantasy League Player",
    content: "The statistical insights have helped me make much better betting decisions. Great platform!",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900/20 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">
          What Our Users Say
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Join thousands of satisfied users who trust our platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
