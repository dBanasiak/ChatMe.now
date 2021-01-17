import styled from 'styled-components';

export const MessageBoxContainer = styled.div`
    display: flex;
    border: 7px solid #F27665;
    border-radius: 24px;
    max-width: 27vw;
    height: 90vh;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #FEE4E3;
    box-shadow: inset 5px 5px 0px 5px #fff;

    &:before {
        content: '';
        display: block;
        height: 7px;
        width: 72px;
        background: #F27665;
        position: absolute;
        top: 28px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 5px;
        box-shadow: 3px 3px 0px 1px #FFFFFF
    }

    &:after {
        content: '';
        display: block;
        bottom: 12px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 16px;
        border: 7px solid #F27665;
        height: 20px;
        width: 72px;
        position: absolute;
        box-shadow: inset 3px 3px 0px 3px #FEE4E3;
        background: #fff;
    }
`;

export const MessageBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 56px 32px;
    border: 7px solid #F27665;
    border-radius: 8px;
    padding: 16px;
    padding-bottom: 5px;
    background: #fff;
    box-shadow: inset 5px 5px 0px 5px #fff4f4;
    overflow-x: hidden;
`;

export const MessageBoxForm = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    padding: 5px 0;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const MessageBoxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Yusei Magic', sans-serif;
    border-bottom: 1px solid black;
    padding: 8px;

    & > span {
        font-family: 'Yusei Magic', sans-serif;
    }
`;

export const MessageBoxText = styled.p`
    margin: 0;
    font-family: 'Yusei Magic', sans-serif;
    padding: 8px;
`;

export const MessageBoxContent = styled.div`
    border: 3px solid black;
    background: ${props => props.isCurrentUser ? '#FEE4E3' : '#fff'};
    text-align: ${props => props.isCurrentUser ? 'left' : 'right'};
    border-radius: 8px;
    margin: 4px 0;
`;
