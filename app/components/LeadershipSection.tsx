import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type LeadershipRole = {
  name: string;
  title: string;
  imageSrc: string;
};

const leadershipData: LeadershipRole[] = [
  {
    name: "Prof. Sunday Paul Bako",
    title: "Vice-Chancellor, Taraba State University",
    imageSrc: "/images/leadership/vc.png",
  },
  {
    name: "Prof. Chris Amuche",
    title: "Provost, College of Postgraduate Studies",
    imageSrc: "/images/leadership/provost.png",
  },
  {
    name: "Dr. [Name]",
    title: "Deputy Provost, College of Postgraduate Studies",
    imageSrc: "/images/leadership/deputy-provost.png",
  },
  {
    name: "Dr. John Danjuma",
    title: "Secretary, College of Postgraduate Studies",
    imageSrc: "/images/leadership/sec.png",
  },
];



export function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="bg-white py-10 border-t border-gray-200"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Institutional Leadership (For Reference)
        </h2>

        {/* Leadership Cards */}
        <div className="mt-10 grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {leadershipData.map((leader) => (
            <Card key={leader.title} className="text-center shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Image
                  src={leader.imageSrc}
                  alt={leader.name}
                  width={120}
                  height={120}
                  className="mx-auto rounded-full object-cover"
                />
                <p className="mt-4 font-semibold text-[#003366]">{leader.name}</p>
                <p className="mt-1 text-sm text-gray-600">{leader.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 max-w-4xl text-sm italic text-gray-600 mx-auto text-center">
          The inclusion of leadership images and titles is for institutional reference only. 
          This platform is an independent initiative and is not an official channel of Taraba State University.
        </p>
      </div>
    </section>
  );
}
