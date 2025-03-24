import { auth } from "@/lib/firebase/firebase.init";
import { PostType } from "@/lib/posts";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { CommentType } from "./CommentSection";
import { addComment, replyComment } from "@/lib/firebase/comment";

function CommentForm({
  post,
  targetComment,
  reloadComments,
  mainComment,
}: {
  post: PostType;
  targetComment?: CommentType;
  reloadComments: () => void;
  mainComment?: CommentType;
}) {
  const [comment, setComment] = useState("");
  const [user] = useAuthState(auth);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!user) {
        return toast.error("You must be logged in to comment");
      }
      if (!comment) {
        return toast.error("Comment cannot be empty");
      }
      const commentData = {
        content: comment,
        user: user.displayName as string,
        email: user.email as string,
        pid: post.id,
        timestamp: new Date().toISOString(),
        likes: [],
        replies: [],
      };
      if (targetComment) {
        await replyComment(mainComment?.id as string, {
          ...commentData,
          id: Date.now().toString(),
          repliedTo: targetComment.user,
        });
      } else {
        await addComment(commentData);
      }
      reloadComments();
      setComment("");
    } catch (error) {
      console.error(error);
      toast.error("Error adding comment");
    }
  };
  if (!user) {
    return;
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-100"
        rows={3}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Post {targetComment ? "Reply" : "Comment"}
      </button>
    </form>
  );
}

export default CommentForm;
