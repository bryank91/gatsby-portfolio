import React from "react"
import Rating from "react-rating"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../pages/main.css';

const Skills = () => (  
  <div>
    {/* <h1 id="projects">Skills</h1> */}
    <div className="skill-div">
      <Card className="skill-card">
        <CardContent>
          <Typography variant="button">Backend</Typography>
          <br />
          <Typography variant="overline">PHP</Typography>
          <Rating initialRating={4} readonly/>
          <br />
          <Typography variant="overline">Perl</Typography>
          <Rating initialRating={3} readonly/>
          <br />
          <Typography variant="overline">Python</Typography>
          <Rating initialRating={3} readonly/>
          <br />                 
        </CardContent>
      </Card>

      <Card className="skill-card">
        <CardContent>
          <Typography variant="button">Frontend</Typography>
          <br />
          <Typography variant="overline">Javascript</Typography>
          <Rating initialRating={3.5} readonly/>
          <br />
          <Typography variant="overline">React</Typography>
          <Rating initialRating={2.5} readonly/>
          <br />
          <Typography variant="overline">Vue</Typography>
          <Rating initialRating={3.5} readonly/>
          <br />
          <Typography variant="overline">AngularJS</Typography>
          <Rating initialRating={2} readonly/>
          <br />                              
        </CardContent>
      </Card>      

      <Card className="skill-card">
        <CardContent>
          <Typography variant="button">Server</Typography>
          <br />
          <Typography variant="overline">Git</Typography>
          <Rating initialRating={4} readonly/>
          <br />
          <Typography variant="overline">IIS</Typography>
          <Rating initialRating={2} readonly/>
          <br />
          <Typography variant="overline">Linux</Typography>
          <Rating initialRating={3.5} readonly/>
          <br />
          <Typography variant="overline">Hadoop</Typography>
          <Rating initialRating={2} readonly/>
          <br />
          <Typography variant="overline">Apache</Typography>
          <Rating initialRating={3} readonly/>                      
        </CardContent>
      </Card>

      <Card className="skill-card">
        <CardContent>
          <Typography variant="button">Frameworks</Typography>
          <br />
          <Typography variant="overline">Laravel</Typography>
          <Rating initialRating={3.5} readonly/>
          <br />
          <Typography variant="overline">Django</Typography>
          <Rating initialRating={2.5} readonly/>
          <br />
          <Typography variant="overline">Symfony</Typography>
          <Rating initialRating={2.5} readonly/>
          <br />
          <Typography variant="overline">Flask</Typography>
          <Rating initialRating={2} readonly/>                   
        </CardContent>
      </Card> 

      <Card className="skill-card">
        <CardContent>
          <Typography variant="button">Cloud</Typography>
          <br />
          <Typography variant="overline">Azure</Typography>
          <Rating initialRating={3} readonly/>
          <br />
          <Typography variant="overline">AWS</Typography>
          <Rating initialRating={4} readonly/>
          <br />                                        
        </CardContent>
      </Card>                    
    </div>
  </div>   
)

export default Skills
