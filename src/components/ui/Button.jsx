import '../../styles/button.css'

function Button (props ){
   return <button {...props} className={`button ${props.className}`}>
    {props.children}
   </button>;
}
 
export default Button