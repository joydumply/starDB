import React, {Component} from "react"
import Spinner from "../spinner"
import ErrorIndicator from "../error-indicator"
// High Order Component (HOC)

const withData = ( View ) => {
    return class extends Component {
      state = {
        data: null,
        loading: true,
        error: false,

      }
      
    
      componentDidMount() {
        this.update();
        
      }
      update() {
        this.props.getData()
        .then( (data) => {
          this.setState({
            data,
            loading: false
          })
        })
        .catch( () => {
          this.setState({
            loading: false,
            error: true
          })
        });
      }
      render() {
        const { data, error, loading } = this.state;
        if(loading){
          return (
            <Spinner />
          )
        }
        if(error){
          return (
            <ErrorIndicator/>
          )
        }
        return <View {...this.props} data={data}/>
      }
    }
  }

  export default withData;