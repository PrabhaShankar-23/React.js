import React from "react";

import Card from "./components/card";

/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

function App() {
  return (
    <div className="contacts">
      <Card
        img={require("./images/mr-whiskerson.png")}
        name="Mr. Whiskerson"
        icon_phone={require("./images/phone-icon.png")}
        icon_mail={require("./images/mail-icon.png")}
        contact="(212) 555-1234"
        mail_id="mr.whiskaz@catnap.meow"
      />

      <Card
        img={require("./images/fluffykins.png")}
        name="Fluffykins"
        icon_phone={require("./images/phone-icon.png")}
        icon_mail={require("./images/mail-icon.png")}
        contact="(212) 555-2345"
        mail_id="fluff@me.com"
      />

      <Card
        img={require("./images/felix.png")}
        name="Felix"
        icon_phone={require("./images/phone-icon.png")}
        icon_mail={require("./images/mail-icon.png")}
        contact="(212) 555-4567"
        mail_id="thecat@hotmail.com"
      />

      <Card
        img={require("./images/pumpkin.png")}
        name="Pumpkin"
        icon_phone={require("./images/phone-icon.png")}
        icon_mail={require("./images/mail-icon.png")}
        contact="(0800) CAT KING"
        mail_id="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
