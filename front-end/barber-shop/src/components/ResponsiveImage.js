import styled from 'styled-components';

export const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const AspectRatioContainer = styled.div`
  width: 100%;
  position: relative;
  padding-top: ${({ ratio }) => (ratio ? `${ratio * 100}%` : '100%')};
  overflow: hidden;
  background-color: #333a;
  animation: 2.5s bgcAnim infinite;

  @keyframes bgcAnim {
    0% {
      background-color: #333a;
    }
    50% {
      background-color: #444a;
    }
    100% {
      background-color: #333a;
    }
  }

  & > ${ResponsiveImage} {
    /* filter: contrast(1.5); */
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    object-fit: cover;
  }
`;
