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
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}