import { FaChevronLeft } from "react-icons/fa";
import { Button, Card, CardActionArea, CardContent } from "@mui/material";
import React from "react";
import { Link } from "react-router";

interface CardProps {
      id: number;
      title: string;
      desc: string;
      isShowVamapp : boolean;
      isShowCountryComps : boolean;
      path : string;
}
interface CreditsCategorySingleBoxProps {
      card: CardProps;
      index: number;
      selectedCard: number;
      setSelectedCard: (index: number) => void;
      isShowVamapp: boolean;
      isShowCountryComps: boolean
}
const CreditsCategorySingleBox: React.FC<CreditsCategorySingleBoxProps> = ({ card, index, selectedCard, setSelectedCard, isShowVamapp, isShowCountryComps }) => {
      return (
            <Card key={card.id} sx={{ width: "100%", height: "auto", margin: "10px 1.5px", borderRadius: "8px", boxShadow: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",border : "none"}}>
                  <CardActionArea
                        onClick={() => setSelectedCard(index)} 
                        data-active={selectedCard === index ? "" : undefined}
                        sx={{ backgroundColor: selectedCard === index ? "var(--inner-box-hover)" : "var(--inner-box-bg)", height: "100%", borderRadius: 2, color: selectedCard === index ? "var(--text-primary)" : "var(--text-primary)", transition: "background-color 0.3s ease", "&:hover": { backgroundColor: selectedCard === index ? "var(--inner-box-hover)" : "var(--inner-box-hover)" } }}>
                        <CardContent sx={{ height: "100%", display: "flex", flexDirection: "column", gap: "8px",padding : "8px", justifyContent: "space-between", alignItems: "center" }}>
                              <div id="TOP" className="flex items-center justify-between w-full">
                                    <h3 className="font-bold text-lg ">{card.title}</h3>
                                    <FaChevronLeft />
                              </div>

                              <div className="flex flex-col items-stretch justify-between w-full ">
                                    <div className="flex w-full items-center justify-between gap-4 text-justify">
                                          <p className="text-xs w-[60%] text-[var(--text-secondary)]">{card.desc}</p>
                                          {isShowVamapp === true && (<img src="/logo.png" alt="logo" className="w-16 ml-1" />)}
                                    </div>
                                    <div className="mt-4 flex items-center justify-evenly">
                                          {isShowCountryComps === true && (
                                                <>
                                                <img src="/company_logos/digipay.png" alt="Country Comps Logo" className="size-8" />
                                                <img src="/company_logos/snapppay.jpg" alt="Country Comps Logo" className="size-8 rounded" />
                                                <img src="/company_logos/tara.png" alt="Country Comps Logo" className="size-8 rounded" />
                                                <img src="/company_logos/wepod.jpg" alt="Country Comps Logo" className="size-8 rounded" />
                                                <img src="/company_logos/blubank.webp" alt="Country Comps Logo" className="size-8 rounded" />
                                                </>
                                          )}    
                                    </div>
                                    <div className="flex w-full items-center justify-between rounded-md mt-4">
                                          <Button component={Link} color="success" variant="contained" to={card.path} sx={{ textDecoration: 'none'  , padding : "4px 10px" , letterSpacing :"-0.5px" , fontWeight : "600", fontFamily : "Vazir"}}>درخواست وام</Button>
                                    </div>
                              </div>
                        </CardContent>
                  </CardActionArea>
            </Card>
      );
};

export default CreditsCategorySingleBox;
