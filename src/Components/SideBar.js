import React from 'react';
import styled from "styled-components";
import {useCollection} from "react-firebase-hooks/firestore"
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import AddIcon from '@material-ui/icons/Add';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarOption from './SidebarOption';
import { db } from '../firebase';

function SideBar() {
    const [channels] = useCollection(db.collection('rooms'));
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
            <SidebarOption Icon={InsertCommentIcon} title={'Threads'} />
            <SidebarOption Icon={InboxIcon} title={'Mentions & reactions'}/>
            <SidebarOption Icon={DraftsIcon} title={'Saved items'} />
            <SidebarOption Icon={BookmarkBorderIcon} title={'Channel Browser'} />
            <SidebarOption Icon={PeopleAltIcon} title={'People & user groups'} />
            <SidebarOption Icon={AppsIcon} title={'Apps'} />
            <SidebarOption Icon={FileCopyIcon} title={'File browser'} />
            <SidebarOption Icon={ExpandLessIcon} title={'Show less'}/>
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title={'Show more'}/>
            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption title={'Add channel'}/>
            {channels?.docs.map(doc => (
                <SidebarOption key={doc.id} title={doc.data().name}/>
            ))}
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
    > hr{
        margin-top: 10px;
        margin-bottom:10px;
        border: 1px solid #49274b;
    }
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
> h3 > .MuiSvgIcon-root {
    font-size:14px;
    color: green;
}
`;

