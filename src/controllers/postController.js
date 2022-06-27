const postService = require('../services/postService');

const createPost = async (req, res) => {
  console.log('ReqBody', req.body);
  const email = res.locals.payload;
  const post = await postService.createPost(email, req.body);

  if (!post) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  return res.status(201).json(post);
};

module.exports = {
  createPost,
};
