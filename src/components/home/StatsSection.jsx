const stats = [
    {
      number: "10M+",
      label: "Active Users"
    },
    {
      number: "50K+",
      label: "Verified Doctors"
    },
    {
      number: "1,200+",
      label: "Partner Hospitals"
    },
    {
      number: "99%",
      label: "User Satisfaction"
    }
  ];
  
  export function StatsSection() {
    return (
      <section className="bg-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-teal-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } 