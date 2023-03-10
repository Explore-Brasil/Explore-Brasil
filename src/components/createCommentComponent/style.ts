import styled from "styled-components";

export const FormCreateComent = styled.form`
    display: flex;
    flex-direction: column;

    div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    }
    .setCommentHeader {
    span {
    font-weight: 700;
    font-size: 1.5rem;
    }
    input {
    padding-left: 10px;
    background-color: #D9D9D9;
    border: none;
    padding: 8px 10px;
    border-radius: 6px;
    }
    input::placeholder {
    color: gray;
    }
    }
    textarea {
    margin-top: 20px;
    height: 70px;
    padding-left: 5px;
    padding-top: 2px;
    background-color: #D9D9D9;
    border-radius: 6px;
    border: none;
    
    }
    textarea::placeholder{
    padding-top: 10px;
    padding: 10px;
    }
    .setCommentBody {
    input {
    padding: 8px 10px;
    background-color: #D9D9D9;
    border: none;
    border-radius: 6px;
    }
    input::placeholder {
    color: gray;
    }
    }
    button {
    background-color: #02C39A;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    padding: 5px 10px;
    border-radius: 6px;
    transition: 0.4s;
    }
    button:hover {
    transform: scale(0.9);
    }
`