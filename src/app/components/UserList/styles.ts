import styled from 'styled-components'

export const Media = styled.div`
    display: flex;
    background: var(--bs-white);
    border: var(--bs-border-width) var(--bs-border-style) var(--bs-gray-300);
    border-radius: var(--bs-border-radius-sm);
    padding: 8px 10px 7px;
    margin-top: -1px;
`

export const MediaLeft = styled.div`
    flex-shrink: 0;
`

export const MediaBody = styled.div`
    flex-grow: 1;
    margin-left: 12px;
`

export const Avatar = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--bs-gray-400);
`

export const Name = styled.div`
    font-size: 1em;
    font-weight: 700;
`

export const UserName = styled.span`
    font-size: .8em;
`

export const Email = styled.span`
    font-size: .8em;
    margin-left: 5px;
`
