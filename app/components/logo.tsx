import logo from "~/assets/logo.png"
const Logo = ({ className }: { className?: string}) => {
    return (
        <div className={className?className:''}>
            <img src={logo} alt="Logo" />
        </div>
    );
}
 
export default Logo;