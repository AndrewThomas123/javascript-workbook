'use strict';
class Cp3 extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      item : [],
      pastwords: []
    }
    this.search=this.search.bind(this);
    this.enter = this.enter.bind(this);
    this.button=this.button.bind(this);
    this.buttontwo=this.buttontwo.bind(this);
    this.buttonthree=this.buttonthree.bind(this);
    this.buttonfour=this.buttonfour.bind(this);
    this.buttonfive=this.buttonfive.bind(this);
    this.buttonsix=this.buttonsix.bind(this);
    this.buttonseven=this.buttonseven.bind(this);
    this.buttoneight=this.buttoneight.bind(this);
    this.buttonnine=this.buttonnine.bind(this);
    this.buttonten=this.buttonten.bind(this);


  }
search(){
  //here i access whats inside the search bar and then use the variable to changethe link
  var searchbar = document.getElementById('myInput')
  var text = searchbar.value
  this.state.pastwords.push(" "+text+ ", ")
    const stories = [];
      const url = `http://api.wordnik.com:80/v4/word.json/${text}/etymologies?useCanonical=true&api_key=e7b5ebdd27a42ba5e300b04bd5d07ac1302b799a5f268f033`
      fetch(url).then((result) => {
        return result.json();
      }).then((response) =>{
        if(response.length == 0){
          alert('This is either not a word or we do not have a directory on this')
        }
        //here is where I set it so that the page will respond to the lakc of the api knowledge or if they enter something that is not a word, by an alert
        var string = response.toString()
         var k = "["
         var e= "</ety>"
         var index = string.indexOf(k)
         var indextwo = string.indexOf(e)
         var substr = string.substring(index, string.length)
         var subtwo = substr.substring(indextwo, string.length)
        console.log(string)
         response = substr
        stories.push(response);
        if(stories.length===1){
      this.setState({
        item: stories,
      })
    }
    });
  }

  button(index){
// the button works by getting the array this.state.pastwordss, then sets an increment to a number, and uses the array.length
//minus the increment to find the word one back
// it then changes the url to that word
    var pastwd = this.state.pastwords
    let increment = 2
    let back = pastwd[pastwd.length-increment]
    const stories = []
    const url = `http://api.wordnik.com:80/v4/word.json/${back}/etymologies?useCanonical=true&api_key=e7b5ebdd27a42ba5e300b04bd5d07ac1302b799a5f268f033`
    console.log(url)
    console.log('i am in button one')
    fetch(url).then((result) => {
      return result.json();
    }).then((response) =>{
      if(response.length == 0){
        return
      }
      var string = response.toString()
       var k = "["
       var e= "</ety>"
       var index = string.indexOf(k)
       var indextwo = string.indexOf(e)
       var substr = string.substring(index, string.length)
       var subtwo = substr.substring(indextwo, string.length)
       response = substr
      stories.push(response);
      if(stories.length===1){
    this.setState({
      item: stories,
    })
  }
  });
}
// all butttons are the same except for a change in the number of the variable increment
buttontwo(index){
  var pastwd = this.state.pastwords
  let increment = 3
  let back = pastwd[pastwd.length-increment]
  const stories = []
  const url = `http://api.wordnik.com:80/v4/word.json/${back}/etymologies?useCanonical=true&api_key=e7b5ebdd27a42ba5e300b04bd5d07ac1302b799a5f268f033`
  console.log(url)
  console.log('i am in button two')
  fetch(url).then((result) => {
    return result.json();
  }).then((response) =>{
    if(response.length == 0){
      return
    }
    var string = response.toString()
     var k = "["
     var e= "</ety>"
     var index = string.indexOf(k)
     var indextwo = string.indexOf(e)
     var substr = string.substring(index, string.length)
     var subtwo = substr.substring(indextwo, string.length)
     response = substr
    stories.push(response);
    if(stories.length===1){
  this.setState({
    item: stories,
  })
}
});
}
// all butttons are the same except for a chang in the number of the variable increment
buttonthree(index){
  var pastwd = this.state.pastwords
  let increment = 4
  let back = pastwd[pastwd.length-increment]
  const stories = []
  const url = `http://api.wordnik.com:80/v4/word.json/${back}/etymologies?useCanonical=true&api_key=e7b5ebdd27a42ba5e300b04bd5d07ac1302b799a5f268f033`
  console.log(url)
  console.log('i am in button three')
  fetch(url).then((result) => {
    return result.json();
  }).then((response) =>{
    if(response.length == 0){
      return
    }
    var string = response.toString()
     var k = "["
     var e= "</ety>"
     var index = string.indexOf(k)
     var indextwo = string.indexOf(e)
     var substr = string.substring(index, string.length)
     var subtwo = substr.substring(indextwo, string.length)
     response = substr
    stories.push(response);
    if(stories.length===1){
  this.setState({
    item: stories,
  })
}
});
}

