const express = require('express');
const router = express.Router();
const postController = require('../../controllers/api/postController');


router.get('/:postId', postController.getPostById);     // 게시글 단건 조회
router.get('/', postController.getAllPosts);            // 게시글 전체 조회
router.post('/', postController.createPost);            // 게시글 생성
router.delete('/:postId', postController.deletePost);   // 게시글 삭제
router.put('/:postId', postController.updatePost);      // 게시글 수정

module.exports = router;