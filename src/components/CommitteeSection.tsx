import { User, Phone, Facebook } from 'lucide-react';
import presidentImage from '@/assets/president-al-amin-raju.jpg';
import generalSecretaryImage from '@/assets/general-secretary-rakibul.jpg';
import publicitySecretaryImage from '@/assets/publicity-secretary-momin.jpg';
import treasurerImage from '@/assets/treasurer-hannan.jpg';

const committeeMembers = [
  {
    name: 'মো: আল আমিন রাজু',
    position: 'সভাপতি',
    image: presidentImage,
    phone: '01XXXXXXXXX',
    facebook: 'https://facebook.com/',
  },
  {
    name: 'মো: রাকিবুল ইসলাম',
    position: 'সাধারণ সম্পাদক',
    image: generalSecretaryImage,
    phone: '01XXXXXXXXX',
    facebook: 'https://facebook.com/',
  },
  {
    name: 'মো: আব্দুল হান্নান',
    position: 'কোষাধ্যক্ষ',
    image: treasurerImage,
    phone: '01XXXXXXXXX',
    facebook: 'https://facebook.com/',
  },
  {
    name: 'মো: আব্দুল মমিন',
    position: 'প্রচার সম্পাদক',
    image: publicitySecretaryImage,
    phone: '01XXXXXXXXX',
    facebook: 'https://facebook.com/',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-soft card-hover text-center group"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                )}
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-sm mb-3">
                {member.position}
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href={`tel:${member.phone}`}
                  className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  title="ফোন করুন"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  title="ফেসবুক"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;
