//main link: https://www.googleapis.com/youtube/v3
//full request: https://www.googleapis.com/youtube/v3/search?key=AIzaSyD-WL6Uh7BYFvaLt9DKfXyLi3bd0oLZs64&channelId=UC_PgChfO-fgSIpIYWD3Ka-g&part=snippet,id&order=date&maxResults=15

// channelID 1: UC_PgChfO-fgSIpIYWD3Ka-g
// channelID 2: UCB1J6siDdmhwah7q0O2WJBg
// channelID 3: UCSbyncU597LMwb3HhnAI_4w
// channelID 4: UCTZN3HhejW1tOiRdLGUCGGA

import VideosPage from "../components/VideosPage";
const Courses = () => {
  return (
    <>
      <div>
        <VideosPage />
      </div>
    </>
  );
};
export default Courses;
