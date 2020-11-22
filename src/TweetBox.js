import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import db from './firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e =>{
      e.preventDefault();

      db.collection('posts').add({
          displayName: 'Vishal Urankar',
          username: 'vvu060',
          verified:true,
          text: tweetMessage,
          image: tweetImage,
          avatar: 'https://scontent-maa2-2.xx.fbcdn.net/v/t1.0-9/98358963_1911791658957144_8536280984365039616_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=f_lmQcoBQngAX8zw96Q&_nc_ht=scontent-maa2-2.xx&oh=53bef2e8e14b52407fe3ab90ee7ad4d0&oe=5FCEA460',
      });

      setTweetMessage('');
      setTweetImage('');
  }
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://scontent-maa2-2.xx.fbcdn.net/v/t1.0-9/98358963_1911791658957144_8536280984365039616_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=f_lmQcoBQngAX8zw96Q&_nc_ht=scontent-maa2-2.xx&oh=53bef2e8e14b52407fe3ab90ee7ad4d0&oe=5FCEA460" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image url"
          type="text"
        />
        <Button onClick={sendTweet} type='submit' className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
