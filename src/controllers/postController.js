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

const getPostAll = async (_req, res) => {
  const postAll = await postService.getPostAll();

  return res.status(200).json(postAll);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const [getPost] = await postService.getPostById(id);
  console.log('getPost: %s', getPost);
  if (!getPost) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(getPost);
};

module.exports = {
  createPost,
  getPostAll,
  getPostById,
};
