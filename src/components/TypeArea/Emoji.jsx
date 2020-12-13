import React from 'react';
import { Col } from 'reactstrap';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

import './emoji.scss';

const Emoji = (props) => {
  const addEmojiToText = (event, emojiObject) => {
    props.setText(props.text + emojiObject.emoji);
  };
  return (
    <Col style={{ display: props.showEmoji ? 'block' : 'none' }}>
      <Picker
        onEmojiClick={addEmojiToText}
        disableAutoFocus={true}
        skinTone={SKIN_TONE_MEDIUM_DARK}
        groupNames={{ smileys_people: 'PEOPLE' }}
      />
    </Col>
  );
};

export default Emoji;
