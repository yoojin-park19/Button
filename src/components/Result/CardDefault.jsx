import styled from '@emotion/styled';
import { COLOR } from '../../constants';

export const CardDefault1 = (props) => {
  return (
    <Card>
      <img src="./images/items/d_Philosykos.png" alt="향수 추천" />
      <p className="title">필로시코스 오드 뚜왈렛</p>
      <p className="etitle">Philosykos</p>
      <p className="price">50ml 기준 : 235000 원</p>
      <p className="des">
        그린 우디 플로랄 계열, 내추럴한 무화과 향기 무화과 열매뿐만 아니라 나무
        향과 따스한 흙향도 함께 느껴지는 향수, 산뜻하고 달달한 것이 특징
      </p>
      <p className="brand">딥디크</p>
    </Card>
  );
};
export const CardDefault2 = (props) => {
  return (
    <Card>
      <img src="./images/items/br_Gypsy.png" alt="향수 추천" />
      <p className="title">집시 워터</p>
      <p className="etitle">Gypsy Water</p>
      <p className="price">50ml 기준 : 186000 원</p>
      <p className="des">
        Gypsy Water는 로마 문화의 아름다움, 독특한 관습, 친밀한 신념 및 독특한
        생활 방식에서 부터 영감을 받았습니다. 유목민의 다채로운 라이프스타일의
        강렬한 앰버와 신선한 시트러스와 관련된 솔잎과 백단향의 우디 노트는
        숲에서 보낸 집시의 밤의 열기를 불러일으킵니다.
      </p>
      <p className="brand">바이레도</p>
    </Card>
  );
};
export const CardDefault3 = (props) => {
  return (
    <Card>
      <img src="./images/items/ap_Pura.png" alt="향수 추천" />
      <p className="title">콜로니아 퓨라 오 드 코롱</p>
      <p className="etitle">ColoNia Pura</p>
      <p className="price">50ml 기준 : 150000 원</p>
      <p className="des">
        아쿠아 디 파르마가 만든 콜로니아 퓨라의 꽃향기를 즐겨보세요. 싱싱하고
        맑은 베르가못과 풍부한 오렌지 노트, 섬세한 페티그레인 향이 결합된
        콜로니아 퓨라는 콜로니아의 고전적인 감귤향에 새로운 느낌을 받을 수
        있습니다. 신선한 에너지와 현대적인 가벼운 향이 결합된 관능적인 남성성을
        느껴보세요.
      </p>
      <p className="brand">아쿠아디파르마</p>
    </Card>
  );
};

const Card = styled.li`
  max-width: 300px;
  height: 600px;
  padding: 10px 20px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  border: 13px double ${COLOR.top};
  background-color: #fff;
  box-shadow: 8px 14px 14px rgba(0, 0, 0, 0.25);
  position: relative;
  color: #000;
  img {
    width: 180px;
    height: 250px;
    margin-bottom: 30px;
  }
  .title {
    font-size: 20px;
  }
  .etitle {
    font-size: 13px;
    margin-bottom: 20px;
  }
  .price {
    font-size: 12px;
    margin-bottom: 20px;
  }
  .des {
    font-size: 13px;
  }
  .brand {
    font-size: 12px;
    align-self: flex-start;
    position: absolute;
    bottom: 10px;
    right: 150px;
  }
`;
