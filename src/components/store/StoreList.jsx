import styled from "styled-components";
import propTypes from "prop-types";
import StoreItem from "./StoreItem";

const StoreList = ({ stores }) => {
  return (
    <StoreListWrapper>
      <div className="store-list d-grid">
        {stores?.map((item) => (
          <StoreItem key={item.id} storeItem={item} />
        ))}
      </div>
    </StoreListWrapper>
  );
};

StoreList.propTypes = {
  stores: propTypes.array,
};

export default StoreList;

const StoreListWrapper = styled.div`
  .store-list {
    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 32px;
    }
  }
`;
