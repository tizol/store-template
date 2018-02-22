import React, { Component } from 'react';
import Notify from 'react-notification-system';

const style = {
  NotificationItem: {
    DefaultStyle: {width: '400px', fontSize: '15px'},
    success: {
      borderTop: '2px solid green',
      backgroundColor: '#ffffff',
      color: '#000000',
      WebkitBoxShadow: '0 0 1px rgba(255,117,69, 0.9 )',
      MozBoxShadow: '0 0 1px rgba(255,117,69, 0.9 )',
      boxShadow: '0 0 1px rgba(255,117,69, 0.9 )'
    },
    error: {
      borderTop: '2px solid red',
      backgroundColor: '#ffffff',
      color: '#000000',
      WebkitBoxShadow: '0 0 1px rgba(255,117,69, 0.9 )',
      MozBoxShadow: '0 0 1px rgba(255,117,69, 0.9 )',
      boxShadow: '0 0 1px rgba(255,117,69, 0.9 )'
    },
    warning: {
      borderTop: '2px solid orange',
      backgroundColor: '#ffffff',
      color: '#000000',
      WebkitBoxShadow: '0 0 1px rgba(255,117,69, 0.9 )',
      MozBoxShadow: '0 0 1px rgba(255,117,69, 0.9 )',
      boxShadow: '0 0 1px rgba(255,117,69, 0.9 )'
    },
    info: {
      borderTop: '2px solid blue',
      backgroundColor: '#ffffff',
      color: '#000000',
      WebkitBoxShadow: '0 0 1px rgba(255,117,69, 0.9 )',
      MozBoxShadow: '0 0 1px rgba(255,117,69, 0.9 )',
      boxShadow: '0 0 1px rgba(255,117,69, 0.9 )'
    }
  },
  Title: {
    DefaultStyle: {
      fontSize: '14px',
      margin: '0 0 5px 0',
      padding: 0,
      fontWeight: 'bold'
    },

    success: {
      color: 'green'
    },

    error: {
      color: 'red'
    },

    warning: {
      color: 'orange'
    },

    info: {
      color: 'blue'
    }

  },
  Dismiss: {
    DefaultStyle: {
      fontFamily: 'Arial',
      fontSize: '17px',
      position: 'absolute',
      top: '4px',
      right: '5px',
      lineHeight: '15px',
      backgroundColor: '#ff7545',
      color: '#ffffff',
      borderRadius: '50%',
      width: '14px',
      height: '14px',
      fontWeight: 'bold',
      textAlign: 'center'
    },

    success: {
      color: '#ffffff',
      backgroundColor: '#ff7545'
    },

    error: {
      color: '#ffffff',
      backgroundColor: '#ff7545'
    },

    warning: {
      color: '#ffffff',
      backgroundColor: '#ff7545'
    },

    info: {
      color: '#ffffff',
      backgroundColor: '#ff7545'
    }
  },
}
export default class Notification extends Component{
  render(){
    return(
      <div>
        <Notify ref='notification' style={style}/>
      </div>
    )
  }
}
