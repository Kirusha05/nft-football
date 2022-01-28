import { SectionTitle } from "../../theme";
import {
  MintingBox,
  MintingContainer,
  MintingContent,
  MintingImage,
  MintingImageWrapper,
  MintingWrapper,
  MintTitle,
  MintButton,
  MintActions,
  MintQuantityWrapper,
  QuantityControl,
  QuantityValue,
  NewLine,
  MintText,
} from "./MintSection.styles";
import useImageChanger from "../../hooks/useImageChanger";
import { useState } from "react";

const PRICE = 0.08;
const REMAINING = 238;

function MintSection() {
  const [quantity, setQuantity] = useState(1);
  const image = useImageChanger();

  const increment = () => setQuantity(prevCount => prevCount + 1);
  const decrement = () => setQuantity(prevCount => prevCount > 1 ? prevCount - 1 : prevCount);

  const remainingPunks = REMAINING - quantity;
  const totalCost = PRICE * quantity;

  return (
    <MintingWrapper id="description">
      <SectionTitle>Mint</SectionTitle>
      <MintingContainer>
        <MintingImageWrapper>
          <MintingImage
            src={image}
            alt="Football Punks NFT"
            draggable={false}
          />
        </MintingImageWrapper>
        <MintingContent>
          <MintingBox>
            <MintTitle>Purchase your <NewLine>Football Punk!</NewLine></MintTitle>
            <MintText>{remainingPunks} remaining / {PRICE} ETH each</MintText>
            <MintActions>
              <MintQuantityWrapper>
                <QuantityControl onClick={decrement}>-</QuantityControl>
                <QuantityValue>{quantity}</QuantityValue>
                <QuantityControl onClick={increment}>+</QuantityControl>
              </MintQuantityWrapper>
              <MintButton>Mint now</MintButton>
            </MintActions>
            <MintText>Total Cost: <b>{totalCost.toFixed(2)}</b> ETH</MintText>
          </MintingBox>
        </MintingContent>
      </MintingContainer>
    </MintingWrapper>
  );
}

export default MintSection;
