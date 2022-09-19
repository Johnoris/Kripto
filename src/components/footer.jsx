const Footer = () => {
    return(
        <footer>
            <div>
                <h2>About Us</h2>
                <ul>
                    <li>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Blog</p>
                        <p>Legal & privacy</p>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Services</h2>
                <ul>
                    <li>
                        <p>Aplications</p>
                        <p>Buy Crypto</p>
                        <p>Affilliate</p>
                        <p>Institutional Services</p>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Learn</h2>
                <ul>
                    <li>
                        <p>What is Cryptocurency?</p>
                        <p>Crypto Basic</p>
                        <p>Tips and Tutorials</p>
                        <p>Market Update</p>
                    </li>
                </ul>
            </div>
            <div className='socials'>
                <img src={require('../assets/logo.png')} alt=""/>
                <div className='social-icons'>
                    <img src={require('../assets/facebook.png')} alt=""/>
                    <img src={require('../assets/instagram.png')} alt=""/>
                    <img src={require('../assets/youtube.png')} alt=""/>
                    <img src={require('../assets/twitter.png')} alt=""/>
                    <img src={require('../assets/linkedin.png')} alt=""/>
                </div>
            </div>
        </footer>
    )
}
export default Footer;