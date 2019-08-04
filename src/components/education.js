import React from 'react';
import '../pages/main.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function education() {
  return (
    <div>  
    <Card className="education-card">
      <CardContent>
        {/* <Typography color="textSecondary" gutterBottom> Jacks Labs </Typography> */}
        <div className="education-card-title">
          <Typography variant="h5" color="textSecondary" gutterBottom> University of Western Australia </Typography>
          <Typography variant="h5" color="textSecondary" gutterBottom className="date-right"> 2010 - 2014 </Typography>
        </div>
        <Typography variant="h6">Bachelor of Computer Science and Commerce</Typography>
      </CardContent>
    </Card>
    <br />
    <Card className="education-card">
      <CardContent>
        <div className="education-card-title">
          <Typography variant="h5" color="textSecondary" gutterBottom> Canning College </Typography>
          <Typography variant="h5" color="textSecondary" gutterBottom className="date-right"> 2009 - 2010 </Typography>
        </div>
        <Typography variant="h6"></Typography>
      </CardContent>
    </Card>    
    </div>
  )
}