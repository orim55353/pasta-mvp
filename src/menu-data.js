const MENU_DATA = [
  {
    id: 1,
    title: "ראשונות",
    img: "../../Assets/starters_bg.png",
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
            image: "../../Assets/starters_bg.png",
            price: 25,
            rating: 4.2,
          },
          {
            id: 2,
            name: "מאפה לוקו מלוח",
            description:
              "מאפה במילוי גבינות וירקות קלויים לצד רוטב עגבניות, נאפה בתנור אבן איטלקי.",
            imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
            price: 25,
            rating: 4.2,
          },
          {
            id: 3,
            name: "פולנטה",
            description:
              "עם פטריות, עגבניות שרי, פרמז׳ן ושמן כמהין, יוצא חם חם מהתנור.",
            imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
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
            image: "../../Assets/starters_bg.png",
            price: 18,
            rating: 4.2,
          },
          {
            id: 2,
            name: "קאלצונה תרד וגבינות",
            description:
              "קאלצונה במילוי רוטב עגבניות ותרד , מאפה חמים וטעים הנאפה בתנור אבן איטלקי מסורתי.",
            imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
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
              "פוקאצ׳ה עם פלפל קלוי, חציל קלוי וגבינת פטה, מבצק עבודת יד שאנחנו מכינים כאן במקום, נאפת בתנור אבן איטלקי.",
            image: "../../Assets/starters_bg.png",
            price: 18,
            rating: 4.2,
          },
          {
            id: 2,
            name: "פוקאצ׳ה קלאסית",
            description:
              "פוקאצ׳ה עם אליו אוליו שמן זית, מלח ופלפל גרוס, מבצק עבודת יד שאנחנו מכינים במקום, נאפת בתנור אבן איטלקי. *מוגשת בליווי מתבלים",
            imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
            price: 15,
            rating: 4.2,
          },
          {
            id: 3,
            name: "פוקאצ׳ה שרי",
            description:
              "פוקאצ׳ה עם פסטו, מוצרלה ועגבניות שרי, מבצק עבודת יד שאנחנו מכינים כאן במקום, נאפת בתנור אבן איטלקי.",
            imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
            price: 18,
            rating: 4.2,
          },
          {
            id: 4,
            name: "פוקאצ׳ה גבינה כחולה",
            description:
              "פוקאצ׳ה עם קוביות בטטה, בצל וגבינה כחולה, מבצק עבודת יד שאנחנו מכינים כאן במקום, נאפת בתנור אבן איטלקי.",
            imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
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
    img: "../../Assets/salad.jpg",
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
              "מקורו בחבל קמפניה שבדרום איטליה, עם עגבניות חממה, מגוון עגבניות שרי, גבינת מוצרלה פרסקה, פסטו, חומץ בלסמי, בזיליקום, שום וקרוטונים.",
            image: "../../Assets/starters_bg.png",
            price: 32,
            rating: 4.2,
          },
          {
            id: 2,
            name: "סלט פנצנלה",
            description:
              "סלט איטלקי עשיר, אשר מקורו בעיר פירנצה שבטוסקנה. מגוון ירקות, גבינת פטה וקרוטונים. רוטב ווינגרט על בסיס שמן זית ולימון.",
            image: "../../Assets/starters_bg.png",
            price: 25,
            rating: 4.2,
          },
          {
            id: 3,
            name: "סלט פסטה קר",
            description:
              "פסטה, עגבניות מיובשות, שעועית ירוקה, גבינת פטה, עשבי תיבול, זיתים ירוקים, סלרי, בצל ירוק + סגול, רוטב ווינגרט על בסיס שמן זית ולימון.",
            imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
            price: 30,
            rating: 4.2,
          },
          {
            id: 4,
            name: "סלט קינואה",
            description:
              "סלט עם קוביות בטטה, חמוציות, עשבי תיבול, בצל סגול, גרעיני דלעת ווינגרט הדרים.",
            imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
            price: 37,
            rating: 4.2,
          },
        ],
      },
    ],
  },
];

export default MENU_DATA;
