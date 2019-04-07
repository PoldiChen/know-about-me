
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from "../../config/commonList.config"

import asyncFetch from "../../utils/asyncFetch";

class CommonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            api: props.api,
            columns: props.columns,
            datas: []
        };
    }

    componentDidMount() {
        this.getDetail();
    }

    componentWillReceiveProps(props) {
        //
    }

    getDetail = () => {
        asyncFetch('GET', this.state.api, {}, (response) => {
            if (response.code === 0) {
                this.setState({
                    datas: response.data
                });
            }
            console.log(response);
        }, {}, 'cors');
    };

    render() {

        const { classes } = this.props;

        const columns = this.state.columns;
        const datas = this.state.datas;

        console.log("CommonList@render");
        console.log(columns);
        console.log(datas);

        const rows = [
            {
                id: 1,
                name: "aa",
                email: "bb",
                phone: "cc"
            }, {
                id: 2,
                name: "dd",
                email: "ee",
                phone: "ff"
            }
        ];

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>

                            {
                                columns.map(column => (
                                    <TableCell>{column.title}</TableCell>
                                ))
                            }

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            datas.map(row => (
                                <TableRow key={row.id}>
                                    {
                                        columns.map(column => (
                                            <TableCell component="th" scope="row">{row[column.key]}</TableCell>
                                        ))
                                    }
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
            </Paper>
        );
    }

}

CommonList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommonList);