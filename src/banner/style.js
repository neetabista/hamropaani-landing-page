import styled from "styled-components";

export const BannerContainer = styled.div``;
export const BannerBgImage = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  position: relative;
`;
export const BannerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;
export const BannerLogo = styled.div`
  max-width: 120px;
  height: auto;
`;
export const BannerSocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  .icon {
    color: ${(props) => props.theme.white};
    font-size: 18px;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border: 1px solid ${(props) => props.theme.primary};
    border-radius: 50%;
    background-color: ${(props) => props.theme.primary};
    transition: all 0.4s ease;

    &:hover {
      background-color: ${(props) => props.theme.white};
      i {
        color: ${(props) => props.theme.primary};
      }
    }
  }
`;
export const BannerLeft = styled.div`
  z-index: 2;
  position: relative;
`;

export const BannerLeftContent = styled.div`
  margin-top: 2rem;

  .banner__subtitle {
    font-size: 16px;
    color: #3e3c3c;
  }
`;
export const BannerTitle = styled.h2`
  font-size: 42px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 5px;
  margin-bottom: 1.8rem;
  color: ${(props) => props.theme.primary};
  span {
    color: ${(props) => props.theme.secondary};
  }
`;
export const BannerInfo = styled.p`
  color: #5c5b5b;
  font-size: 15px;

  i {
    color: ${(props) => props.theme.primary};
    margin-right: 0.8rem;
    font-size: 18px;
  }
  .span {
    font-weight: 400;
  }
`;
export const FooterCredit = styled.div`
  margin-top: 8rem;

  z-index: 1;
  color: ${(props) => props.theme.white};
  font-size: 14px;
  a {
    color: ${(props) => props.theme.secondary};
  }
`;
export const BannerRight = styled.div`
  z-index: 10;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }
`;

export const BannerBottomImage = styled.div`
  left: 0;
  bottom: 0;
  position: absolute;
  img {
    width: 100%;
    height: auto;
  }
`;
