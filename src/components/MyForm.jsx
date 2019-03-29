import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import styles from "../config/formStyles.config";

class MyForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">

                <TextField
                    id="standard-uncontrolled"
                    label="Uncontrolled"
                    defaultValue="foo"
                    className={classes.textField}
                    margin="normal"
                />

                <TextField
                    required
                    id="standard-required"
                    label="Required"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                />

            </form>
        );
    }

}

MyForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyForm);