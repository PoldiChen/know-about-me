import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/AccountCircle';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import DetailDialog from "./DetailDialog";
import IconButton from '@material-ui/core/IconButton';
import ViewIcon from '@material-ui/icons/Pageview';
import EditIcon from "@material-ui/icons/Edit";
import cardParams from "../config/card.config";
import header from "../config/header.config";
import styles from "../config/styles.config"
import Footer from "./Footer"

class MainPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
            dialogTitle: "",
            dialogContent: ""
        };
    }

    handleViewClick = (param) => {
        console.log("view");
        console.log(param);
        this.setState({
            dialogOpen: true,
            dialogTitle: param.title,
            dialogContent: param.detail
        });
    };

    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <CameraIcon className={classes.icon} />
                        <Typography variant="h6" color="inherit" noWrap>
                            {header.header}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    {/* Hero unit */}
                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                {header.title}
                            </Typography>
                            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                {header.sub_title}
                            </Typography>
                            <div className={classes.heroButtons}>
                                <Grid container spacing={16} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            view
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" color="primary">
                                            edit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(classes.layout, classes.cardGrid)}>
                        {/* End hero unit */}
                        <Grid container spacing={40}>
                            {cardParams.map(param => (
                                <Grid item key={param.key} sm={6} md={4} lg={3}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={param.image}
                                            title={param.title}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {param.title}
                                            </Typography>
                                            <Typography align="left">
                                                {param.detail}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <IconButton className={classes.button} aria-label="Delete">
                                                <ViewIcon onClick={() => this.handleViewClick(param)} color="primary" />
                                            </IconButton>
                                            <IconButton className={classes.button}>
                                                <EditIcon color="primary" />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </main>

                <Footer />

                <DetailDialog
                    dialogOpen={this.state.dialogOpen}
                    dialogTitle={this.state.dialogTitle}
                    dialogContent={this.state.dialogContent}
                />

            </React.Fragment>
        );
    }
}

MainPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPage);