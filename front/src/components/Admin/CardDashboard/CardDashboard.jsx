import React from 'react'
import { CardsDashData } from '../data/Data';
import CardData from './CardData';

const CardDashboard = () => {

    
  return <div className="CardDash">
    {CardsDashData.map((card,id)=>{
        return (
          <div className="parentContainer" key={id}>
            <CardData
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              key={card.title}
            />
          </div>
        );
    })}
  </div>;
}

export default CardDashboard