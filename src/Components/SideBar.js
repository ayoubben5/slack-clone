import React from 'react';
import styled from "styled-components";
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function SideBar() {
    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>Ayoub HQ</h2>
                    <h3>
                    <FiberManualRecordIcon/>
                    Ayoub Benigmim
                    </h3>
                    </SideBarInfo>
                    <CreateIcon/>
            </SideBarHeader>
        </SideBarContainer>
    )
}

export default SideBar

const SideBarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex:0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
`;

const SideBarHeader = styled.div`
    display: flex;
    border-botton: 1px solid #49274b;
    padding-bottom: 10px;
    padding: 13px;

    >.MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 50%;
    }
`;

const SideBarInfo = styled.div`
flex:1;

> h2{
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
}
> h3{
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
}
`;

