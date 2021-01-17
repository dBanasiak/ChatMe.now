import styled from 'styled-components';

export const AddUserContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right top, #fca9a4, #feb9b8, #ffcacc, #ffdbde, #feecee);
    flex-direction: column;
`;

export const AddUserLabel = styled.label`
    color: #FA6E6A;
    margin-bottom: 24px;
    font-size: 20px;
    text-shadow: -3px 0 #fff, 0 3px #fff, 3px 0 #fff, 0 -3px #fff;
`;

export const AddUserInput = styled.input`
    padding: 10px 12px;
    min-width: 220px;
    margin-bottom: 24px;
    border: 3px solid #F27665;
    color: #FA6E6A;
    border-radius: 16px;
    font-size: 18px;
    box-shadow: -3px 0 #fff, 0 3px #fff, 3px 0 #fff, 0 -3px #fff;
`;

export const AddUserButton = styled.button`
    border: 3px solid #F77267;
    color: #F77267;
    border-radius: 16px;
    padding: 12px 40px 10px 40px;
    padding-top: 12px;
    letter-spacing: 2px;
    font-size: 16px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    position: relative;
    background: #FEE4E3;
    text-shadow: -3px 0 #fff, 0 3px #fff, 3px 0 #fff, 0 -3px #fff;
    overflow: hidden;
    text-transform: uppercase;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-top: 5px solid #fff;
        border-left: 5px solid #fff;
        border-radius: 15px;
    }

    &:hover,
    &:focus {
        padding: 12px 42px 10px 42px;
        background: rgba(255, 255, 255, 0.7);
        box-shadow: 0px 8px 15px rgba(255, 99, 143, 0.3);
    }

    &:disabled {
        background: #CDCDCD;
        color: #3d3d3d;
        border-color: #3d3d3d;

        &:hover {
            padding: 12px 40px 10px 40px;
            box-shadow: none;
            cursor: not-allowed;
        }
    }
`;
