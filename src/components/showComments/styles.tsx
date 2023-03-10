import styled from "styled-components";

export const StyledCommentsDiv = styled.div`

min-width: 100vw;
    min-height: 100vh;
    max-height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    
    
    .divContainer {
        overflow-y: scroll;
    max-height: 90vh;
    width: 90vw;
    }

    div {
    width: 40%;
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
    top: 10px;
    right: 10px;
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

.userReviewContainer {
    width: 95%;
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
