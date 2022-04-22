import React, { Component } from 'react';
import axios from 'axios'
import { render } from '@testing-library/react';
import UserList from '/.components/UserList'

class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error:null,
      isLoaded: false,
      items: []
    };
  }


  getList() {
    console.log(2)
    axios.get("/api/board-info")
    .then(res => {
      console.log(res);
      console.log(res.data)
    });
  }

  componentDidMount() {
    console.log("1")
    this.getList();
    /*
    fetch("/api/board-info", {
      headers: {
        method: 'GET',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log(res)
      res.json();
    })
    .then((data) => {
       console.log(1, data);
    },
    (error)=> {
      console.log(error)
        this.setState({
          isLoaded:true,
          error
        });
      }
    )
    */
  }


  render() {
    const {error,isLoaded, items} = this.state;
    if(error) {
      return <div>Error:{error.message}</div>;
    } else if (!isLoaded) {
      return<div>Loading...</div>;
    }else {
      return (
        <ul>
          {
            items.map(item => (
              <li key ={items.id}>
                {item.id} {item.address}
              </li>
            ))
        }
        </ul>
      );
    }
  }
}



export default Notice;