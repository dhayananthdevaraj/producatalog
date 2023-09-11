import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        &copy; {new Date().getFullYear()} Neo Daily | Online Service Available | Contact Us : 0422 27212697
      </footer>
    );
  }
}

export default Footer;
