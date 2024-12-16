import Money from '../../images/image-currency.jpg'
import restruant from '../../images/image-restaurant.jpg';
import plane from '../../images/image-plane.jpg';
import stars from '../../images/image-confetti.jpg';
// reasons
import apiImg from '../../images/icon-api.svg';
import simImg from '../../images/icon-budgeting.svg';
import onboardingImg from '../../images/icon-onboarding.svg';
import onlineImg from '../../images/icon-online.svg';


export const latestItems = [
    {
id: 1,
cite: 'By Claire Robinson',
title: 'Receive money in any currency with no fees',
content: 'The world is getting smaller and were becoming more mobile. So why should you be forced to only receive money in a single...',
imgSrc: Money
    },
    {
      id: 2,
      cite: 'By Wilson Hutton',
      title: 'Treat yourself without worrying about money',
      content: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...',
      imgSrc: restruant
    },
    {
      id: 3,
      cite: 'By wilson Hutton',
      title: 'Take your Easybank card wherever you go',
      content: 'We want you to enjoy your travels. This is why we dont charge any fees on purchases while you are abroad. We will even show you...',
      imgSrc: plane
    },
    {
      id: 4,
      cite: 'By Claire Robinson',
      title: 'Our invite-only Beta accounts are now live!',
      content: 'After a lot of hard work by the whole team, we are excited to launch our closed beta. it is easy to request an invite through the site...',
      imgSrc: stars
    }
  ];

  export const ReasonItem =  [
    {
      id: 1,
      imgSrc: onlineImg,
      title: 'Online Banking',
      content: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world'
    },
    {
      id: 2,
      imgSrc: simImg,
      title: "Simple Budgeting",
      content: 'See exactly where your money goes each month. Receive notifications when you are close to your hitting limits.'
    },
    {
      id: 3,
      imgSrc:onboardingImg,
      title: 'Fast Onboarding',
      content: 'We dont do branches. Open your account in minutes online and start taking control of your finances right away.'
    },
    {
      id: 4,
      imgSrc: apiImg,
      title: 'Open API',
      content: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
    }
    ];