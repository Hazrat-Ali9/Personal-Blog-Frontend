import { Reply, ThumbsUp } from "lucide-react";
import CommentForm from "./CommentForm";
import { Avatar } from "antd";
import { useState } from "react";
import { CommentType } from "./CommentSection";
import moment from "moment";
import { PostType } from "@/lib/posts";
import { likeOnComment, updateComment } from "@/lib/firebase/comment";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase/firebase.init";
import toast from "react-hot-toast";

function CommentComponent({
  comment,
  depth = 0,
  post,
  reloadComments,
  isReply,
  mainComment,
}: {
  comment: CommentType;
  depth?: number;
  post: PostType;
  isReply?: boolean;
  reloadComments: () => void;
  mainComment?: CommentType;
}) {
  const [isReplying, setIsReplying] = useState(false);
  const [user] = useAuthState(auth);
  const likeComment = async () => {
    try {
      if (isReply) {
        const reply: CommentType | undefined = mainComment?.replies?.find(
          (reply) => reply.id === comment.id
        );
        if (!reply) return; // Guard clause if the reply is not found
        const isLiked = reply.likes.includes(user?.email ?? "");
        
        const modifiedReply = {
          ...reply,
          likes: isLiked
            ? reply.likes.filter((id: string) => id !== user?.email)
            : [...(reply?.likes || []), user?.email],
        };
  
        const modifiedMainComment = {
          ...mainComment,
          replies: mainComment?.replies?.map((item) =>
            item.id === reply.id ? modifiedReply : item
          ),
        };
  
        await updateComment(mainComment?.id as string, modifiedMainComment);
      } else {
        await likeOnComment(comment.id, user?.email as string);
      }
      toast.success("Comment liked successfully!");
      reloadComments();
    } catch (error) {
      console.error(error);
      toast.error("Error liking comment");
    }
  };
  return (
    <div className={`${depth > 0 ? "ml-8" : ""}`}>
      <div className="flex gap-x-3">
        <Avatar
          // src={comment.user.avatar}
          // alt={comment.user.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="bg-gray-900 shadow-lg border shadow-gray-800 p-4 rounded-lg">
            <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between mb-2">
              <div className="flex  items-center text-sm">
                <span className="font-medium text-gray-100 mr-2">
                  {comment.user}
                </span>
                {isReply && (
                  <span className="font-medium  text-gray-200 mr-2">
                    (Replying to:{comment.repliedTo})
                  </span>
                )}
              </div>
              <span className="text-sm text-gray-400">
                {moment(comment.timestamp).format("MMM DD, YYYY h:mm A")}
              </span>
            </div>
            <p className="text-gray-100">{comment.content}</p>
          </div>

          <div className="flex items-center space-x-4 mt-3">
            <button
              className="flex items-center text-sm text-gray-300 hover:text-gray-300"
              onClick={likeComment}
              disabled={!user}
            >
              <ThumbsUp
                className={`w-4 h-4 mr-1 ${
                  comment?.likes?.includes(user?.email as string)
                    ? "text-blue-600"
                    : ""
                }`}
              />
              <span>{comment?.likes?.length}</span>
            </button>
            <button
              onClick={() => setIsReplying(!isReplying)}
              className="flex items-center text-sm text-gray-200 hover:text-gray-300"
              disabled={!user}
            >
              <Reply className="w-4 h-4 mr-1" />
              <span>Reply</span>
            </button>
          </div>

          {isReplying && (
            <div className="mt-4">
              <CommentForm
                mainComment={mainComment}
                targetComment={comment}
                post={post}
                reloadComments={() => {
                  reloadComments();
                  setIsReplying(false);
                }}
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-3">
        {comment?.replies?.map((reply: any, index: number) => (
          <CommentComponent
            reloadComments={reloadComments}
            post={post}
            isReply
            mainComment={comment}
            key={reply.id || `${comment.id}-reply-${index}`} // Fallback to avoid key errors
            comment={reply as CommentType}
            depth={depth + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default CommentComponent;
