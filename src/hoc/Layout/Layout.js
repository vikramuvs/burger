import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerShowHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleClicked = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render () {
        return (
            <Auxiliary>
                <Toolbar 
                drawerToggleClicked={this.sideDrawerToggleClicked} />
                <SideDrawer 
                 open={this.state.showSideDrawer}
                 closed={this.sideDrawerShowHandler}
                  />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}

export default Layout;