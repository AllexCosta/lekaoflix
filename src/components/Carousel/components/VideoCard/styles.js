import styled from 'styled-components';

const VideoCardContainer = styled.a`
  border: 2px solid;
  z-index: auto;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  justify-content: center;
  
  transition: transform 450ms;
  &:hover,
  &:focus {
    transform:scale(1.2);
  }
    
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export default VideoCardContainer;
