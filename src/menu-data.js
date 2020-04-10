const MENU_DATA = [
  {
    id: 1,
    title: "ראשונות",
    img: "/starters_bg.png",
    categories: [
      {
        id: 1,
        name: "מיוחדות",
        description:
          "המנות האהובות שלנו המבוססות על הטעמים המיוחדים של איטליה, מבטיחים לכם שלא טעמתם דבר כזה בשום מקום אחר.",
        dishes: [
          {
            id: 1,
            name: "מנת אנטי פסטי",
            description:
              "מגוון ירקות קלויים לצד פוקאצ׳ה קלאסית הנאפת בתנור אבן איטלקי",
            imageUrl: "/starters_bg.png",
            price: 25,
            rating: 4.2,
          },
          {
            id: 2,
            name: "מאפה לוקו מלוח",
            description:
              "מאפה במילוי גבינות וירקות קלויים לצד רוטב עגבניות, נאפה בתנור אבן איטלקי.",
            imageUrl: "/starters_bg.png",
            price: 25,
            rating: 4.2,
          },
          {
            id: 3,
            name: "פולנטה",
            description:
              "עם פטריות, עגבניות שרי, פרמז׳ן ושמן כמהין, יוצא חם חם מהתנור.",
            imageUrl: "/starters_bg.png",
            price: 42,
            rating: 4.2,
          },
        ],
      },
      {
        id: 2,
        name: "קאלצונה",
        description:
          "מאפה המוכר בשמו בתרגום חופשי ״גרב״ או ״מכנסיים בתנור״, ידוע גם כ״פיצה ממולאת״",
        dishes: [
          {
            id: 1,
            name: "קאלצונה עגבניות",
            description:
              "קאלצונה במילוי רוטב עגבניות וגבינת מוצרלה, מאפה חמים וטעים הנאפה בתנור אבן איטלקי מסורתי.",
            imageUrl: "/starters_bg.png",
            price: 18,
            rating: 4.2,
          },
          {
            id: 2,
            name: "קאלצונה תרד וגבינות",
            description:
              "קאלצונה במילוי רוטב עגבניות ותרד , מאפה חמים וטעים הנאפה בתנור אבן איטלקי מסורתי.",
            imageUrl: "/starters_bg.png",
            price: 18,
            rating: 4.2,
          },
        ],
      },
      {
        id: 3,
        name: "פוקאצ׳ה",
        description: "הפוקאצ׳ה ידועה במחוז ליגוריה אשר בצפון מערב איטליה.",
        dishes: [
          {
            id: 1,
            name: "פוקאצ׳ה אנטי פסטי",
            description:
              "פוקאצ׳ה עם פלפל קלוי, חציל קלוי וגבינת פטה, נאפת בתנור אבן איטלקי.",
            imageUrl: "/starters_bg.png",
            price: 18,
            rating: 4.2,
          },
          {
            id: 2,
            name: "פוקאצ׳ה קלאסית",
            description:
              "פוקאצ׳ה עם אליו אוליו שמן זית, מלח ופלפל גרוס, נאפת בתנור אבן איטלקי. *מוגשת בליווי מתבלים",
            imageUrl: "/starters_bg.png",
            price: 15,
            rating: 4.2,
          },
          {
            id: 3,
            name: "פוקאצ׳ה שרי",
            description:
              "פוקאצ׳ה עם פסטו, מוצרלה ועגבניות שרי, מבצק עבודת יד שאנחנו מכינים כאן במקום, נאפת בתנור אבן איטלקי.",
            imageUrl: "/starters_bg.png",
            price: 18,
            rating: 4.2,
          },
          {
            id: 4,
            name: "פוקאצ׳ה גבינה כחולה",
            description:
              "פוקאצ׳ה עם קוביות בטטה, בצל וגבינה כחולה, נאפת בתנור אבן איטלקי.",
            imageUrl: "/starters_bg.png",
            price: 18,
            rating: 4.2,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "סלטים",
    img: "/salad.jpg",
    categories: [
      {
        id: -1,
        name: "",
        description: "",
        dishes: [
          {
            id: 1,
            name: "סלט קפרזה",
            description:
              "סלט שמקורו בחבל קמפניה, עם עגבניות חממה, מגוון עגבניות שרי, גבינת מוצרלה פרסקה, פסטו, חומץ בלסמי, בזיליקום, שום וקרוטונים.",
            imageUrl: "/salad.jpg",
            price: 32,
            rating: 4.2,
          },
          {
            id: 2,
            name: "סלט פנצנלה",
            description:
              "סלט איטלקי עשיר, אשר מקורו בעיר פירנצה שבטוסקנה. מגוון ירקות, גבינת פטה וקרוטונים. רוטב ווינגרט על בסיס שמן זית ולימון.",
            imageUrl: "/salad.jpg",
            price: 25,
            rating: 4.2,
          },
          {
            id: 3,
            name: "סלט פסטה קר",
            description:
              "פסטה, עגבניות מיובשות, שעועית ירוקה, גבינת פטה, עשבי תיבול, זיתים ירוקים, סלרי, בצל ירוק + סגול, רוטב ווינגרט על בסיס שמן זית ולימון.",
            imageUrl: "/salad.jpg",
            price: 30,
            rating: 4.2,
          },
          {
            id: 4,
            name: "סלט קינואה",
            description:
              "סלט עם קוביות בטטה, חמוציות, עשבי תיבול, בצל סגול, גרעיני דלעת ווינגרט הדרים.",
            imageUrl: "/salad.jpg",
            price: 37,
            rating: 4.2,
          },
        ],
      },
    ],
  },
  {
    id: -1,
    title: "פסטה",
    img: "/pasta_2.jpg",
    categories: [
      {
        id: 1,
        name: "",
        description: "",
        pastas: [
          {
            id: 1,
            name: "פנה טריו",
            imageUrl: "/pene.png",
            price: 0,
          },
          {
            id: 2,
            name: "בלרינה",
            imageUrl: "/balerina.png",
            price: 0,
          },
          {
            id: 3,
            name: "ספגטי",
            imageUrl: "/spageti.png",
            price: 0,
          },
          {
            id: 4,
            name: "פטוצ׳יני",
            imageUrl: "/fatochini.png",
            price: 0,
          },
          {
            id: 5,
            name: "ניוקי תפו״א",
            imageUrl: "/balerina.png",
            price: 4,
          },
          {
            id: 5,
            name: "דואט ניוקי",
            imageUrl: "/balerina.png",
            price: 6,
          },
          {
            id: 6,
            name: "רביולי גבינות / בטטה",
            imageUrl: "/ravioli.png",
            price: 10,
          },
          {
            id: 7,
            name: "מיקס רביולי",
            imageUrl: "/ravioli.png",
            price: 10,
          },
          {
            id: 8,
            name: "ניוקי / פסטה ללא גלוטן",
            imageUrl: "/pene.png",
            price: 5,
          },
        ],
      },
    ],
  },
];

export default MENU_DATA;
