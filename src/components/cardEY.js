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
          <Typography color="textSecondary" gutterBottom>
          Ernst and Young
          </Typography>
          <Typography color="textSecondary" gutterBottom className="date-right"> November 2011 - February 2014 </Typography>
        </div>
        <Typography variant="h6">Trainee Auditor</Typography>
        <Typography variant="body2" component="p">
          {bull} Vouching and Casting: Aided in vouching documents regarding inventory, payables, client accounts and other statements. Proofread calculations and measures through client’s spreadsheet report to ensure correctness and credibility.
          <br />{bull} Stocktakes: Accomplished several stocktakes of the company’s assets and inventory. This involves designing stocktakes that encompasses majority of the stock depending on their business model and executing it.
          <br />{bull} Filing and documentation: Assisted in filing documents for future references and writing reports on audit approaches in that specific company for other auditor’s convenience.
          <br />{bull} Control Testing: Executed several types of control testing procedures on companies cash flow, journal management, accounts payable and receivable functions
          <br />{bull} Bank Reconciliations and Confirmations: Helped in addressing issues between company’s bank statements and its own accounting records.
          <br />{bull} SAP: Used SAP to make simple queries and inputting records into the database as part of our testing procedures.
          <br />{bull} Excel Knowledge: Aided in inspecting accounts by making counter-checks between account payables/receivables and documents of the company and creating audit accounts through the use of Excel
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}