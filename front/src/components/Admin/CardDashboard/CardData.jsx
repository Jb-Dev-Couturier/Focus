import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import Chart from 'react-apexcharts';

const CardData = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCardData
          param={props}
          setExpanded={() => setExpanded(false)}
        />
      ) : (
        <CompactCardData param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

//CompactCard
function CompactCardData({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="compactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId={"expandableCard"}
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>
          {param.title} : {param.value}
        </span>
        <span>Sur le serveur</span>
      </div>
    </motion.div>
  );
}
//ExpandCard
function ExpandedCardData({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: 'area',
        height: 'auto',
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.35,
      },
      fill: {
        colors: ['#B1B9C4'],
        type: 'gradient',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        colors: ['white'],
      },
      tooltip: {
        enabled: false,
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2022-09-19T00:00:00.000Z',
          '2022-09-19T01:00:00.000Z',
          '2022-09-19T02:00:00.000Z',
          '2022-09-19T03:00:00.000Z',
          '2022-09-19T04:00:00.000Z',
          '2022-09-19T05:00:00.000Z',
          '2022-09-19T06:00:00.000Z',
        ],
      },
    },
  };
  return (
    <motion.div
      className="expandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: 'flex-end' }}>
        <DisabledByDefaultRoundedIcon onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
      <span>Sur le serveur </span>
    </motion.div>
  );
}

export default CardData;
