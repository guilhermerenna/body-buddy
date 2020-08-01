import React from 'react';

import Main from '../Main';

import { Container, Header, BackIcon, AppHeader, BodyBuddyIcon, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

const Layout: React.FC = () => {
    return (
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>
                <AppHeader>
                    <BodyBuddyIcon />
                    <strong>BodyBuddy</strong>
                </AppHeader>
            </Header>
            <BottomMenu>
                <HomeIcon />
                <SearchIcon />
                <BellIcon />
                <EmailIcon />
            </BottomMenu>
        </Container>
    )
};

export default Layout;