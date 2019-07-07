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
          <Typography color="textSecondary" gutterBottom> Domain </Typography>
          <Typography color="textSecondary" gutterBottom className="date-right"> May 2015 - November 2018 </Typography>
        </div>
        <Typography variant="h6">Software Developer and Integrations Officer</Typography>
        <Typography className={classes.pos} color="textSecondary">
          Perl {bull} Javascript {bull} PHP {bull} Python {bull} MySQL {bull} AWS 
        </Typography>
        <Typography variant="body2">
          Domain is Australia’s top Real Estate marketing platform hosting hundreds of thousands of homes all over Australia
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          {bull} Responsible for maintaining MyDesktop used including franchises such as Ray White, Raine & Horne in Australia, New Zealand and Indonesia.
          <br />{bull} Creating daily custom reports and constructing intricate MYSQL database with millions of contacts, properties and transactions
          <br />{bull} Maintaining XML feed servers and MyDesktop API using SOAP and RESTful architecture. Integrating with other API/Feed providers such as Homepass, Reiwa, Realestate, etc
          <br />{bull} Experience in working under the Agile methodology through weekly deliverables
          <br />{bull} Knowledge in utilising EC2, S3, SQS, Elastic Search, etc with Amazon Web Services
          <br />{bull} Create and maintaining JSON, XML, CSV data parsers and collection
          <br />{bull} Acting as a tier 2/3 level technical support, managing client crisis and recovering lost data
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );

}