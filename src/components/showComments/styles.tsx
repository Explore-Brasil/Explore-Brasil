import styled from "styled-components";

export const StyledCommentsDiv = styled.div`

    min-width: 100vw;
    min-height: 100vh;
    max-height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    border-radius: 6px;
    z-index: 2;
    overflow-y: scroll;

    div {
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    background-color: aliceblue;
    }

.userReviewNav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    
    span {
    font-size: 1.5rem;
    font-weight: 700;
    color: #49a191;
    }
    button {
    background-color: #7b61ff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 50%;
    transition: 0.5s;
    }
    button:hover {
    background-color: #9e94d4;
    }
    @media(max-width: 535px){
    button {
    padding: 10px;
    border-radius: none;
    background-color: transparent;
    color: #000;
    font-size: 20px;
    }
    button:hover{
    color: red;
    background-color: transparent;
    }
    } 
    
}
.divContainer {
    margin-top: 50%;
}
.userReviewContainer {
    width: 80%;
    border: 1px solid #49a191;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow-y: auto;
    margin-bottom: 10px;
    border-radius: 6px;
    height: 80%;
}
.userReviewContainer, .userReviewNav {
    background-color: aliceblue;
}
.userReviewContainer--Header {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .nameComent {
    font-weight: 400;
    }
    .nameUser {
    color: #49a191;
    }
    span {
    font-weight: bold;
    }
}
`
