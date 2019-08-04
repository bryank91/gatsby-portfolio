import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../pages/main.css';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.title}>
        <Typography color="textSecondary" gutterBottom> Jacks Labs </Typography>
        <Typography color="textSecondary" gutterBottom className="date-right">November 2018 - Current</Typography>
        </div>
        <Typography variant="h6">Senior Software Developer</Typography>
        <Typography className={classes.pos} color="textSecondary">
          PHP {bull} Laravel {bull} Azure {bull} AWS  {bull} SQL Server {bull} Javascript {bull} React {bull} Vue
        </Typography>
        <Typography variant="body2" component="p">
          Jack’s is a software company that provides consulting, software, and application development services.         
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          {bull} Help developed multiple successful software MVP and rescued offshore projects specialising in Navigational Data, Property, Media and F&B
          <br />{bull} Managed different Azure and AWS Cloud architectures and infrastructures (EC2, EB, RDS, Cloudfront, S3, VPC, IAM, VM, App Services, Blob Storages)
          <br />{bull} Worked with Restful APIs, GIS Data, SQL Servers, Git, Shell Scripting and Linux Operating Systems
          <br />{bull} Worked with MVC frameworks such as Laravel in PHP
          <br />{bull} Experience front end technologies such as Vue.JS, React, SCSS, CSS, NPM, JavaScript, HTML
          <br />{bull} Help designed timelines, client quotes, wireframes, sprint deliverables, requirements, documentation with technical teams and clients
          <br />{bull} Lead teams remotely in Indonesia through Slack, Jira, weekly sprints, daily stand-ups under the Agile Methodology
        </Typography>        
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}