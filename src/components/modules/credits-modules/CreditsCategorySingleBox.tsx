import { Button, Card, CardActionArea, CardContent } from "@mui/material";
import React from "react";
import { Link } from "react-router";

import { IconType } from 'react-icons';

interface CardProps {
      id: number;
      title: string;
      desc: string;
      path: string;
      icon: IconType
}
interface CreditsCategorySingleBoxProps {
      card: CardProps;
      index: number;
      selectedCard: number;
      setSelectedCard: (index: number) => void;
}



const CreditsCategorySingleBox: React.FC<CreditsCategorySingleBoxProps> = ({ card, index, selectedCard, setSelectedCard }) => {
      return (
            <Card key={card.id} 
                  sx={{ width: "100%", height:"30%" , margin: "10px 1.5px", borderRadius: "8px", boxShadow: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "stretch", border: "none" }}>
                  <CardActionArea
                        onClick={() => setSelectedCard(index)}
                        data-active={selectedCard === index ? "" : undefined}
                        sx={{
                              backgroundColor: selectedCard === index ? "var(--inner-box-hover)" : "var(--inner-box-bg)",
                              height: "100%",
                              borderRadius: 2,
                              color: selectedCard === index ? "var(--text-primary)" : "var(--text-primary)",
                              transition: "background-color 0.3s ease",
                              "&:hover": { backgroundColor: selectedCard === index ? "var(--inner-box-hover)" : "var(--inner-box-hover)" },
                        }}
                  >
                        <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column", padding:"8px"}}>
                              <div className="flex flex-col items-start justify-start gap-2 basis-[90%]">
                                    <div className="flex items-center justify-between w-full">
                                    <h3 className="font-bold text-lg ">{card.title}</h3>
                                          {React.createElement(card.icon, { className: "w-12 h-12 ml-2 translate-y-2 text-[var(--text-primary)]" })}
                                    </div>
                                    <p className="text-sm text-start w-[60%] h-[12.5vh] text-[var(--text-secondary)]">{card.desc}</p>
                              </div>

                              <div className="flex w-full items-center justify-end basis-[10%]">
                                    <Button component={Link} color="primary" variant="contained" to={card.path}
                                          sx={{ textDecoration: "none", padding: "4px 10px", letterSpacing: "-0.5px", fontWeight: "600", fontFamily: "Vazir" }}
                                    >
                                          درخواست وام
                                    </Button>
                              </div>
                        </CardContent>
                  </CardActionArea>
            </Card>
      );
};

export default CreditsCategorySingleBox;
