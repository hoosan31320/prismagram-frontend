import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartFull, HeartEmpty, Comment as CommentIcon } from "../Icons";

const Post = styled.div`
  ${props => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  user-select: none;
  margin-bottom: 25px;
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const File = styled.div`
  width: 100%;
  height: 600px;
  position: absolute;
  top: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  padding: 15px;
`;

const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${props => props.theme.lightGreyColor} 1px solid;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const Comments = styled.ul`
  margin-top: 10px;
`;

const Comment = styled.li`
  margin-bottom: 7px;
  span {
    margin-right: 5px;
  }
`;

// eslint-disable-next-line
export default ({
    user: { username, avatar },
    location,
    files,
    likeCount,
    isLiked,
    createdAt,
    newComment,
    currentItem,
    toggleLike,
    onKeyPress,
    comments
}) => (
    <Post>
        <Header>
            <Avatar size="sm" url={avatar} />
            <UserColumn>
                <FatText text={username} />
                <Location>{location}</Location>
            </UserColumn>
        </Header>
        <Files>
            {files && 
              files.map((file, index) => (
                <File key={file.id} src={file.url} showing={index === currentItem} />
            ))}
        </Files>
        <Meta>
            <Buttons>
                <Button onClick={toggleLike}>
                  {isLiked ? <HeartFull /> : <HeartEmpty />}
                </Button>
                <Button>
                    <CommentIcon />
                </Button>
            </Buttons>
            <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
            {comments && (
              <Comments>
                {comments.map(comment => (
                  <Comment key={comment.id}>
                    <FatText text={comment.user.username} />
                    {comment.text}
                  </Comment>
                ))}
              </Comments>
            )}
            <Timestamp>{createdAt}</Timestamp>
            <Textarea 
              placeholder={"Add a comment..."} 
              value={newComment.value}
              onChange={newComment.onChange}
              onKeyUp={onKeyPress}
            />
        </Meta>
    </Post>
);