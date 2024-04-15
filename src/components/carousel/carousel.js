import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css"

const images = [
  "https://th.bing.com/th/id/R.d907c6c9824f70752c7e56e1d542a4a5?rik=ke0ZjADs1y5lXA&pid=ImgRaw&r=0",
  "https://hot.game/uploads/media/slide_game/0002/45/thumb_144340_slide_game_full.jpeg",
  "https://hot.game/uploads/game/1026.jpg",
  "https://hot.game/uploads/game/326.jpg",
  "https://hot.game/uploads/game/930.jpg",
  "https://hot.game/uploads/media/slide_game/0001/13/thumb_12297_slide_game_full.jpeg",
  "https://hot.game/uploads/media/slide_game/0001/25/thumb_24470_slide_game_full.jpeg",
  "https://hot.game/uploads/media/slide_game/0001/01/thumb_12_slide_game_full.jpeg",
  "https://hot.game/uploads/media/slide_game/0001/06/thumb_5292_slide_game_full.jpeg",
  "https://hot.game/uploads/media/slide_game/0001/04/thumb_3171_slide_game_full.jpeg",
  "https://hot.game/uploads/game/2842.jpg",
  "https://hot.game/uploads/game/443.jpg",
  "https://hot.game/uploads/game/1093.jpg"
];

function App() {
  return (
    <div className="Carousel-box">
      <Carousel useKeyboardArrows={true} autoPlay={true} interval={5000}>
        {images.map((URL, index) => (
          <div className="slide" key={index}>
            <img alt="sample_file" src={URL} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
