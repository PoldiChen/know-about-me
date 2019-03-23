import React from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from "../config/styles.config";

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center">
                Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                footer information.
            </Typography>
        </footer>

        );
    }
}

export default withStyles(styles)(Footer);