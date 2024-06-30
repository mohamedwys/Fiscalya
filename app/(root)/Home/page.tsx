"use client";

import Orders from '@/components/OrdersPieChart';
import Statistics from '@/components/Statistics';
import { cardsData, groupNumber } from '@/data';
import css from '@/app/Dashboard.module.css';
import Geography from "@/components/Geography";
import { Typography } from '@mui/material';
import Index from '@/Flow';
import Balancer from 'react-wrap-balancer';

const Home = () => {
  
  return (
    <section
      id="Money-Flow"
      aria-label="Money-Flow"
      className="w-full"
    >
      
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              Visualizing Money Flow
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
            Designed to provide a clear visualization of how funds move.
            </Balancer>
          </h3>
        </div>
    <Index />
    </section>
    );
  };
  
  export default Home;

      {/* <div className={css.home}>
        <div className={`${css.homeHead} theme-container`}>
          <div className={css.head}>
            <span>Home</span>
            <div className={css.durationButton}>
              <select>
                <option value="">1 week</option>
                <option value="">1 month</option>
                <option value="">1 year</option>
              </select>
            </div>
          </div>
          <div className={css.cards}>
            {cardsData.map((card, _globals) => (
              <div className={css.card} key={_globals}>
                <div className={css.cardHead}>
                  <span>{card.title}</span>
                  <span>+{card.change}</span>
                </div>
                <div className={css.cardAmount}>
                  <span>$</span>
                  <span>{groupNumber(card.amount)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Statistics />
      </div>
      <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginTop:"15", marginBottom: "15px" }}
          >
            Sales Type
          </Typography>
      <Orders />
      
      <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <div className={css.geographyChart}>
        <Geography/> */}
      {/* </div> */}