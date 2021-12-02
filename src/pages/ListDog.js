import React from 'react';

class ListDog extends React.Component {
    render(){
        return(
            <>
                <div>
                    <ul>
                      
                        {this.props.list
                        .map(dog=> 
                                    <li>{dog.name}</li>
                            )
                            }
                     { 

                    //  this.props.list.filter(element=> element.name).map(element=> 
                    //     <li>Uno</li>
                    //   )
                      }
                       
                    </ul>
                </div>
            </>
        )
    }
}
export default ListDog;