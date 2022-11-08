import React from 'react';
import {
  RankedItemWrapper,
  RankedItemImgContainer,
  Image,
  RankedItemTextContainer,
  NumberTitle,
  RankedItemHeader,
  RankedItemPara,
} from './ranked-news-item.styles';

const RankedItem = (props) => {
  const { id, title, content, imageUrl } = props;
  return (
    <RankedItemWrapper>
      <RankedItemImgContainer>
        <Image src={imageUrl} alt={`${title}-image`} />
      </RankedItemImgContainer>
      <RankedItemTextContainer>
        <NumberTitle>{id < 10 ? `0${id}` : id}</NumberTitle>
        <RankedItemHeader>{title}</RankedItemHeader>
        <RankedItemPara>{content}</RankedItemPara>
      </RankedItemTextContainer>
    </RankedItemWrapper>
  );
};

export default RankedItem;
