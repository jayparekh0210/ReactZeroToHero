import { useEffect, useState } from "react";
import { Res_Menu_URL_1, Res_Menu_URL_2 } from "../Helper/Constant";

const useRestarauntMenu = (resId) => {
  const [resName, setResName] = useState(null);
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    getResInfo();
  }, []);

  const getResInfo = async () => {
    const data = await fetch(Res_Menu_URL_1 + resId + Res_Menu_URL_2);
    const json = await data.json();
    setResName(json.data.cards[0].card.card.info);
    setMenu(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  };

  return [resName, menu];
};

export default useRestarauntMenu;
