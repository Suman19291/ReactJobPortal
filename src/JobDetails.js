import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class JobDetails extends React.Component {

    
constructor() {
    super();
    this.state = {
        _jobDetails : []
    };
}

    componentWillMount() {
        //console.log('Component WILL MOUNT!')
        this.setState( {
            _jobDetails : {
            jobname: 'React Developer',
            jobposition: 'Analyst',
            jobdescription: "Should have strong working knowledge in dotnet and related technologies.",
            experience: "1 - 4",
            joblocation: "Chennai"
        } 
    });
     }
  
    render() {
      return (
        <div>
            <div>
            <Card >
                <CardContent>
                <Typography variant="headline" component="h2">
                    {this.state._jobDetails.jobname}
                </Typography>
                <Typography component="p">
                    {this.state._jobDetails.jobposition}
                </Typography>
                <Typography component="p">
                    {this.state._jobDetails.jobdescription}
                </Typography>
                <Typography component="p">
                    {this.state._jobDetails.experience}
                </Typography>
                <Typography component="p">
                    {this.state._jobDetails.joblocation}
                </Typography>
                </CardContent>
            </Card>
            </div>
            <br/>
        </div>
      );
    };
}

// JobDetails.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default (JobDetails);