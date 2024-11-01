import Labels from "./Labels";

function Section({title,para,isActive}){
    return(
      <div className="section">
        <div className="name">
          <h3>{title}</h3>
          <p>{para}</p>
          <Labels onActive={()=>alert("Parent")} isActive={isActive}/>
          <hr />
          <br />
          <hr />
          <br />
        </div>
      </div>
    )
  }

  export default Section;