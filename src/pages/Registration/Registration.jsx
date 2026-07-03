import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../utils/axios';

function Registration() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    // tags: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.description || !form.price) {
      alert('필수 항목을 입력해주세요.');
      return;
    }

    try {
      const response = await axios.post('/products', {
        name: form.name,
        description: form.description,
        price: Number(form.price),
      });

      // 백엔드에서 _id를 반환하는 경우가 많으므로 둘 다 대응
      const productId = response.data.id || response.data._id;

      navigate(`/items/${productId}`);
    } catch (error) {
      console.error(error);
      alert('상품 등록에 실패했습니다.');
    }
  };

  return (
    <div className="registration">
      <div className="registrationArea">
        <h2>상품 등록하기</h2>

        <button type="button" onClick={handleSubmit}>
          등록
        </button>
      </div>

      <div className="registrationForm">
        <div>
          <p>상품명</p>
          <input
            name="name"
            type="text"
            placeholder="상품명을 입력해주세요"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <p>상품 소개</p>
          <input
            name="description"
            type="text"
            placeholder="상품 소개를 입력해주세요"
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <p>판매 가격</p>
          <input
            name="price"
            type="number"
            placeholder="판매 가격을 입력해주세요"
            value={form.price}
            onChange={handleChange}
          />
        </div>

        <div>
          <p>태그</p>
          <input
            name="tags"
            type="text"
            placeholder="예) 노트북, 맥북, 애플"
            value={form.tags}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Registration;