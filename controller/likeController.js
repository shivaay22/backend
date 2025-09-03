const Post = require("../models/postModel");
const Like = require("../models/likeModel");


exports.likePost = async (req,res) =>
{
    try{
        const {post,user} = req.body;
        // const like = new Like({
        //     post,user
        // })
        // const savedLike = await like.save();
        const savedLike = await Like.create({post,user});

        const updatePost = await Post.findByIdAndUpdate(post, {$push : {likes:savedLike._id}},{new:true})
        .populate('likes').exec();

        res.json({
            post:updatePost,
        });
    }
    catch(e)
    {
            return res.status(400).json({
                error:"Error while fetching Post"
            });
    }
}

exports.unLikePost = async (req,res) =>
{
    try{
        const {post,like} = req.body;

        const deletedLike = await Like.findOneAndDelete({post:post, _id:like});

        const updatePost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new:true});

        res.json({
            post:updatePost
        });
    }
    catch(e)
    {
        return res.status(400).json({
            error:"Error while inliking post"
        });
    }
}