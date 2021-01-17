import styled from 'styled-components';

export const UsersListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 30px;
    border: 5px solid #F27665;
    color: #FA6E6A;
    border-radius: 16px;
    height: fit-content;
`;

export const UsersListTitle = styled.h1`
    font-size: 22px;
    text-shadow: -3px 0 #fff, 0 3px #fff, 3px 0 #fff, 0 -3px #fff;
    margin-bottom: 20px;
`;

export const UsersListItem = styled.div`
    display: flex;
    color: #fff;
    text-shadow: -2px 0 #F27665, 0 2px #F27665, 2px 0 #F27665, 0 -2px #F27665;
    padding-left: 32px;
    margin-bottom: 16px;
    position: relative;

    &:last-of-type {
        margin-bottom: 0;
    }

    &:before {
        content: '';
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: ${props => props.isCurrentUser ? '#F27665' : '#FEE4E3'};
        display: block;
        left: 0;
        top: -1px;
        position: absolute;
    }
`;
