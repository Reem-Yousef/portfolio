import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // ── Nav ──
      nav: {
        home: "Home", about: "About", skills: "Skills",
        projects: "Projects", certifications: "Certifications", contact: "Contact",
      },

      // ── Hero ──
      hero: {
        greeting: "HEY, I'M ·",
        desc: "Full-stack developer & UI/UX designer who turns ideas into fast, polished products — one clean commit at a time.",
        viewWork: "View Work", getInTouch: "Get in Touch",
        roles: ["Full-Stack Developer", "UI/UX Designer", "Freelance Engineer"],
      },

      // ── About ──
      about: {
        title: "Who I am",
        titleAccent: "& What I offer",
        p1: "Reem Yousef — a full-stack developer & UI/UX designer with a strong blend of creativity and technical expertise. I bring a unique perspective to building digital products. From designing intuitive user experiences to developing scalable web applications, I focus on creating solutions that are both functional and engaging. Passionate about continuous learning, problem-solving, and turning ideas into impactful, user-centered products.",
        p2: "Creative developer at heart, builder by habit — I thrive at the intersection of design, performance, and developer experience.",
        downloadCV: "Download CV",
      },

      // ── Skills ──
      skills: {
        title: "Skills",
        titleAccent: "I have",
        subtitle: "A snapshot of the tools, languages, and frameworks I work with day to day.",
        cats: {
          languages: "Programming Languages",
          frontend:  "Frontend",
          backend:   "Backend",
          database:  "Database",
          uiux:      "UI/UX Design",
          others:    "Others",
        },
      },

      // ── Projects ──
      projects: {
        title: "Things I've",
        titleAccent: "Built",
        subtitle: "A selection of projects I've shipped — from space-themed exams to full-stack platforms.",
        viewDemo: "Live Demo", viewCode: "Source Code",
        frontend: "Frontend", backend: "Backend", comingSoon: "Coming Soon",
        items: {
          spaceExam: {
            title: "Space Examination System",
            desc: "Interactive online exam platform with a space theme — features a countdown timer, question flagging, dynamic result pages, and localStorage-based routing. Built entirely with vanilla HTML, CSS, and ES6.",
          },
          plantsShop: {
            title: "Plants E-Commerce",
            desc: "Full-stack plant shop with product listings, cart, checkout, and Stripe payment integration. Features a clean Angular frontend powered by a Node.js/Express backend.",
          },
          dental: {
            title: "Dental Clinic Platform",
            desc: "Online dental clinic with patient-facing appointment booking and a full admin dashboard for managing schedules, patient records, and clinic operations.",
          },
          coins: {
            title: "Coins Online Store",
            desc: "TikTok currency converter platform with a full admin dashboard for managing conversion packages, pricing, and social media links.",
          },
          tmkun: {
            title: "Tmkun — UI/UX Design",
            desc: "End-to-end UI/UX design for an educational assessment platform. Covers user research, wireframes, component system, and high-fidelity prototypes.",
          },
          socialMedia: {
            title: "Social Media App",
            desc: "A social platform currently in development — focused on community interaction, real-time feeds, and a clean modern interface.",
          },
          eduPlatform: {
            title: "Educational Platform",
            desc: "A learning management system in progress — built for structured course delivery, progress tracking, and student–instructor interaction.",
          },
        },
      },

      // ── Certifications ──
      certifications: {
        title: "Certifications",
        subtitle: "Professional credentials earned through structured programs and hands-on training.",
        viewCredential: "View Credential", comingSoon: "Link coming soon",
        items: {
          uiux:     { title: "UI/UX Design",        issuer: "ITI",            duration: "1 Month"  },
          cs50:     { title: "CS50x",                issuer: "Harvard / edX",  duration: "1 Month"  },
          software: { title: "Software Fundamentals", issuer: "ITI",           duration: "4 Months" },
          mearn:    { title: "MEARN Full Stack",      issuer: "ITI",           duration: "4 Months" },
        },
      },

      // ── Contact ──
      contact: {
        title: "Get in", titleAccent: "Touch",
        subtitle: "Have a project in mind? I respond within 24 hours.",
        namePlaceholder: "Your Name", emailPlaceholder: "Your Email",
        messagePlaceholder: "Describe your project...",
        send: "Send Message →", sending: "Sending...",
        successMsg: "Message sent successfully! ✓",
        errorMsg: "Error sending message. Please try again.",
        errorFields: "Please fill in all fields.",
      },
    },
  },

  // ════════════════════════════════════════════════════════════════════════════
  ar: {
    translation: {
      // ── Nav ──
      nav: {
        home: "الرئيسية", about: "عني", skills: "المهارات",
        projects: "المشاريع", certifications: "الشهادات", contact: "تواصل",
      },

      // ── Hero ──
      hero: {
        greeting: "· مرحباً، أنا",
        desc: "مطورة full-stack ومصممة UI/UX أحوّل الأفكار إلى منتجات سريعة ومصقولة — commit بعد commit.",
        viewWork: "شاهد أعمالي", getInTouch: "تواصل معي",
        roles: ["مطورة Full-Stack", "مصممة UI/UX", "مهندسة مستقلة"],
      },

      // ── About ──
      about: {
        title: "من أنا",
        titleAccent: "وماذا أقدم",
        p1: "ريم يوسف — مطورة full-stack ومصممة UI/UX تجمع بين الإبداع والخبرة التقنية في آنٍ واحد. أحمل رؤية فريدة لبناء المنتجات الرقمية؛ من تصميم تجارب مستخدم سلسة وبديهية، إلى تطوير تطبيقات ويب قابلة للتوسع والنمو. أؤمن بأن الحل الجيد هو الذي يكون وظيفياً وجذاباً في الوقت ذاته. أنا شغوفة بالتعلم المستمر، وحل المشكلات، وتحويل الأفكار إلى منتجات مؤثرة تضع المستخدم في قلب كل قرار.",
        p2: "مطورة بالفطرة وبانية بالعادة — أزدهر عند نقطة التقاطع بين التصميم والأداء وتجربة المطور. أؤمن أن الكود الجميل والتصميم الجيد وجهان لعملة واحدة.",
        downloadCV: "تحميل السيرة الذاتية",
      },

      // ── Skills ──
      skills: {
        title: "مهاراتي",
        titleAccent: "",
        subtitle: "لمحة عن الأدوات واللغات والأُطر البرمجية التي أعمل بها يومياً.",
        cats: {
          languages: "لغات البرمجة",
          frontend:  "الواجهة الأمامية",
          backend:   "الواجهة الخلفية",
          database:  "قواعد البيانات",
          uiux:      "تصميم UI/UX",
          others:    "أدوات أخرى",
        },
      },

      // ── Projects ──
      projects: {
        title: "ما قمت",
        titleAccent: "ببنائه",
        subtitle: "مجموعة مختارة من المشاريع التي أطلقتها — من اختبارات تفاعلية إلى منصات full-stack متكاملة.",
        viewDemo: "معاينة مباشرة", viewCode: "الكود المصدري",
        frontend: "واجهة أمامية", backend: "واجهة خلفية", comingSoon: "قريباً",
        items: {
          spaceExam: {
            title: "منصة الاختبارات الفضائية",
            desc: "منصة اختبارات تفاعلية بتصميم فضائي — تتضمن مؤقتاً تنازلياً، وتعليم الأسئلة، وصفحات نتائج ديناميكية، وتوجيهاً يعتمد على localStorage. مبنية بالكامل بـ HTML وCSS وES6.",
          },
          plantsShop: {
            title: "متجر النباتات الإلكتروني",
            desc: "متجر نباتات full-stack يشمل عرض المنتجات، وسلة التسوق، والدفع، ودمج Stripe للمدفوعات. واجهة أمامية بـ Angular مدعومة بـ Node.js وExpress في الخلفية.",
          },
          dental: {
            title: "منصة العيادة السنية",
            desc: "عيادة أسنان إلكترونية تتيح للمرضى حجز المواعيد، مع لوحة تحكم كاملة لإدارة الجداول وسجلات المرضى وعمليات العيادة.",
          },
          coins: {
            title: "متجر العملات الإلكترونية",
            desc: "منصة تحويل عملات TikTok مع لوحة تحكم كاملة لإدارة باقات التحويل والأسعار وروابط التواصل الاجتماعي.",
          },
          tmkun: {
            title: "تمكّن — تصميم UI/UX",
            desc: "تصميم UI/UX متكامل لمنصة تقييم تعليمي. يشمل أبحاث المستخدم والنماذج الأولية ونظام المكونات والنماذج عالية الدقة.",
          },
          socialMedia: {
            title: "تطبيق التواصل الاجتماعي",
            desc: "منصة اجتماعية قيد التطوير حالياً — تركز على التفاعل المجتمعي والخلاصات في الوقت الفعلي وواجهة حديثة وأنيقة.",
          },
          eduPlatform: {
            title: "المنصة التعليمية",
            desc: "نظام إدارة تعلّم قيد التطوير — مصمم لتقديم المقررات بشكل منظم وتتبع التقدم وتعزيز التفاعل بين الطلاب والمدربين.",
          },
        },
      },

      // ── Certifications ──
      certifications: {
        title: "الشهادات",
        subtitle: "شهادات احترافية حصلت عليها من برامج منظمة وتدريب عملي متخصص.",
        viewCredential: "عرض الشهادة", comingSoon: "الرابط قريباً",
        items: {
          uiux:     { title: "تصميم UI/UX",          issuer: "ITI",            duration: "شهر واحد"    },
          cs50:     { title: "CS50x",                 issuer: "Harvard / edX",  duration: "شهر واحد"    },
          software: { title: "أساسيات البرمجة",       issuer: "ITI",            duration: "٤ أشهر"      },
          mearn:    { title: "MEARN Full Stack",       issuer: "ITI",            duration: "٤ أشهر"      },
        },
      },

      // ── Contact ──
      contact: {
        title: "تواصل", titleAccent: "معي",
        subtitle: "لديك مشروع في ذهنك؟ أرد خلال 24 ساعة.",
        namePlaceholder: "الاسم", emailPlaceholder: "البريد الإلكتروني",
        messagePlaceholder: "اوصف مشروعك...",
        send: "إرسال الرسالة ←", sending: "جارٍ الإرسال...",
        successMsg: "تم إرسال الرسالة بنجاح! ✓",
        errorMsg: "خطأ في الإرسال. حاول مرة أخرى.",
        errorFields: "يرجى ملء جميع الحقول.",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;