import React,{Component} from 'react';
import "isomorphic-fetch";

export default class Home extends Component {
   static getInitialProps = async () => {
       const response = await fetch(
           "https://api.github.com/orgs/rocketseat/repos"
       )
       return {repositories:await response.json()}
   }
   
    render(){
        return (
            <div>
                <h1> Github Repositories</h1>
                {
                    
                    this.props.repositories.map(repo => (
                        
                        <p key={repo.id}> {repo.name}</p>

                    ))
                }
            </div>
        )
    }
}