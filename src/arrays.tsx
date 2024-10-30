import {
  FaInstagram,
  FaFacebookF,
  FaPencilAlt,
  FaChartLine,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPinterest,
  FaTiktok,
  FaCamera,
  FaVideo,
  FaHashtag,
  FaAd,
  FaUserFriends,
  FaChartBar,
} from "react-icons/fa";
type services = {
  title: string;
  description: string;
  icon: React.ReactNode;
  price: string;
  color: string;
};
export const services = (language: string) => {
  return [
    {
      title: language === "ar" ? "نمو الإنستغرام" : "Instagram Growth",
      description:
        language === "ar"
          ? "زيادة متابعين الإنستغرام والتفاعل"
          : "Increase your Instagram followers and engagement",
      icon: <FaInstagram />,
      price: language === "ar" ? "299$ شهريا" : "$299/month",
      color: "text-pink-500",
    },
    {
      title: language === "ar" ? "إعلانات فيسبوك" : "Facebook Ads",
      description:
        language === "ar"
          ? "تشغيل حملات إعلانية مستهدفة على فيسبوك لعملك"
          : "Run targeted Facebook ad campaigns for your business",
      icon: <FaFacebookF />,
      price: language === "ar" ? "499$ شهريا" : "$499/month",
      color: "text-blue-600",
    },
    {
      title: language === "ar" ? "إنشاء المحتوى" : "Content Creation",
      description:
        language === "ar"
          ? "احصل على محتوى عالي الجودة لحسابات التواصل الاجتماعي الخاصة بك"
          : "Get high-quality content for your social media profiles",
      icon: <FaPencilAlt />,
      price: language === "ar" ? "399$ شهريا" : "$399/month",
      color: "text-purple-500",
    },
    {
      title:
        language === "ar"
          ? "إدارة وسائل التواصل الاجتماعي"
          : "Social Media Management",
      description:
        language === "ar"
          ? "دعنا نتولى تواجدك على وسائل التواصل الاجتماعي"
          : "Let us handle your social media presence",
      icon: <FaChartLine />,
      price: language === "ar" ? "799$ شهريا" : "$799/month",
      color: "text-green-600",
    },
    {
      title: language === "ar" ? "تسويق تويتر" : "Twitter Marketing",
      description:
        language === "ar"
          ? "زيادة متابعيك على تويتر وزيادة التفاعل"
          : "Grow your Twitter following and increase engagement",
      icon: <FaTwitter />,
      price: language === "ar" ? "249$ شهريا" : "$249/month",
      color: "text-sky-500",
    },
    {
      title: language === "ar" ? "تحسين لينكد إن" : "LinkedIn Optimization",
      description:
        language === "ar"
          ? "تحسين شبكتك المهنية وحضور عملك"
          : "Improve your professional network and business presence",
      icon: <FaLinkedinIn />,
      price: language === "ar" ? "349$ شهريا" : "$349/month",
      color: "text-blue-700",
    },
    {
      title: language === "ar" ? "نمو قناة يوتيوب" : "YouTube Channel Growth",
      description:
        language === "ar"
          ? "زيادة مشتركي اليوتيوب ومشاهدات الفيديو"
          : "Increase your YouTube subscribers and video views",
      icon: <FaYoutube />,
      price: language === "ar" ? "599$ شهريا" : "$599/month",
      color: "text-red-600",
    },
    {
      title: language === "ar" ? "تسويق بينتريست" : "Pinterest Marketing",
      description:
        language === "ar"
          ? "توجيه حركة المرور إلى موقعك من خلال بينتريست"
          : "Drive traffic to your website through Pinterest",
      icon: <FaPinterest />,
      price: language === "ar" ? "199$ شهريا" : "$199/month",
      color: "text-red-500",
    },
    {
      title:
        language === "ar"
          ? "تسويق المؤثرين على تيك توك"
          : "TikTok Influencer Marketing",
      description:
        language === "ar"
          ? "الاستفادة من مؤثري تيك توك لعلامتك التجارية"
          : "Leverage TikTok influencers for your brand",
      icon: <FaTiktok />,
      price: language === "ar" ? "449$ شهريا" : "$449/month",
      color: "text-gray-800",
    },
    {
      title:
        language === "ar"
          ? "التصوير للتواصل الاجتماعي"
          : "Social Media Photography",
      description:
        language === "ar"
          ? "تصوير احترافي لحسابات التواصل الاجتماعي الخاصة بك"
          : "Professional photography for your social media accounts",
      icon: <FaCamera />,
      price: language === "ar" ? "299$ للجلسة" : "$299/session",
      color: "text-indigo-500",
    },
    {
      title: language === "ar" ? "إنتاج الفيديو" : "Video Production",
      description:
        language === "ar"
          ? "إنشاء مقاطع فيديو جذابة لقنوات التواصل الاجتماعي الخاصة بك"
          : "Create engaging videos for your social media channels",
      icon: <FaVideo />,
      price: language === "ar" ? "799$ للفيديو" : "$799/video",
      color: "text-orange-500",
    },
    {
      title: language === "ar" ? "استراتيجية الهاشتاج" : "Hashtag Strategy",
      description:
        language === "ar"
          ? "تطوير استراتيجيات هاشتاج فعالة للوصول الأفضل"
          : "Develop effective hashtag strategies for better reach",
      icon: <FaHashtag />,
      price: language === "ar" ? "149$ شهريا" : "$149/month",
      color: "text-blue-400",
    },
    {
      title:
        language === "ar"
          ? "إعلانات التواصل الاجتماعي"
          : "Social Media Advertising",
      description:
        language === "ar"
          ? "حملات إعلانية شاملة عبر منصات التواصل الاجتماعي"
          : "Comprehensive social media ad campaigns across platforms",
      icon: <FaAd />,
      price: language === "ar" ? "999$ شهريا" : "$999/month",
      color: "text-yellow-500",
    },
    {
      title: language === "ar" ? "التواصل مع المؤثرين" : "Influencer Outreach",
      description:
        language === "ar"
          ? "التواصل مع المؤثرين لتعزيز رسالة علامتك التجارية"
          : "Connect with influencers to amplify your brand message",
      icon: <FaUserFriends />,
      price: language === "ar" ? "599$ للحملة" : "$599/campaign",
      color: "text-teal-500",
    },
    {
      title:
        language === "ar" ? "التحليلات والتقارير" : "Analytics and Reporting",
      description:
        language === "ar"
          ? "تحليل وتقارير معمقة لأداء وسائل التواصل الاجتماعي الخاصة بك"
          : "In-depth analysis and reporting of your social media performance",
      icon: <FaChartBar />,
      price: language === "ar" ? "249$ شهريا" : "$249/month",
      color: "text-cyan-500",
    },
  ];
};
