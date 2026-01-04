import { Phone, Facebook, User } from 'lucide-react';

const committeeMembers = [
  { position: 'সভাপতি', name: 'আব্দুল্লাহ আল-আমিন', phone: '', facebook: '' },
  { position: 'সহ-সভাপতি', name: 'মো: রিমন হোসেন', phone: '', facebook: '' },
  { position: 'সহ-সভাপতি', name: 'মো: হাবিবুর রহমান', phone: '', facebook: '' },
  { position: 'সাধারণ সম্পাদক', name: 'মো: রাকিবুল ইসলাম', phone: '', facebook: '' },
  { position: 'যুগ্ম সাধারণ সম্পাদক', name: 'মো: কুরবান আলী', phone: '', facebook: '' },
  { position: 'সাংগঠনিক সম্পাদক', name: 'মো: শামীম আলী', phone: '', facebook: '' },
  { position: 'সহ-সাংগঠনিক সম্পাদক', name: 'মো: জুবায়ের আহমেদ', phone: '', facebook: '' },
  { position: 'কোষাধ্যক্ষ', name: 'মো: আব্দুল হান্নান', phone: '', facebook: '' },
  { position: 'প্রচার সম্পাদক', name: 'মো: আব্দুল মমিন', phone: '', facebook: '' },
  { position: 'সহ-প্রচার সম্পাদক', name: 'মো: হাসিবুর রহমান', phone: '', facebook: '' },
  { position: 'ক্রীড়া সম্পাদক', name: 'মো: মাসুদ রানা', phone: '', facebook: '' },
  { position: 'সহ-ক্রীড়া সম্পাদক', name: 'মো: গালিব মাহমুদ', phone: '', facebook: '' },
  { position: 'সমাজসেবা বিষয়ক সম্পাদক', name: 'মো: আশফাক আহমেদ বাধন', phone: '', facebook: '' },
  { position: 'উপ-সমাজসেবা বিষয়ক সম্পাদক', name: 'শ্রী সজিব কুমার', phone: '', facebook: '' },
  { position: 'ত্রাণ ও দুর্যোগ সম্পাদক', name: 'মাহমুদুল হাসান হৃদয়', phone: '', facebook: '' },
  { position: 'উপ-ত্রাণ ও দুর্যোগ সম্পাদক', name: 'মাহমুদ হাসান রকি', phone: '', facebook: '' },
  { position: 'ছাত্রবৃত্তি সম্পাদক', name: 'মো: মুস্তাকিন', phone: '', facebook: '' },
  { position: 'দপ্তর সম্পাদক', name: 'আব্দুল মাজেদ', phone: '', facebook: '' },
];

const executiveMembers = [
  'মো: রায়হান বাবু',
  'মো: তাহামিদুল ইসলাম সৈকত',
  'মো: আরাফাত',
  'রোহান আহমেদ',
  'মো: আকাশ',
  'মাসুদ রানা',
  'রিফাত আহমেদ',
  'মো: ইমরান',
  'মো: জাবের আহমেদ',
  'মো: নাইম ইসলাম',
  'মো: সাদিক',
];

const advisors = [
  { name: 'হাফেজ মো: নুরুজ্জামান', title: 'উপদেষ্টা' },
  { name: 'মো: সাগর আলী', title: 'উপদেষ্টা' },
  { name: 'আশরাফুল আলম', title: 'উপদেষ্টা' },
  { name: 'রাসেল মাহমুদ', title: 'উপদেষ্টা' },
];

const FullCommitteeSection = () => {
  return (
    <section id="full-committee" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">কার্যকরী পরিষদ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            পূর্ণ কমিটি (২০২৬-২০২৭)
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            নব জোয়ার তরুণ সংঘ এর সম্পূর্ণ কার্যকরী পরিষদ
          </p>
        </div>

        {/* Main Committee Members */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 mb-12">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-soft card-hover text-center group border border-border/50"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors bg-primary/10 flex items-center justify-center">
                <User className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-xs sm:text-sm leading-tight mb-0.5">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-[10px] sm:text-xs mb-2">
                {member.position}
              </p>
              {(member.phone || member.facebook) && (
                <div className="flex justify-center gap-1.5">
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      title="ফোন করুন"
                    >
                      <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </a>
                  )}
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      title="ফেসবুক"
                    >
                      <Facebook className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Executive Members */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground text-center mb-6">
            কার্যকরী সদস্য
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {executiveMembers.map((name, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div>
          <h3 className="text-xl font-bold text-foreground text-center mb-6">
            উপদেষ্টা কর্তৃক অনুমোদিত
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-muted/30 p-4 rounded-xl text-center"
              >
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium text-foreground text-sm">
                  {advisor.name}
                </h4>
                <p className="text-muted-foreground text-xs">{advisor.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullCommitteeSection;
