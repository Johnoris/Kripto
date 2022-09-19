import React from 'react'
import Nav from '../components/nav';
import CoinsCard from '../components/Cards/coinCard';
import GetStartedCard from '../components/Cards/getStartedCard';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className='home'>
      <div className='top-section'>
        <Nav/>
        <span><img src={require('../assets/bitcoin.png')} alt=""/></span>
        <h1>Crypto Wall Street</h1>
        <h4>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</h4>
        <div className='button-container'>
          <button className='get-started'>Get Started</button>
          <button className='start-trading'>Start Trading</button>
        </div>
        <div className='top-section-card-wrapper'>
          <div className='top-section-card'>
            <img src={require('../assets/trade.png')} alt=""/>
            <h3>Trade</h3>
            <p>Buy and sell popular currencies and keep track of them.</p>
          </div>
          <div className='top-section-card earn'>
            <img src={require('../assets/earn.png')} alt=""/>
            <h3>Earn</h3>
            <p>Simple and easy way to start your investment in cryptocurrency</p>
          </div>
          <div className='top-section-card'>
            <img src={require('../assets/connect.png')} alt=""/>
            <h3>Connect</h3>
            <p>Explore diverse community of crypto traders allround the world</p>
          </div>
        </div>
      </div>
      <div className='crypto-market'>
        <h2>Upto Date Crypto Market Trend</h2>
        <p>The global crypto market cap is $1,95TZ, a <a>2.22%</a> decrease over the last day.</p>
        <div className='coin-charts'>
          <img src={require('../assets/btc-chart.png')} alt=""/>
          <img src={require('../assets/eth-chart.png')} alt=""/>
          <img src={require('../assets/doge-chart.png')} alt=""/>
        </div>
        <h2>Explore Upto Date Crypto Market</h2>
        <p>The global crypto market cap is $1,95TZ, a <a>2.22%</a> decrease over the last day.</p>
        <button className='search'>Search for coins</button>
        <div className='coins-table-wrapper'>
          <div className='coins-table'>
            <div className='coins-table-top'>
              <h5 className='header-1'>Logo</h5>
              <h5 className='header-2'>Name</h5>
              <h5 className='header-3'>Price</h5>
              <h5 className='header-4'>Market stat</h5>
              <h5 className='header-5'>Market Cap</h5>
              <h5 className='header-6'>Volume(24h)</h5>
              <h5 className='header-7'>Trade</h5>
            </div>
            <CoinsCard src={require('../assets/btc.png')} name="Bitcoin" price="41,365.02" chart={require('../assets/stat.png')} cap="$788,547,0699,229" volume="$27,875,375,730" subvolume="668,696 BTC"/>
            <CoinsCard src={require('../assets/eth-icon.png')} name="Ethereum" price="41,365.02" chart={require('../assets/stat.png')} cap="$788,547,0699,229" volume="$27,875,375,730" subvolume="668,696 BTC"/>
            <CoinsCard src={require('../assets/dogecoin.png')} name="Dodge" price="41,365.02" chart={require('../assets/stat.png')} cap="$788,547,0699,229" volume="$27,875,375,730" subvolume="668,696 BTC"/>
            <CoinsCard src={require('../assets/sol.png')} name="Solana" price="41,365.02" chart={require('../assets/stat.png')} cap="$788,547,0699,229" volume="$27,875,375,730" subvolume="668,696 BTC"/>
            <CoinsCard src={require('../assets/xrp.png')} name="Ripple" price="41,365.02" chart={require('../assets/stat.png')} cap="$788,547,0699,229" volume="$27,875,375,730" subvolume="668,696 BTC"/>
            <CoinsCard src={require('../assets/l-icon.png')} name="Bitcoin" price="41,365.02" chart={require('../assets/stat.png')} cap="$788,547,0699,229" volume="$27,875,375,730" subvolume="668,696 BTC"/>
          </div>
          <div className='active-page'>
            <div className='page-1'><h5>1</h5></div>
            <div><h5>2</h5></div>
            <div><h5>3</h5></div>
            <div><h5>4</h5></div>
            <div><h5>5</h5></div>
          </div>
        </div>
      </div>
      <div className='bottom-section'>
        <div className='get-started'>
          <h2>Lets Get You Started</h2>
          <p>The global crypto market cap is $1,95TZ, a <a>2.22%</a> decrease over the last day.</p>
          <div className='get-started-card-wrapper'>
            <GetStartedCard number="1" title="Create Your Account" subtitle="Your account and personal identity are guaranteed safe."/>
            <GetStartedCard number="2" title="Connect Bank Account" subtitle="Connect the bank account to start transactions."/>
            <GetStartedCard number="3" title="Start Build Portfolio" subtitle="Buy and sell popular currencies and keep track of them."/>
          </div>
        </div>
        <div className="news-letter">
          <h2>Be the first to know about crypto news every day</h2>
          <p>Get crypto analysis, news and updates right to your inbox! Sign up here so you don’t miss a single newsletter</p>
          <form>
            <input type='email' placeholder='Enter your email address'/>
            <button>Subscribe</button>
          </form>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
export default Home;