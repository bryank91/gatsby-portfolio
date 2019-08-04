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
        <div className={classes.title} >
          <Typography color="textSecondary" gutterBottom>
          Hotcopper
          </Typography>
          <Typography color="textSecondary" gutterBottom className="date-right">May 2014 - September 2014 </Typography>
        </div>
        <Typography variant="h6">Junior Software Developer</Typography>
        <Typography className={classes.pos} color="textSecondary">
          PHP {bull} Xenforo CMS 
        </Typography>
        <Typography variant="body2">HotCopper is the largest stock market forum in Australia with over hundreds of thousand registered members and more than a few thousand new posts each day.</Typography>
        <br />
        <Typography variant="body2" component="p">
          {bull} Gathered requirements and statistics on user feedback in the existing website and compiled an development roadmap on what task should be prioritise
          <br />{bull} Bug testing across different platforms: Performed UI test and automation checks on VM (Windows and Unix) and mobiles emulators (Symbian, Android, Blackberry, iOS) 
          <br />{bull} Maintained the core functionality in the website through the use of the Xenforo CMS whilst performing markup language touch ups. Helped in developing small add-ons for the website such as counters for views and online users 
          <br />{bull} Moderated the stock discussion forums such as determining toxic users and also providing technical support to users of the website. 
          <br />{bull} Assisted in ensuring a smooth migration of data from different software architectures. 
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}