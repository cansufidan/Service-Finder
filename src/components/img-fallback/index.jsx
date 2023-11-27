export default function ImgFallback(props) {
    return (
        <img src={props.src} style={props.style} className={props.className}
        onError={(e) => {
            e.target.src = "assets/images/no-image.png"
        }}
        />
    )
}