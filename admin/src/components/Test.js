import React from 'react';
import styled from 'styled-components';

const Content = ({ skyblue, className }) => {
  return (
    <div className={className}>
      <div className="content__img" />
      <div className="content__info">
        <div className="content__title" skyblue>
          APeach Baby Doll
        </div>
        <div className="content__description">
          노래를 들으며 은은한 램프를 느낄 수 있는 무드 사운드입니다. 스피커와
          동시에 무드등으로 사용하실 수 있어요.
        </div>
      </div>
    </div>
  );
};

const StyledContent = styled(Content)`
  width: 80%;
  height: 300px;
  box-shadow: 0 0 5px 2px #ccc;
  .content__img {
    display: inline-block;
    width: 300px;
    height: 100%;
    background-image: url('https://c7.uihere.com/files/303/112/990/kakaotalk-kakao-ix-corp-emoticon-blog-kakaotalk-emoticon-thumb.jpg');
  }
  .content__info {
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 300px);
    height: 100%;
    text-align: left;
    .content__title {
      padding: 20px 0 0 20px;
      font-size: 48px;
      color: ${props => (props.skyblue ? 'skyblue' : 'black')};
    }
    .content__description {
      padding: 20px;
      font-size: 30px;
      font-style: italic;
      color: #888888;
    }
  }
`;

export default StyledContent;
