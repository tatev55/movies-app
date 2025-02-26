import "./flag.css"

const countryFlags = {
  "United States": "https://flagcdn.com/w320/us.png",
  "United Kingdom": "https://flagcdn.com/w320/gb.png",
  Canada: "https://flagcdn.com/w320/ca.png",
  Germany: "https://flagcdn.com/w320/de.png",
  France: "https://flagcdn.com/w320/fr.png",
  Italy: "https://flagcdn.com/w320/it.png",
  Spain: "https://flagcdn.com/w320/es.png",
  Japan: "https://flagcdn.com/w320/jp.png",
  China: "https://flagcdn.com/w320/cn.png",
  India: "https://flagcdn.com/w320/in.png",
  Brazil: "https://flagcdn.com/w320/br.png",
  Australia: "https://flagcdn.com/w320/au.png",
  Mexico: "https://flagcdn.com/w320/mx.png",
  SouthAfrica: "https://flagcdn.com/w320/za.png",
  Russia: "https://flagcdn.com/w320/ru.png",
  Argentina: "https://flagcdn.com/w320/ar.png",
  SouthKorea: "https://flagcdn.com/w320/kr.png",
  Turkey: "https://flagcdn.com/w320/tr.png",
  Netherlands: "https://flagcdn.com/w320/nl.png",
  Sweden: "https://flagcdn.com/w320/se.png",
  Switzerland: "https://flagcdn.com/w320/ch.png",
  Norway: "https://flagcdn.com/w320/no.png",
  Denmark: "https://flagcdn.com/w320/dk.png",
  Finland: "https://flagcdn.com/w320/fi.png",
  Portugal: "https://flagcdn.com/w320/pt.png",
  Greece: "https://flagcdn.com/w320/gr.png",
  SaudiArabia: "https://flagcdn.com/w320/sa.png",
  UAE: "https://flagcdn.com/w320/ae.png",
  Israel: "https://flagcdn.com/w320/il.png",
  Egypt: "https://flagcdn.com/w320/eg.png",
  Indonesia: "https://flagcdn.com/w320/id.png",
  Thailand: "https://flagcdn.com/w320/th.png",
  Vietnam: "https://flagcdn.com/w320/vn.png",
  Philippines: "https://flagcdn.com/w320/ph.png",
  Malaysia: "https://flagcdn.com/w320/my.png",
  Singapore: "https://flagcdn.com/w320/sg.png",
  NewZealand: "https://flagcdn.com/w320/nz.png",
  Nigeria: "https://flagcdn.com/w320/ng.png",
  Kenya: "https://flagcdn.com/w320/ke.png",
  Colombia: "https://flagcdn.com/w320/co.png",
  Chile: "https://flagcdn.com/w320/cl.png",
  Peru: "https://flagcdn.com/w320/pe.png",
  Ukraine: "https://flagcdn.com/w320/ua.png",
  Poland: "https://flagcdn.com/w320/pl.png",
  Belgium: "https://flagcdn.com/w320/be.png",
  Austria: "https://flagcdn.com/w320/at.png",
  CzechRepublic: "https://flagcdn.com/w320/cz.png",
  Romania: "https://flagcdn.com/w320/ro.png",
  Hungary: "https://flagcdn.com/w320/hu.png",
  Slovakia: "https://flagcdn.com/w320/sk.png",
  Pakistan: "https://flagcdn.com/w320/pk.png",
  Bangladesh: "https://flagcdn.com/w320/bd.png",
  Iran: "https://flagcdn.com/w320/ir.png",
};

export const Flag = ({ country }) => {

  return (
    <span>
      {countryFlags[country] ? 
        (<img 
          src = {countryFlags[country]} 
          className="flag" 
          alt= {country}/>)
          : (country+ ", ")}
    </span>
  );
};
