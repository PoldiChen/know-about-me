import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import basicListStyles from "../config/basicListStyles.config"
import asyncFetch from "../utils/asyncFetch";

class BasicList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            email: "",
            address: ""
        };
    }

    componentDidMount() {
        this.getDetail();
    }

    getDetail = () => {
        asyncFetch('GET', '/basic/2', {}, (response) => {
            if (response.code === 0) {
                this.setState({
                    phone: response.data.phone,
                    email: response.data.email,
                    address: response.data.address
                });
            }
            console.log(response);
        }, {}, 'cors');
    };

    render() {

        const { classes } = this.props;

        return (
            <List className={classes.root}>
                <ListItem>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                    <ListItemText primary="Phone" secondary={this.state.phone} />
                </ListItem>
                <ListItem>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                    <ListItemText primary="Email" secondary={this.state.email} />
                </ListItem>
                <ListItem>
                    <Avatar>
                        <BeachAccessIcon />
                    </Avatar>
                    <ListItemText primary="Address" secondary={this.state.address} />
                </ListItem>
            </List>
        );
    }

}

BasicList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(basicListStyles)(BasicList);