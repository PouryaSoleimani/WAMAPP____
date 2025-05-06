import { Button, Card, CardActionArea, CardContent } from "@mui/material";
import React from "react";
import { Link } from "react-router";

interface CardProps { id: number; title: string; desc: string; path: string; }
interface CreditsCategorySingleBoxProps { card: CardProps; index: number; selectedCard: number; setSelectedCard: (index: number) => void;}



const CreditsCategorySingleBox: React.FC<CreditsCategorySingleBoxProps> = ({ card, index, selectedCard, setSelectedCard }) => {
      return (
            <Card key={card.id} sx={{ width: "100%", height: "24vh", margin: "10px 1.5px", borderRadius: "8px", boxShadow: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "stretch", border: "none" }}>
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
                        <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column", gap: "8px", padding: "8px", justifyContent: "start", alignContent: "space-between" }}>
                              <div className="flex flex-col items-start justify-start gap-2">
                                    <h3 className="font-bold text-lg ">{card.title}</h3>
                                    <p className="text-sm text-start w-[80%] text-[var(--text-secondary)]">{card.desc}</p>
                              </div>

                              <div className="flex w-full items-center justify-end">
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
