const Video = ({ videoSrc }: { videoSrc: string}) => {
    return (
        <video className="h-full w-full rounded-lg" autoPlay loop muted>
            <source src={videoSrc} type="video/mp4"></source>
        </video>
    );
}
 
export default Video;