// all buttons are the same except for a change in the variable increment number
buttonfour(index){
  var pastwd = this.state.pastwords
  let increment = 5
  let back = pastwd[pastwd.length-increment]
  const stories = []
  const url = `http://api.wordnik.com:80/v4/word.json/${back}/etymologies?useCanonical=true&api_key=e7b5ebdd27a42ba5e300b04bd5d07ac1302b799a5f268f033`
  console.log(url)
  console.log('i am in button one')
  fetch(url).then((result) => {
    return result.json();
  }).then((response) =>{
    if(response.length == 0){
      return
    }
    var string = response.toString()
     var k = "["
     var e= "</ety>"
     var index = string.indexOf(k)
     var indextwo = string.indexOf(e)
     var substr = string.substring(index, string.length)
     var subtwo = substr.substring(indextwo, string.length)
     response = substr
    stories.push(response);
    if(stories.length===1){
  this.setState({
    item: stories,
  })
}
});
}
// all buttons are the same except for a change in the variable increment number
buttonfive(index){
  var pastwd = this.state.pastwords
  let increment = 6
  let back = pastwd[pastwd.length-increment]
  const stories = []
  const url = `http://api.wordnik.com:80/v4/word.json/${back}/etymologies?useCanonical=true&api_key=e7b5ebdd27a42ba5e300b04bd5d07ac1302b799a5f268f033`
  console.log(url)
  fetch(url).then((result) => {
    return result.json();
  }).then((response) =>{
    if(response.length == 0){
      return
    }
    var string = response.toString()
     var k = "["
     var e= "</ety>"
     var index = string.indexOf(k)
     var indextwo = string.indexOf(e)
     var substr = string.substring(index, string.length)
     var subtwo = substr.substring(indextwo, string.length)
     response = substr
    stories.push(response);
    if(stories.length===1){
  this.setState({
    item: stories,
  })
}
});
}
// all buttons are the same except for a change in the variable increment number
buttonsix(index){
  var pastwd = this.state.pastwords
  let increment = 7
  let back = pastwd[pastwd.length-increment]
  const stories = []
  const url = `http://api.wordnik.com:80/v4/word.json/${back}/etymologies?useCanonical=true&api_key=e7b5ebdd27a42ba5e300b04bd5d07ac1302b799a5f268f033`
  console.log(url)
  fetch(url).then((result) => {
    return result.json();
  }).then((response) =>{
    if(response.length == 0){
      return
    }
    var string = response.toString()
     var k = "["
     var e= "</ety>"
     var index = string.indexOf(k)
     var indextwo = string.indexOf(e)
     var substr = string.substring(index, string.length)
     var subtwo = substr.substring(indextwo, string.length)
     response = substr
    stories.push(response);
    if(stories.length===1){
  this.setState({
    item: stories,
  })
}
});
}
// all buttons are the same except for a change in the variable increment number
buttonseven(index){
  var pastwd = this.state.pastwords
  let increment = 8
  let back = pastwd[pastwd.length-increment]
  const stories = []
  const url = `http://api.wordnik.com:80/v4/word.json/${back}/etymologies?useCanonical=true&api_key=e7b5ebdd27a42ba5e300b04bd5d07ac1302b799a5f268f033`
  console.log(url)
  fetch(url).then((result) => {
    return result.json();
  }).then((response) =>{
    if(response.length == 0){
      return
    }
    var string = response.toString()
     var k = "["
     var e= "</ety>"
     var index = string.indexOf(k)
     var indextwo = string.indexOf(e)
     var substr = string.substring(index, string.length)
     var subtwo = substr.substring(indextwo, string.length)
     response = substr
    stories.push(response);
    if(stories.length===1){
  this.setState({
    item: stories,
  })
}
});
}
// all buttons are the same except for a change in the variable increment number
buttoneight(index){
  var pastwd = this.state.pastwords
  let increment = 9
  let back = pastwd[pastwd.length-increment]
  const stories = []
  const url = `http://api.wordnik.com:80/v4/word.json/${back}/etymologies?useCanonical=true&api_key=e7b5ebdd27a42ba5e300b04bd5d07ac1302b799a5f268f033`
  console.log(url)
  fetch(url).then((result) => {
    return result.json();
  }).then((response) =>{
    if(response.length == 0){
      return
    }
    var string = response.toString()
     var k = "["
     var e= "</ety>"
     var index = string.indexOf(k)
     var indextwo = string.indexOf(e)
     var substr = string.substring(index, string.length)
     var subtwo = substr.substring(indextwo, string.length)
     response = substr
    stories.push(response);
    if(stories.length===1){
  this.setState({
    item: stories,
  })
}
});
}
// all buttons are the same except for a change in the variable increment number
buttonnine(index){
  var elem = document.getElementById('myBtn');
  var txt = elem.textContent
  var pastwd = this.state.pastwords
  let increment = 10
  let back = pastwd[pastwd.length-increment]
  const stories = []
  const url = `http://api.wordnik.com:80/v4/word.json/${back}/etymologies?useCanonical=true&api_key=e7b5ebdd27a42ba5e300b04bd5d07ac1302b799a5f268f033`
  console.log(url)
  fetch(url).then((result) => {
    return result.json();
  }).then((response) =>{
    if(response.length == 0){
      return
    }
    var string = response.toString()
     var k = "["
     var e= "</ety>"
     var index = string.indexOf(k)
     var indextwo = string.indexOf(e)
     var substr = string.substring(index, string.length)
     var subtwo = substr.substring(indextwo, string.length)
     response = substr
    stories.push(response);
    if(stories.length===1){
  this.setState({
    item: stories,
  })
}
});
}
// all buttons are the same except for a change in the variable increment number
buttonten(index){
  var elem = document.getElementById('myBtn');
  var txt = elem.textContent
  var pastwd = this.state.pastwords
  let increment = 11
  let back = pastwd[pastwd.length-increment]
  const stories = []
  const url = `http://api.wordnik.com:80/v4/word.json/${back}/etymologies?useCanonical=true&api_key=e7b5ebdd27a42ba5e300b04bd5d07ac1302b799a5f268f033`
  console.log(url)
  fetch(url).then((result) => {
    return result.json();
  }).then((response) =>{
    if(response.length == 0){
      return
    }
    var string = response.toString()
     var k = "["
     var e= "</ety>"
     var index = string.indexOf(k)
     var indextwo = string.indexOf(e)
     var substr = string.substring(index, string.length)
     var subtwo = substr.substring(indextwo, string.length)
     response = substr
    stories.push(response);
    if(stories.length===1){
  this.setState({
    item: stories,
  })
}
});
}
//this function basically calls the function search when the enter key is hit
enter(enter){
  if(enter.keyCode===13){
    let h = this.search
    h()
  }
}

  render(){
  {  var map = this.state.pastwords.map((word, index)=>{
      let words = index+"."+word
      console.log("the index is",index,"the word is", word)
      return words
    })
}
    var pass = this.state.pastwords[0]
    var link = 'http://api.wordnik.com:80/v4/word.json/${this.state.pastwords}/etymologies?useCanonical=true&api_key=e7b5ebdd27a42ba5e300b04bd5d07ac1302b799a5f268f033'

    return(
      <div>
      <input type="text" id="myInput" onKeyDown={this.enter} placeholder="Search for words.."></input><br></br>
      <h2>Directory</h2><h3></h3>
      <br></br>
      <p>Words with the tag fr or F. are French, words with the tag grk or Gr. are greek, and the L. tags are Latin
      <br></br><br></br>
      Words with OE stand for Old English; Dan Danish Icel Icelandish Sw Swedish and G German
      <br></br>
      <br></br>
      ets signifies any etymology form of the word i.e. its past, usually in the another language
      </p>
      <br></br>
      <br></br>
      <ol>
        {this.state.item}
      </ol>
      <h3 title="History of words you've searched">History</h3>
      <span>
      {map}
      </span>
      <br></br>
      <br></br>
      <span>
      <button type="button" id="myBtn" onClick={this.buttonten}> 10</button>
      <button type="button" id="myBtn" onClick={this.buttonnine}> 9</button>
      <button type="button" id="myBtn" onClick={this.buttoneight}> 8</button>
      <button type="button" id="myBtn" onClick={this.buttonseven}> 7</button>
      <button type="button" id="myBtn" onClick={this.buttonsix}> 6</button>
      <button type="button" id="myBtn" onClick={this.buttonfive}> 5</button>
      <button type="button" id="myBtn" onClick={this.buttonfour}>4</button>
      <button type="button" id="myBtn" onClick={this.buttonthree}> 3</button>
      <button type="button" id="myBtn" onClick={this.buttontwo}> 2</button>
      <button type="button" id="myBtnn" onClick={this.button}>Back 1</button>
      </span>
      </div>
    )
  }
}
ReactDOM.render(<Cp3/>, document.getElementById('Hello'));
