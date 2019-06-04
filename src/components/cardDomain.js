import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Domain
        </Typography>
        <Typography variant="h6">Software Developer and Integrations Officer</Typography>
        <Typography className={classes.pos} color="textSecondary">
          Perl {bull} Javascript {bull} PHP {bull} Python {bull} MySQL {bull} AWS 
        </Typography>
        <Typography variant="body2" component="p">
          {bull} Developing and maintaining existing functionality and technologies for Australian, New Zealand and Indonesian offices including franchises such as Ray White, Raine & Horne, etc
          <br />{bull} Creating daily custom reports and constructing intricate MYSQL database with millions of contacts, properties and transactions
          <br />{bull} Maintaining XML feed servers and MyDesktop API using SOAP and REST architecture. Integrating with other API/Feed providers such as Homepass, Reiwa, Realestate, Domain, etc
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