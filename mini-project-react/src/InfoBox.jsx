import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  let Cold_Img =
    "https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
  let Hot_img =
    "https://media.istockphoto.com/id/2163514261/photo/boy-drinking-water-from-a-bottle-on-a-sunny-hot-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=ADC9cFwz86iJURgop2ZiYNJJ_0JZLkRr6Hp99P95DGc=";
  let Rainy_img =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? Rainy_img
                : info.temp > 5
                ? Hot_img
                : Cold_Img
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 5
                ? <WbSunnyIcon/>
                :<AcUnitIcon/>
                }
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The Weather can be described as <b>{info.weather}</b> and feels
                like = {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
