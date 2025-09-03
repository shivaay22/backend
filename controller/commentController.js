const Post = require('../models/postModel');
const Comment = require('../models/coomentModel');

exports.createComment = async (req,res) =>
{
    try
    {
        const{post, user, body} = req.body;
        // const comment = new Comment({
        //     post,user,body
        // });

        // const savedComment = await comment.save();
        const savedComment = await Comment.create({post,user,body})

        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments: savedComment._id}},{new:true})
        .populate("comments")
        .exec();

        res.json({
            post:updatedPost,
            success:true,
            message:"Comment update Succfully"
        })
    }

    catch(e)
    {
        return res.status(404).json({
            error:"error while creeting comment"
        })
    }
}