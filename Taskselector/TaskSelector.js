class TaskSelector extends Component{
  state={inputvalue:'',result:'',apistatus:''}

  const apiStatusconstants={
    success:'SUCCESS',
    inProgress:'IN_PROGRESS',
    failure:'FAILURE'
  }
  
  const changevalue=event=>{
    this,setState({inputvalue:event.target.value})
  }

componentDidMount(){
  this.getResult()
}

getResult=async ()=>{
  const {inputvalue}=this.state
  const apiurl="https://api.openai.com/v1/chat/completions"
  const options={method:'POST',headers:{Authorization:'YOUR BEARER KEY'}}
  const response=await fetch(apiurl,options)
  const answer=reponse.json()
  if(response.ok){
    this.setState({apiStatusconstants.success:'SUCCESS',result:answer})
  }
  else if (response.status===401){
    this.setState({apiStatusconstants.failure:'FAILURE'})
  }
}  
  
rendersucessful(){
  const {result}=this.state 
  return(
    <div>
        <h1>TASK SELECTOR</h1>
        <input value="" type="text" Onchnage={this.changevalue}>
        <p>{result}</p>
    </div>
  )
}

render(){
  const {apistatus}=this.state
  Switch(apistatus){
    case apiStatusconstants.success:
       return this.rendersucessful()
    case rendersucessful.failure:
       return this.renderfailure()
    case rendersucessful.inprogress:
       return this.renderloading()
    default:
       return null
  }
}
}
export default TaskSelector
