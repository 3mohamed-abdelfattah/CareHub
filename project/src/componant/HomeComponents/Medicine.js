import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Footer from "../AllBars/Footer";
import Header from "../AllBars/Header";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//Photos
import MED1 from "../Photos/Panadol .jpg";
import MED2 from "../Photos/Panadol Extra.jpg";
import MED3 from "../Photos/Adol.jpeg";
import MED4 from "../Photos/adol_extra.jpeg";
import MED5 from "../Photos/Doliprane.jpeg";
import MED6 from "../Photos/سيتال.jpg";
import MED7 from "../Photos/كونجستال.jpeg";
import MED8 from "../Photos/كولد فرى.png";
import MED9 from "../Photos/وان_تو.jpeg";
import MED10 from "../Photos/otrivin.jpeg";
import MED11 from "../Photos/اوجمنتين.jpeg";
import MED12 from "../Photos/بروفين.jpeg";
import MED13 from "../Photos/ابيدون.jpeg";
import MED14 from "../Photos/امبيزيم.jpeg";
import MED15 from "../Photos/دولفين.jpeg";
import MED16 from "../Photos/كتافاست.jpeg";
import MED17 from "../Photos/ميوفين.jpeg";
import MED18 from "../Photos/فولتارين_جل.jpeg";
import MED19 from "../Photos/كارباميد.jpeg";
import MED20 from "../Photos/بانثينول.jpeg";
import MED21 from "../Photos/بروباميثون.jpeg";
import MED22 from "../Photos/فيروترون.jpg";
import MED23 from "../Photos/كليندام.jpg";
import MED24 from "../Photos/أميريست.jpeg";
import MED25 from "../Photos/فيرسيرك.jpeg";
import MED26 from "../Photos/ميكوجل.jpg";
import MED27 from "../Photos/سبازموفرى.jpeg";
import MED28 from "../Photos/انتينال.jpg";
import MED29 from "../Photos/بولي فريش .jpg";
import MED30 from "../Photos/ديكساترول.jpg";
import MED31 from "../Photos/ريموواكس.jpg";
import MED32 from "../Photos/ميبو.jpg";
import MED33 from "../Photos/فيوسيكورت.jpg";
import MED34 from "../Photos/فلاجيل.jpg";
import MED35 from "../Photos/كالما كينج.jpg";
import MED36 from "../Photos/يوريفين.jpg";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MedicCard() {

  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  const [expanded5, setExpanded5] = React.useState(false);
  const [expanded6, setExpanded6] = React.useState(false);
  const [expanded7, setExpanded7] = React.useState(false);
  const [expanded8, setExpanded8] = React.useState(false);
  const [expanded9, setExpanded9] = React.useState(false);
  const [expanded10, setExpanded10] = React.useState(false);
  const [expanded11, setExpanded11] = React.useState(false);
  const [expanded12, setExpanded12] = React.useState(false);
  const [expanded13, setExpanded13] = React.useState(false);
  const [expanded14, setExpanded14] = React.useState(false);
  const [expanded15, setExpanded15] = React.useState(false);
  const [expanded16, setExpanded16] = React.useState(false);
  const [expanded17, setExpanded17] = React.useState(false);
  const [expanded18, setExpanded18] = React.useState(false);
  const [expanded19, setExpanded19] = React.useState(false);
  const [expanded20, setExpanded20] = React.useState(false);
  const [expanded21, setExpanded21] = React.useState(false);
  const [expanded22, setExpanded22] = React.useState(false);
  const [expanded23, setExpanded23] = React.useState(false);
  const [expanded24, setExpanded24] = React.useState(false);
  const [expanded25, setExpanded25] = React.useState(false);
  const [expanded26, setExpanded26] = React.useState(false);
  const [expanded27, setExpanded27] = React.useState(false);
  const [expanded28, setExpanded28] = React.useState(false);
  const [expanded29, setExpanded29] = React.useState(false);
  const [expanded30, setExpanded30] = React.useState(false);
  const [expanded31, setExpanded31] = React.useState(false);
  const [expanded32, setExpanded32] = React.useState(false);
  const [expanded33, setExpanded33] = React.useState(false);
  const [expanded34, setExpanded34] = React.useState(false);
  const [expanded35, setExpanded35] = React.useState(false);
  const [expanded36, setExpanded36] = React.useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };
  const handleExpandClick6 = () => {
    setExpanded6(!expanded6);
  };
  const handleExpandClick7 = () => {
    setExpanded7(!expanded7);
  };
  const handleExpandClick8 = () => {
    setExpanded8(!expanded8);
  };
  const handleExpandClick9 = () => {
    setExpanded9(!expanded9);
  };
  const handleExpandClick10 = () => {
    setExpanded10(!expanded10);
  };
  const handleExpandClick11 = () => {
    setExpanded11(!expanded11);
  };
  const handleExpandClick12 = () => {
    setExpanded12(!expanded12);
  };
  const handleExpandClick13 = () => {
    setExpanded13(!expanded13);
  };
  const handleExpandClick14 = () => {
    setExpanded14(!expanded14);
  };
  const handleExpandClick15 = () => {
    setExpanded15(!expanded15);
  };
  const handleExpandClick16 = () => {
    setExpanded16(!expanded16);
  };
  const handleExpandClick17 = () => {
    setExpanded17(!expanded17);
  };
  const handleExpandClick18 = () => {
    setExpanded18(!expanded18);
  };
  const handleExpandClick19 = () => {
    setExpanded19(!expanded19);
  };
  const handleExpandClick20 = () => {
    setExpanded20(!expanded20);
  };
  const handleExpandClick21 = () => {
    setExpanded21(!expanded21);
  };
  const handleExpandClick22 = () => {
    setExpanded22(!expanded22);
  };
  const handleExpandClick23 = () => {
    setExpanded23(!expanded23);
  };
  const handleExpandClick24 = () => {
    setExpanded24(!expanded24);
  };
  const handleExpandClick25 = () => {
    setExpanded25(!expanded25);
  };
  const handleExpandClick26 = () => {
    setExpanded26(!expanded26);
  };
  const handleExpandClick27 = () => {
    setExpanded27(!expanded27);
  };
  const handleExpandClick28 = () => {
    setExpanded28(!expanded28);
  };
  const handleExpandClick29 = () => {
    setExpanded29(!expanded29);
  };
  const handleExpandClick30 = () => {
    setExpanded30(!expanded30);
  };
  const handleExpandClick31 = () => {
    setExpanded31(!expanded31);
  };
  const handleExpandClick32 = () => {
    setExpanded32(!expanded32);
  };
  const handleExpandClick33 = () => {
    setExpanded33(!expanded33);
  };
  const handleExpandClick34 = () => {
    setExpanded34(!expanded34);
  };
  const handleExpandClick35 = () => {
    setExpanded35(!expanded35);
  };
  const handleExpandClick36 = () => {
    setExpanded36(!expanded36);
  };


  return (
    <React.Fragment>
      <Header />
      <div style={{ marginTop: "7%" }}>
        <div className="header-D"></div>
        <h1 className="txtdoc" data-aos="zoom-in">
          استكشف عالم الشفاء والراحة مع مجموعتنا المميزة من أشهر الأدوية
        </h1>
        <h1
          data-aos="zoom-in"
          style={{ color: "#ff0505", textAlign: "center", marginBottom: "4%" }}
        >
          .حيث تلتقي الجودة بالكفاءة لتقديم أفضل تجربة علاجية تستحقها
        </h1>
        {/* section 1 */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "4%",
            direction: "rtl",
          }}
        >
          {/* Card 1 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="بانادول أدفانس" subheader="مسكن" />
            <CardMedia
              component="img"
              alt="Paella dish"
              height="194"
              image={MED1}
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.primary"
                data-aos="fade-up"
              >
                يعد بانادول مسكنًا فعالًا، كما أنه خافض للحرارة، حيث يعمل على
                منع الناقلات الكيميائية في الدماغ للتحكم في الألم وتنظيم درجة
                حرارة الجسم
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
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
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال بانادول ادفانس ما يلي : </b>نزلات البرد
                  والأنفلونزا،آلام العضلات والمفاصل،آلام ما بعد الجراحة،آلام
                  الدورة الشهرية،الصداع النصفي،آلام الأسنان،التهاب الحلق،الحمى.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات بانادول أدفانس وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  بالغون وكبار السن والأطفال الذين تتراوح أعمارهم بين 16 سنة وما
                  فوق: تناول قرص إلى قرصين كل 4 إلى 6 ساعات حسب الحاجة لألم أو
                  الحمى .الأطفال الذين تتراوح أعمارهم بين 10-15 سنة: تناول قرص
                  واحد كل 4 إلى 6 ساعات حسب الحاجة لألم أو الحمى .الأطفال أقل من
                  10 سنوات: لا تعط أقراص الباراسيتامول للأطفال دون سن 10 سنوات.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام بنادول أدفانس ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية تجاه أي مكون من مكونات هذا الدواء.مرض شديد في
                  الكبد أو فشل الكبد.أمراض الكلى. . يمنع تناول أي أدوية أخرى
                  تحتوي على الباراسيتامول أو الأسيتامينوفين خلال فترة العلاج
                  بدواء بنادول، منعًا لتناول جرعة زائدة من نفس المادة الفعالة،
                  مما قد يسبب تلف الكبد
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 2 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="بانادول إكسترا" subheader="مسكن " />
            <CardMedia
              component="img"
              height="194"
              image={MED2}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                بانادول اكسترا هو أحد أفضل مجموعة بانادول التي تعد مجموعة من
                الأدوية التي تعالج البرد والزكام والحمى،له تأثير إضافي من
                البانادول العادي
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
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
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b> تشمل دواعي استعمال بنادول إكسترا الأحمر ما يلي : </b>{" "}
                  الصداع ، آلام العضلات والمفاصل ،آلام الدورة الشهرية ،الصداع
                  النصفي ، آلام الأسنان،التهاب الحلق ،الحمى
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات بانادول إكسترا وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  البالغين بما في ذلك كبار السن والأطفال الذين تتراوح أعمارهم
                  بين 12 سنة وما فوق: تناول 1-2 حبة حتى 4 مرات يوميًا بحد أقصى 8
                  أقراص في 24 ساعة.لا ينصح به للأطفال دون سن 12 عامًا
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام بانادول إكسترا ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية تجاه أي من مكونات الدواء. مرضى قصور الكبد الحاد،
                  والمرضى المصابين بمرض شديد في الكبد أو فشل في الكبد.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 3 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="أدول" subheader="مسكن" />
            <CardMedia
              component="img"
              height="194"
              image={MED3}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                أدول هو مسكن يستخدم كخافض للحرارة ،لعلاج الألم الخفيف إلى
                المتوسط ​​و لعلاج و التحكم فى الألم قبل و بعد الجراحات.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
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
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال ادول ما يلي : </b>علاج الصداع،علاج
                  الحمى،تخفيف آلام العضلات والمفاصل،تخفيف آلام الظهر،تخفيف آلام
                  الأسنان،تخفيف أعراض البرد والزكام،يعمل الباراسيتامول أيضًا على
                  تخفيف آلام الدورة الشهرية للنساء، كما أنه يخفف من تقلصات
                  العضلات المتشنجة.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات ادول وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  جرعة الباراسيتامول للكبار للبالغين والأطفال الأكبر من 16 سنة:
                  قرص واحد أو قرصين كل 4 ساعات 4 مرات يوميًا عند اللزوم، وقد
                  يتعرض المريض لتسمم كبدي خطير إذا تناول جرعة زائدة عن ذلك
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  جرعة الباراسيتامول للأطفال يعطى الأطفال الصغار الذين تقل
                  أعمارهم عن 6 سنوات شراب باراسيتامول بتركيز 120ملغ/ 5مل
                  بالجرعات التالية:من 2-3 شهور: 2.5 مل مرتين يوميًا.من 3-6 شهور:
                  2.5 مل 4 مرات يوميًا كحد أقصى.من 6 شهور إلى سنتين: 5 مل 4 مرات
                  يوميًا كحد أقصى.من 2-4 سنوات: 7.5 مل 4 مرات يوميًا كحد أقصى.من
                  4-6 سنوات: 10 مل 4 مرات يوميًا كحد أقصى.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  يعطى الأطفال الذين تزيد أعمارهم عن 6 سنوات شراب باراسيتامول
                  بتركيز 250ملغ/ 5مل بالجرعات التالية:من 6-8 سنوات: 5 مل 4 مرات
                  يوميًا كحد أقصى.من 8-10 سنوات: 7.5 مل 4 مرات يوميًا كحد
                  أقصى.من 10-12 سنة: 10 مل 4 مرات يوميًا كحد أقصى.من 12-16 سنة:
                  10-15 مل 4 مرات يوميًا كحد أقصى.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام أدول ؟ </b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية تجاه أي مكون من مكونات هذا الدواء،مرض شديد في
                  الكبد أو فشل الكبد،أمراض الكلى.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </section>
        {/* section 2 */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "4%",
            direction: "rtl",
          }}
        >
          {/* Card 4 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="أدول إكسترا" subheader="مسكن" />
            <CardMedia
              component="img"
              height="194"
              image={MED4}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                خافض للحرارة يستخدم لعلاج الحمى. والحمى هي زيادة مؤقتة في درجة حرارة الجسم. يستخدم لتخفيف الآلام الخفيفة إلى المتوسطة بما في ذلك أنواع مختلفة من الألم
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded4}
                onClick={handleExpandClick4}
                aria-expanded={expanded4}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded4} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال أدول إكسترا ما يلي : </b>الألم مثل
                  الصداع،آلام في العضلات،تشنجات وألم الحيض،التهاب المفاصل،ألم
                  الروماتيزم،الألم والحرارة المصاحبان لنزلات البرد
                  والانفلونزا،آلام الظهر وآلام الأسنان،آلام ما بعد الجراحة.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات أدول إكسترا وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الجرعة الموصى بها للبالغين هي 1-2 قرص في اليوم.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام أدول إكسترا ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية تجاه أي من مكونات الدواء،مرضى قصور الكبد الحاد،
                  والمرضى المصابين بمرض شديد في الكبد أو فشل في الكبد،الأطفال
                  دون سن 12 سنة.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 5 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="دوليبران" subheader="مسكن" />
            <CardMedia
              component="img"
              height="194"
              image={MED5}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                تستخدم أقراص دوليبران (بالإنجليزية: Doliprane) للتخلص من الصداع، فهي تحتوي على المادة الفعالة الباراسيتامول بتركيزين، هما 500 ملغ، و1000 ملغ.              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded5}
                onClick={handleExpandClick5}
                aria-expanded={expanded5}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded5} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال دوليبران ما يلي : </b>
                  علاج الصداع،علاج الحمى،تخفيف آلام العضلات والمفاصل،تخفيف آلام
                  الظهر،تخفيف آلام الأسنان،تخفيف أعراض البرد والزكام،يعمل
                  الباراسيتامول أيضًا على تخفيف آلام الدورة الشهرية للنساء، كما
                  أنه يخفف من تقلصات العضلات المتشنجة
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات دوليبران وطرق الاستعمال ؟</b>
                </Typography>
                <Typography data-aos="fade-up">
                  للبالغين والأطفال الأكبر من 16 سنة: بمعدل قرص واحد أو قرصين كل
                  4 ساعات 4 مرات يوميًا عند اللزوم
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام دوليبران ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية تجاه أي مكون من مكونات هذا الدواء، مرض شديد في
                  الكبد أو فشل الكبد،أمراض الكلى.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 6 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="سيتال إكسترا" subheader="مسكن" />
            <CardMedia
              component="img"
              height="194"
              image={MED6}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                .يؤخذ سيتال إكسترا لتخفيض درجة الحرارة المرتفعة و لتخفيف الألم
                البسيط إلى المتوسط الشدة ، مثل الألم الذى يحدث بعد عمليات خلع
                الأسنان
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded6}
                onClick={handleExpandClick6}
                aria-expanded={expanded6}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded6} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال سيتال إكسترا ما يلي : </b> الصداع
                  النصفي،أعراض البرد والانفلونزا،الآم العضلات،الآم العضلات،آلام
                  الدورة الشهرية،يمكن أيضا أن يستخدم سيتال إكسترا لعلاج آلام
                  المفاصل الناجم عن التهاب المفاصل.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات سيتال إكسترا وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  للبالغين و الاطفال أكبر من 12 سنة قرصان كل 4 إلى 6
                  ساعات حسب الحاجة
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام سيتال إكسترا ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  يجب الامتناع عن استعمالة في حال سوابق الحساسية تجاة
                  أحد مكونّات ،
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  غير منصوح بتناول اقراص سيتال إكسترا خلال فترة الحمل
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </section>
        {/* Line  */}
        <hr
          style={{
            width: "80%",
            borderBottom: "4px solid #1F5357",
            marginBottom: "4%",
          }}
        />
        {/* section 3 */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "4%",
            direction: "rtl",
          }}
        >
          {/* Card 7 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="كونجستال " subheader="نزلات البرد" />
            <CardMedia
              component="img"
              height="194"
              image={MED7}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                دواء كونجستال يتمتع بخواص مسكنة، وخافضة للحرارة، ومزيلة
                للاحتقان، ومضادة للحساسية أيضًا.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded7}
                onClick={handleExpandClick7}
                aria-expanded={expanded7}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded7} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال كونجستال ما يلي : </b> الصداع ، ألم
                  واحتقان الجيوب الأنفية ،احتقان الأنف ،العطاس ،إدماع العينين ،
                  سيلان الأنف ،ارتفاع درجة الحرارة ، حكة في الأنف أو الحلق.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات كونجستال وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الجرعة الموصى بها للبالغين هي 1-2 قرص في اليوم.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b> ما هي موانع استخدام كونجستال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية لأي من مكونات هذا الدواء، استخدام أدوية مثبطات
                  أوكسيداز أحادي الأمين خلال 14 يومًا السابقة لاستخدام هذا
                  الدواء. ارتفاع ضغط الدم غير المسيطر عليه، الأطفال دون سن 12
                  عام.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 8 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="كولد فري" subheader="نزلات البرد" />
            <CardMedia
              component="img"
              height="194"
              image={MED8}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                يعد دواء كولد فري لنزلات البرد، من العلاجات الفعالة للحد من
                الأعراض المزعجة للإصابة بالأنفلونزا .
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded8}
                onClick={handleExpandClick8}
                aria-expanded={expanded8}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded8} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال كولد فري ما يلي : </b> الصداع ، ألم
                  واحتقان الجيوب الأنفية ، احتقان الأنف ، العطاس ، إدماع العينين
                  ، سيلان الأنف ، ارتفاع درجة الحرارة ، حكة في الأنف أو الحلق
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات كولد فري وطرق الاستعمال ؟</b>
                </Typography>
                <Typography data-aos="fade-up">
                  الجرعة الموصى بها من الدواء للبالغين والأطفال في سن 12 عام فما
                  فوق هي قرصان، كل 6 ساعة خلال ساعات النوم، حسب الحاجة
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام كولد فري ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية تجاه أي مكون من مكونات هذا الدواء،استخدام أدوية
                  مثبطات أوكسيداز أحادي الأمين خلال 14 يومًا السابقة لاستخدام
                  هذا الدواء. ارتفاع ضغط الدم غير المسيطر عليه،الأطفال دون سن 12
                  عام.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 9 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="دواء وان تو ثري 123" subheader="نزلات البرد" />
            <CardMedia
              component="img"
              height="194"
              image={MED9}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                يعد وان تو ثري 123 أفضل دواء للزكام للأطفال، حيث يقلل من الأعراض
                المصاحبة للإنفلونزا ،
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded9}
                onClick={handleExpandClick9}
                aria-expanded={expanded9}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded9} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال دواء وان تو ثري 123 ما يلي : </b> يخفف
                  انسداد الأنف ، مسكن للالم ،خافض للحرارة،تخفيف الأعراض المصاحبة
                  لالتهاب الجيوب الانفية ونزلات البرد،قد يستخدم فى حالات أخرى
                  مثل تخفيف أعراض الحساسية الموسمية.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b> ما هي جرعات وان تو ثري 123 وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الجرعة المعتادة من وان-تو-ثري شراب للأطفال هي 5 مللي 2 – 3
                  مرات يوميا بعد الأكل. ساعات حسب الحاجة
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام وان تو ثري 123 ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الأطفال أقل من سنتين ، فرط التحسس لمكونات الدواء، مرضى ارتفاع
                  ضغط الدم الغير منضبط،لا تأخذ هذا الدواء إذا كنت تتناول أدوية
                  أخرى للبرد و الرشح. أو أي أدوية أخرى تحتوى على نفس المكونات،ا
                  يجب تناول وان-تو-ثري إذا كنت تأخذ منشط الامفيتامين أو مثبطات
                  الشهية التى تعمل على مراكز الشهية في المخ.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </section>
        {/* section 4 */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "4%",
            direction: "rtl",
          }}
        >
          {/* Card 10 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="أوتريفين" subheader="مزيل احتقان" />
            <CardMedia
              component="img"
              height="194"
              image={MED10}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                يعد أوتريفين من مضادات الاحتقان التي تعمل على تضييق الأوعية
                الدموية بالممرات الأنفية للتخفيف المؤقت من احتقان الأنف المصاحب
                لبعض الأمراض،
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded10}
                onClick={handleExpandClick10}
                aria-expanded={expanded10}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded10} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال أوتريفين ما يلي : </b>الحساسية، حمى القش
                  ، التهاب الجيوب الأنفية ، نزلات البرد ، الرشح.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات أوتريفين وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  يحدد الطبيب الجرعة المناسبة لكل شخص وفقاً لحالته الصحية، مع
                  العلم بأن هذا الدواء يتم تطبيقه موضعياً داخل الأنف بمعدل 2-3
                  مرات يومياً ولمدة 5 أيام.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام أوتريفين ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  يمنع استخدام هذا الدواء في حالة المعاناة من فرط الحساسية اتجاه
                  أي مكون من مكوناته.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 11 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="أوجمنتين" subheader="مضاد حيوي " />
            <CardMedia
              component="img"
              height="194"
              image={MED11}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                يعتبر اوجمنتين من المضادات الحيوية الشهيرة في الصيدليات، وعادة
                ما يصفه الأطباء للأشخاص المصابين بالتهابات ناتجة عن العدوى
                البكتيرية.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded11}
                onClick={handleExpandClick11}
                aria-expanded={expanded11}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded11} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال أوجمنتين ما يلي : </b> علاج التهابات
                  الجهاز التنفسي السفلي ، علاج التهاب الأذن الوسطى ، علاج التهاب
                  الجيوب الأنفية ، علاج التهاب الجهاز البولي الجرثومي ، علاج
                  الالتهابات الجلدي ، علاج التهابات الفم واللثة البكتيرية ، علاج
                  الالتهابات التي تسببها السلالات المنتجة لبيتا لاكتاماز، مثل
                  جراثيم الأشريكية القولونية، والمستدمية النزلية، والمكورات
                  العنقودية الذهبية. الوقاية من الإصابة بالعدوى نتيجة
                  الجراحة الملوثة.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات أوجمنتين وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  يحدد الطبيب الجرعة المناسبة لكل شخص وفقًا لحالته الصحية
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام أوجمنتين ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية تجاه أي مكون من مكونات هذا الدواء . حساسية
                  البنسيلين أو السيفالوسبورين . الإصابة المسبقة باليرقان أو
                  الخلل الوظيفي الكبدي المرتبط بالأموكسيسيلين/الكلافولانات.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 12 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="بروفين" subheader="مسكن وخافض للحرارة " />
            <CardMedia
              component="img"
              height="194"
              image={MED12}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                شراب بروفين يستخدم لخفض درجة الحرارة وتسكين الآلام وتقليل
                الالتهاب. فعال في تخفيف أعراض البرد والانفلونزا وآلام الأسنان.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded12}
                onClick={handleExpandClick12}
                aria-expanded={expanded12}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded12} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال بروفين ما يلي : </b>الألم والالتهابات ،
                  الحمى ، تسكين ما بعد الجراحة ، آلام الأسنان.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات بروفين وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  بروفين للاطفال من 1-2 سنة: 2.5 مل ثلاث مرات في اليوم بعد
                  الأكل. شراب بروفين للاطفال من3-7 سنوات: 5 مل ثلاث مرات في
                  اليوم بعد الأكل.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام بروفين ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية تجاه أي مكون من مكونات هذا الدواء،يمنع استخدام
                  بروفين للرضع الأقل عمراً من 3 أشهر، ويوصى بطلب الاستشارة
                  الطبية للرضع فوق عمر 3 أشهر قبل استخدامه
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </section>
        <hr
          style={{
            width: "80%",
            borderBottom: "4px solid #1F5357",
            marginBottom: "4%",
          }}
        />
        {/* section 5 */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "4%",
            direction: "rtl",
          }}
        >
          {/* Card 13 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="ابيدون" subheader="علاج الالتهابات والحساسية " />
            <CardMedia
              component="img"
              height="194"
              image={MED13}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                ابيدون شراب يستخدم كمضاد للحساسية وللالتهابات التي تصيب جسم
                الإنسان سواء حساسية صدر أو جلد أو الأنف أو الحلق أو نتيجة لبعض
                الأدوية المستخدمة،
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded13}
                onClick={handleExpandClick13}
                aria-expanded={expanded13}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded13} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال ابيدون ما يلي : </b>الاضطرابات والحكة
                  الجلدية. حساسية الصدر والمشاكل التي تصيب الجهاز التنفسي مثل
                  التهاب الشعب الهوائية أو الربو. تخفيف أعراض البرد والانفلونزا
                  التي تتمثل في العطس والرشح وسيلان الأنف. الإكزيما الجلدية أو
                  الارتكاريا. التهابات الجيوب الأنفية. الحساسية الموسمية وخاصة
                  في موسم الربيع. التهابات الأذن الوسطي. علاج الحساسية الناتجة
                  عن استخدام بعض الأدوية. أعراض الحساسية التي تظهر نتيجة التعرض
                  لبعض المواد الكيميائية. الشري. الحكة والتهابات الحلق.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات ابيدون وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  تختلف الجرعات وفقاً للحالة والعمر لذلك يجب استشارة الطبيب قبل
                  استخدام الدواء وذلك لاحتوائه على كورتيزون: الأطفال أكبر من
                  عامين : 2.5 مل 3 مرات يومياً. للبالغين والكبار: 5 مل 3 مرات
                  يومياً.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام ابيدون ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الحساسية المفرطة لمكونات الدواء، المصابين باضطرابات في الكبد
                  أو الكلي ، الأطفال أقل من عامين ، خلال فترة الحمل والرضاعة ،
                  في حالة الإصابة بأمراض فطرية.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 14 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="أمبيزيم " subheader="مضاد للالتهاب والتورم" />
            <CardMedia
              component="img"
              height="194"
              width="445"
              image={MED14}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                يعتبر أمبيزيم - ج Ambezim - G من الأدوية المضادة للالتهابات الشهيرة في الصيدليات، يُفضل تناوله تحت إشراف الطبيب، لأنه قد يؤثر سلبًا على صحة الجسم .
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expad={expanded14}
                onClick={handleExpandClick14}
                aria-expanded={expanded14}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded14} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال أمبيزيم ما يلي : </b> التهاب الجيوب
                  الأنفية، والبلعوم، والحنجرة، والأذن ، التهاب اللثة وقلع
                  الأسنان ، التهاب القصبات الهوائية ، يستخدم في حالات إصابات
                  العين ، علاج نزيف ما بعد الجراحة، وفي حال حدوث الورم الدموي
                  والالتواءات الدموية بعد الجراحة ، يساعد في علاج التهاب المفاصل
                  والتهاب المفاصل الروماتيزمية ، التهاب الثدي لدى النساء ،
                  التورم في منطقة الشرج.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات أمبيزيم وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الجرعة الموصى بها: 1-2 قرص ثلاث مرات في اليوم.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام أمبيزيم ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية تجاه أي مكون من مكونات هذا الدواء.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 15 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="دولفين" subheader="مسكن وخافض للحرارة " />
            <CardMedia
              component="img"
              height="194"
              image={MED15}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                يعد ديكلوفيناك من مضادات الالتهاب غير الستيرويدية، وله استخدامات عديدة أهمها: مسكن للألم وخافض للحرارة. علاج التهاب الفقار الروماتيزمي أو التهاب الفقار الروماتيدي.              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded15}
                onClick={handleExpandClick15}
                aria-expanded={expanded15}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded15} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up"> الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال دولفين ما يلي : </b> نزلات البرد
                  والانفلونزا ، آلام بعد الإصابات أو الجراحات ، التهابات المفاصل
                  وحالات الروماتويد ، آلام الظهر، والتهابات الفقرات ، جراحات
                  الأسنان والتهابات العظام ، عدوى الأذن الوسطى ، الكدمات
                  والحوادث.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات دولفين وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  جرعة دولفين لبوس للاطفال للأطفال من عمر 1-12 سنة: تختلف الجرعة
                  حسب عمر ووزن الطفل بحيث تكون 1-3 مجم/كجم من وزن الجسم مقسمة
                  على 2-3 جرعات باليوم.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  جرعة لبوس دولفين 50 للكبار الجرعة المعتادة للبالغين هي: قطعة
                  واحدة من الأقماع من 2-3 مرات باليوم بما لا يتجاوز 150 مجم
                  خلال أي 24 ساعة.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام دولفين ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  التحسس تجاه أيٍ من مكوناته ، قرح المعدة أو قرح الأمعاء ،
                  النزيف النشط ، التحسس تجاه أيٍ من المسكنات الأخرى ، فشل الكلى
                  أو الكبد الحاد ، أمراض القلب والأوعية الدموية ، الحمل
                  في أكثر من 6 أشهر.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </section>
        {/* section 6 */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "4%",
            direction: "rtl",
          }}
        >
          {/* Card 16 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader
              title="كتافاست"
              subheader="للأسنان ومسكن لألم والصداع"
            />
            <CardMedia
              component="img"
              height="194"
              image={MED16}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                أكياس كتافاست قد تسبب الدوخة والنعاس أو اضطرابات بصرية، وذلك قد يؤثر على قدرتك على القيادة أو تشغيل الآلات بأمان              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded16}
                onClick={handleExpandClick16}
                aria-expanded={expanded16}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded16} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال كتافاست ما يلي : </b> مسكن لآلام الأسنان
                  و اللثة ، خافض للحرارة ، الألم و التورم بعد العلميات الجراحية
                  ، آلام الحيض ، الإلتواءات ،الصداع النصفى ، آلام الظهر و
                  الأكتاف ، آلام الروماتيزم ، التهاب المفاصل الروماتويدي ، هشاشة
                  العظام ، ألام الظهر ، نوبات الصداع النصفي ، آلام العضلات ،
                  الصدمات ، التهاب الأوتار ، آلام الكسور ، النقرس الحاد.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات كتافاست وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  جرعة فوار كتافاست للأطفال أكبر من 14 سنة :1 إلى 2 كيس من
                  كتافاست فوار فى اليوم
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  جرعة كتافاست فوار للكبار :2 إلى 3 أكياس فى اليوم
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  جرعة فوار كتافاست للدوره : 3 أكياس يومياً
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  جرعة كتافاست لعلاج الصداع النصفى : عند بداية الشعور بالألم يتم
                  تناول كيس واحد من كتافست فوار و إذا لم يقل الألم خلال ساعتين
                  يمكن أخذ كيس آخر
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام كتافاست ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الحساسية تجاه أى من العناصر المكونة للدواء ، مرضي الذين يعانون
                  من حساسية الجهاز التنفسى والربو مرضي القلب و ضغط الدم المرتفع
                  مرضي قصور الكبد الحاد و الفشل الكلوي ، مرضي الذين يعانون من
                  قرحة المعدة أو نزيف الأمعاء ، مرضي الذين يعانون من القولون.
                  المرضي الذين يعانون من زيادة في نسبة البوتاسيوم بالدم ، المرضى
                  الذين يتناولون أدوية سيولة الدم فى فترة الحمل والرضاعة ،
                  الأطفال الذين تقل أعمارهم عن 14 سنة.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 17 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader
              title="ميوفين "
              subheader=" باسط للعضلات ومضاد للالتهاب"
            />
            <CardMedia
              component="img"
              height="194"
              image={MED17}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                دواء لإراحة العضلات المتشنجة تحتوي على الآتي: الكلورزوكسازون: الذي يستخدم لعلاج التشنجات العضلية، الألم، ويستخدم عادة مع الراحة والعلاج الطبيعي والعلاجات الأخرى
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded17}
                onClick={handleExpandClick17}
                aria-expanded={expanded17}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded17} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال ميوفين ما يلي : </b> آلام وتقلصات
                  العضلات ، فى حالات الإلتواء وخلع المفاصل ، تصلب الرقبة ،
                  الصداع الناتج عن التوتر ، آلام الظهر والفقرات والرقبة ، تسكين
                  الآم العمود الفقري ، علاج الشد العضلى فى السمانة والفخذ
                  والساق والرقبة والكتف
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات ميوفين وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  كبسولة واحدة أو كبسولتين حسب شدة الحالة 3 مرات يومياً بعد
                  الأكل{" "}
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام ميوفين ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الحساسية تجاه أى من العناصر المكونة للدواء ، الأشخاص الذين
                  يعانون من الربو ، الأشخاص الذين يعانون من مشاكل تجلط الدم ،
                  المصابون بأمراض القلب أو الأوعية الدموية ، لا ينصح بتناول
                  الدواء مع أدوية سيولة الدم والأدوية المضادة للإكتئاب ومضادات
                  الهستامين والمسكنات ، لا ينصح بتناول الدواء مع الكحول
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 18 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="فولتارين جل" subheader="مضادات الالتهاب " />
            <CardMedia
              component="img"
              height="194"
              image={MED18}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                يعمل فولتارين جل على تخفيف ألم العضلات والمفاصل الناتج عن
                الإصابة بهشاشة العظام، مثل مفاصل اليدين، والمرفقين، والركبتين،
                والقدمين
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded18}
                onClick={handleExpandClick18}
                aria-expanded={expanded18}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded18} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال فولتارين جل ما يلي : </b> آلام المفاصل
                  الناتجة عن التهاب المفاصل ، للتخفيف من الآلام.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات فولتارين جل وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الجرعة الموصى بها من فولتارين جل موضعي تُطبق من ثلاث إلى أربع
                  مرات يوميًا طبقة خفيفة يمتصها الجلد على الجزء المصاب مع
                  الانتظار لمدة لا تقل عن ١٠ دقائق قبل ارتداء الملابس. من غير
                  المعروف ما إذا كان فولتارين جل آمنًا وفعالًا للأطفال أقل من ٦
                  سنوات لذا لا ينصح باستخدامه.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام فولتارين جل ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية تجاه إحدى مكونات الدواء ، الإصابة بنوبة ربو أو رد
                  فعل تحسسي شديد بعد تناول الأسبرين أو مضادات الالتهاب غير
                  الستيرويدية الأخرى.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </section>
        <hr
          style={{
            width: "80%",
            borderBottom: "4px solid #1F5357",
            marginBottom: "4%",
          }}
        />
        {/* section 7 */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "4%",
            direction: "rtl",
          }}
        >
          {/* Card 19 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="كارباميد" subheader="مرطب للجلد" />
            <CardMedia
              component="img"
              height="194"
              image={MED19}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                يستخدم الكارباميد لعلاج الجلد الخشن والجاف في حالات مثل
                الأكزيما، والصدفية، والندوب، وبعض مشاكل
                الأظافر. كما يتم استخدام اليوريا لإزالة الجلد الميت.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded19}
                onClick={handleExpandClick19}
                aria-expanded={expanded19}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded19} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال كارباميد ما يلي : </b> ترطيب البشرة
                  ونعومتها ، علاج الخدوش البسيطة وتطهيرها ، حماية الجلد من عوامل
                  البيئة الضارة، مثل الهواء والرطوبة ، علاج الجلد الجاف الناتج
                  عن مرض ما، أو معالجة بالأدوية ، المساعدة في علاج الأكزيما،
                  والصدفية والجلد المتحسس ، التخفيف من آثار الندوب والجروح ،
                  علاج مشاكل نمو الأظافر داخل الجلد.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات كارباميد وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الجرعة الموصى بها من كريم الكارباميد هي وضع طبقة رقيقة من
                  العلاج على المنطقة المصابة، مرة واحدة إلى 3 مرات في اليوم، مع
                  التدليك برفق حتى يتم امتصاصه بالكامل.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام كارباميد ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية لإحدى مكونات الدواء ، استخدامه على الجلد المتهيج
                  أو المصاب أو المفتوح، ما لم يوص الطبيب بغير ذلك.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 20 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="بانثينول " subheader=" مرطب وملطف للجلد" />
            <CardMedia
              component="img"
              height="194"
              image={MED20}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                كريم بانثينول مرطب وملطف للجلد ويزيد من نعومة البشرة، يستخدم
                الكريم لعلاج جفاف وتشققات البشرة ويخفف من الحروق والجروح.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded20}
                onClick={handleExpandClick20}
                aria-expanded={expanded20}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded20} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال بانثينول ما يلي : </b> جفاف وتشقق الجلد
                  ، التئام الجروح والحروق ، هيج والتهاب واحمرار الجلد ، علاج آمن
                  للإكزيما ، يعالج التهابات الحفاضات ، علاج الكعبين وتيبس اليدين
                  ، حماية الجلد من حروق الشمس القضاء، على آثار الحروق ، علاج
                  للهربس خارج الشفتين.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  على الرغم من أن الكريم آمن جدًا حتى لبشرة الأطفال ويمكن
                  استخدامه لفترة طويلة دون التسبب في آثار جانبية ، إلا أنه يفضل
                  تجربته على جزء صغير من الكريم لأنه يضر بمن لديهم حساسية من
                  المكون الفعال
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 21 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="بروباميثون" subheader="التهابات الجلد" />
            <CardMedia
              component="img"
              height="194"
              image={MED21}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                كريم موضعي يكثر استعماله في حالات الالتهابات الجلدية المصحوبة
                بعدوى فطرية أو بكتيرية، أو يحتمل أن يصاحبها هذا النوع من العدوى.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded21}
                onClick={handleExpandClick21}
                aria-expanded={expanded21}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded21} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال بروباميثون ما يلي : </b> علاج ظواهر
                  الإلتهابات و الحكة لأمراض الجلد المستجيبة للستيرويدات القشرية
                  عند إلتهابها أو إحتمال إصابتها بإلتهاب, والمصحوبة بعدوى
                  بكتيرية او فطرية.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات بروباميثون وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  توضع طبقة رقيقة من بروباميثون كريم على منطقة الجلد المصابة و
                  حولها مرتين يوميآ.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام بروباميثون ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  لا يجب ان يستخدم مع المرضى الذين لديهم حساسية لإي من مكونات
                  المستحضر.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </section>
        {/* section 8 */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "4%",
            direction: "rtl",
          }}
        >
          {/* Card 22 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="فيروترون" subheader="مكمل غذائى" />
            <CardMedia
              component="img"
              height="194"
              image={MED22}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                فيروترون ينتمي إلى فئة المكملات الغذائية التي تمد الجسم
                بالفيتامينات والمعادن التي يحتاجها الجسم لتجنب الإصابة بالأنيميا
                وفقر الدم
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded22}
                onClick={handleExpandClick22}
                aria-expanded={expanded22}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded22} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال فيروترون ما يلي : </b>:الأنيميا وفقر
                  الدم،سوء التغذية،فقدان كميات كبيرة من الدم نتيجة للحيض أو
                  النزيف أو إجراء عمليات جراحية في الحمل والرضاعة ،تساقط الشعر
                  ،الحفاظ على صحة الجلد والأظافر ،النحافة وزيادة الوزن
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات فيروترون وطرق الاستعمال؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الجرعة المعتادة لدواء فيرترون هى تناول كبسولة واحدة خلال اليوم
                  بعد الأكل بحوالى ساعة أو ساعتين أو حسب إرشادات الطبيب.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام فيروترون؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الحساسية المفرطة تجاه أى من العناصر المكونة للدواء،المرضى
                  الذين يعانون من اضطراب فى ايض الكالسيوم ( سواء زيادة الكالسيوم
                  فى الدم او البول ) مرضى القصور الكلوى و الحصوات ،العلاج
                  بفيتامين د
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 23 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="كليندام 300" subheader="مضاد حيوى" />
            <CardMedia
              component="img"
              height="194"
              image={MED23}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                يستعمل هذا الدواء لعلاج التهابات الحلق واللوزتين لكن يجب التأكد
                من أن هذه الالتهابات ناتجة عن عدوى بكتيرية وليس عن عدوى فيروسية،
                فهو يساعد على قتل البكتيريا
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded23}
                onClick={handleExpandClick23}
                aria-expanded={expanded23}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded23} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال كليندام 300 ما يلي : </b> الصداع ، تسمم
                  الدم،عدوى الجهاز الهضمي،عدوى الجهاز التنفسي السفلي (ومنها
                  الرئة)،التهابات الجهاز التناسلي،عدوى الجلد والأغشية
                  المخاطية،التهابات المفاصل البكتيرية،خراج والتهابات
                  الأسنان،التهابات البوستاتا البكتيرية
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات كليندام 300 وطرق الاستعمال؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  للبالغين وكبار السن: 150-450 مجم (بما يعادل 1-3 كبسولات) كل 6
                  ساعات وفقًا لنوع وشدة العدوى. للأطفال: 3-6 مجم/كجم من وزن
                  الجسم كل 6 ساعات وفقًا لنوع وشدة العدوى
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام كليندام 300؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الحساسية المفرطة تجاه المادة الفعالة أو أي من مكونات هذا
                  الدواء. يجب الحذر عند استعمال هذا الدواء واستشارة الطبيب قبل
                  تناوله في حالات: الإسهال،اعتلال الكلى أو الكبد،الربو أو
                  الإكزيما،حمى القش.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 24 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="أميريست" subheader="مضاد للقئ" />
            <CardMedia
              component="img"
              height="194"
              image={MED24}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                يستخدم فى الغثيان والقىء الناجم عن العلاج الكيماوي معتدل
                التسبب للقىء،الوقاية من الغثيان والقيء بعد العمليات
                الجراحية،الوقاية من الغثيان والقيء الناجم عن الإشعاع
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded24}
                onClick={handleExpandClick24}
                aria-expanded={expanded24}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded24} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال اميريست ما يلي : </b> الغثيان والتقيؤ
                  المصاحب للعلاجات الكيماوية (مضادات الأورام). الغثيان والتقيؤ
                  المصاحب للعلاج الاشعاعي. الغثيان والتقيؤ بعد العمليات الجراحية
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات اميريست وطرق الاستعمال؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  جرعات اوندانستيرون للبالغين جرعة اوندانستيرون قبل العلاج
                  الكيماوي يعطى 8 مغ من اوندانستيرون قبل بدء العلاج الكيماوي ب
                  30 دقيقة، ويمكن أن تزيد الجرعة إلى 24 مغ إن كان الدواء يسبب
                  الغثيان والتقيؤ الشديدين. يعطى المريض بعد ذلك حبة 8 مغ كل 12
                  ساعة ليوم أو يومين بعد جرعة العلاج الكيماوي. جرعة اوندانستيرون
                  قبل الجراحة يعطى المريض 4 مغ من اوندانستيرون وريدياً قبل
                  التخدير مباشرة أو بعد انتهاء الجراحة مباشرو، أو 16 مغ فموياً
                  قبل التخدير بساعة.  جرعة اوندانستيرون قبل العلاج الإشعاعي يعطى
                  المريض 8 مغ من اوندانستيرون قبل جلسة العلاج الإشعاعي بساعة أو
                  ساعتين، ثم 8 مغ بعد الجرعة الأولى ب 8 ساعات.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  :جرعة اوندانستيرون للاطفال ليس معروفاً ما إن كان اوندانستيرون
                  فموياً آمناً للأطفال الذين أعمارهم أقل من 4 سنوات، لكن يمكن
                  إعطاء اوندانستيرون وريدياً للأطفال ابتداء من عمر 6 شهور.  جرعة
                  اوندانستيرون للاطفال قبل العلاج الكيماوي يعطى الأطفال من عمر 4
                  - 11 سنة 4 مغ من اوندانستيرون قبل جلسة العلاج الكيماوي ب 30
                  دقيقة، ثم 4 مغ كل 8 ساعات بعد جرعة الكيماوي بيوم أو يومين.
                  الأطفال الأكبر سناً تحسب لهم الجرعة تماماً كالبالغين.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  جرعة اوندانستيرون للاطفال قبل الجراحة يعطى الأطفال الذين
                  أوزانهم أقل من 40 كغم جرعة تعادل 0.1 مغ/كغم وريدياً. أما الذين
                  تزيد أوزانهم عن 40 كغم، فيجب أن تكون الجرعة 4 مغ وريدياً.
                  الأطفال الذين تجاوزت أعمارهم ال 12 عاماً يعطون جرعة البالغين.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام اميريست؟ </b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فيمنع استخدامه في المرضى الذين أظهروا فرط الحساسية للعلاج أو
                  لأي مكون آخر من مكونات العلاج أو للمضادات مستقبلات ال "5-إتش
                  تي-3 " الأخرى (مثل التروبسترون).
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </section>
        <hr
          style={{
            width: "80%",
            borderBottom: "4px solid #1F5357",
            marginBottom: "4%",
          }}
        />
        {/* section 9 */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "4%",
            direction: "rtl",
          }}
        >
          {/* Card 25 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="فيرسيرك " subheader="مضاد للدوخة " />
            <CardMedia
              component="img"
              height="194"
              image={MED25}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                يصنف دواء بيتاهستين ثنائي هيدروكلوريد بأنه عامل مضاد للدوار
                والدوخة ، وعامل مشابه للهيستامين1
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded25}
                onClick={handleExpandClick25}
                aria-expanded={expanded25}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded25} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>:تشمل دواعي استعمال فيرسيرك ما يلي : </b>مرضى الكبد. مرضى
                  القرحة الهضمية، إذ قد يؤدي تناول بيتاهستين إلى تفاقم شدة
                  الأعراض لديهم. مرضى الشرى، أو الطفح الجلدي، أو التهاب الأنف
                  التحسسي، إذ يوجد خطر تفاقم الأعراض لديهم. الحمل، حيث لا تتوفر
                  معلومات كافية حول أمان استخدام هذا العلاج أثناء الحمل،الرضاعة،
                  إذ إنه من غير المعروف إن كان يفرز في حليب الأم ويعبر للرضيع أم
                  لا.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات فيرسيرك وطرق الاستعمال؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  يحدد الطبيب جرعة الدواء اللازمة تبعًا للحالة وعمر المريض، لكن
                  عادة ما تكون جرعات البالغين كالتالي: الجرعة الأولية: 8-16 ملغ،
                  3 مرات يوميًا. جرعة المداومة: 24 ملغ إلى 28 ملغ يوميًا، ويجب
                  ألا تتجاوز 48 ملغ، قد يعدل الطبيب الجرعة حسب حالة المريض.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام فيرسيرك؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية للمادة الفعالة، أو أي من مكونات الدواء الأخرى.
                  ورم القواتم على الغدة الكظرية. الأطفال أصغر من 18 عام. المرضى
                  الذين يعانون من مشاكل وراثية نادرة، بما في ذلك عدم تحمل
                  الجالاكتوز، أو نقص اللاكتاز، أو سوء امتصاص الجلوكوز
                  والجالاكتوز.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 26 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="ميكوجيل " subheader="مضاد حموضه " />
            <CardMedia
              component="img"
              height="194"
              image={MED26}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                يستخدم كمضاد للحموضة، والتخفيف من أعراض حرقة المعدة، وعسر الهضم
                الحمضي. يعمل هذا الدواء عن طريق تحييد حمض الهيدروكلوريك في
                إفرازات المعدة،
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded26}
                onClick={handleExpandClick26}
                aria-expanded={expanded26}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded26} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال ميكوجيل ما يلي : </b>، تسمم الدم،عدوى
                  الجهاز الهضمي،عدوى الجهاز التنفسي السفلي (ومنها
                  الرئة)،التهابات الجهاز التناسلي،عدوى الجلد والأغشية
                  المخاطية،التهابات المفاصل البكتيرية،خراج والتهابات
                  الأسنان،التهابات البوستاتا البكتيرية
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات ميكوجيل وطرق الاستعمال؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  يؤخذ هذا الدواء المركب بالجرعات والطريقة التالية: تؤخذ 1-2
                  ملاعق صغيرة من الدواء 4 مرات في اليوم. يؤخذ الدواء 15 دقيقة
                  قبل كل وجبة، وعند النوم. يفضل تناول الدواء غير مخفف. ومع ذلك،
                  يمكن أخذ رشفة من الماء بعده.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام ميكوجيل؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية تجاه أي من مكونات الدواء الفعالة أو غير الفعالة.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 27 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader
              title=" سبازموفرى"
              subheader="مضاد الكولين(امراض المسالك) "
            />
            <CardMedia
              component="img"
              height="194"
              image={MED27}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                دواء يعمل بصورة أساسية كمضاد للتشنجات؛ حيث يقلل
                من التشنجات العضلية ويساعد على ارتخاء العضلات الملساء في الأمعاء
                والجهاز الصفراوي والرحم والمثانة
                البولية
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded27}
                onClick={handleExpandClick27}
                aria-expanded={expanded27}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded27} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات :</Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال السبازموفرى ما يلي : </b>آلام الجهاز
                  الهضمي والجهاز الصفراوي كما في حالات التهاب المعدة والأمعاء،
                  والإسهال، والدوسنتاريا، والمغص الصفراوي، والتهاب الأمعاء
                  والقولون. آلام المسالك البولية التي سببها الكلى، الحالب أو
                  المثانة مثل المغص الكلوي وحالات التهاب المثانة. بعض أمراض
                  النساء المتعلقة بالجهاز التناسلي والدورة الشهرية مثل عسر الطمث
                  التشنجي
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات سبازموفري وطرق الاستعمال؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  جرعة حقن تيمونيوم ميثيل سلفات الجرعة الموصى بها عن طريق الحقن
                  هي حقنة واحدة من ميثيل سلفات 3 مرات يومياً
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  جرعة البالغين : 30 إلى 90 ملغ أو 15 إلى 45 ملي 3 مرات يومياً
                  أو حسب توجيهات الطبيب.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  جرعة الأطفال: الجرعة الموصى بها في حالة الشراب للتناول عن طريق
                  الفم هي: الأطفال: 3 إلى 6 ملغ لكل كيلوجرام من وزن الطفل يومياً
                  في 3 جرعات مقسمة بالتساوي. الرضع: 1.5 إلى 3 ملغ لكل كيلوجرام
                  من وزن الطفل يومياً في 3 جرعات مقسمة بالتساوي. جرعة تحاميل
                  تيمونيوم ميثيل سلفات الجرعة الموصى بها في حالة التحاميل هي 20
                  ملغ مرتين أو ثلاث مرات يومياً، عبر فتحة الشرج.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام سبازموفرى؟ </b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية لأي من المكونات. مرض المياه الزقاء بالعين
                  (الجلوكوما). المرضى الذين يعانون من اضطراب البروستاتا. حالات
                  اضطراب المثانة البولية وأمراض الجهاز البولي والبروستاتا. آلام
                  العين الحادة المصحوب باضطرابات الرؤية
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </section>
        {/* section 10 */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "4%",
            direction: "rtl",
          }}
        >
          {/* Card 28 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="انتينال" subheader="مضاد حيوي معالج للإسهال" />
            <CardMedia
              component="img"
              height="194"
              image={MED28}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                يعتبر انتينال من المضادات الحيوية الفعالة في علاج الإسهال الحاد
                الناتج عن وجود بكتيريا معوية
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded28}
                onClick={handleExpandClick28}
                aria-expanded={expanded28}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded28} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات: </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال انتينال ما يلي : </b>التهاب المعدة
                  والأمعاء ،التهاب القولون الحاد والمزمن،مطهر معوي لجميع أنواع
                  الإسهال،إسهال السفر،الإسهال الحاد والمزمن.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات انتينال وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الجرعة الموصى بها: البالغين: كبسولة واحدة 4 مرات يومياً.
                  الأطفال:  شهرين – سنة:1 ملعقة صغيرة (5 مل) 3 مرات يومياً. أكثر
                  من سنة: 1 ملعقة صغيرة (5 مل) 4 مرات يومياً. كبار السن: كبسولة
                  واحدة 4 مرات يومياً.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام انتينال؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية لأي من المكونات. عند وجود دم في البراز. الإصابة
                  بالحمى ، عند وجود قيء ،  حديثي الولادة أقل من سنتين،
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 29 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="قطرة بولي فريش " subheader="مرطب للعين " />
            <CardMedia
              component="img"
              height="194"
              image={MED29}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                يمكن الاعتماد على قطرة بولي فريش، للتغلب على أعراض جفاف العين
                المؤرقة ونقص الدموع.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded29}
                onClick={handleExpandClick29}
                aria-expanded={expanded29}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded29} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات: </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال قطرة بولي فريش ما يلي : </b>
                  تستعمل قطرة بولى فريش بأنواعها المختلفة لعلاج أعراض جفاف العين
                  بما في ذلك الحرقة والتهيج، والتي تنتج عن: عدم إنتاج ما يكفي من
                  الدموع بالعين. متلازمة جفاف العين المزمنة. عقب عمليات الليزك
                  وإجراءات تصحيح الرؤية. ارتداء العدسات اللاصقة بأنواعها
                  المختلفة. الإجهاد الناتج عن التعرض للظروف البيئية من تغيرات في
                  درجة الحرارة أو مواجهة الأتربة والهواء الملوث. الإجهاد الناتج
                  عن الجلوس لفترات زمنية طويلة أمام شاشات الحاسوب
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات قطرة بولي فريش وطرق الاستعمال ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الجرعة المعتادة هي 1-2 نقطة في كل عين حسب الحاجة أو وفقًا لما
                  يحدده الطبيب.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام قطرة بولي فريش ؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  التحسس المفرط تجاه أيٍ من مكونات هذا الدواء، الحقن داخل العين
                  فهي مخصصة للاستعمال الخارجي فقط. يجب الحذر واستشارة الطبيب قبل
                  الاستعمال في حالات: الإصابة بعدوى في العين أيًا كان نوع هذه
                  العدوى،
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 30 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="ديكساترول" subheader="قطرة عينية واذنية" />
            <CardMedia
              component="img"
              height="194"
              image={MED30}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                يصنف كمضاد حيوي و كورتيكستيرويد و يستخدم لعلاج العين والاذن
                الخارجية في حال التهاب اي منهما.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded30}
                onClick={handleExpandClick30}
                aria-expanded={expanded30}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded30} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات: </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b> تشمل دواعي استعمال ديكساترول ما يلي : </b>
                  يستخدم لحالات التهاب العين، والأذن الخارجية التي يصاحبها عدوى
                  بكتيرية.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات ديكساترول وطرق الاستعمال؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الجرعة الموصى بها لعلاج التهابات العين: ضع 1-2 قطرة في كل عين
                  كل 1-2 ساعة وعند حدوث الإستجابة الجيدة قم بتقليل الجرعة إلى 1
                  قطرة في كل عين كل 4 ساعات ومن ثم كل 6-8 ساعات. لالتهابات
                  الأذن: ضع 3-4 قطرات في كل أذن مصابة 2-3 مرات يومياً وعند حدوث
                  الإستجابة الجيدة قم بتقليل الجرعة تدريجياً ومن ثم قم بإيقاف
                  الدواء.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام ديكساترول؟ </b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية لأي من المكونات. عدوى فيروسية أو فطرية في العين.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </section>
        <hr
          style={{
            width: "80%",
            borderBottom: "4px solid #1F5357",
            marginBottom: "4%",
          }}
        />
        {/* section 11 */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "4%",
            direction: "rtl",
          }}
        >
          {/* Card 31 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="قطرة ريموواكس" subheader="قطرة أذن" />
            <CardMedia
              component="img"
              height="194"
              image={MED31}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                قطرة ريموواكس remowax قطرة تستخدم لتنظيف الأذن وإزالة الشمع
                الزائد الذي قد يسبب حدوث التهابات بالأذن والشعور بالألم
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded31}
                onClick={handleExpandClick31}
                aria-expanded={expanded31}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded31} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b> تشمل دواعي استعمال ريموواكس ما يلي : </b>
                  تستخدم remowax ear drops للتخلص من شمع الأذن المتراكم الذي قد
                  يؤدي إلى الإصابة بضعف السمع وسد قناة الأذن
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات ريموواكس وطرق الاستعمال؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  يجب عليك مراجعة الطبيب أو الصيدلي قبل تناول الدواء. جرعة
                  الدواء قد تختلف من حالة لأخرى. جرعة remowax للأطفال أكبر من 12
                  عام والبالغين وكبار السن: 5 نقاط 1-2 مرات يومياً لمدة 3-4 أيام
                  استمر بإمالة الرأس لبضع دقائق لمنع خروج النقاط من الأذن امسح
                  الزوائد بمنديل كرر ذلك في الأذن الأخرى ,اغسل اليدين جيداً قبل
                  وبعد الاستخدام
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام ريموواكس؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  يُمنع استخدام remowax ear drops الحساسية للمواد الفعالة إذا
                  كنت تعاني من ألم أو مشاكل في الأذن في حالة استخدام أدوية أذن
                  أخرى في حالة الإصابة بدوخة أو طنين بالأذن في حالة استخدام
                  اليدين أو القطن في تنظيف الأذن، لأنه قد تشعر بالألم في حالة
                  استخدام نقط الأذن
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 32 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="ميبو كريم" subheader="كريم معالج للحروق" />
            <CardMedia
              component="img"
              height="194"
              image={MED32}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                كريم به بيتا سيتوستيرول كمادة فعالة، بالإضافة إلى مستخلص زيت
                السمسم، وشمع العسل، ومجموعة من الأحماض الأمينية والأحماض الدهنية
                والسكريات المعقدة، وفيتامين E
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded32}
                onClick={handleExpandClick32}
                aria-expanded={expanded32}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded32} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال كريم ميبو ما يلي : </b>
                  علاج الحروق والجروح، والتقليل من شعور الألم في موضعها. علاج
                  تشققات حلمة الثدي. ترطيب البشرة وتجديد خلاياها وإصلاح التالف
                  منها. التقليل من التهابات البشرة واحمرارها. حماية البشرة من
                  الالتهابات الفطرية والبكتيرية.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات كريم ميبو وطرق الاستعمال؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  تختلف طريقة استعمال المرهم تبعاً لغرض الاستعمال: في حال
                  استعمال العلاج كمرهم للحروق يتم وضع طبقة رقيقة من المرهم من 3-
                  4 مرات يوميًا ويفضل ترك المنطقة مكشوفة ما لم يعط الطبيب المختص
                  تعليمات تخالف ذلك في حالات الجروح من الدرجة الثالثة. ينصح بوضع
                  المرهم للحروق مرة واحدة فقط لليوم الواحد. في حال استعمال
                  العلاج للقرح يجب ملء التجويف القرحي بالعلاج وتكوين طبقة رقيقة
                  تغطي المنطقة المجاورة، ويتم تكرار ذلك مرتين يومياً. في حال
                  استعمال العلاج للمناطق الجراحية لإخفاء موضع الخيوط الجراحية
                  يجب وضع طبقة كثيفة من المرهم لمنع تكون الندب ويجب المواظبة على
                  ذلك، وينصح بتغطية المنطقة بشاش معقم مرتين يومياً. في حال
                  استعمال العلاج للتشققات الجلدية مثل تشقق الحلمة، يتم وضع طبقة
                  رقيقة من المرهم من 3- 4 مرات يومياً.
                  <b>تختلف طريقة الاستخدام حسب نوع الحروق</b> والجروح: حروق
                  الدرجة الأولى: يتم استخدام أفوميب على الفور بطبقة خفيفة وعدم
                  تغطية المنطقة المُصابة لثلاث أو أربع مرات يومياً حسب الحالة.
                  حروق الدرجة الثانية: يُستخدم ثلاث إلى أربع مرات يومياً وتقلل
                  عدد المرات مع الشفاء. حروق الدرجة الثالثة: يُستخدم ثلاث إلى
                  أربع مرات يومياً. قُرح القدم: يتم استخدام شاش معقم مع المرهم
                  ويجب ملء تجويف القرحة. يُستخدم مرتين يومياً. جروح العمليات:
                  يُطبق المرهم بطبقة سميكة ويُغطى بشاش معقم. يُستخدم مرتين
                  يومياً. تشقق الحلمات: يُطبق بطبقة خفيفة ثلاث إلى أربع مرات
                  يومياً.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام كريم ميبو؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  المنتج مكون من مواد طبيعية، ويستعمل موضعيًا؛ لذا لا يتسبب
                  بحدوث تداخلات علاجية مهمة. ولكن يجب عدم استعمال العلاج في حال
                  وجود تحسس من المادة الفعالة.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 33 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="فيوسيكورت" subheader=" كريم مضاد حيوي للجلد" />
            <CardMedia
              component="img"
              height="194"
              image={MED33}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                يعد فيوسيكورت من أشهر الكريمات المستخدمة لعلاج الالتهابات
                الجلدية في الصيدليات، يستحسن استعماله تحت إشراف الطبيب، لأنه قد
                يؤثر على صحة البشرة في بعض الحالات.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded33}
                onClick={handleExpandClick33}
                aria-expanded={expanded33}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded33} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b> تشمل دواعي استعمال كريم فيوسيكورت ما يلي : </b>
                  التهابات الجلد البكتيرية، التهاب الجلد التماسي، الأكزيما
                  التأتبية ، الأكزيما القرصية ، الذئبة الحمامية شبيهة القرص.
                  التهاب الجلد المثي، حزاز بسيط مزمن، الصدفية.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات فيوسيكورت وطرق الاستعمال؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  يحدد الطبيب الجرعة المناسبة لكل شخص وفقاً لحالته الصحية، لكن
                  بشكل عام يطبق هذا الكريم على المنطقة المصابة بمعدل مرتين
                  يومياً.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام فيوسيكورت؟ </b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية لأي مكون من مكونات هذا الدواء. العدوى الشديدة
                  والتقرحات الجلدية. العدوى الجلدية الفطرية أو الفيروسية.
                  المعاناة من حب الشباب.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </section>
        {/* section 12 */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "4%",
            direction: "rtl",
          }}
        >
          {/* Card 34 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader
              title=" فلاجيل"
              subheader="أفضل دواء لعلاج اسهال الاطفال والكبار"
            />
            <CardMedia
              component="img"
              height="194"
              image={MED34}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                من أشهر الأدوية المستخدمة لعلاج الإسهال والإلتهابات وغيرها من
                الأعراض التى تسببها بعض أنواع من البكتيريا والطفيليات التى تصيب
                الجسم
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded34}
                onClick={handleExpandClick34}
                aria-expanded={expanded34}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded34} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال فلاجيل ما يلي : </b>: يستخدم كمطهر معوى
                  لعلاج حالات الإسهال علاج بعض أنواع الإلتهابات البكتيرية عدوى
                  القولون والمستقيم علاج الطفيليات المسببة للإسهال قد يستخدم
                  فلاجيل لالتهاب المسالك البولية وكذلك داء المشعرات ( عبارة عن
                  عدوى تنتقل عن طريق الاتصال الجنسي، يسببها طفيل يعرف وغالبا ما
                  تحدث في المهبل وأنسجة المجاري البولية ) يحتوي فيلاجيل على مادة
                  ميترونيدازول كمادة فعالة والتي تعمل علي منع تكون الميكروبات في
                  الجسم. القضاء على الالتهابات التي تصيب المعدة والجهاز التنفسي.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات فلاجيل وطرق الاستعمال؟</b>
                  يقوم الطبيب بتحديد الجرعة المناسبة للدواء وفقاً لحالة المريض
                  وعادةً ما يتم تناوله من 2 إلى 3 مرات يومياً لمدة 5 – 10 أيام،
                  وفقًا للمرض الذى يتم علاجه وفي بعض الأحيان تكون هناك حاجة
                  لتناول جرعةٍ أكبر من الدواء مرة واحدة. وتكون الجرعة المعتادة
                  كالتالى :<br />
                  جرعة حبوب فلاجيل 500 إلى 1500 مجم فى اليوم.
                  <br />
                  جرعة الاقماع 1500 – إلى 3000 مجم فى اليوم.
                  <br />
                  جرعة شراب فلاجيل للاطفال لعلاج الإسهال : 3 مرات يومياً لمدة 3
                  إلى 5 أيام.
                  <br />
                  فلاجيل 500 يتم تناول قرص مرتين إلى ثلاث مرات يومياً.
                  <br />
                  يتم أخذ قمع مرتين إلى 3 مرات يومياً.
                  <br />
                  <b>طريقة استعمال فلاجيل للاطفال:</b>
                  <br />
                  يجب رج العبوة جيداً قبل فتحها واستخدامها. يفضل استخدام سرنجة
                  دواء مخصصة للأطفال لإعطاء الجرعة الملائمة لهم أو يمكن استخدام
                  ملعقة طعام. يجب تناول الجرعة كاملة حتى انتهائها وليس عند
                  اللزوم فقط. طريقة استعمال فلاجيل 500 :<br />
                  عبر الوريد: يتم ضخه عبر الوريد في فترة بين 30-60 دقيقة.
                  <br />
                  عن طريق الفم: يتم تناوله مع الطعام لتجنب الإصابة باضطرابات في
                  المعدة
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام فلاجيل ؟ </b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية تجاه أي مكون من مكونات هذا الدواء. استخدام ثنائي
                  السلفيرام خلال الأسبوعين السابقين للعلاج بالميترونيدازول.
                  الثلث الأول من الحمل. كما يمنع تناول الكحول أثناء العلاج
                  بالميترونيدازول أو في غضون 3 أيام من توقف العلاج.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 35 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader
              title="كالما كينج"
              subheader="مستخلصات طبيعية للجهاز الهضمي "
            />
            <CardMedia
              component="img"
              height="194"
              image={MED35}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                دواء يحتوي على مجموعة من الاعشاب الطبيعية كالشبت و الذي يستخدم
                لعلاج اضطرابات الجهاز الهضمي الكراوية و التي تستخدم للحرقة،
                انتفاخ الأمعاء، فقدان الشهية
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded35}
                onClick={handleExpandClick35}
                aria-expanded={expanded35}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded35} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل استعمال كالما كينج ما يلي : </b>
                  يحتوي على مجموعة من الاعشاب الطبيعية كالشبت و الذي يستخدم
                  لعلاج اضطرابات الجهاز الهضمي كفقدان الشهية، و انتفاخ الأمعاء،
                  أمراض و مشكلات الكبد أو المرارة، أمراض الجهاز البولي و عسر
                  التبول، و يستخدم أيضاً لعلاج نزلات البرد، السعال، التهاب الشعب
                  الهوائية، العدوى، البواسير، التقرحات، آلام الأعصاب، اضطرابات
                  النوم، المغص و التشنجات، الم و انتفاخ الحلق. الكراوية و التي
                  تستخدم للحرقة، انتفاخ الأمعاء، فقدان الشهية، مغص المعدة أو
                  الأمعاء، المساعدة في التخلص من البلغم، التحكم بالتبول، قتل
                  البكتيريا، الإمساك، لتحسين تدفق الدم و لتحسين أعراض متلازمة
                  القولون العصبي.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات كالما كينج وطرق الاستعمال؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الجرعة الموصى بها للرضع ( شهر) ٢.٥ مل من الشراب (٧٢ مغم شبت،
                  ٦٠ مغم كراوية، ١٢٠٠ مغم صوديوم/ ١٢٠مل) و ذلك ٣ مرات يومياً،
                  للرضع (١ - ٦ أشهر) ٥ مل من الشراب و ذلك ٣ مرات يوميا، للرضع
                  (٦-٢٤ شهر) ١٠ مل من الشراب و ذلك ٣ مرات يوميا، للأطفال (
                  سنتين) ١٠-١٥ مل من الشراب و ذلك ٣ مرات يوميا.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام كالما كينج؟ </b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية تجاه أي من مكونات الدواء
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          {/* Card 36 */}
          <Card sx={{ maxWidth: 445, minWidth: '445', background: "#F0F0F0" }}>
            <CardHeader title="يوريفين" subheader="فوار املاح" />
            <CardMedia
              component="img"
              height="194"
              image={MED36}
              alt="Paella dish"
              sizes="300"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                data-aos="fade-up"
              >
                يحتوي فوار يوريفين على عدد من المواد الفعالة التي تعمل على
                التخلص من أملاح حمض اليوريك المتراكمة في الكلى والمسالك البولية.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon style={{ color: "#E60B00" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded36}
                onClick={handleExpandClick36}
                aria-expanded={expanded36}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded36} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography data-aos="fade-up">الإرشادات : </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>تشمل دواعي استعمال يوريفين ما يلي : </b> يستخدم في حالات
                  النقرس الحادة والمزمنة. حالات إلتهاب المفاصل النقرسى. منع تكون
                  الحصوات البولية (حصوات اليورات).
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي جرعات يوريفين وطرق الاستعمال؟</b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  الجرعة الموصى بها: كيس في نصف كوب من الماء 3 مرات يومياً قبل
                  الوجبات، أو حسب إرشادات الطبيب.
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  <b>ما هي موانع استخدام يوريفين؟ </b>
                </Typography>
                <Typography paragraph data-aos="fade-up">
                  فرط الحساسية لأي من المكونات. البنية السيئة للدم. الحمل.
                  الجفاف الحاد وانقطاع البول الكلي، أو زيادة البوتاسيوم في الدم.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
}