import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Footer from '../AllBars/Footer';
import Header from '../AllBars/Header';

//Photos

import MED1 from "../Photos/medicine.jpg"


export default function MedicCard() {
    return (
        <React.Fragment>
            <Header />
            <div style={{ marginTop: '8%' }}>
                <div className="header-D"></div>
                <h1 className="txtdoc" data-aos="zoom-in">استكشف عالم الشفاء والراحة مع مجموعتنا المميزة من أشهر الأدوية</h1>
                <h1 data-aos="zoom-in" style={{ color: '#ff0505', textAlign: 'center', marginBottom: '4%' }}>.حيث تلتقي الجودة بالكفاءة لتقديم أفضل تجربة علاجية تستحقها</h1>

                {/* section 1 */}

                <section style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '4%' }}>

                    {/* Card 1 */}


                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={MED1}
                            title="medicine"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" data-aos="fade-up">
                                Omega 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>


                    {/* Card 2 */}


                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={MED1}
                            title="medicine"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" data-aos="fade-up">
                                Omega 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                    {/* Card 3 */}


                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={MED1}
                            title="medicine"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" data-aos="fade-up">
                                Omega 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                </section>

                {/* Line  */}
                <hr style={{ width: '80%', borderBottom: '4px solid #1F5357', marginBottom: '4%' }} />

                {/* section 2 */}

                <section style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '4%' }}>

                    {/* Card 1 */}


                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={MED1}
                            title="medicine"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" data-aos="fade-up">
                                Omega 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>


                    {/* Card 2 */}


                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={MED1}
                            title="medicine"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" data-aos="fade-up">
                                Omega 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>


                    {/* Card 3 */}


                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={MED1}
                            title="medicine"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" data-aos="fade-up">
                                Omega 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                </section>

                {/* Line  */}

                <hr style={{ width: '80%', borderBottom: '4px solid #1F5357', marginBottom: '4%' }} />


                {/* section 3 */}

                <section style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '4%' }}>

                    {/* Card 1 */}


                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={MED1}
                            title="medicine"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" data-aos="fade-up">
                                Omega 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>


                    {/* Card 2 */}


                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={MED1}
                            title="medicine"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" data-aos="fade-up">
                                Omega 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                    {/* Card 3 */}


                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={MED1}
                            title="medicine"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" data-aos="fade-up">
                                Omega 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                </section>

                {/* Line  */}

                <hr style={{ width: '80%', borderBottom: '4px solid #1F5357', marginBottom: '4%' }} />

                {/* section 3 */}

                <section style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '4%' }}>

                    {/* Card 1 */}


                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={MED1}
                            title="medicine"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" data-aos="fade-up">
                                Omega 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>


                    {/* Card 2 */}


                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={MED1}
                            title="medicine"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" data-aos="fade-up">
                                Omega 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                    {/* Card 3 */}


                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={MED1}
                            title="medicine"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" data-aos="fade-up">
                                Omega 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                </section>

                {/* Line  */}

                <hr style={{ width: '80%', borderBottom: '4px solid #1F5357', marginBottom: '4%' }} />

                {/* section 4 */}

                <section style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '4%' }}>

                    {/* Card 1 */}


                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={MED1}
                            title="medicine"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" data-aos="fade-up">
                                Omega 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>


                    {/* Card 2 */}


                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={MED1}
                            title="medicine"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" data-aos="fade-up">
                                Omega 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                    {/* Card 3 */}


                    <Card sx={{ maxWidth: 450 }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={MED1}
                            title="medicine"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" data-aos="fade-up">
                                Omega 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary" data-aos="fade-up">
                                Omega-3 fatty acids (omega-3s) are polyunsaturated fats that perform important functions in your body.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                </section>

            </div>
            <Footer />
        </React.Fragment>
    );
}
