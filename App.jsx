import React from 'react';
import {render} from 'react-dom';




class App extends React.Component {

	render() {



	return (
	    <div>
	    	<Header />
	        <Budi />
		<Info />
		<Slide />
		<Footer />
	    </div> 
	);
    }
}



class Header extends React.Component {

	render() {

var headDiv = {
	            position: 'absolute',
	            overflow: 'hidden',
	            width:'70em',
	            height:'400px',
	            borderRadius: '10px',
	            boxShadow: '0 2px 30px rgba(black, .2)',
	            backgroundColor: 'rgba(158, 203, 255, 0.5)',
	            jusitfyContent: 'center',
	            alignItems: 'center',
	            display: 'flex',
	    	    top:'20px',
	            left: '50%',
		    transform: 'translateX(-50%)'
}


var title = {
	            position: 'absolute',
	            textAlign: 'center',
	            color: 'black',
	            fontFamily: "'Playfair Display', serif",
	            textShadow: '0 1px 0 rgba(black, .1)',
	            textIndent: '.3em',
	            letterSpacing: '.4em',
	            textTransform: 'uppercase',
	            width: '100%',
	            fontSize: '4em'
}



      return (
       
         <div className="cl" style={headDiv}>
	 <div style={title}>Welcome to Buddi</div>
 
         </div>
      );
   }
}

class Budi extends React.Component {

    render(){

var div2 = {
	            position: 'absolute',
	            overflow: 'hidden',
	            width:'35em',
	            height:'300px',
	            borderRadius: '10px',
	            boxShadow: '0 2px 30px rgba(black, .2)',
	            backgroundColor: 'rgba(237, 123, 225, 0.5)',
	            jusitfyContent: 'center',
	            alignItems: 'center',
	            display: 'flex',
		    left: '50%',
		    transform: 'translate(0%, 420px)'
}



	return (
       <div style={div2}><h2>Dancing Buddi</h2>
       <img src="http://orig11.deviantart.net/306c/f/2012/358/f/6/dancing_panda_by_bianca5-d5p1gcb.gif" alt="Buddi"></img>
	</div>
	);
    }
}

class Info extends React.Component {
    render(){
	    var div3 = {
		                        position: 'absolute',
		                        overflow: 'hidden',
		                        width:'35em',
		                        height:'300px',
		                        borderRadius: '10px',
		                        boxShadow: '0 2px 30px rgba(black, .2)',
		                        backgroundColor: 'rgba(158, 203, 255, 0.5)',
		                        jusitfyContent: 'center',
		                        alignItems: 'center',
		                        display: 'flex',
		                        right: '50%',
	                                transform: 'translate(0%, 420px)'

	    }

	return (
        
        <div style ={div3}> Buddi has been working to develop a solution to combat isses regarding mental wellness. Over then next {3} months, Buddi has plans to change the industry. </div>
	); 
    }
}




class Slide extends React.Component {

    render() {
var div4 = {
	                    position: 'absolute',
	                    overflow: 'hidden',
	                    width:'70em',
	                    height:'300px',
	                    borderRadius: '10px',
	                    boxShadow: '0 2px 30px rgba(black, .2)',
	                    backgroundColor: 'rgba(158, 203, 255, 0.5)',
	                    jusitfyContent: 'center',
	                    alignItems: 'center',
	                    display: 'flex',
			    left: '50%',
                            transform: 'translate(-50%, 730px)'

}



	return (
          <div classname = "slideshow" style={div4}>
		<h3>Slideshow</h3>
		<p>Creating a slideshow has been difficult, as when the code breaks down, it is a little difficult to debug. But, through the creation of our page here, I understand how React works itself, from the ground up - how different components merge together as a whole. 
	</p>	
		</div>

	
	);
    }
}


class Footer extends React.Component {

    render(){

var div5 = {
	                            position: 'absolute',
	                            overflow: 'hidden',
	                            width:'70em',
	                            height:'180px',
	                            borderRadius: '10px',
	                            boxShadow: '0 2px 30px rgba(black, .2)',
	                            backgroundColor: 'rgba(158, 203, 255, 0.5)',
	                            jusitfyContent: 'center',
	                            alignItems: 'center',
	                            display: 'flex',
	                            left: '50%',
	                            transform: 'translate(-50%, 1040px)'
}


	return (
              <div style={div5}>This would be the footer. Using arrays, it is possible to input all social media quickly - I am working towards that goal</div>
	);
    }
}





export default App;
