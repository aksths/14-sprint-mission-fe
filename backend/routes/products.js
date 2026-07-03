import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// 상품 등록
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (err) {
    console.error(err);

    res.status(400).json({
      message: '상품 등록 실패',
    });
  }
});

// 상품 목록 조회
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: '상품을 찾을 수 없습니다.',
      });
    }

    res.json(product);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: '조회 실패',
    });
  }
});
// 상품 목록 조회 + 페이지네이션 + 검색
router.get('/', async (req, res) => {
  const {
    offset = 0,
    limit = 10,
    search = '',
  } = req.query;

  try {
    const products = await Product.find({
      $or: [
        {
          name: {
            $regex: search,
            $options: 'i',
          },
        },
        {
          description: {
            $regex: search,
            $options: 'i',
          },
        },
      ],
    })
      .sort({ createdAt: -1 })
      .skip(Number(offset))
      .limit(Number(limit));

    res.json(products);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: '조회 실패',
    });
  }
});

// 상품 수정
router.patch('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        message: '상품이 없습니다.',
      });
    }

    res.json(product);
  } catch (err) {
    console.error(err);

    res.status(400).json({
      message: '수정 실패',
    });
  }
});

// 상품 삭제
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(204).send();
  } catch (err) {
    console.error(err);
    
    res.status(500).json({
      message: '삭제 실패',
    });
  }
});

export default router;