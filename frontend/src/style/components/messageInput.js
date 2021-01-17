import styled from 'styled-components';

export const MessageInputContainer = styled.div`
    display: flex;
    padding: 5px 0;
`;

export const MessageInputForm = styled.input`
    padding: 10px 12px;
    border: 3px solid #F27665;
    color: #FA6E6A;
    border-radius: 16px;
    box-shadow: -3px 0 #fff, 0 3px #fff, 3px 0 #fff, 0 -3px #fff;
    width: calc(100% - 50px);
`;

export const MessageInputButton = styled.button`
    border: 3px solid #F77267;
    color: #F77267;
    border-radius: 16px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    position: relative;
    background: #FEE4E3;
    text-shadow: -3px 0 #fff, 0 3px #fff, 3px 0 #fff, 0 -3px #fff;
    width: 40px;
    height: 40px;
    margin-left: 10px;

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
        background: rgba(255, 255, 255, 0.7);
        box-shadow: 0px 8px 15px rgba(255, 99, 143, 0.3);
    }

    &:disabled {
        background: #CDCDCD;
        color: #3d3d3d;
        border-color: #3d3d3d;

        &:hover {
            box-shadow: none;
            cursor: not-allowed;
        }
    }
`;
