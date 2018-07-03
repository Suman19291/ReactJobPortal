import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function JobCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
        <div>
        <Card className={classes.card}>
            <CardContent>
            <Typography variant="headline" component="h2">
                {props.jobname}
            </Typography>
            <Typography component="p">
                {props.jobposition}
            </Typography>
            <Typography component="p">
                {props.jobdescription}
            </Typography>
            <Typography component="p">
                {props.minexperience} - {props.maxexperience}
            </Typography>
            <Typography component="p">
                {props.joblocation}
            </Typography>
            </CardContent>
        </Card>
        </div>
        <br/>
    </div>
  );
}

JobCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobCard);
