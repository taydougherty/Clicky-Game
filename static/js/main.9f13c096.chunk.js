(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Rocky",image:"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg",toy:"Squeaky bear",treat:"Bacon"},{id:2,name:"Bear",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfhRAAD26TyhV_2MwUAFEqosyWnVE2JwRRN-VO0H5FdeoDTJrAg",toy:"Red Ball",treat:"Peanut Butter"},{id:3,name:"Charlie",image:"https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg",toy:"Cuddly Monkey",treat:"Apples"},{id:4,name:"Bella",image:"http://trupanion.com/blog/wp-content/uploads/2017/09/GettyImages-512536165.jpg",toy:"Rope Toy",treat:"Blueberries"},{id:5,name:"Molly",image:"https://www.petlandfairfield.com/wp-content/themes/cosmick-petland-global/images/cta1-1.jpg",toy:"Birthday Cake Toy",treat:"Bacon"},{id:6,name:"Daisy",image:"https://2bs1rv1d3u185ixhu13k1l0g-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/bobert.jpg",toy:"Soft Bunny",treat:"Peanut Butter"},{id:7,name:"Max",image:"https://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg",toy:"Tennis Ball",treat:"Sweet Potato"},{id:8,name:"Rover",image:"https://www.thesprucepets.com/thmb/tlEk6A84_m3uSQZbnvSASwksH3E=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/shar-pei-pitbull-puppy-laying-on-couch-840226604-5c61d20746e0fb0001dcd5ee.jpg",toy:"Rope Toy",treat:"Pork Bites"},{id:9,name:"Luna",image:"https://tvar.org/wp-content/uploads/2018/04/iStock-486330501-copy.jpg",toy:"Green Ball",treat:"Cheese"},{id:10,name:"Coco",image:"https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=590&h=800&526ED1E1-34FF-4472-B348B8B4769AB2A1",toy:"Cuddly Monkey",treat:"Ice Cream"},{id:11,name:"Toby",image:"https://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg",toy:"Stuffed Bear",treat:"Jerky"},{id:12,name:"Chopper",image:"http://vhnrotts.com/wp-content/uploads/2013/06/PuppyPage01.jpg",toy:"Kong Toy",treat:"Lamb Bites"}]},,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(2),r=a.n(c),i=a(3),s=a(4),p=a(7),l=a(5),u=a(8);a(15);var m=function(e){return o.a.createElement("div",{onClick:function(){return e.clickedPuppy(e.id)},className:"remove"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{alt:e.name,src:e.image})),o.a.createElement("div",{className:"content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("strong",null,"Name:")," ",e.name),o.a.createElement("li",null,o.a.createElement("strong",null,"Favourite Toy:")," ",e.toy),o.a.createElement("li",null,o.a.createElement("strong",null,"Favourite Treat:")," ",e.treat)))))};a(16);var d=function(e){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4"},"Play the Puppy Match Game!"),o.a.createElement("p",{className:"lead"},"Click on a puppy to get started!"),o.a.createElement("p",{className:"lead"},"Score: ",e.counter," | Top Score: ",e.topScore)))};a(17);var y=function(e){return o.a.createElement("div",{className:"wrapper"},e.children)},g=a(6),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={puppies:g.sort(function(){return.5-Math.random()}),counter:0,topScore:0,ifClicked:[]},a.clickedPuppy=function(e){a.state.ifClicked.includes(e)?(a.setState({counter:0}),a.setState({ifClicked:[]}),alert("You've already selected this puppy! Game over.")):(a.setState({counter:a.state.counter+1}),a.state.ifClicked.push(e)),a.state.counter>=a.state.topScore&&a.setState({topScore:a.state.counter}),12===a.state.counter&&(a.setState({counter:0}),alert("You win!")),a.setState({puppies:a.state.puppies.sort(function(){return.5-Math.random()})})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(d,{counter:this.state.counter,topScore:this.state.topScore}),o.a.createElement(y,null,this.state.puppies.map(function(t){return o.a.createElement(m,{clickedPuppy:e.clickedPuppy,id:t.id,key:t.id,name:t.name,image:t.image,toy:t.toy,treat:t.treat})})))}}]),t}(n.Component);a(18);r.a.render(o.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.9f13c096.chunk.js.map