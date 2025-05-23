import Center from "@/components/Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
    background-color: #222;
    color:#fff;
    padding: 20px 0;
`;
const Title = styled.h1`
    margin:0;
    font-weight:normal;
    font-size: 3rem;
`;
const Desc = styled.p`
    color:#aaa;
    font-size:.8rem;
`;
const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.1fr .9fr;
    gap: 40px;
    img{
        max-width: 100%;

    }
`;
const Column = styled.div`
    display: flex;
    align-items: center;
`;
const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
`;

export default function Featured({product}) {
    const {addProduct} = useContext(CartContext);
    function addFeaturedToCart() {
        addProduct(product._id);
    }
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>{product.title}</Title>
                            <Desc>{product.description}</Desc>
                            <ButtonWrapper>
                                <ButtonLink href={'/products/'+product._id} outline={1} white={1}>Read more</ButtonLink>
                                <Button primary onClick={addFeaturedToCart}>
                                    <CartIcon />
                                    Add to cart
                                </Button>
                            </ButtonWrapper>
                        </div>
                    </Column>
                    <Column>
                        < img src="https://elixirperfume-ecommerce.s3.amazonaws.com/1741617311251.webp" alt=""/>
                    </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    );
}