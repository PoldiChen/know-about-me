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

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 2,
    },
});

const cardParams = [
    {
        title: "Basic",
        detail: "some basic information about me",
    },{
        title: "Work Experience",
        detail: "my work experience.",
    },{
        title: "Skills",
        detail: "my IT skills.",
    },{
        title: "Projects",
        detail: "some projects I've done.",
    },{
        title: "Education",
        detail: "my education background.",
    },{
        title: "Hobbies",
        detail: "my hobbies",
    },{
        title: "Expectation",
        detail: "my expectation about job.",
    },{
        title: "About the Page",
        detail: "some skills about construct this page.",
    },
];


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
                            Poldi Chen
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    {/* Hero unit */}
                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Poldi Chen
                            </Typography>
                            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                Something about Poldi Chen.
                            </Typography>
                            <div className={classes.heroButtons}>
                                <Grid container spacing={16} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            github
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" color="primary">
                                            blog
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
                                            image="image/pic1.png"
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
                                            <Button size="small" color="primary" onClick={() => this.handleViewClick(param)}>
                                                View
                                            </Button>
                                            <Button size="small" color="primary">
                                                Edit
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </main>
                {/* Footer */}
                {/*<footer className={classes.footer}>*/}
                    {/*<Typography variant="h6" align="center">*/}
                        {/*Footer*/}
                    {/*</Typography>*/}
                    {/*<Typography variant="subtitle1" align="center" color="textSecondary" component="p">*/}
                        {/*footer information.*/}
                    {/*</Typography>*/}
                {/*</footer>*/}
                {/* End footer */}

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