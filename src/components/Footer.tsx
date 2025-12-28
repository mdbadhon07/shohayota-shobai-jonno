import { Heart } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container-narrow mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img
            src={logo}
            alt="নব জোয়ার তরুণ সংঘ"
            className="w-20 h-20 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">নব জোয়ার তরুণ সংঘ</h3>
          <p className="text-primary-foreground/70 text-sm mb-6 max-w-md">
            মানুষ মানুষের জন্য — এই বিশ্বাসে আমরা কাজ করে যাচ্ছি ২০২০ সাল থেকে।
          </p>

          <div className="flex items-center gap-1 text-sm text-primary-foreground/60">
            <span>তৈরি করা হয়েছে</span>
            <Heart size={14} className="text-primary mx-1" />
            <span>দিয়ে</span>
          </div>

          <div className="mt-6 pt-6 border-t border-primary-foreground/20 w-full text-center">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} নব জোয়ার তরুণ সংঘ। সর্বস্বত্ব সংরক্ষিত।
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
