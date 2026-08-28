import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;

    h1 {
        text-align: center;
        margin: 4rem 0;
    }
    h1 + input {
        display: block;
        width: min(100%, 520px);
        margin: -2rem auto 0;
        padding: 0.9rem 1.1rem;
        border: 2px solid #3d3d3d;
        border-radius: 24px;
        outline: none;
        color: #fff;
        background-color: #1d1d1d;
        font-size: 1rem;
        transition: border-color 0.2s, box-shadow 0.2s;

        &::placeholder {
            color: #a8a8a8;
        }

        &:focus {
            border-color: #fff;
            box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.16);
        }
    }

    input + ul {
        width: min(100%, 520px);
        margin: 0.5rem auto 4rem;
        overflow: hidden;
        list-style: none;
        border: 1px solid #3d3d3d;
        border-radius: 14px;
        background-color: #1d1d1d;
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);

        button {
            display: block;
            width: 100%;
            padding: 0.85rem 1.1rem;
            border: none;
            color: #fff;
            background: transparent;
            text-align: left;
            font-size: 0.95rem;
            cursor: pointer;

            &:hover {
                background-color: #333;
            }
        }
    }
`;

export const MovieList = styled.ul`
    && {
        width: 100%;
        margin: 4rem 0 0;
        overflow: visible;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap: 3rem;
        row-gap: 4rem;
        border: none;
        border-radius: 0;
        background: transparent;
        box-shadow: none;
    }
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    img {
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }
    a {
        transition: all 0.3s;
    }
    a:hover {
        transform: scale(1.1);
    }
`;

export const Btn = styled.button`
    margin-top: 5px;
    padding: 0.7rem 3rem;
    border: none;
    border-radius: 15px;
    color: #212121;
    background-color: #ffffff;
    font-weight: 1000;
    font-size: 12px;
    cursor: pointer;
    transition: all 250ms;
`;
