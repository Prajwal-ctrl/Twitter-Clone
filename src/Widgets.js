import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1500666830465400832"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Prajwal"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/PrajwalSontakk2/status/1500666830465400832"}
          options={{ text: "Twitter clone working", via: "@PrajwalSontakk2" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
