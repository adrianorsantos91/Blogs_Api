const postService = require('../services/postService');

const createPost = async (req, res) => {
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

const updatePostById = async (req, res) => {
  const { id } = req.params;
  const email = res.locals.payload;
  const updatePost = await postService.updatePostById(id, email, req.body);

  if (!updatePost) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  return res.status(200).json(updatePost);
};

const deletePostById = async (req, res) => {
  const { id } = req.params;
  const email = res.locals.payload;
  const deletePost = await postService.deletePostById(id, email);

  if (deletePost === 'notFoundPost') {
    console.log('notFoundPost');
    return res.status(404).json({ message: 'Post does not exist' });
  }

  if (!deletePost) {
    console.log('Unauthorized');
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  return res.status(204).end();
};

module.exports = {
  createPost,
  getPostAll,
  getPostById,
  updatePostById,
  deletePostById,
};
