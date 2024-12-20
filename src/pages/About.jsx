import bg from "../assets/bg1.jpg";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <img
          src={bg}
          alt="Camera shop hero"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            About Our Camera Shop
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Capturing Moments, Delivering Quality
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to our premium camera e-commerce shop, where we've been
            serving photography enthusiasts and professionals since 2005. Our
            passion for photography drives us to provide the best equipment and
            exceptional customer service.
          </p>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Advice",
                description:
                  "Our team of photography experts is always ready to help you find the perfect equipment.",
              },
              {
                title: "Wide Selection",
                description:
                  "We offer a comprehensive range of cameras, lenses, and accessories from top brands.",
              },
              {
                title: "Quality Guarantee",
                description:
                  "All our products come with a satisfaction guarantee and excellent after-sales support.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company History Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Our Story
          </h2>
          <div className="prose prose-lg mx-auto">
            <p>
              Founded in 2005 by a group of passionate photographers, our shop
              has grown from a small local store to a leading online destination
              for camera enthusiasts. We've always been committed to providing
              not just products, but also knowledge and support to help our
              customers capture their perfect shots.
            </p>
            <p>
              Over the years, we've built strong relationships with major camera
              brands, allowing us to offer the latest technology and exclusive
              deals to our customers. Our team has expanded to include certified
              technicians, professional photographers, and customer service
              experts, all dedicated to ensuring you have the best possible
              experience with us.
            </p>
            <p>
              As we continue to grow, our mission remains the same: to empower
              photographers of all levels with the tools and knowledge they need
              to bring their vision to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
