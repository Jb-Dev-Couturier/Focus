import  PeopleAltRoundedIcon  from '@mui/icons-material/PeopleAltRounded';
import  SendRoundedIcon  from '@mui/icons-material/SendRounded';
import  MessageRoundedIcon  from '@mui/icons-material/MessageRounded';

export const CardsDashData = [
  {
    title: 'Utilisateur',
    color: {
      backGround: 'linear-gradient(180deg,#0091ff 0%, #00162c 100%)',
      boxShadow: '0px 10px 20px 0px #0091ff',
    },
    barValue: 65,
    value: '14',
    png: PeopleAltRoundedIcon,
    series: [
      {
        name: 'Utilisateur',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: 'Posts',
    color: {
      backGround: 'linear-gradient(180deg,#f3f184 0%, #ff9b17 100%)',
      boxShadow: '0px 10px 20px 0px #ff9b17',
    },
    barValue: 25,
    value: '6',
    png: SendRoundedIcon,
    series: [
      {
        name: 'Posts',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: 'Commentaires',
    color: {
      backGround: 'linear-gradient(180deg,#15ff34 0%, #84f393 100%)',
      boxShadow: '0px 10px 20px 0px #84f393',
    },
    barValue: 85,
    value: '26',
    png: MessageRoundedIcon,
    series: [
      {
        name: 'Commentaires',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
];
