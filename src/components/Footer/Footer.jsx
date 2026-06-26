import { Link } from 'react-router-dom';
import facebookIcon from '../../assets/icon/ic_facebook.png';
import twitterIcon from '../../assets/icon/ic_twitter.png';
import youtubeIcon from '../../assets/icon/ic_youtube.png';
import instagramIcon from '../../assets/icon/ic_instagram.png';
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className='footerWrap'>
            <p>©codeit - 2024</p>
            <ul className='footerEtcLink'>
                <li>
                    <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                    <Link to="/">FAQ</Link>
                </li>
            </ul>
            <ul className='footerSnsLink'>
                <li>
                    <Link href="/">
                        <img src={facebookIcon} alt="페이스북" />
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <img src={twitterIcon} alt="트위터" />
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <img src={youtubeIcon} alt="유튜브" />
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <img src={instagramIcon} alt="인스타그램" />
                    </Link>
                </li>
            </ul>
        </div>
    </footer>
  );
}

export default Footer;