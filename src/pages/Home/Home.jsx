import { Link } from 'react-router-dom';
import HomeTopImg from '../../assets/images/Img_home_top.png';
import HomeImg01 from '../../assets/images/Img_home_01.png';
import HomeImg02 from '../../assets/images/Img_home_02.png';
import HomeImg03 from '../../assets/images/Img_home_03.png';
import HomeBottomImg from '../../assets/images/Img_home_bottom.png';
import './Home.css';

function Home() {
  return (
        <main id="main">
        <section className="visual">
            <div className="visualWrap">
                <div className="mainTxt">
                    <h2>일상의 모든 물건을<br/>
                        거래해 보세요</h2>
                    <Link to="/items">구경하러가기</Link>
                </div>
                <img src={HomeTopImg} alt="home top img"/>
            </div>
        </section>
        <section className="layoutList">
            <ul>
                <li>
                    <img src={HomeImg01} alt="list img 01"/>
                    <div className="listTxt">
                        <p>Hot item</p>
                        <h2>인기 상품을<br/>확인해 보세요</h2>
                        <p>가장 HOT한 중고거래 물품을<br/>판다 마켓에서 확인해 보세요</p>
                    </div>
                </li>
                <li>
                    <div className="listTxt">
                        <p>Search</p>
                        <h2>구매를 원하는<br/>상품을 검색하세요</h2>
                        <p>구매하고 싶은 물품은 검색해서<br/>쉽게 찾아보세요</p>
                    </div>
                    <img src={HomeImg02} alt="list img 02"/>
                </li>
                <li>
                    <img src={HomeImg03} alt="list img 03"/>
                    <div className="listTxt">
                        <p>Register</p>
                        <h2>판매를 원하는<br/>상품을 등록하세요</h2>
                        <p>어떤 물건이든 판매하고 싶은 상품을<br/>쉽게 등록하세요</p>
                    </div>
                </li>
            </ul>
        </section>
        <section className="endVisual">
            <div className="endVisualWrap">
                <h2>믿을 수 있는<br/>판다마켓 중고 거래</h2>
                <img src={HomeBottomImg} alt="home bottom img"/>
            </div>
        </section>
    </main>
  )
}

export default Home;
