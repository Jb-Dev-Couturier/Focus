import React from 'react'
import { CardsDashData } from '../data/Data';
//import { useSelector } from 'react-redux';
import CardData from './CardData';

const CardDashboard = () => {

    //const usersData = useSelector((state) => state.usersReducer);
  return <div className="CardDash">
    {CardsDashData.map((card,id)=>{
        return(
            <div className="parentContainer">
                <CardData
                title={card.title}
                color={card.color}
                barValue={card.barValue}
                value={card.value}
                png={card.png}
                series={card.series}
                key={id}    
                />
            </div>
        )
    })}
  </div>;
}

export default CardDashboard