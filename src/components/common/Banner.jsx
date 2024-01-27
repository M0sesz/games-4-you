import styled from "styled-components";
import { banner_image } from "../../utils/images";
import { FaGamepad } from "react-icons/fa";
import { gameover } from "../../utils/images";
const Banner = () => {
  return (
    <BannerWrapper
      className="d-flex align-items-center justify-content-start"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), linear-gradient(248.75deg, rgba(0, 159, 157, 0.41) 0%, rgba(15, 10, 60, 0.41) 38.46%), url(${banner_image}) center/cover no-repeat`,
      }}
    >
      <div className="banner-content w-100 container text-white">
        <div className="banner-badge text-uppercase">ENJOY THE GAMES</div>
        <h1 className="banner-title text-uppercase">join streaming</h1>
        <p className="lead-text">
          Live gaming with lots of other games. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorem, temporibus. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Nihil, ipsa delectus unde
          aliquid officia aliquam.
        </p>
        <button
          type="button"
          className="custom-btn btn-1 d-flex align-items-center"
        >
          <span className="btn-icon">
            <FaGamepad className="text-white" size={25} />
          </span>
          <span className="btn-text ">play now</span>
        </button>
      </div>
    </BannerWrapper>
  );
};

export default Banner;

const BannerWrapper = styled.div`
  min-height: 768px;

  .banner-badge {
    padding: 4px 16px;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.1em;
    display: inline-block;
    margin-bottom: 25px;
    border: 2px solid #ef97e8;
    border-radius: 10px;
  }

  .banner-title {
    font-family: var(--font-family-right);
    font-size: 48px;
    font-weight: 400;
    letter-spacing: 0.09em;
    line-height: 1.2;
    max-width: 600px;
    margin-bottom: 25px;
  }

  .lead-text {
    max-width: 600px;
  }
  .custom-btn {
    font-family: var(--font-family-right);
    margin-top: 20px;
    color: #fff;
    width: 160px;
    height: 45px;
    text-transform: uppercase;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #ff9aff;
    box-shadow: 0 0 5px #ef97e8;
  }

  .btn-1 {
    border: none;
    background-color: #ff9aff;
    box-shadow: 0 0 5px #ef97e8;

    .btn-icon {
      margin-right: 15px;
    }

    &:hover {
      box-shadow: 0 0 10px #ef97e8, 0 0 20px #ef97e8, 0 0 20px #fff inset;
      .btn-text {
        color: var(--clr-white);
      }
    }
  }

  @media screen and (min-width: 992px) {
    .banner-badge {
      font-size: 26px;
    }

    .banner-title {
      font-size: 56px;
    }
  }
`;
