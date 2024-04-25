import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Footer from '../AllBars/Footer';
import Header from '../AllBars/Header';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//Photos
import MED1 from "../Photos/medicine.jpg"

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function MedicCard() {

    // هتكررو دول علي حسب عدد الكارد
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);

    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };
    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };
    const handleExpandClick3 = () => {
        setExpanded3(!expanded3);
    };
    //كا كارد هتاخد واحده مختلفه عن التانيه



    return (
        <React.Fragment>
            <Header />
            <div style={{ marginTop: '7%' }}>
                <div className="header-D"></div>
                <h1 className="txtdoc" data-aos="zoom-in">استكشف عالم الشفاء والراحة مع مجموعتنا المميزة من أشهر الأدوية</h1>
                <h1 data-aos="zoom-in" style={{ color: '#ff0505', textAlign: 'center', marginBottom: '4%' }}>.حيث تلتقي الجودة بالكفاءة لتقديم أفضل تجربة علاجية تستحقها</h1>

                {/* section 1 */}

                <section style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '4%' }}>

                    {/* Card 1 */}

                    <Card sx={{ maxWidth: 445, background: '#F0F0F0' }}>
                        <CardHeader
                            title="WELLMAN"
                            subheader="Multivitamin"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={MED1}
                            alt="Paella dish"
                            sizes='300'
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon style={{ color: '#E60B00' }} />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <ExpandMore
                                expand={expanded1}
                                onClick={handleExpandClick1}
                                aria-expanded={expanded1}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded1} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography data-aos="fade-up">Method:</Typography>
                                <Typography paragraph data-aos="fade-up">
                                    What is omega-3 tablets used for?

                                </Typography>
                                <Typography paragraph data-aos="fade-up">
                                    Omega-3 fatty acids are used together with lifestyle changes (diet, weight-loss, exercise) to reduce the amount of triglycerides (a fat-like substance) in the blood in people with very high triglycerides. Omega-3 fatty acids are in a class of medications called antilipemic or lipid-regulating agents
                                </Typography>
                                <Typography paragraph data-aos="fade-up">
                                    Generally safe. Omega-3 fatty acids are essential for good health. Try to get them from your diet by eating fish — broiled or baked, not fried. Fish oil supplements might be helpful if you have high triglycerides or rheumatoid arthritis.
                                </Typography>
                                <Typography data-aos="fade-up">
                                    Fish oil supplements may interact with certain medications or supplements. Do not take them                        </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>


                    {/* Card 2 */}


                    <Card sx={{ maxWidth: 445, background: '#F0F0F0' }}>
                        <CardHeader
                            title="WELLMAN"
                            subheader="Multivitamin"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={MED1}
                            alt="Paella dish"
                            sizes='300'
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon style={{ color: '#E60B00' }} />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <ExpandMore
                                expand={expanded2}
                                onClick={handleExpandClick2}
                                aria-expanded={expanded2}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded2} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography data-aos="fade-up">Method:</Typography>
                                <Typography paragraph data-aos="fade-up">
                                    What is omega-3 tablets used for?

                                </Typography>
                                <Typography paragraph data-aos="fade-up">
                                    Omega-3 fatty acids are used together with lifestyle changes (diet, weight-loss, exercise) to reduce the amount of triglycerides (a fat-like substance) in the blood in people with very high triglycerides. Omega-3 fatty acids are in a class of medications called antilipemic or lipid-regulating agents
                                </Typography>
                                <Typography paragraph data-aos="fade-up">
                                    Generally safe. Omega-3 fatty acids are essential for good health. Try to get them from your diet by eating fish — broiled or baked, not fried. Fish oil supplements might be helpful if you have high triglycerides or rheumatoid arthritis.
                                </Typography>
                                <Typography data-aos="fade-up">
                                    Fish oil supplements may interact with certain medications or supplements. Do not take them                        </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>

                    {/* Card 3 */}


                    <Card sx={{ maxWidth: 445, background: '#F0F0F0' }}>
                        <CardHeader
                            title="WELLMAN"
                            subheader="Multivitamin"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={MED1}
                            alt="Paella dish"
                            sizes='300'
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon style={{ color: '#E60B00' }} />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <ExpandMore
                                expand={expanded3}
                                onClick={handleExpandClick3}
                                aria-expanded={expanded3}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded3} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography data-aos="fade-up">Method:</Typography>
                                <Typography paragraph data-aos="fade-up">
                                    What is omega-3 tablets used for?

                                </Typography>
                                <Typography paragraph data-aos="fade-up">
                                    Omega-3 fatty acids are used together with lifestyle changes (diet, weight-loss, exercise) to reduce the amount of triglycerides (a fat-like substance) in the blood in people with very high triglycerides. Omega-3 fatty acids are in a class of medications called antilipemic or lipid-regulating agents
                                </Typography>
                                <Typography paragraph data-aos="fade-up">
                                    Generally safe. Omega-3 fatty acids are essential for good health. Try to get them from your diet by eating fish — broiled or baked, not fried. Fish oil supplements might be helpful if you have high triglycerides or rheumatoid arthritis.
                                </Typography>
                                <Typography data-aos="fade-up">
                                    Fish oil supplements may interact with certain medications or supplements. Do not take them                        </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>

                </section>

                {/* Line  */}
                <hr style={{ width: '80%', borderBottom: '4px solid #1F5357', marginBottom: '4%' }} />

                {/* section 2 */}

                <section style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '4%' }}>

                    {/*هتكررو كل سكشن بختلاف الكارد برضو زي فوق يعني وقفنا لحد كارد 3 فوق هنكمل هنا بكارد 4 وهكذا*/}

                </section>

            </div>
            <Footer />
        </React.Fragment>
    );
}
