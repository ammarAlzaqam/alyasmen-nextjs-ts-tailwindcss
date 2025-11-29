import mediaLinks from "@/constants/mediaLinks";
import linksList from "@/constants/navigationLinks";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-800 pt-20 border-b border-b-primary-800">
      <div className="main-container">
        <div className="grid md:grid-cols-5 gap-x-0 gap-y-14 sm:gap-14 lg:gap-24">
          {/*//! Logo && des */}
          <div className="col-span-2 space-y-3">
            <Image
              src="/assets/footer/logo.png"
              alt="footer-logo-image"
              width={250}
              height={180.5042266845703}
            />
            <h3 className="text-base text-white!">
              تأسس مكتبنا استجابه للحاجة الملحوظه في سوق العمل للمهندسين ذوى
              الخبرة في مجال التصميم الداخلي والديكور ولذلك نحن متمسكون بأعلي
              معايير الاحتراف والصدق والتفاني في عملنا ونؤمن ان هذه القيم تنعكس
              على تصميماتنا ذات الاسعار التنافسيه , يلتزم مكتبنا بتزويد عملائنا
              بحلول تصميم داخلي مميزه مصممه خصيصا لتلبية احتياجاتهم وتفضيلاتهم
              الخاصة .
            </h3>
          </div>

          {/*//! Links */}
          <div className="space-y-3">
            <h2 className="text-base-bold text-white">الياسمين</h2>
            <div className="space-y-2">
              {linksList.map(({ label, route }) => (
                <Link
                  key={label}
                  href={route}
                  className="text-base text-white block opacity-75 hover:text-secondary-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/*//! Media links */}
          <div className="space-y-3">
            <h2 className="text-base-bold text-white">وسائل التواصل</h2>
            <div className="flex flex-wrap gap-x-7 gap-y-4 sm:gap-2">
              {mediaLinks.map(({ route, label, Icon }) => (
                <Link title={label} key={label} href={route} className="text-base text-white">
                  <button className="group cursor-pointer rounded-full p-2 border-[1.5px] border-white/25">
                    <Icon className="text-white size-4 group-hover:text-secondary-200" />
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/*//!Contact email */}
          <div className="space-y-3">
            <h2 className="text-base-bold text-white">تواصل</h2>
            <Link href="" className="text-base text-white opacity-75 hover:text-secondary-200">
              @alyasmeen.com
            </Link>
          </div>
        </div>

        {/*//! Divider */}
        <div className="mt-3 w-full max-w-[1108px] h-0.5 bg-white opacity-20 mx-auto" />
      </div>

      {/*//! copy write */}
      <div className="text-center pb-5 pt-7">
        <h3 className="text-base-bold text-white">جميع الحقوق محفوظة</h3>
      </div>
    </footer>
  );
}
