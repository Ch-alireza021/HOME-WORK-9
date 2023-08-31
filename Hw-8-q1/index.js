let advertising = document.querySelector(".main-advertising");
console.log(advertising);
let advertise = [
  {
    pic: "./img/canon.webp",
    Title: "دوربین کنون",
    detail: ["در حد نو ", " 14/500/000 تومان ", "لحظاتی پیش در افسریه"],
  },
  {
    pic: "./img/advertising-image/mavic air.webp",
    Title: " Mavic air2s",
    detail: ["در حد نو ", " ۵۷,۰۰۰,۰۰۰ تومان", "لحظاتی پیش در خاوران "],
  },
  {
    pic: "./img/advertising-image/clicl.webp",
    Title: "طرح کلیک 1400 کم کار ",
    detail: ["", " ۵۷,۵۰۰,۰۰۰ تومان", "۱ ساعت پیش در فلاح"],
  },
  {
    pic: "./img/advertising-image/zaferanie.webp",
    Title: "۱۰۰ متر خوش نقشه",
    detail: [
      " ودیعه: ۸۰۰,۰۰۰,۰۰۰ تومان  ",
      "    اجاره: ۳۰,۰۰۰,۰۰۰ تومان",
      "آژانس املاک ملکا زعفرانیه ",
    ],
  },
  {
    pic: "./img/advertising-image/bmw.webp",
    Title: "بی‌ام‌و سری 3 کروک 335i",
    detail: ["۱۰۲,۰۰۰ کیلومتر", " ۱۱,۱۱۱,۱۱۱ تومان", " ۵ ساعت پیش در پاسداران"],
  },
  {
    pic: "./img/advertising-image/clock.webp",
    Title: "ساعت فوق لاکچری و خفن",
    detail: ["نو", "۳۰۰,۰۰۰ تومان", "لحظاتی پیش در آشتیانی"],
  },
  {
    pic: "./img/advertising-image/havan.webp",
    Title: "هاون قدیمی و عتیقه",
    detail: ["", "۳,۰۰۰,۰۰۰,۰۰۰ تومان", "لحظاتی پیش در تهرانپارس شرقی"],
  },
  //   {
  //     pic: ,
  //     Title:""
  //     detail:["","",""]
  //   },
];

function repeat(addTag) {
  advertise.forEach((item, index) => {
    const html = ` 
    <!-- ---------- advertise ${index + 1} ---------- -->
    <div class="advertising">
                  <div class="content">
                    <h2 class="font-medium text-black">${item.Title}</h2>
                    <div class="details">
                      <span>${item.detail[0]} </span>
                      <span>${item.detail[1]} </span>
                      <span> ${item.detail[2]} </span>
                    </div>
                  </div>
                  <div class="img relative">
                    <img
                      src="./img/chat.svg"
                      class="absolute bottom-[4px] right-[-20px]"
                      alt=""
                    />
                    <img
                      width="136"
                      height="136"
                      alt=""
                      class="rounded-md ${addTag}"
                    />
                  </div>
                </div>`;
    advertising.insertAdjacentHTML("beforeend", html);
    let addImg = document.querySelectorAll(`.${addTag}`);
    addImg[index].setAttribute("src", `${item.pic}`);
  });
}
repeat('a');
repeat('b');
repeat('c');
repeat('d');
repeat('e');
repeat('f');
repeat('g');

// ----------------- aside ----------=--
let asideCat = document.querySelector(".asid-categori");

let asideCategori = [
  {
    icon: "./img/icon/home-outline.svg",
    Title: "املاک",
  },
  {
    icon: "./img/icon/icons8-car-50.png",
    Title: "وسایل نقلیه",
  },
  {
    icon: "./img/icon/mobile.svg",
    Title: "کالای دیجیتال",
  },
  {
    icon: "./img/icon/icons8-table-lights-50.png",
    Title: "خانه و آشپزخانه",
  },
  {
    icon: "./img/icon/icons8-paint-brush-20.png",
    Title: "خدمات",
  },
  {
    icon: "./img/icon/icons8-watch-24.png",
    Title: "وسایل شخصی",
  },
  {
    icon: "./img/icon/icons8-dice-64.png",
    Title: "سرگرمی و فراغت",
  },
  {
    icon: "./img/icon/icons8-social-32.png",
    Title: "اجتماعی",
  },
  {
    icon: "./img/icon/icons8-chair-48.png",
    Title: "تجهیزات و صنعتی",
  },
  {
    icon: "./img/icon/icons8-briefcase-64.png",
    Title: "استخدام و کاریابی",
  },
  {
    icon: "./img/icon/icons8-applicants-64.png",
    Title: "رزومۀ کارجویان",
  },
];

asideCategori.forEach((element) => {
  const asideHtml = `
  <div class="h-[28px] flex items-center p-y-[6px] text-sm text-gray-400 gap-2 ">
              <img src="${element.icon}" alt="">
              <span>
               ${element.Title}
              </span>
            </div>
  `;
  asideCat.insertAdjacentHTML("beforeend", asideHtml);
});
