// You can define interfaces for all React components here.
interface PostOwnerProps{
    piurl:string;
    pname:string;
    pText:string;
    plikenum:string;
}
export type {PostOwnerProps};

interface CommentProp{
    userImagePath :string;
    username :string;
    commentText:string;
    likeNum : string;
    replies : string;
}
export type {CommentProp};
// Do not forget to export properly.

interface ReplyProps {
    userImagePath : string;
    username : string;
    replyText : string;
    likeNum : string;

}
export type { ReplyProps };
