function Heading (props){
   return <h4 className="new-campaign-heading">
   {props.heading} <span>{props.muted}</span>
 </h4>;
}
 
export default Heading