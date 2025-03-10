import Center from "@/components/Center";
import styled from "styled-components";

const Bg = styled.div`
    background-color: #222;
    color:#fff;
    padding: 50px 0
`;
const Title = styled.h1`
    margin:0;
    font-weight:normal;
`;
const Desc = styled.p`
    color:#aaa;
    font-size:.8rem;
`;
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 40px;
    img{
        max-width: 50%;
    }
`;
const Column = styled.div`
    display: flex;
    align-items: center
`;

export default function featured() {
    return (
        <Bg>
            <Center>
                <Wrapper>
                    <Column>
                        <div>
                            <Title>Baccarat rouge</Title>
                            <Desc>Une combinaison riche d'épices et de jasmin rehaussée par différents bois pour procurer une note de fond douce et chaleureuse, 
                            ni trop puissante ni entêtante. 
                            Notes de tête : Jasmin, Safran. 
                            Notes de cœur : Bois d'ambre, Ambre gris. 
                            Notes de fond : Résine de sapin, Bois de cèdre.</Desc>
                            <button>Read more</button>
                            <button>Add to cart</button>
                        </div>
                    </Column>
                    <Column>
                        < img src="https://static.wixstatic.com/media/bf72d0_7c71b4ebc4714d3b8864fa0337092914~mv2.png/v1/fill/w_480,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bf72d0_7c71b4ebc4714d3b8864fa0337092914~mv2.png" alt=""/>
                    </Column>
                </Wrapper>
            </Center>
        </Bg>
    );
}