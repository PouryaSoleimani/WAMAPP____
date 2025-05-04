import { FaChevronLeft } from "react-icons/fa";
import { Card, CardActionArea, CardContent } from "@mui/material";
import React from "react";

interface CardProps {
      id: number;
      title: string;
      icon: React.ElementType;
}
interface CreditsCategorySingleBoxProps {
      card: CardProps;
      index: number;
      selectedCard: number;
      setSelectedCard: (index: number) => void;
}
// COMPONENT ===============================================================================================================================================================================
const CreditsCategorySingleBox: React.FC<CreditsCategorySingleBoxProps> = ({ card, index, selectedCard, setSelectedCard }) => {
      return (
            <Card key={card.id} sx={{ width: "100%", height: "auto", margin: 2, borderRadius: 2, boxShadow: 3, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <CardActionArea onClick={() => setSelectedCard(index)} data-active={selectedCard === index ? "" : undefined} sx={{ backgroundColor: selectedCard === index ? "info.main" : "background.paper", height: "100%", borderRadius: 2, color: selectedCard === index ? "dark" : "text.primary", transition: "background-color 0.3s ease", "&:hover": { backgroundColor: selectedCard === index ? "info.dark" : "action.hover" } }}>
                        <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "space-between", alignItems: "center" }}>
                              <div id="TOP" className="flex items-center justify-between w-full">
                                    {React.createElement(card.icon, { style: { fontSize: "40px", backgroundColor: "#cccccc9d", padding: "3px", borderRadius: "8px" } })}
                                    <h3 className="font-bold text-md tracking-tight">{card.title}</h3>
                                    <FaChevronLeft />
                              </div>

                              <div className="flex flex-col gap-y-4 items-stretch justify-between w-full">
                                    <div className="flex w-full items-center justify-between bg-[#cccccc9d] px-3 py-2 rounded-md mt-4">
                                          <h3>با اعتبار سنجی</h3>
                                          <h3>1 تا 10 میلیون تومان</h3>
                                    </div>
                              </div>
                        </CardContent>
                  </CardActionArea>
            </Card>
      );
};

export default CreditsCategorySingleBox;
