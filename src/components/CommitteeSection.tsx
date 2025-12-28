import { User } from 'lucide-react';

const committeeMembers = [
  {
    name: 'সদস্যের নাম',
    position: 'সভাপতি',
    role: 'president',
  },
  {
    name: 'সদস্যের নাম',
    position: 'সহ-সভাপতি',
    role: 'vice-president',
  },
  {
    name: 'সদস্যের নাম',
    position: 'সাধারণ সম্পাদক',
    role: 'general-secretary',
  },
  {
    name: 'সদস্যের নাম',
    position: 'সেক্রেটারি',
    role: 'secretary',
  },
  {
    name: 'সদস্যের নাম',
    position: 'কোষাধ্যক্ষ',
    role: 'treasurer',
  },
  {
    name: 'সদস্যের নাম',
    position: 'প্রচার সম্পাদক',
    role: 'publicity-secretary',
  },
];

const CommitteeSection = () => {
  return (
    <section id="committee" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">আমাদের দল</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            কমিটি মেম্বার
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            যারা নিরলসভাবে কাজ করে যাচ্ছেন সমাজের সেবায়
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-soft card-hover text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <User className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-sm">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;
