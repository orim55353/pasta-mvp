import React from "react";

import logo from "../../Assets/Pasta_loco_logo.png";
import "./container.styles.scss";

import Cateogry from "../category/category.component";

const Container = ({ data }) => (
  <div className="container">
    <div className="topImage">
      <img className="logo" src={logo} alt="logo" />
    </div>
    <div className="opening">
      <p>
        מסעדת פסטה לוקו היא מסעדה איטלקית כשרה יחידה במינה בעיר חדרה. יש אפשרות
        להרכיב מנות פסטה לפי בחירה ויש טאבון איטלקי משוגע להכנת פיצות ומאפים.
        בפסטה לוקו תוכלו להנות מאוכל איכותי, מגוון ועשיר, שרות אדיב ומהיר וכל
        זאת - בלי לצאת מהעיר !
      </p>
    </div>
    <div className="menu">
      {data.map(({ ...props }) => (
        <div>
          <Cateogry {...props}></Cateogry>
          {/* <Title title={title} img={startersBg}></Title> */}
        </div>
      ))}
      {/* <div className="starters">
        <Title cateogry="ראשונות" className="title" img={startersBg}></Title>
        <CategoryTab
          description="המנות האהובות שלנו המבוססות על הטעמים המיוחדים של איטליה, מבטיחים לכם שלא
        טעמתם דבר כזה בשום מקום אחר."
          category="מיוחדות"
          className="tab"
          direction="right"
        ></CategoryTab>
        <TableDish
          img={fukacha}
          name="פוקאצ׳ה אנטי פסטי"
          description="פוקאצ׳ה בליווי מגוון ירקות קלויים, מבצק עבודת יד שאנחנו מכינים כאן
        במקום, נאפת בתנור אבן איטלקי."
          price="25₪"
        ></TableDish>

        <CategoryTab
          description="מאפה המוכר בשמו בתרגום חופשי ״גרב״ או ״מכנסיים בתנור״, ידוע גם כ״פיצה ממולאת״"
          category="קאלצונה"
          className="tab"
          direction="left"
        ></CategoryTab>
        <TableDish
          img={fukacha}
          name="קאלצונה עגבניות"
          description="קאלצונה במילוי רוטב עגבניות וגבינת מוצרלה, מאפה חמים וטעים הנאפה בתנור אבן איטלקי מסורתי."
          price="25₪"
        ></TableDish>
      </div>
      <div className="starters">
        <Title cateogry="סלטים" className="title" img={saladBg}></Title>
        <TableDish
          img={saladBg}
          name="סלט פנצנלה"
          description="סלט איטלקי עשיר, אשר מקורו בעיר פירנצה שבטוסקנה. מגוון ירקות, גבינת פטה וקרוטונים. רוטב ווינגרט על בסיס שמן זית ולימון."
          price="25₪"
        ></TableDish>
      </div> */}
    </div>
  </div>
);

export default Container;
