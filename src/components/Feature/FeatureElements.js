import styled from 'styled-components';
import FeaturePic from '../../images/contestSkateVideo.jpg'

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgb(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  color: white;
  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }
  p {
    scroll-margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
    font-weight: 300;
  }
`;